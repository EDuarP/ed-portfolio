const translations = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Machine Learning Engineer · AI Engineer · Cloud (Azure & AWS)',
    'hero.title': 'Building end-to-end machine learning and AI systems, from data to production.',
    'hero.summary': 'Machine Learning Engineer with a Mechatronics background, specialized in designing end-to-end ML and AI systems, from data acquisition and feature engineering to model training, optimization, and production deployment on Microsoft Azure and AWS. I build real-time inference pipelines, scalable backends, and data-driven products.',
    'hero.stat1.label': 'Years of experience',
    'hero.stat2.label': 'Hardware and software integration',
    'hero.stat3.label': 'End-to-end development',
    'hero.cta1': 'Download CV',
    'hero.cta2': 'View Projects',
    'about.label': 'About',
    'about.title': 'A practical engineer focused on applied AI, cloud, and reliable technical execution.',
    'about.text1': 'My work sits at the intersection of machine learning, cloud infrastructure, data systems, and software engineering. I enjoy solving real-world problems with solid technical foundations, clean implementation, and systems that scale from prototype to production.',
    'about.text2': 'Recently, I have been building distributed edge-ML systems, real-time inference pipelines, FastAPI backends, React dashboards, and model training and deployment workflows on Azure and AWS.',
    'skills.label': 'Skills',
    'skills.title': 'Core stack and technical strengths',
    'projects.label': 'Featured Projects',
    'projects.title': 'Selected work',
    'projects.sickle.title': 'Sickle Cell Medical Chatbot',
    'projects.sickle.text': 'Medical RAG system for Sickle Cell Anemia, featuring automated PMC scraping and semantic search for evidence-based medical responses.',
    'projects.weather.title': 'IoT Weather Station',
    'projects.weather.text': 'Complete weather monitoring system with Arduino, SparkFun sensors, MQTT communication, FastAPI backend, SQLite storage, and a real-time dashboard for environmental metrics and operational status.',
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
    'hero.eyebrow': 'Ingeniero de Machine Learning · Ingeniero de IA · Cloud (Azure & AWS)',
    'hero.title': 'Construyendo sistemas de machine learning e IA de extremo a extremo, desde los datos hasta producción.',
    'hero.summary': 'Ingeniero de Machine Learning con formación en Mecatrónica, especializado en diseñar sistemas de ML e IA end-to-end: desde la adquisición de datos y la ingeniería de características hasta el entrenamiento, optimización y despliegue de modelos en producción sobre Microsoft Azure y AWS. Construyo pipelines de inferencia en tiempo real, backends escalables y productos basados en datos.',
    'hero.stat1.label': 'Años de experiencia',
    'hero.stat2.label': 'Integración de hardware y software',
    'hero.stat3.label': 'Desarrollo end-to-end',
    'hero.cta1': 'Descargar CV',
    'hero.cta2': 'Ver proyectos',
    'about.label': 'Sobre mí',
    'about.title': 'Un ingeniero práctico enfocado en IA aplicada, cloud y ejecución técnica confiable.',
    'about.text1': 'Mi trabajo se sitúa en la intersección entre machine learning, infraestructura cloud, sistemas de datos e ingeniería de software. Me gusta resolver problemas reales con bases técnicas sólidas, implementación limpia y sistemas que escalan de prototipo a producción.',
    'about.text2': 'Recientemente he estado construyendo sistemas distribuidos de edge-ML, pipelines de inferencia en tiempo real, backends con FastAPI, dashboards en React y flujos de entrenamiento y despliegue de modelos en Azure y AWS.',
    'skills.label': 'Habilidades',
    'skills.title': 'Stack principal y fortalezas técnicas',
    'projects.label': 'Proyectos destacados',
    'projects.title': 'Trabajo seleccionado',
    'projects.sickle.title': 'Chatbot Médico de Anemia Falciforme',
    'projects.sickle.text': 'Sistema médico RAG para la anemia falciforme, con scraping automatizado de PMC y búsqueda semántica para respuestas médicas basadas en evidencia.',
    'projects.weather.title': 'Estación Meteorológica IoT',
    'projects.weather.text': 'Sistema completo de monitoreo meteorológico con Arduino, sensores SparkFun, comunicación MQTT, backend en FastAPI, almacenamiento en SQLite y dashboard en tiempo real para variables ambientales y estado del sistema.',
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