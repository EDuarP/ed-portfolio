"""Genera la hoja de vida (moderncv, estilo banking) a partir de cv/cv.yaml.

Uso:
    python cv/build.py                 # usa cv/cv.yaml y escribe el PDF en la raíz del repo
    python cv/build.py cv/cv.es.yaml   # otro archivo de datos (por ejemplo, una versión en español)
    python cv/build.py --tex-only      # solo genera el .tex (para subirlo a Overleaf, por ejemplo)

Compila con Tectonic (https://tectonic-typesetting.github.io), o con latexmk/xelatex/pdflatex si están instalados.
"""
import re
import shutil
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
CV_DIR = ROOT / "cv"
BUILD_DIR = CV_DIR / "build"

# Réplica del formato original (moderncv banking, color negro): nombre gris + negro, viñetas azules,
# márgenes de 1 cm y entradas compactas.
PREAMBLE = r"""\documentclass[11pt,a4paper,sans]{moderncv}
\moderncvstyle{banking}
\moderncvcolor{black}
\usepackage[left=1cm,right=1cm,top=1.1cm,bottom=1.2cm]{geometry}
\usepackage{enumitem}
\definecolor{namegray}{HTML}{666666}
\definecolor{bulletblue}{HTML}{3873B3}
\makeatletter
\renewcommand*{\namefont}{\fontsize{24.88}{30}\bfseries\upshape}
\renewcommand*{\namestyle}[1]{{\namefont\textcolor{namegray}{\@firstname}~\textcolor{black}{\@lastname}}}
\renewcommand*{\addressstyle}[1]{{\addressfont\color{black}#1}}
% \cvjob{organización}{lugar}{cargo}{fechas}{detalle}; sin organización ni lugar omite la línea en negrita
\newcommand*{\cvjob}[5]{%
  \par\noindent
  \begin{tabular*}{\linewidth}{@{}l@{\extracolsep{\fill}}r@{}}%
    \ifboolexpr{test {\ifstrempty{#1}} and test {\ifstrempty{#2}}}{}{\bfseries #1 & \bfseries #2\\}%
    \itshape #3 & \itshape #4%
  \end{tabular*}\par\nobreak
  \ifstrempty{#5}{}{{\small #5\par}}%
  \addvspace{.2em}}
\makeatother
\renewcommand{\labelitemi}{\textcolor{bulletblue}{\fontsize{6}{6}\selectfont\faCircle[regular]}}
\setlist[itemize]{leftmargin=1.05em,labelsep=0.45em,itemsep=0pt,parsep=0pt,topsep=0pt,partopsep=0pt}

"""

LATEX_SPECIALS = {
    "\\": r"\textbackslash{}", "&": r"\&", "%": r"\%", "$": r"\$", "#": r"\#",
    "_": r"\_", "{": r"\{", "}": r"\}", "~": r"\textasciitilde{}", "^": r"\textasciicircum{}",
}


def escape(text):
    return "".join(LATEX_SPECIALS.get(ch, ch) for ch in str(text))


def inline(text):
    """Escapa LaTeX y convierte **negrita**, *cursiva* y [texto](url)."""
    if not isinstance(text, (str, int, float)):
        # Pasa en YAML cuando un texto sin comillas contiene ": "
        sys.exit(f"Texto inválido en cv.yaml (¿falta poner comillas?): {text!r}")
    links = []

    def keep_link(m):
        links.append((m.group(1), m.group(2)))
        return f"\x00{len(links) - 1}\x00"

    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", keep_link, str(text))
    text = escape(text)
    text = re.sub(r"\*\*(.+?)\*\*", r"\\textbf{\1}", text)
    text = re.sub(r"(?<![\\\w])\*(.+?)\*", r"\\textit{\1}", text)
    for i, (label, url) in enumerate(links):
        text = text.replace(f"\x00{i}\x00", rf"\href{{{url}}}{{{inline(label)}}}")
    return text


def render_entries(entries):
    out = []
    for e in entries:
        body = []
        if e.get("note"):
            body.append(rf"{{\small\itshape {inline(e['note'])}}}")
        if e.get("items"):
            body.append("\\begin{itemize}\n" + "\n".join(rf"  \item {inline(i)}" for i in e["items"]) + "\n\\end{itemize}")
        # Sin org ni location se omite la línea en negrita: otro cargo en la misma empresa
        out.append(
            rf"\cvjob{{{inline(e.get('org', ''))}}}{{{inline(e.get('location', ''))}}}"
            rf"{{{inline(e.get('role', ''))}}}{{{inline(e.get('dates', ''))}}}{{{chr(10).join(body)}}}"
        )
    return "\n".join(out)


