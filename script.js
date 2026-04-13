const translations = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Machine Learning Engineer · Intelligent Systems · Data Science',
    'hero.title': 'Building intelligent systems that connect hardware, AI, and software.',
    'hero.summary': 'Mechatronics engineer focused on machine learning, RF/SDR systems, backend development, and real-world automation. I design end-to-end solutions, from signal acquisition and data pipelines to APIs, dashboards, and deployed systems.',
    'hero.stat1.label': 'Years of experience',
    'hero.stat2.label': 'Signal processing & detection',
    'hero.stat3.label': 'End-to-end development',
    'hero.cta1': 'Download CV',
    'hero.cta2': 'View Projects',
    'about.label': 'About',
    'about.title': 'A practical engineer with a strong focus on applied AI and technical execution.',
    'about.text1': 'My work sits at the intersection of machine learning, RF signal processing, data systems, and software engineering. I enjoy solving real-world problems with solid technical foundations, clean implementation, and systems that can scale from prototype to production.',
    'about.text2': 'Recently, I have been focused on distributed RF-based drone detection, data acquisition pipelines, FastAPI backends, React frontends, MQTT coordination, and model experimentation in Azure.',
    'skills.label': 'Skills',
    'skills.title': 'Core stack and technical strengths',
    'projects.label': 'Featured Projects',
    'projects.title': 'Selected work',
    'projects.pig.title': 'Pig Weighing Management System',
    'projects.pig.text': 'Industrial data capture and reporting system for pork processing operations, integrating serial communication, automated reports, traceability, and operational dashboards.',
    'projects.transport.title': 'Public Transportation Data Science',
    'projects.transport.text': 'Applied data science and machine learning to model and analyze public transportation routes in Bucaramanga, supported by dashboards and operational insights.',
    'contact.label': 'Contact',
    'contact.title': "Let's build something useful."
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Ingeniero de Machine Learning · Sistemas Inteligentes · Ciencia de Datos',
    'hero.title': 'Construyendo sistemas inteligentes que conectan hardware, IA y software.',
    'hero.summary': 'Ingeniero mecatrónico enfocado en machine learning, sistemas RF/SDR, desarrollo backend y automatización aplicada. Diseño soluciones end-to-end, desde adquisición de señales y pipelines de datos hasta APIs, dashboards y sistemas desplegados.',
    'hero.stat1.label': 'Años de experiencia',
    'hero.stat2.label': 'Procesamiento y detección de señales',
    'hero.stat3.label': 'Desarrollo end-to-end',
    'hero.cta1': 'Descargar CV',
    'hero.cta2': 'Ver proyectos',
    'about.label': 'Sobre mí',
    'about.title': 'Un ingeniero práctico con fuerte enfoque en IA aplicada y ejecución técnica.',
    'about.text1': 'Mi trabajo se sitúa en la intersección entre machine learning, procesamiento de señales RF, sistemas de datos e ingeniería de software. Me gusta resolver problemas reales con bases técnicas sólidas, implementación limpia y sistemas que puedan escalar de prototipo a producción.',
    'about.text2': 'Recientemente me he enfocado en detección distribuida de drones por RF, pipelines de adquisición de datos, backends con FastAPI, frontends en React, coordinación por MQTT y experimentación de modelos en Azure.',
    'skills.label': 'Habilidades',
    'skills.title': 'Stack principal y fortalezas técnicas',
    'projects.label': 'Proyectos destacados',
    'projects.title': 'Trabajo seleccionado',
    'projects.pig.title': 'Sistema de Gestión de Pesaje Porcino',
    'projects.pig.text': 'Sistema industrial de captura y reporte de datos para operaciones de procesamiento porcino, integrando comunicación serial, reportes automáticos, trazabilidad y tableros operativos.',
    'projects.transport.title': 'Ciencia de Datos para Transporte Público',
    'projects.transport.text': 'Aplicación de ciencia de datos y machine learning para modelar y analizar rutas de transporte público en Bucaramanga, apoyado por dashboards e indicadores operativos.',
    'contact.label': 'Contacto',
    'contact.title': 'Construyamos algo útil.'
  }
};

const langButtons = document.querySelectorAll('.lang-option');
function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) el.textContent = translations[lang][key];
  });
  langButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
}
langButtons.forEach((btn) => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
applyLanguage('en');

const images = Array.from(document.querySelectorAll('.project-images img'));
const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('lightbox-close');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  modalImg.src = images[currentIndex].src;
  modalImg.alt = images[currentIndex].alt;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
function showNext(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
  modalImg.alt = images[currentIndex].alt;
}
images.forEach((img, index) => img.addEventListener('click', () => openLightbox(index)));
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', () => showNext(-1));
nextBtn.addEventListener('click', () => showNext(1));
modal.addEventListener('click', (e) => { if (e.target === modal) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showNext(-1);
  if (e.key === 'ArrowRight') showNext(1);
});