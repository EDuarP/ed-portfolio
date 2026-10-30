/* Eduardo Duarte — portfolio script (no dependencies). */
(function () {
  'use strict';

  var root = document.documentElement;
  // The inline fallback in <head> removes .js if this script hasn't booted after 2.5 s.
  // If that already happened (slow network), show everything at once instead of hiding it again.
  var lateBoot = !root.classList.contains('js');
  window.__edReady = true;

  /* ------------------------------------------------------------------
     Translations
     ------------------------------------------------------------------ */
  var translations = {
    es: {
      'meta.title': 'Eduardo Duarte — AI Systems Engineer y desarrollador freelance',
      'meta.description': 'Eduardo Duarte — AI Systems Engineer y desarrollador full-stack en Medellín. Construyo plataformas web, apps móviles, IoT e IA aplicada para tu negocio.',

      'ui.skip': 'Saltar al contenido',
      'ui.newTab': '(abre en otra pestaña)',
      'ui.enlarge': '(ampliar imagen)',
      'ui.gallery': '(abrir galería de 3 imágenes)',
      'ui.code': 'Ver código',
      'ui.stack': 'Tecnologías',

      'nav.label': 'Principal',
      'nav.labelMobile': 'Principal (móvil)',
      'nav.lang': 'Idioma',
      'nav.work': 'Proyectos',
      'nav.services': 'Servicios',
      'nav.about': 'Sobre mí',
      'nav.contact': 'Contacto',
      'nav.cta': 'Hablemos',
      'nav.menu': 'Menú',
      'nav.close': 'Cerrar',

      'hero.role': 'AI Systems Engineer y desarrollador full-stack',
      'hero.location': 'Medellín, Colombia — trabajo remoto',
      'hero.status': 'Disponible para proyectos freelance',
      'hero.statement': 'Construyo productos completos: del sensor y el modelo de IA a la app que usan tus clientes.',
      'hero.cta': 'Cuéntame tu proyecto',
      'hero.cta2': 'Ver proyectos',

      'work.title': 'Proyectos',
      'work.intro': 'Productos en producción y proyectos de IA, datos e IoT.',

      'mt.kicker': 'Máquinas de agua que venden solas y un portal para seguirlas en tiempo real.',
      'mt.body': 'Madre Tierra Group fabrica máquinas expendedoras de agua purificada. Desarrollé su sitio web, con catálogo y cotizador, y el Portal MT, donde cada máquina reporta sus ventas y litros a la nube a través de un ESP32. Desde el celular, el dueño ve las ventas en vivo, el mapa de sus máquinas y las alertas, y puede cambiar el precio o apagar una máquina. La suscripción mensual se cobra automáticamente con Wompi.',
      'mt.tag': 'En producción',
      'mt.screen': 'Pantalla de la máquina · ESP32 con CrowPanel táctil',
      'mt.live': 'Ver sitio en vivo',

      'nest.title': 'Nest — Finanzas en pareja',
      'nest.kicker': 'Una app para que las parejas manejen su dinero juntas.',
      'nest.body': 'Reúne gastos, presupuestos, metas de ahorro y deudas compartidas en un solo lugar, con invitación a la pareja, gastos recurrentes y recordatorios. La diseñé y desarrollé de principio a fin, desde el backend hasta su publicación en Google Play.',
      'nest.tag': 'Publicada en Google Play · 50+ descargas',
      'nest.play': 'Ver en Google Play',

      'sickle.title': 'Chatbot médico de anemia falciforme',
      'sickle.text': 'Sistema RAG que responde con evidencia científica: recopila artículos de PubMed Central y hace búsquedas semánticas sobre ellos.',
      'weather.title': 'Estación meteorológica IoT',
      'weather.text': 'Un Arduino con sensores SparkFun envía datos por MQTT a un backend en FastAPI, que alimenta un tablero en tiempo real.',
      'pig.title': 'Sistema de pesaje porcino',
      'pig.text': 'Para plantas de beneficio: captura el peso por puerto serial, lleva la trazabilidad y genera reportes en PDF que se envían automáticamente por WhatsApp.',
      'transport.title': 'Ciencia de datos para transporte público',
      'transport.text': 'Modelos de machine learning para predecir las rutas del transporte público en Bucaramanga. Obtuvo el primer puesto en CienTIoN 2023 y dio origen a una publicación arbitrada.',
      'transport.tag': 'Publicación arbitrada',

      'services.title': 'Qué puedo construir para ti',
      'services.proof': 'Ejemplo:',
      'services.web.title': 'Plataformas web y portales',
      'services.web.text': 'Sitios web, paneles y portales con inicio de sesión, pagos y datos en tiempo real.',
      'services.web.proof': 'Portal Madre Tierra',
      'services.app.title': 'Apps móviles',
      'services.app.text': 'Apps en Flutter para Android e iOS, con suscripciones y notificaciones.',
      'services.iot.title': 'IoT y hardware conectado',
      'services.iot.text': 'Máquinas y sensores con ESP32 o Raspberry Pi que envían datos a la nube y se controlan a distancia.',
      'services.iot.proof': 'Máquinas Madre Tierra, estación meteorológica',
      'services.ai.title': 'IA aplicada y automatización',
      'services.ai.text': 'Chatbots que responden a partir de tus documentos, modelos de machine learning y reportes que se envían solos por WhatsApp.',
      'services.ai.proof': 'Chatbot de anemia falciforme',

      'how.title': 'Cómo trabajo',
      'how.1.title': 'Conversamos',
      'how.1.text': 'Me cuentas el problema y qué tienes hasta ahora.',
      'how.2.title': 'Propuesta',
      'how.2.text': 'Te envío por escrito el alcance, los entregables y los tiempos.',
      'how.3.title': 'Construcción',
      'how.3.text': 'Cada semana te muestro avances que puedes probar.',
      'how.4.title': 'Lanzamiento',
      'how.4.text': 'Lo publico, lo dejo funcionando y te enseño a usarlo.',

      'about.title': 'Sobre mí',
      'about.bio': 'Soy ingeniero mecatrónico y trabajo como AI Systems Engineer en Space-Eyes. Construyo sistemas de IA que funcionan en el mundo real, no solo en un notebook: en la nube, en dispositivos de borde y a escala. Combino hardware, datos y software, así que puedo llevar un producto desde el sensor hasta la app.',
      'about.exp': 'Experiencia',
      'about.awards': 'Reconocimientos',
      'about.certs': 'Certificaciones recientes',
      'about.email': 'Escríbeme',
      'about.cv': 'Descargar CV',
      'about.cvNote': 'PDF, en inglés',
      'exp.1': 'jun 2026 – hoy',
      'exp.2': 'oct 2025 – jun 2026',
      'exp.3': 'abr 2026 – hoy',
      'exp.4': 'ago – sep 2025',
      'exp.5': 'mar – jul 2025',
      'exp.6': 'jul 2024 – feb 2025',
      'exp.7': 'jun – nov 2023',
      'exp.freelanceRole': 'Desarrollador full-stack e IoT',
      'stack.ai': 'IA y datos',
      'stack.web': 'Web y móvil',
      'stack.cloud': 'Nube',
      'awards.1': '1.er puesto · CienTIoN 2023, Investigación e Innovación',
      'awards.2': '3.er puesto · Huawei ICT Competition 2023, Cloud',
      'certs.3': 'Docker y DevOps · LinkedIn Learning, 2025',
      'certs.4': 'Gestión de proyectos con Jira · LinkedIn Learning, 2025',

      'contact.title': 'Cuéntame qué necesitas',
      'contact.intro': 'Elige lo que buscas y te preparo el mensaje. Respondo en menos de 24 horas.',
      'contact.direct': 'Contacto directo',
      'contact.email': 'Correo',

      'brief.typesLegend': '¿Qué necesitas?',
      'brief.type.web': 'Plataforma web',
      'brief.type.app': 'App móvil',
      'brief.type.iot': 'IoT / hardware',
      'brief.type.ai': 'IA o automatización',
      'brief.type.dash': 'Dashboard de datos',
      'brief.type.other': 'Otra cosa',
      'brief.timeLegend': '¿Para cuándo?',
      'brief.time.asap': 'Lo antes posible',
      'brief.time.soon': 'En 1–3 meses',
      'brief.time.explore': 'Solo estoy explorando',
      'brief.name': 'Tu nombre (opcional)',
      'brief.idea': 'Tu idea en pocas líneas (opcional)',
      'brief.preview': 'Así se enviará:',
      'brief.wa': 'Enviar por WhatsApp',
      'brief.mail': 'Enviar por correo',
      'brief.status': 'Mensaje actualizado: {summary}',
      'brief.statusEmpty': 'Mensaje actualizado',

      // Message template pieces
      'msg.hi': 'Hola Eduardo, vi tu portafolio.',
      'msg.hiName': 'Hola Eduardo, soy {name}.',
      'msg.need': 'Necesito: {types}.',
      'msg.time': 'Plazo: {timeline}.',
      'msg.and': 'y',
      'msg.subject': 'Proyecto freelance',
      'msg.type.web': 'una plataforma web',
      'msg.type.app': 'una app móvil',
      'msg.type.iot': 'IoT / hardware',
      'msg.type.ai': 'IA o automatización',
      'msg.type.dash': 'un dashboard de datos',
      'msg.type.other': 'otra cosa',
      'msg.time.asap': 'lo antes posible',
      'msg.time.soon': 'en 1–3 meses',
      'msg.time.explore': 'solo estoy explorando',

      'lb.label': 'Galería de imágenes',
      'lb.close': 'Cerrar',
      'lb.prev': 'Imagen anterior',
      'lb.next': 'Imagen siguiente',

      'alt.portrait': 'Retrato de Eduardo Duarte',
      'alt.mt1': 'Página de inicio de madretierragroup.co: «Agua purificada que se vende sola»',
      'alt.mt2': 'Panel del Portal MT con ventas, litros y estado de cada máquina',
      'alt.mt3': 'Catálogo de máquinas dispensadoras de agua con precios',
      'alt.mt4': 'Pantalla táctil CrowPanel de la máquina: precio por litro y pago con monedas o billetes',
      'alt.mt5': 'Pantalla de la máquina con el saldo disponible y los litros que alcanza',
      'alt.mt6': 'Pantalla de la máquina durante el llenado de la botella',
      'alt.nest1': 'Pantalla de inicio de Nest con el saldo compartido de la pareja',
      'alt.nest2': 'Registro de un nuevo gasto en Nest',
      'alt.nest3': 'Presupuesto por categoría en Nest',
      'alt.nest4': 'Metas de ahorro a largo plazo en Nest',
      'alt.nest5': 'Historial de movimientos en Nest',
      'alt.nest6': 'Actividad de la pareja en tiempo real en Nest',
      'alt.sickle1': 'Pantalla inicial del chatbot de anemia falciforme con preguntas sugeridas',
      'alt.sickle2': 'Respuesta del chatbot con referencias a artículos científicos',
      'alt.sickle3': 'Respuesta detallada del chatbot con la lista de fuentes de PubMed Central',
      'alt.weather1': 'Tablero en tiempo real con temperatura, humedad, presión y viento',
      'alt.weather2': 'Hardware de la estación: Arduino y placa de sensores SparkFun',
      'alt.weather3': 'Sensores de la estación meteorológica instalados',
      'alt.pig1': 'Pantallas de la aplicación de pesaje: registro, pesaje en pie, canal caliente y tablero',
      'alt.pig2': 'Reporte impreso de pesaje en pie generado por el sistema',
      'alt.pig3': 'Corral con cerdos y la pantalla del sistema de pesaje en la planta de beneficio',
      'alt.transport1': 'Gráfica que compara la ruta predicha con la ruta real de un bus',
      'alt.transport2': 'Tablero de Power BI con número de vehículos y tiempos por ruta',
      'alt.transport3': 'Tablero de Power BI con el mapa de recorridos del transporte público en Bucaramanga'
    },

    en: {
      'meta.title': 'Eduardo Duarte — AI Systems Engineer & freelance developer',
      'meta.description': 'Eduardo Duarte — AI Systems Engineer and full-stack developer in Medellín. I build web platforms, mobile apps, IoT and applied AI for your business.',

      'ui.skip': 'Skip to content',
      'ui.newTab': '(opens in a new tab)',
      'ui.enlarge': '(enlarge image)',
      'ui.gallery': '(open a gallery of 3 images)',
      'ui.code': 'View code',
      'ui.stack': 'Technologies',

      'nav.label': 'Main',
      'nav.labelMobile': 'Main (mobile)',
      'nav.lang': 'Language',
      'nav.work': 'Work',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.cta': 'Let’s talk',
      'nav.menu': 'Menu',
      'nav.close': 'Close',

      'hero.role': 'AI Systems Engineer & full-stack developer',
      'hero.location': 'Medellín, Colombia — working remotely',
      'hero.status': 'Available for freelance projects',
      'hero.statement': 'I build complete products: from the sensor and the AI model to the app your customers use.',
      'hero.cta': 'Tell me about your project',
      'hero.cta2': 'See the work',

      'work.title': 'Selected work',
      'work.intro': 'Products in production, plus AI, data and IoT projects.',

      'mt.kicker': 'Water machines that sell on their own, and a portal to watch them in real time.',
      'mt.body': 'Madre Tierra Group builds purified-water vending machines. I built their site with a catalog and quote builder, plus Portal MT: every machine runs an ESP32 that reports sales and liters to the cloud. Owners see live sales, a machine map and alerts, and can change the price or switch a machine off from their phone. The subscription bills itself every month through Wompi.',
      'mt.tag': 'In production',
      'mt.screen': 'Machine screen · ESP32 with a CrowPanel touchscreen',
      'mt.live': 'Visit the live site',

      'nest.title': 'Nest — Finances for couples',
      'nest.kicker': 'An app for couples to manage their money together.',
      'nest.body': 'Shared expenses, budgets, savings goals and debts in one place, with partner invites, recurring payments and reminders. I designed and built it end to end, from the backend to the Google Play release.',
      'nest.tag': 'Live on Google Play · 50+ downloads',
      'nest.play': 'Get it on Google Play',

      'sickle.title': 'Sickle Cell Medical Chatbot',
      'sickle.text': 'A RAG system that answers with scientific evidence: it pulls PubMed Central papers and searches by meaning.',
      'weather.title': 'IoT Weather Station',
      'weather.text': 'Arduino and SparkFun sensors stream data over MQTT to a FastAPI backend with a real-time dashboard.',
      'pig.title': 'Pig Weighing System',
      'pig.text': 'Serial-port weight capture, traceability, automatic PDF reports and WhatsApp delivery for processing plants.',
      'transport.title': 'Public Transport Data Science',
      'transport.text': 'ML models predicting public-transport routes in Bucaramanga. Won 1st place at CienTIoN 2023 and led to a peer-reviewed publication.',
      'transport.tag': 'Peer-reviewed publication',

      'services.title': 'What I can build for you',
      'services.proof': 'Proof:',
      'services.web.title': 'Web platforms and portals',
      'services.web.text': 'Sites, dashboards and portals with login, payments and real-time data.',
      'services.web.proof': 'Portal Madre Tierra',
      'services.app.title': 'Mobile apps',
      'services.app.text': 'Flutter apps for Android and iOS, with subscriptions and notifications.',
      'services.iot.title': 'IoT and connected hardware',
      'services.iot.text': 'Machines and sensors on ESP32 or Raspberry Pi that report to the cloud and can be controlled remotely.',
      'services.iot.proof': 'Madre Tierra machines, weather station',
      'services.ai.title': 'Applied AI and automation',
      'services.ai.text': 'Chatbots that answer from your documents, machine-learning models, and reports that send themselves over WhatsApp.',
      'services.ai.proof': 'Sickle cell chatbot',

      'how.title': 'How I work',
      'how.1.title': 'We talk',
      'how.1.text': 'You tell me the problem and what you already have.',
      'how.2.title': 'Proposal',
      'how.2.text': 'I send scope, deliverables and timeline in writing.',
      'how.3.title': 'Build',
      'how.3.text': 'Progress you can try every week.',
      'how.4.title': 'Launch',
      'how.4.text': 'I ship it, leave it running and show you how to use it.',

      'about.title': 'About',
      'about.bio': 'I’m a mechatronics engineer working as an AI Systems Engineer at Space-Eyes, building AI systems that work outside the notebook: in the cloud, on the edge and at scale. I combine hardware, data and software, so I can take a product from the sensor to the app.',
      'about.exp': 'Experience',
      'about.awards': 'Awards',
      'about.certs': 'Recent certifications',
      'about.email': 'Email me',
      'about.cv': 'Download CV',
      'about.cvNote': 'PDF, English',
      'exp.1': 'Jun 2026 – now',
      'exp.2': 'Oct 2025 – Jun 2026',
      'exp.3': 'Apr 2026 – now',
      'exp.4': 'Aug – Sep 2025',
      'exp.5': 'Mar – Jul 2025',
      'exp.6': 'Jul 2024 – Feb 2025',
      'exp.7': 'Jun – Nov 2023',
      'exp.freelanceRole': 'Full-stack & IoT developer',
      'stack.ai': 'AI & data',
      'stack.web': 'Web & mobile',
      'stack.cloud': 'Cloud',
      'awards.1': '1st place · CienTIoN 2023, Research & Innovation',
      'awards.2': '3rd place · Huawei ICT Competition 2023, Cloud',
      'certs.3': 'Docker & DevOps · LinkedIn Learning, 2025',
      'certs.4': 'Project management with Jira · LinkedIn Learning, 2025',

      'contact.title': 'Tell me what you need',
      'contact.intro': 'Pick what you’re after and I’ll draft the message. I reply within 24 hours.',
      'contact.direct': 'Direct contact',
      'contact.email': 'Email',

      'brief.typesLegend': 'What do you need?',
      'brief.type.web': 'Web platform',
      'brief.type.app': 'Mobile app',
      'brief.type.iot': 'IoT / hardware',
      'brief.type.ai': 'AI or automation',
      'brief.type.dash': 'Data dashboard',
      'brief.type.other': 'Something else',
      'brief.timeLegend': 'When?',
      'brief.time.asap': 'As soon as possible',
      'brief.time.soon': 'In 1–3 months',
      'brief.time.explore': 'Just exploring',
      'brief.name': 'Your name (optional)',
      'brief.idea': 'Your idea in a few lines (optional)',
      'brief.preview': 'Message preview:',
      'brief.wa': 'Send on WhatsApp',
      'brief.mail': 'Send by email',
      'brief.status': 'Message updated: {summary}',
      'brief.statusEmpty': 'Message updated',

      'msg.hi': 'Hi Eduardo, I saw your portfolio.',
      'msg.hiName': 'Hi Eduardo, I’m {name}.',
      'msg.need': 'I need: {types}.',
      'msg.time': 'Timeline: {timeline}.',
      'msg.and': 'and',
      'msg.subject': 'Freelance project',
      'msg.type.web': 'a web platform',
      'msg.type.app': 'a mobile app',
      'msg.type.iot': 'IoT / hardware',
      'msg.type.ai': 'AI or automation',
      'msg.type.dash': 'a data dashboard',
      'msg.type.other': 'something else',
      'msg.time.asap': 'as soon as possible',
      'msg.time.soon': 'in 1–3 months',
      'msg.time.explore': 'just exploring',

      'lb.label': 'Image gallery',
      'lb.close': 'Close',
      'lb.prev': 'Previous image',
      'lb.next': 'Next image',

      'alt.portrait': 'Portrait of Eduardo Duarte',
      'alt.mt1': 'Madre Tierra Group home page: “Purified water that sells itself”',
      'alt.mt2': 'Portal MT dashboard with sales, liters and the status of each machine',
      'alt.mt3': 'Catalog of water vending machines with prices',
      'alt.mt4': 'The machine’s CrowPanel touchscreen: price per liter and payment with coins or bills',
      'alt.mt5': 'Machine screen showing the available balance and how many liters it buys',
      'alt.mt6': 'Machine screen while the bottle is filling',
      'alt.nest1': 'Nest home screen with the couple’s shared balance',
      'alt.nest2': 'Logging a new expense in Nest',
      'alt.nest3': 'Budget by category in Nest',
      'alt.nest4': 'Long-term savings goals in Nest',
      'alt.nest5': 'Transaction history in Nest',
      'alt.nest6': 'Real-time partner activity in Nest',
      'alt.sickle1': 'Sickle cell chatbot start screen with suggested questions',
      'alt.sickle2': 'Chatbot answer citing scientific papers',
      'alt.sickle3': 'Detailed chatbot answer with a list of PubMed Central sources',
      'alt.weather1': 'Real-time dashboard with temperature, humidity, pressure and wind',
      'alt.weather2': 'Station hardware: Arduino and a SparkFun sensor board',
      'alt.weather3': 'Weather station sensors installed',
      'alt.pig1': 'Weighing app screens: login, live weight, hot carcass and dashboard',
      'alt.pig2': 'Printed live-weight report generated by the system',
      'alt.pig3': 'Pig pen with the weighing system screen at the processing plant',
      'alt.transport1': 'Chart comparing a bus’s predicted route with the actual route',
      'alt.transport2': 'Power BI dashboard with vehicle counts and travel times per route',
      'alt.transport3': 'Power BI dashboard with a map of public-transport routes in Bucaramanga'
    }
  };

  var STORAGE_KEY = 'ed-portfolio-lang';
  var lang = detectLanguage();

  function detectLanguage() {
    var saved = null;
    try { saved = window.localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage blocked */ }
    if (saved === 'es' || saved === 'en') return saved;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
    return /^es\b/i.test(nav) ? 'es' : 'en';
  }

  function t(key) {
    var dict = translations[lang] || translations.es;
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    if (Object.prototype.hasOwnProperty.call(translations.es, key)) return translations.es[key];
    return '';
  }

  // Fill {placeholders} with a function replacer so `$&`, `$1`, etc. in user input stay literal.
  function fill(template, values) {
    return template.replace(/\{(\w+)\}/g, function (match, key) {
      return Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match;
    });
  }

  function applyLanguage(next, persist) {
    lang = next === 'en' ? 'en' : 'es';
    root.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = t(el.getAttribute('data-i18n'));
      if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var value = t(parts[1].trim());
        if (value) el.setAttribute(parts[0].trim(), value);
      });
    });

    document.title = t('meta.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });

    syncMenuLabel();
    updateBrief();
    if (lightbox.isOpen()) lightbox.render();

    if (persist) {
      try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    }
  }

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'), true);
    });
  });

  /* ------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------ */
  var menuBtn = document.querySelector('.menu-btn');
  var panel = document.getElementById('mobile-panel');
  var menuOpen = false;
  var inertTargets = Array.prototype.slice.call(document.querySelectorAll('main, footer'));

  function syncMenuLabel() {
    if (!menuBtn) return;
    var label = menuBtn.querySelector('.menu-btn-label');
    if (label) label.textContent = menuOpen ? t('nav.close') : t('nav.menu');
  }

  function setMenu(open, restoreFocus) {
    if (!menuBtn || !panel) return;
    menuOpen = open;
    panel.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    root.classList.toggle('menu-open', open);
    // The panel covers the page: keep the content behind it out of reach for Tab and screen readers.
    inertTargets.forEach(function (el) { el.toggleAttribute('inert', open); });
    syncMenuLabel();
    if (open) {
      var first = panel.querySelector('a, button');
      if (first) first.focus();
    } else if (restoreFocus) {
      menuBtn.focus();
    }
  }

  if (menuBtn && panel) {
    menuBtn.addEventListener('click', function () { setMenu(!menuOpen, true); });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false, false);
    });
    document.addEventListener('keydown', function (e) {
      if (menuOpen && e.key === 'Escape') setMenu(false, true);
    });
    // Keep Tab inside the header while the full-screen panel is open.
    document.addEventListener('focusin', function (e) {
      if (menuOpen && !e.target.closest('.site-header')) setMenu(false, false);
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', function (mq) {
      if (mq.matches && menuOpen) setMenu(false, false);
    });
  }

  /* ------------------------------------------------------------------
     Lightbox (native <dialog>)
     ------------------------------------------------------------------ */
  var P = './assets/projects/';
  var F = P + 'full/'; // 1600 px WebP copies of the heavy originals, for the lightbox
  var galleries = {
    mt: [
      { src: P + 'mt-hero.webp', w: 1440, h: 1070, alt: 'alt.mt1' },
      { src: P + 'mt-portal.webp', w: 1440, h: 660, alt: 'alt.mt2' },
      { src: P + 'mt-crowpanel.webp', w: 1024, h: 600, alt: 'alt.mt4' },
      { src: P + 'mt-crowpanel-saldo.webp', w: 1024, h: 600, alt: 'alt.mt5' },
      { src: P + 'mt-crowpanel-llenado.webp', w: 1024, h: 600, alt: 'alt.mt6' },
      { src: P + 'mt-products.webp', w: 1240, h: 940, alt: 'alt.mt3' }
    ],
    nest: [1, 2, 3, 4, 5, 6].map(function (n) {
      return { src: P + 'nest' + n + '.webp', w: 720, h: 1280, alt: 'alt.nest' + n };
    }),
    sickle: [
      { src: F + 'sickle_cell_2.webp', w: 1600, h: 761, alt: 'alt.sickle2' },
      { src: F + 'sickle_cell_1.webp', w: 1600, h: 754, alt: 'alt.sickle1' },
      { src: F + 'sickle_cell_3.webp', w: 1600, h: 761, alt: 'alt.sickle3' }
    ],
    weather: [
      { src: F + 'weather1.webp', w: 1280, h: 689, alt: 'alt.weather1' },
      { src: F + 'weather2.webp', w: 1280, h: 960, alt: 'alt.weather2' },
      { src: F + 'weather3.webp', w: 960, h: 1280, alt: 'alt.weather3' }
    ],
    pig: [
      { src: F + 'cerdo3.webp', w: 1200, h: 1600, alt: 'alt.pig3' },
      { src: F + 'cerdo1.webp', w: 1600, h: 631, alt: 'alt.pig1' },
      { src: F + 'cerdo2.webp', w: 1200, h: 1600, alt: 'alt.pig2' }
    ],
    transport: [
      { src: F + 'ciencia3.webp', w: 1458, h: 820, alt: 'alt.transport3' },
      { src: F + 'ciencia1.webp', w: 994, h: 697, alt: 'alt.transport1' },
      { src: F + 'ciencia2.webp', w: 1460, h: 820, alt: 'alt.transport2' }
    ]
  };

  var lightbox = (function () {
    var dialog = document.getElementById('lightbox');
    var img = document.getElementById('lb-img');
    var count = document.getElementById('lb-count');
    var altText = document.getElementById('lb-alt');
    var closeBtn = document.getElementById('lb-close');
    var prevBtn = document.getElementById('lb-prev');
    var nextBtn = document.getElementById('lb-next');
    var items = [];
    var index = 0;
    var trigger = null;
    var supported = !!(dialog && typeof dialog.showModal === 'function');

    function isOpen() { return !!(dialog && dialog.open); }

    function render() {
      var item = items[index];
      if (!item) return;
      img.src = item.src;
      img.width = item.w;
      img.height = item.h;
      // The caption shows (and announces) the same description, so the image stays
      // silent to keep screen readers from reading it twice.
      img.alt = '';
      count.textContent = (index + 1) + ' / ' + items.length;
      altText.textContent = t(item.alt);
      var multi = items.length > 1;
      prevBtn.hidden = !multi;
      nextBtn.hidden = !multi;
    }

    function open(name, start, from) {
      if (!supported || !galleries[name]) return false;
      items = galleries[name];
      index = Math.max(0, Math.min(items.length - 1, start || 0));
      trigger = from || document.activeElement;
      render();
      dialog.showModal();
      root.classList.add('lb-open');
      closeBtn.focus();
      // Warm the neighbours so arrow navigation feels instant.
      [index + 1, index - 1].forEach(function (i) {
        var it = items[(i + items.length) % items.length];
        if (it) { var pre = new Image(); pre.src = it.src; }
      });
      return true;
    }

    function step(delta) {
      if (!items.length) return;
      index = (index + delta + items.length) % items.length;
      render();
    }

    if (dialog) {
      closeBtn.addEventListener('click', function () { dialog.close(); });
      prevBtn.addEventListener('click', function () { step(-1); });
      nextBtn.addEventListener('click', function () { step(1); });
      dialog.addEventListener('click', function (e) {
        if (e.target === dialog) dialog.close(); // click on the empty area / backdrop
      });
      dialog.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
      });
      // Esc fires "cancel" then "close" natively; restore state on any close.
      dialog.addEventListener('close', function () {
        root.classList.remove('lb-open');
        if (trigger && typeof trigger.focus === 'function') trigger.focus();
        trigger = null;
      });
    }

    return { open: open, render: render, isOpen: isOpen };
  })();

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-gallery]');
    if (!link) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // let "open in new tab" work
    var opened = lightbox.open(link.getAttribute('data-gallery'), parseInt(link.getAttribute('data-index'), 10) || 0, link);
    if (opened) e.preventDefault();
  });

  /* ------------------------------------------------------------------
     Brief builder
     ------------------------------------------------------------------ */
  var WA_NUMBER = '573154745396';
  var EMAIL = 'eduardo.jose881@gmail.com';
  var form = document.getElementById('brief');
  var preview = document.getElementById('brief-preview');
  var waLink = document.getElementById('send-wa');
  var mailLink = document.getElementById('send-mail');

  function joinList(items) {
    if (items.length <= 1) return items.join('');
    return items.slice(0, -1).join(', ') + ' ' + t('msg.and') + ' ' + items[items.length - 1];
  }

  function readBrief() {
    var types = Array.prototype.map.call(
      form.querySelectorAll('input[name="type"]:checked'),
      function (input) { return input.value; }
    );
    var timeline = form.querySelector('input[name="timeline"]:checked');
    return {
      name: form.elements.name.value.replace(/\s+/g, ' ').trim(),
      idea: form.elements.idea.value.trim(),
      types: types,
      timeline: timeline ? timeline.value : ''
    };
  }

  function buildMessage(data) {
    var lines = [];
    lines.push(data.name ? fill(t('msg.hiName'), { name: data.name }) : t('msg.hi'));
    if (data.types.length) {
      lines.push(fill(t('msg.need'), { types: joinList(data.types.map(function (v) { return t('msg.type.' + v); })) }));
    }
    if (data.timeline) {
      lines.push(fill(t('msg.time'), { timeline: t('msg.time.' + data.timeline) }));
    }
    var text = lines.join('\n');
    if (data.idea) text += '\n\n' + data.idea;
    return text;
  }

  function buildSubject(data) {
    var subject = t('msg.subject');
    if (data.types.length) {
      subject += ' — ' + data.types.map(function (v) { return t('brief.type.' + v); }).join(', ');
    }
    return subject;
  }

  function updateBrief() {
    if (!form || !preview) return;
    var data = readBrief();
    var message = buildMessage(data);
    preview.textContent = message;
    if (waLink) {
      waLink.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message);
    }
    if (mailLink) {
      // RFC 6068: line breaks in a mailto body are CRLF, percent-encoded.
      mailLink.href = 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent(buildSubject(data)) +
        '&body=' + encodeURIComponent(message.replace(/\r?\n/g, '\r\n'));
    }
  }

  // Short, polite summary for screen readers: only on chip changes, never on keystrokes.
  function announceBrief() {
    var status = document.getElementById('brief-status');
    if (!status || !form) return;
    var data = readBrief();
    var parts = [];
    if (data.types.length) {
      parts.push(data.types.map(function (v) { return t('brief.type.' + v); }).join(', '));
    }
    if (data.timeline) parts.push(t('brief.time.' + data.timeline));
    status.textContent = parts.length
      ? fill(t('brief.status'), { summary: parts.join(' · ') })
      : t('brief.statusEmpty');
  }

  if (form) {
    form.addEventListener('input', updateBrief);
    form.addEventListener('change', function (e) {
      updateBrief();
      var type = e.target && e.target.type;
      if (type === 'checkbox' || type === 'radio') announceBrief();
    });
    form.addEventListener('submit', function (e) { e.preventDefault(); });
  }

  /* ------------------------------------------------------------------
     Entrance motion
     ------------------------------------------------------------------ */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  var STAGGER = 75;

  function revealAll() {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  if (lateBoot) {
    // Content is already visible: mark it shown and skip the entrance motion, then restore .js.
    revealAll();
    document.querySelectorAll('.hero-name .word').forEach(function (el) { el.style.animation = 'none'; });
    root.classList.add('js');
  } else if (!('IntersectionObserver' in window)) {
    revealAll();
  } else {
    var observer = new IntersectionObserver(function (entries) {
      var batch = entries
        .filter(function (entry) { return entry.isIntersecting; })
        .map(function (entry) { return entry.target; })
        .sort(function (a, b) {
          return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });
      batch.forEach(function (el, i) {
        var inHero = !!el.closest('.hero');
        var delay = (inHero ? 260 : 0) + Math.min(i, 6) * STAGGER;
        el.style.setProperty('--d', delay + 'ms');
        el.classList.add('is-in');
        observer.unobserve(el);
        // Drop the delay once shown so hover feedback is immediate.
        window.setTimeout(function () { el.style.removeProperty('--d'); }, delay + 800);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // Jumping to an anchor (nav, skip link, deep link) must never land on hidden content.
  window.addEventListener('hashchange', function () {
    var target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    target.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-in'); });
    if (target.hasAttribute('data-reveal')) target.classList.add('is-in');
  });

  /* ------------------------------------------------------------------
     Background: dot grid + neural network that wires itself up on scroll
     ------------------------------------------------------------------ */
  (function neuralBackground() {
    var canvas = document.querySelector('.bg-net');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    var BLUE = '91, 134, 240';
    var GRID = 24;
    var w = 0, h = 0, dpr = 1, fieldH = 0, nodes = [], pulses = [], grid = null;
    // The dot grid is drawn on its own layer and masked by soft drifting "clouds",
    // so it shows strongly in some areas and fades out in others.
    var gridLayer = document.createElement('canvas'), gctx = gridLayer.getContext('2d');
    var maskLayer = document.createElement('canvas'), mctx = maskLayer.getContext('2d');
    var clouds = [
      { x: 0.18, y: 0.15, r: 0.55, sx: 0.00011, sy: 0.00007, ph: 0.0 },
      { x: 0.82, y: 0.45, r: 0.5,  sx: 0.00008, sy: 0.00012, ph: 1.7 },
      { x: 0.35, y: 0.85, r: 0.6,  sx: 0.00013, sy: 0.00009, ph: 3.1 },
      { x: 0.7,  y: 1.25, r: 0.45, sx: 0.0001,  sy: 0.00006, ph: 4.4 }
    ];
    var running = false, last = 0;

    function scrollProgress() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    }

    function makeGrid() {
      // One tile of the dot grid, repeated as a pattern.
      var tile = document.createElement('canvas');
      tile.width = tile.height = Math.round(GRID * dpr);
      var t = tile.getContext('2d');
      t.fillStyle = 'rgba(' + BLUE + ', 0.11)';
      t.beginPath();
      t.arc(tile.width / 2, tile.height / 2, 0.9 * dpr, 0, Math.PI * 2);
      t.fill();
      grid = gctx.createPattern(tile, 'repeat');
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gridLayer.width = maskLayer.width = canvas.width;
      gridLayer.height = maskLayer.height = canvas.height;
      fieldH = h * 1.6;
      var count = Math.round(Math.min(90, Math.max(28, (w * fieldH) / 26000)));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * fieldH,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: 1.1 + Math.random() * 1.3
        });
      }
      pulses = [];
      makeGrid();
    }

    function screenY(n, offset) {
      var y = (n.y - offset) % fieldH;
      if (y < 0) y += fieldH;
      return y - (fieldH - h) / 2;
    }

    function draw(dt) {
      var p = scrollProgress();
      var offset = window.scrollY * 0.22; // network drifts slower than the page
      var linkDist = 70 + 110 * p;       // the further down, the more it connects
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dot grid with a gentle parallax, faded in and out by the cloud mask
      var cw = canvas.width, ch = canvas.height, t = performance.now();
      gctx.globalCompositeOperation = 'source-over';
      gctx.clearRect(0, 0, cw, ch);
      gctx.save();
      gctx.translate(0, -((window.scrollY * 0.12 * dpr) % (GRID * dpr)));
      gctx.fillStyle = grid;
      gctx.fillRect(0, 0, cw, ch + GRID * dpr);
      gctx.restore();

      mctx.clearRect(0, 0, cw, ch);
      mctx.fillStyle = 'rgba(255, 255, 255, 0.05)'; // a faint trace everywhere
      mctx.fillRect(0, 0, cw, ch);
      var span = Math.max(cw, ch), loop = ch * 1.6;
      for (var c = 0; c < clouds.length; c++) {
        var cl = clouds[c];
        var cx = (cl.x + 0.12 * Math.sin(t * cl.sx + cl.ph)) * cw;
        var cy = ((cl.y * ch + 0.08 * ch * Math.cos(t * cl.sy + cl.ph) - window.scrollY * 0.35 * dpr) % loop + loop) % loop - ch * 0.3;
        var rad = cl.r * span;
        var g = mctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, 'rgba(255, 255, 255, 1)');
        g.addColorStop(0.45, 'rgba(255, 255, 255, 0.45)');
        g.addColorStop(1, 'rgba(255, 255, 255, 0)');
        mctx.fillStyle = g;
        mctx.fillRect(0, 0, cw, ch);
      }
      gctx.globalCompositeOperation = 'destination-in';
      gctx.drawImage(maskLayer, 0, 0);
      ctx.drawImage(gridLayer, 0, 0);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var pts = [];
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (dt) {
          n.x += n.vx * dt;
          n.y += n.vy * dt;
          if (n.x < 0 || n.x > w) n.vx *= -1;
        }
        pts.push({ x: n.x, y: screenY(n, offset), r: n.r });
      }

      // Links
      ctx.lineWidth = 1;
      var links = [];
      for (var a = 0; a < pts.length; a++) {
        for (var b = a + 1; b < pts.length; b++) {
          var dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkDist) {
            var alpha = (1 - d / linkDist) * (0.12 + 0.14 * p);
            ctx.strokeStyle = 'rgba(' + BLUE + ', ' + alpha.toFixed(3) + ')';
            ctx.beginPath();
            ctx.moveTo(pts[a].x, pts[a].y);
            ctx.lineTo(pts[b].x, pts[b].y);
            ctx.stroke();
            links.push([a, b]);
          }
        }
      }

      // Nodes
      for (var k = 0; k < pts.length; k++) {
        ctx.fillStyle = 'rgba(' + BLUE + ', ' + (0.22 + 0.2 * p).toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(pts[k].x, pts[k].y, pts[k].r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Signals travelling along links, like synapses firing
      if (dt) {
        if (links.length && pulses.length < 2 + Math.round(4 * p) && Math.random() < 0.03) {
          var l = links[Math.floor(Math.random() * links.length)];
          pulses.push({ a: nodes[l[0]], b: nodes[l[1]], t: 0 });
        }
        for (var q = pulses.length - 1; q >= 0; q--) {
          var s = pulses[q];
          s.t += 0.012 * dt;
          if (s.t >= 1) { pulses.splice(q, 1); continue; }
          var ay = screenY(s.a, offset), by = screenY(s.b, offset);
          if (Math.abs(ay - by) > linkDist * 1.5) { pulses.splice(q, 1); continue; }
          var px = s.a.x + (s.b.x - s.a.x) * s.t, py = ay + (by - ay) * s.t;
          ctx.fillStyle = 'rgba(' + BLUE + ', 0.55)';
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function frame(now) {
      if (!running) return;
      var dt = last ? Math.min(3, (now - last) / 16.7) : 1;
      last = now;
      draw(dt);
      window.requestAnimationFrame(frame);
    }

    function start() {
      if (running || reduce.matches || document.hidden) return;
      running = true;
      last = 0;
      window.requestAnimationFrame(frame);
    }
    function stop() { running = false; }

    resize();
    draw(0);
    start();

    var resizeTimer;
    window.addEventListener('resize', function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () { resize(); draw(0); }, 150);
    });
    // With reduced motion the network only changes when the visitor scrolls.
    window.addEventListener('scroll', function () { if (!running) draw(0); }, { passive: true });
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
    var onReduce = function () { reduce.matches ? stop() : start(); draw(0); };
    if (reduce.addEventListener) reduce.addEventListener('change', onReduce);
  })();

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  applyLanguage(lang, false);
})();