def render_section(section):
    kind = section.get("type", "items")
    lines = [rf"\section{{{inline(section['title'])}}}"]
    if kind == "paragraph":
        lines.append(rf"\cvitem{{}}{{{inline(section['text'])}}}")
    elif kind == "entries":
        lines.append(render_entries(section["entries"]))
    elif kind == "items":
        lines += [rf"\cvitem{{{inline(e['label'])}}}{{{inline(e['text'])}}}" for e in section["entries"]]
    elif kind == "lines":
        lines += [rf"\cvitem{{}}{{{inline(l)}}}" for l in section["lines"]]
    else:
        raise ValueError(f"Tipo de sección desconocido: {kind}")
    return "\n".join(lines)


def render(data):
    p = data["personal"]
    header = [
        rf"\name{{{escape(p['first_name'])}}}{{{escape(p['last_name'])}}}",
        rf"\phone[mobile]{{{escape(p['phone'])}}}",
        rf"\email{{{escape(p['email'])}}}",
        rf"\homepage{{{escape(p['homepage'])}}}",
        rf"\social[linkedin]{{{escape(p['linkedin'])}}}",
    ]
    if p.get("github"):
        header.append(rf"\social[github]{{{escape(p['github'])}}}")
    header.append(rf"\extrainfo{{{escape(p['title'])}}}")
    body = "\n\n".join(render_section(s) for s in data["sections"])
    # El encabezado de moderncv deja más aire que el original (pdfLaTeX); se recorta un poco
    return PREAMBLE + "\n".join(header) + "\n\n\\begin{document}\n\\makecvtitle\n\\vspace{-1.6em}\n\n" + body + "\n\n\\end{document}\n"


def compile_tectonic(tex_path, max_runs=4):
    """Compila con Tectonic una pasada por proceso.

    Tectonic repite las pasadas de XeTeX dentro del mismo proceso y la caché de cajas de glifos de XeTeX
    (indexada por número de fuente) sobrevive entre pasadas: si en la segunda pasada las fuentes se cargan en
    otro orden (por el .aux/.out ya escritos), las palabras heredan la altura de otra fuente. Con este CV la
    cursiva medía 17.2pt en vez de 7.8pt, y cada línea cargo/fechas quedaba ~7.6pt más abajo (3 páginas).
    Por eso se lanza un proceso nuevo por pasada (--reruns 0) y se repite hasta que el .aux y el .out no cambien.
    """
    aux_files = [tex_path.with_suffix(ext) for ext in (".aux", ".out")]
    cmd = ["tectonic", "--keep-logs", "--keep-intermediates", "--reruns", "0",
           "--outdir", str(tex_path.parent), str(tex_path)]
    previous = None
    for _ in range(max_runs):
        print("$", " ".join(cmd))
        subprocess.run(cmd, check=True)
        current = [f.read_bytes() if f.exists() else b"" for f in aux_files]
        if current == previous:
            break
        previous = current
    return tex_path.with_suffix(".pdf")


def compile_pdf(tex_path):
    if shutil.which("tectonic"):
        return compile_tectonic(tex_path)
    elif shutil.which("latexmk"):
        cmd = ["latexmk", "-xelatex", "-interaction=nonstopmode", f"-outdir={tex_path.parent}", str(tex_path)]
    elif shutil.which("xelatex"):
        cmd = ["xelatex", "-interaction=nonstopmode", f"-output-directory={tex_path.parent}", str(tex_path)]
    else:
        sys.exit("No encontré tectonic, latexmk ni xelatex. Instala Tectonic o sube el .tex a Overleaf.")
    print("$", " ".join(cmd))
    subprocess.run(cmd, check=True)
    return tex_path.with_suffix(".pdf")


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    data_file = Path(args[0]) if args else CV_DIR / "cv.yaml"
    data = yaml.safe_load(data_file.read_text(encoding="utf-8"))

    output = ROOT / data.get("output", "Eduardo_Duarte_CV.pdf")
    BUILD_DIR.mkdir(exist_ok=True)
    tex_path = BUILD_DIR / (output.stem + ".tex")
    tex_path.write_text(render(data), encoding="utf-8")
    print(f"LaTeX: {tex_path.relative_to(ROOT)}")
    if "--tex-only" in sys.argv:
        return

    pdf = compile_pdf(tex_path)
    shutil.copyfile(pdf, output)
    print(f"PDF:   {output.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
