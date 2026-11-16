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
      'hero.statement': 'Construyo productos que trabajan solos: IA autónoma, hardware conectado y la app que usan tus clientes.',
      'hero.cta': 'Cuéntame tu proyecto',
      'hero.cta2': 'Ver proyectos',

      'hud.agents': '{n} agentes',
      'hud.layers': '{built} / {total} capas',
      'hud.building': 'Construyendo',
      'hud.idle': 'En espera',
      'hud.done': 'Listo',
      'hud.skip': 'Saltar',
      'hud.skipLabel': 'Saltar la animación y mostrar toda la página',

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

      'zv.title': 'Zenvik — Trazabilidad porcina',
      'zv.kicker': 'Cada cerdo pesado y trazado, desde que llega a la planta hasta el despacho.',
      'zv.tag': 'App de escritorio · funciona sin internet',
      'zv.body': 'Zenvik es una app de escritorio para plantas de beneficio porcino. Cada estación lee su báscula por puerto serie y registra el lote en pie, en caliente y en frío; un servidor local en una Raspberry Pi guarda todo y lo respalda en la nube. Si la red se cae, la estación sigue pesando y envía lo pendiente al reconectar. El administrador ve el rendimiento y la ganancia de cada lote, ajusta las fórmulas de cálculo y genera los informes en PDF. Es la segunda generación del sistema de pesaje que desarrollé para esta industria.',
      'zv.step1': 'Pesaje en pie',
      'zv.step2': 'Proceso caliente',
      'zv.step3': 'Informe en PDF',
      'zv.note': 'Capturas con datos de demostración.',

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
      'alt.zv1': 'Panel de administración de Zenvik con los lotes procesados, el rendimiento y la ganancia de cada lote',
      'alt.zv2': 'Estación de pesaje en pie: la báscula marca 263,4 kg y los cerdos se pesan por grupos',
      'alt.zv3': 'Estación de proceso caliente: el peso de la canal de cada cerdo se captura desde la báscula',
      'alt.zv4': 'Vista previa del informe de pesaje caliente, listo para imprimir o enviar',
      'alt.zv5': 'Editor de fórmulas de cálculo, que valida cada fórmula mientras se escribe',
      'alt.zv6': 'Estación sin conexión: los registros se guardan en el equipo y se envían al reconectar',
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
      'hero.statement': 'I build products that run themselves: autonomous AI, connected hardware and the app your customers use.',
      'hero.cta': 'Tell me about your project',
      'hero.cta2': 'See the work',

      'hud.agents': '{n} agents',
      'hud.layers': '{built} / {total} layers',
      'hud.building': 'Building',
      'hud.idle': 'Standing by',
      'hud.done': 'Done',
      'hud.skip': 'Skip',
      'hud.skipLabel': 'Skip the animation and show the whole page',

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

      'zv.title': 'Zenvik — Pork traceability',
      'zv.kicker': 'Every pig weighed and traced, from arrival at the plant to dispatch.',
      'zv.tag': 'Desktop app · works offline',
      'zv.body': 'Zenvik is a desktop app for pork processing plants. Each station reads its scale over a serial port and records the batch at live, hot and cold weight; a local server on a Raspberry Pi stores everything and backs it up to the cloud. If the network drops, the station keeps weighing and sends what is pending once it reconnects. Admins see yield and profit per batch, edit the calculation formulas and generate the PDF reports. It is the second generation of the weighing system I built for this industry.',
      'zv.step1': 'Live weight',
      'zv.step2': 'Hot carcass',
      'zv.step3': 'PDF report',
      'zv.note': 'Screenshots show demo data.',

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
      'alt.zv1': 'Zenvik admin dashboard with processed batches, yield and profit per batch',
      'alt.zv2': 'Live-weight station: the scale reads 263.4 kg and pigs are weighed in groups',
      'alt.zv3': 'Hot-process station: each pig’s carcass weight is captured from the scale',
      'alt.zv4': 'Preview of the hot-weight report, ready to print or send',
      'alt.zv5': 'Calculation formula editor that validates each formula as you type',
      'alt.zv6': 'Station offline: records are stored on the machine and sent once it reconnects',
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
    swarm.relabel();
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
    zv: ['dashboard', 'pie', 'caliente', 'informe', 'formulas', 'offline'].map(function (name, i) {
      return { src: P + 'zenvik-' + name + '.webp', w: 1600, h: 1000, alt: 'alt.zv' + (i + 1) };
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
     Fonts: the ASCII art and the selection frames measure real glyphs
     ------------------------------------------------------------------ */
  var fonts = (function () {
    var done = Promise.resolve();
    if (!document.fonts || !document.fonts.load) return { soon: done, all: done };
    var all = Promise.all([
      document.fonts.ready,
      document.fonts.load('600 12px "Martian Mono"'),
      document.fonts.load('800 12px Archivo')
    ]).catch(function () { /* offline: fall back to system fonts */ });
    // Never hold the page for a slow font: carry on after 900 ms and redraw when it lands.
    var soon = Promise.race([all, new Promise(function (resolve) { window.setTimeout(resolve, 900); })]);
    return { soon: soon, all: all };
  })();

  function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
  function repeat(ch, n) { return new Array(Math.max(0, n) + 1).join(ch); }

  /* ------------------------------------------------------------------
     ASCII art: the portrait and the footer name redrawn in characters
     ------------------------------------------------------------------ */
  var ascii = (function () {
    // Seventy tones from empty to solid, for the portrait; a short ramp keeps the name crisp.
    var TONES = ' .\'`^",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';
    var SAMPLES = 3; // canvas pixels averaged per character cell, each way
    var photo = document.querySelector('.hero-photo');
    var footerName = document.querySelector('.footer-name');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var introPlayed = false;

    // Advance width of one monospace character, as a fraction of the font size.
    function charRatio() {
      var probe = document.createElement('span');
      probe.className = 'ascii ascii-probe';
      probe.textContent = repeat('0', 40);
      document.body.appendChild(probe);
      var ratio = probe.getBoundingClientRect().width / 40 / 100;
      probe.remove();
      return ratio > 0.3 && ratio < 1 ? ratio : 0.6;
    }

    // Mean brightness of each cell, mapped onto the character ramp.
    function toText(ctx, cols, rows, ramp, stretch, gamma) {
      var data = ctx.getImageData(0, 0, cols * SAMPLES, rows * SAMPLES).data;
      var width = cols * SAMPLES;
      var lum = [];
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var sum = 0;
          for (var y = 0; y < SAMPLES; y++) {
            for (var x = 0; x < SAMPLES; x++) {
              var i = ((r * SAMPLES + y) * width + c * SAMPLES + x) * 4;
              sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
            }
          }
          lum.push(sum / (SAMPLES * SAMPLES * 255));
        }
      }
      var lo = 0, hi = 1;
      if (stretch) {
        // Stretch between the 3rd and 97th percentile so a flat photo still uses the whole ramp.
        var sorted = lum.slice().sort(function (a, b) { return a - b; });
        lo = sorted[Math.floor(sorted.length * 0.03)];
        hi = sorted[Math.floor(sorted.length * 0.97)];
        if (hi - lo < 0.05) { lo = 0; hi = 1; }
      }
      var lines = [];
      for (var row = 0; row < rows; row++) {
        var line = '';
        for (var col = 0; col < cols; col++) {
          var v = Math.pow(clamp((lum[row * cols + col] - lo) / (hi - lo), 0, 1), gamma || 1);
          if (gamma) v = 0.16 + 0.84 * v; // a photo keeps some ink in its darkest areas
          line += ramp.charAt(Math.min(ramp.length - 1, Math.floor(v * ramp.length)));
        }
        lines.push(line);
      }
      return lines.join('\n');
    }

    // Stretch the rendered text block onto exactly w x h. Font metrics, glyph rounding,
    // a fallback font or a minimum font size can all make the block a little off:
    // this keeps every character over the part of the picture it was sampled from.
    function fit(art, w, h) {
      art.style.transform = 'none';
      var bw = art.offsetWidth, bh = art.offsetHeight;
      if (!bw || !bh) return;
      art.style.transform = 'scale(' + (w / bw).toFixed(5) + ',' + (h ? (h / bh).toFixed(5) : 1) + ')';
    }

    function canvasFor(cols, rows) {
      var canvas = document.createElement('canvas');
      canvas.width = cols * SAMPLES;
      canvas.height = rows * SAMPLES;
      return canvas.getContext('2d', { willReadFrequently: true });
    }

    function drawPortrait(ratio) {
      var frame = photo && photo.querySelector('.frame');
      var img = frame && frame.querySelector('img');
      if (!img || !img.complete || !img.naturalWidth) return false;
      var W = frame.clientWidth, H = frame.clientHeight;
      if (W < 40 || H < 40) return false;

      var cols = Math.round(W / Math.max(2.8, W / 112));
      var size = W / (cols * ratio);
      var rows = Math.max(8, Math.round(H / size));
      var ctx = canvasFor(cols, rows);
      // Same crop as object-fit: cover
      var scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
      var sw = W / scale, sh = H / scale;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, (img.naturalWidth - sw) / 2, (img.naturalHeight - sh) / 2, sw, sh, 0, 0, cols * SAMPLES, rows * SAMPLES);

      var holder = frame.querySelector('.ascii-portrait');
      if (!holder) {
        holder = document.createElement('div');
        holder.className = 'ascii-portrait';
        holder.setAttribute('aria-hidden', 'true');
        holder.appendChild(document.createElement('span')).className = 'ascii';
        frame.appendChild(holder);
      }
      var art = holder.firstChild;
      art.textContent = toText(ctx, cols, rows, TONES, true, 0.5); // lift the shadows so the face reads
      art.style.fontSize = size.toFixed(3) + 'px';
      art.style.lineHeight = (H / rows).toFixed(3) + 'px';
      art.style.backgroundImage = 'url("' + (img.currentSrc || img.src) + '")';
      fit(art, W, H);
      photo.classList.add('has-ascii');
      return true;
    }

    // The characters hold for a beat after an agent places the photo, then resolve into it.
    function playIntro() {
      if (introPlayed || reduce || lateBoot || !photo.classList.contains('has-ascii')) return;
      if (photo.classList.contains('is-in')) return; // already on screen: hover only
      introPlayed = true;
      photo.classList.add('is-ascii');
      var resolve = function () {
        window.setTimeout(function () { photo.classList.remove('is-ascii'); }, 950);
      };
      if (!('MutationObserver' in window)) return resolve();
      var watcher = new MutationObserver(function () {
        if (!photo.classList.contains('is-in')) return;
        watcher.disconnect();
        resolve();
      });
      watcher.observe(photo, { attributes: true, attributeFilter: ['class'] });
    }

    function drawName(ratio) {
      var wrap = footerName && footerName.parentNode;
      if (!wrap) return;
      var W = wrap.clientWidth;
      if (W < 120) return;
      var stacked = window.matchMedia('(max-width: 640px)').matches;
      var words = Array.prototype.map.call(footerName.querySelectorAll('.line'), function (el) {
        return el.textContent.toUpperCase();
      });
      if (!words.length) return;
      if (!stacked) words = [words.join(' ')];

      var size = clamp(W / 190, 4.5, 7.5);
      var widest = Math.floor(W / (size * ratio));
      size = W / (widest * ratio);

      var measure = canvasFor(1, 1);
      var font = '800 100px Archivo, system-ui, sans-serif';
      var setFont = function (ctx) {
        ctx.font = font;
        if ('fontStretch' in ctx) ctx.fontStretch = 'expanded';
        if ('letterSpacing' in ctx) ctx.letterSpacing = '-2px';
      };
      setFont(measure);
      var boxes = words.map(function (word) {
        var m = measure.measureText(word);
        return {
          word: word,
          left: m.actualBoundingBoxLeft || 0,
          width: (m.actualBoundingBoxLeft || 0) + (m.actualBoundingBoxRight || m.width),
          ascent: m.actualBoundingBoxAscent || 72,
          descent: m.actualBoundingBoxDescent || 0
        };
      });
      var longest = Math.max.apply(null, boxes.map(function (b) { return b.width; }));
      var perUnit = widest / longest; // character columns per canvas unit of text

      Array.prototype.slice.call(footerName.querySelectorAll('.ascii')).forEach(function (el) { el.remove(); });
      boxes.forEach(function (b) {
        var cols = Math.max(4, Math.round(b.width * perUnit));
        // Rows follow the same scale, corrected for the cell being taller than it is wide.
        var rows = Math.max(5, Math.round((b.ascent + b.descent) * perUnit * ratio));
        var ctx = canvasFor(cols, rows);
        setFont(ctx);
        ctx.fillStyle = '#fff';
        ctx.setTransform((cols * SAMPLES) / b.width, 0, 0, (rows * SAMPLES) / (b.ascent + b.descent), 0, 0);
        ctx.fillText(b.word, b.left, b.ascent);
        var art = document.createElement('span');
        art.className = 'ascii';
        art.style.fontSize = size.toFixed(3) + 'px';
        art.textContent = toText(ctx, cols, rows, ' .:=+*#', false);
        footerName.appendChild(art);
        fit(art, cols * size * ratio, 0);
      });
      footerName.classList.add('is-ascii');
    }

    function render() {
      try {
        var ratio = charRatio();
        if (photo && drawPortrait(ratio)) playIntro();
        drawName(ratio);
      } catch (e) {
        // A canvas can refuse to be read (file:// pages, strict privacy modes): keep the plain photo and name.
        if (footerName) footerName.classList.remove('is-ascii');
        if (photo) photo.classList.remove('has-ascii', 'is-ascii');
      }
    }

    function init() {
      render();
      var img = photo && photo.querySelector('img');
      if (img && !img.complete) img.addEventListener('load', render, { once: true });
      fonts.all.then(render);
      var lastWidth = window.innerWidth, timer;
      window.addEventListener('resize', function () {
        if (window.innerWidth === lastWidth) return; // mobile URL bar: height-only changes
        lastWidth = window.innerWidth;
        window.clearTimeout(timer);
        timer = window.setTimeout(render, 200);
      });
    }

    return { init: init };
  })();

  /* ------------------------------------------------------------------
     Entrance. Most content just fades in as it scrolls into view.
     A few chosen pieces ([data-agent]) are handled by a swarm of agent
     cursors: "place" pieces stay hidden until a cursor drags out their
     selection frame, "arrange" pieces arrive slightly out of position and
     a cursor straightens them. Every path ends with the piece settled.
     ------------------------------------------------------------------ */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));

  var swarm = (function () {
    var noMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var animated = !lateBoot && !noMotion && typeof Element.prototype.animate === 'function';
    var small = window.matchMedia('(max-width: 640px)').matches;
    var DRAG = 'cubic-bezier(0.3, 0, 0.15, 1)';
    var refresh = function () {};
    var enqueue = settle;
    var api = { show: show, relabel: function () {}, start: function () {} };

    var pieces = Array.prototype.map.call(document.querySelectorAll('[data-agent]'), function (el) {
      var piece = { el: el, mode: el.getAttribute('data-agent'), ox: 0, oy: 0, rot: 0, done: false, queued: false };
      if (piece.mode === 'arrange' && animated) {
        // How far out of position the piece arrives. Wide pieces barely tilt.
        var side = function () { return Math.random() < 0.5 ? -1 : 1; };
        var reach = small ? 6 : 10;
        piece.ox = side() * Math.round(reach * (0.7 + Math.random()));
        piece.oy = side() * Math.round(reach * (0.7 + Math.random()));
        piece.rot = side() * +Math.min(1.8, 380 / Math.max(120, el.offsetWidth)).toFixed(2);
        el.style.setProperty('--ox', piece.ox + 'px');
        el.style.setProperty('--oy', piece.oy + 'px');
        el.style.setProperty('--rot', piece.rot + 'deg');
      }
      return piece;
    });
    var total = pieces.length;
    var built = 0;

    function tilt(piece) {
      return 'translate(' + piece.ox + 'px,' + piece.oy + 'px) rotate(' + piece.rot + 'deg)';
    }

    // Final state for a piece, whoever gets it there.
    function mark(piece) {
      if (piece.done) return false;
      piece.done = true;
      piece.el.classList.add('is-seen', 'is-in');
      built++;
      refresh();
      return true;
    }

    // Finish a piece without a cursor: it eases into place by itself.
    function settle(piece) {
      var wasShown = piece.el.classList.contains('is-seen');
      if (mark(piece) && animated && piece.mode === 'arrange' && wasShown) {
        piece.el.animate([{ transform: tilt(piece) }, { transform: 'none' }], { duration: 380, easing: DRAG });
      }
    }

    // Reveal an element and anything inside it, right now (anchor jumps, fallbacks).
    function show(el) {
      if (el.hasAttribute('data-reveal')) el.classList.add('is-in');
      pieces.forEach(function (piece) {
        if (piece.el === el || el.contains(piece.el)) settle(piece);
      });
    }
    function showAll() {
      revealEls.forEach(function (el) { el.classList.add('is-in'); });
      pieces.forEach(settle);
    }

    if (lateBoot) {
      // Content is already visible: mark it shown and skip the entrance, then restore .js.
      showAll();
      document.querySelectorAll('.hero-name .word').forEach(function (el) { el.style.animation = 'none'; });
      root.classList.add('js');
      return api;
    }
    if (!('IntersectionObserver' in window)) { showAll(); return api; }

    function watch(items, getEl, onEnter, margin) {
      var els = items.map(getEl);
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          onEnter(items[els.indexOf(entry.target)]);
        });
      }, { rootMargin: '0px 0px -' + margin + '% 0px', threshold: 0.08 });
      els.forEach(function (el) { observer.observe(el); });
      return observer;
    }

    // The observers ignore the bottom edge of the viewport, so the last items of the
    // page would never qualify: at the end of the document, take whatever is on screen.
    function atEnd() {
      var doc = document.documentElement;
      if (window.innerHeight + window.scrollY < doc.scrollHeight - 2) return;
      var onScreen = function (el) {
        var r = el.getBoundingClientRect();
        return r.height > 0 && r.top < window.innerHeight && r.bottom > 0;
      };
      revealEls.forEach(function (el) { if (onScreen(el)) el.classList.add('is-in'); });
      pieces.forEach(function (piece) {
        if (!piece.done && !piece.queued && onScreen(piece.el)) enqueue(piece);
      });
    }

    // Plain content does not wait for anything.
    watch(revealEls, function (el) { return el; }, function (el) { el.classList.add('is-in'); }, 4);

    var agentObserver = null;
    api.start = function () {
      // Pieces that are not rendered at this width (the third phone on mobile) count as done.
      pieces.forEach(function (piece) {
        if (!piece.el.offsetWidth && !piece.el.offsetHeight) settle(piece);
      });
      agentObserver = watch(pieces, function (piece) { return piece.el; }, function (piece) { enqueue(piece); }, 10);
      window.addEventListener('scroll', atEnd, { passive: true });
      atEnd();
    };

    if (!animated) return api; // pieces settle the moment they scroll in

    var POOL = small ? 3 : 5;
    var STAGGER = 60;        // ms between two cursors setting off
    var MAX_WAIT = 900;      // a queued piece never waits longer than this for a cursor
    var METER = 12;          // cells in the ASCII progress meter
    var FLY_X = 'cubic-bezier(0.16, 1, 0.3, 1)';
    var FLY_Y = 'cubic-bezier(0.4, 0, 0.2, 1)'; // a different curve per axis bends the path
    var ARROW = '<svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">' +
      '<path d="M1.5 1.5l4.9 14.2 2.3-6.3 6.3-2.3z" fill="currentColor" stroke="#0B0D10" stroke-linejoin="round"/></svg>';

    var layer = document.createElement('div');
    layer.className = 'swarm';
    layer.setAttribute('aria-hidden', 'true');
    var agents = [];
    for (var i = 0; i < POOL; i++) {
      var cursor = document.createElement('div');
      cursor.className = 'agent';
      cursor.style.setProperty('--c', 'var(--agent-' + (i + 1) + ')');
      cursor.innerHTML = '<div>' + ARROW + '</div>';
      layer.appendChild(cursor);
      agents.push({ el: cursor, inner: cursor.firstChild, x: 0, y: 0, on: false, busy: false, idle: 0 });
    }
    document.body.appendChild(layer);

    var bar = document.createElement('div');
    bar.className = 'buildbar';
    var dots = '';
    for (var d = 1; d <= POOL; d++) dots += '<i style="--c: var(--agent-' + d + ')"></i>';
    bar.innerHTML =
      '<span class="bb-dots" aria-hidden="true">' + dots + '</span>' +
      '<span class="bb-agents" aria-hidden="true"></span>' +
      '<span class="bb-layers" aria-hidden="true"></span>' +
      '<span class="bb-meter" aria-hidden="true">[<span class="bb-on"></span><span class="bb-off"></span>]</span>' +
      '<span class="bb-state" aria-hidden="true"></span>' +
      '<button type="button" class="bb-skip"></button>';
    document.body.appendChild(bar);
    var agentsEl = bar.querySelector('.bb-agents');
    var layersEl = bar.querySelector('.bb-layers');
    var onEl = bar.querySelector('.bb-on');
    var offEl = bar.querySelector('.bb-off');
    var stateEl = bar.querySelector('.bb-state');
    var skipBtn = bar.querySelector('.bb-skip');

    var queue = [];
    var active = 0;
    var pumpTimer = 0;
    var hideTimer = 0;
    var stopped = false;

    refresh = function () {
      if (stopped) return;
      var working = active > 0 || queue.length > 0;
      var finished = built >= total;
      var cells = Math.round((built / total) * METER);
      layersEl.textContent = fill(t('hud.layers'), { built: built, total: total });
      onEl.textContent = repeat('#', cells);
      offEl.textContent = repeat('-', METER - cells);
      stateEl.textContent = t(finished ? 'hud.done' : working ? 'hud.building' : 'hud.idle');
      bar.classList.toggle('is-idle', !working && !finished);
      if (working) {
        window.clearTimeout(hideTimer);
        hideTimer = 0;
        bar.classList.add('is-on');
      } else if (!hideTimer && bar.classList.contains('is-on')) {
        hideTimer = window.setTimeout(function () {
          hideTimer = 0;
          bar.classList.remove('is-on');
        }, finished ? 2400 : 1400);
      }
    };

    api.relabel = function () {
      if (stopped) return;
      agentsEl.textContent = fill(t('hud.agents'), { n: POOL });
      skipBtn.textContent = t('hud.skip');
      skipBtn.setAttribute('aria-label', t('hud.skipLabel'));
      refresh();
    };

    skipBtn.addEventListener('click', function () {
      queue.forEach(function (job) { window.clearTimeout(job.timer); });
      queue = [];
      showAll();
      stopped = true;
      if (agentObserver) agentObserver.disconnect();
      layer.remove();
      bar.remove();
      var main = document.getElementById('main');
      if (main) main.focus({ preventScroll: true });
    });

    // Where the piece sits in the layout, ignoring the tilt it may still have.
    function box(piece) {
      var el = piece.el;
      var r = el.getBoundingClientRect();
      var w = el.offsetWidth, h = el.offsetHeight;
      var shifted = piece.mode === 'arrange' && !piece.done;
      // A rotation about the centre leaves the centre where it was: only the nudge moves it.
      return {
        x: Math.round(r.left + r.width / 2 + window.scrollX - w / 2 - (shifted ? piece.ox : 0)),
        y: Math.round(r.top + r.height / 2 + window.scrollY - h / 2 - (shifted ? piece.oy : 0)),
        w: w,
        h: h
      };
    }

    function run(el, frames, ms, easing) {
      return new Promise(function (resolve) {
        var anim = el.animate(frames, { duration: ms, easing: easing, fill: 'forwards' });
        anim.onfinish = anim.oncancel = function () { resolve(anim); };
      });
    }
    function wait(ms) {
      return new Promise(function (resolve) { window.setTimeout(resolve, ms); });
    }

    function place(a, x, y) {
      a.x = x;
      a.y = y;
      a.el.style.transform = 'translateX(' + x + 'px)';
      a.inner.style.transform = 'translateY(' + y + 'px)';
    }

    // X rides the outer element and Y the inner one, so each axis can ease on its own.
    function glide(a, x, y, ms, easeX, easeY) {
      return Promise.all([
        run(a.el, [{ transform: 'translateX(' + a.x + 'px)' }, { transform: 'translateX(' + x + 'px)' }], ms, easeX),
        run(a.inner, [{ transform: 'translateY(' + a.y + 'px)' }, { transform: 'translateY(' + y + 'px)' }], ms, easeY)
      ]).then(function (anims) {
        place(a, x, y);
        anims.forEach(function (anim) { anim.cancel(); });
      });
    }

    // A resting cursor that has scrolled away re-enters from the nearest edge of the viewport.
    function spawn(a, r) {
      var top = window.scrollY, vw = window.innerWidth, vh = window.innerHeight;
      var pick = Math.random();
      var midX = r.x + r.w / 2;
      if (pick < 0.4) {
        place(a, clamp(midX + (Math.random() - 0.5) * vw * 0.6, 0, vw), top + vh + 28);
      } else {
        var fromLeft = midX < vw / 2 ? pick < 0.85 : pick < 0.55;
        place(a, fromLeft ? -28 : vw + 28, clamp(r.y + (Math.random() - 0.3) * vh * 0.5, top, top + vh));
      }
    }

    // The frame is separate edges, a fill and four handles, so opening or moving it
    // only ever animates transforms: it stays glued to the cursor even on a busy page.
    function frame(r, openMs) {
      var sel = document.createElement('div');
      sel.className = 'sel';
      sel.style.transform = 'translate(' + r.x + 'px,' + r.y + 'px)';
      sel.style.width = r.w + 'px';
      sel.style.height = r.h + 'px';
      sel.innerHTML = '<b class="sel-fill"></b><b class="sel-t"></b><b class="sel-l"></b><b class="sel-r"></b><b class="sel-b"></b>' +
        '<i></i><i class="sel-tr"></i><i class="sel-bl"></i><i class="sel-br"></i>' +
        '<span class="sel-size">' + r.w + ' x ' + r.h + '</span>';
      var parts = {
        '.sel-fill': ['scale(0)', 'scale(1)'],
        '.sel-t': ['scaleX(0)', 'scaleX(1)'],
        '.sel-l': ['scaleY(0)', 'scaleY(1)'],
        '.sel-r': ['translateX(0px) scaleY(0)', 'translateX(' + (r.w - 1) + 'px) scaleY(1)'],
        '.sel-b': ['translateY(0px) scaleX(0)', 'translateY(' + (r.h - 1) + 'px) scaleX(1)'],
        '.sel-tr': ['translateX(0px)', 'translateX(' + r.w + 'px)'],
        '.sel-bl': ['translateY(0px)', 'translateY(' + r.h + 'px)'],
        '.sel-br': ['translate(0px, 0px)', 'translate(' + r.w + 'px,' + r.h + 'px)']
      };
      layer.insertBefore(sel, layer.firstChild); // frames sit under the cursors
      Object.keys(parts).forEach(function (name) {
        var part = sel.querySelector(name);
        part.style.transform = parts[name][1];
        if (openMs) run(part, [{ transform: parts[name][0] }, { transform: parts[name][1] }], openMs, DRAG);
      });
      return sel;
    }

    function dismiss(sel) {
      sel.classList.add('is-set');
      window.setTimeout(function () {
        sel.classList.add('is-out');
        window.setTimeout(function () { sel.remove(); }, 350);
      }, 520);
    }

    // "place": fly to the corner, drag the frame open, the piece appears inside it.
    function placePiece(a, piece, r) {
      var reach = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2));
      return glide(a, r.x, r.y, clamp(reach * 0.5, 140, 380), FLY_X, FLY_Y).then(function () {
        r = box(piece); // the layout may have settled while the cursor travelled
        place(a, r.x, r.y);
        var ms = clamp(Math.sqrt(r.w * r.w + r.h * r.h) * 0.3, 180, 340);
        var sel = frame(r, ms);
        return glide(a, r.x + r.w, r.y + r.h, ms, DRAG, DRAG).then(function () {
          mark(piece);
          dismiss(sel);
        });
      });
    }

    // "arrange": grab the piece where it lies and pull it straight.
    function arrangePiece(a, piece, r) {
      var gx = r.x + piece.ox + Math.round(r.w * (0.3 + Math.random() * 0.4));
      var gy = r.y + piece.oy + Math.round(Math.min(r.h / 2, 26));
      var reach = Math.sqrt(Math.pow(gx - a.x, 2) + Math.pow(gy - a.y, 2));
      return glide(a, gx, gy, clamp(reach * 0.5, 140, 380), FLY_X, FLY_Y).then(function () {
        if (piece.done) return;
        var home = 'translate(' + r.x + 'px,' + r.y + 'px)';
        var sel = frame(r, 0);
        sel.classList.add('is-grab');
        sel.style.transform = home + ' ' + tilt(piece);
        sel.getBoundingClientRect(); // commit the hidden state so the grab fades in
        sel.classList.add('is-held');
        return wait(110).then(function () {
          if (piece.done) { sel.remove(); return; }
          var ms = 340;
          mark(piece);
          piece.el.animate([{ transform: tilt(piece) }, { transform: 'none' }], { duration: ms, easing: DRAG });
          sel.style.transform = home;
          run(sel, [{ transform: home + ' ' + tilt(piece) }, { transform: home }], ms, DRAG);
          return glide(a, gx - piece.ox, gy - piece.oy, ms, DRAG, DRAG).then(function () { dismiss(sel); });
        });
      });
    }

    function release(a) {
      a.busy = false;
      active--;
      a.idle = window.setTimeout(function () {
        a.on = false;
        a.el.classList.remove('is-on');
      }, 800);
      refresh();
      pump();
    }

    function work(a, piece) {
      a.busy = true;
      active++;
      window.clearTimeout(a.idle);
      var r = box(piece);
      var top = window.scrollY, vh = window.innerHeight;
      var offscreen = r.y + r.h < top - 80 || r.y > top + vh + 80;
      if (piece.done || r.w < 2 || r.h < 2 || offscreen) {
        settle(piece);
        return release(a);
      }
      // Whatever happens to the animation (hidden tab, detached node), the piece still settles.
      var safety = window.setTimeout(function () { settle(piece); }, 1600);
      if (!a.on || a.y < top - 240 || a.y > top + vh + 240) spawn(a, r);
      a.on = true;
      a.el.classList.add('is-on');
      (piece.mode === 'arrange' ? arrangePiece : placePiece)(a, piece, r).then(function () {
        window.clearTimeout(safety);
        settle(piece);
        release(a);
      });
    }

    // Prefer a cursor that is already nearby; otherwise any free one.
    function pickAgent(piece) {
      var r = piece.el.getBoundingClientRect();
      var tx = r.left + window.scrollX, ty = r.top + window.scrollY;
      var best = null, bestDist = Infinity;
      agents.forEach(function (a) {
        if (a.busy) return;
        var dist = a.on ? Math.abs(a.x - tx) + Math.abs(a.y - ty) : 1e6;
        if (dist < bestDist) { best = a; bestDist = dist; }
      });
      return best;
    }

    function pump() {
      if (pumpTimer || stopped) return;
      step();
    }
    function step() {
      pumpTimer = 0;
      if (!queue.length) return;
      var a = pickAgent(queue[0].piece);
      if (!a) return; // release() pumps again
      var job = queue.shift();
      window.clearTimeout(job.timer);
      work(a, job.piece);
      if (queue.length) pumpTimer = window.setTimeout(step, STAGGER);
    }

    enqueue = function (piece) {
      if (piece.done || piece.queued || stopped) return;
      piece.queued = true;
      piece.el.classList.add('is-seen'); // arranged pieces are readable straight away
      var job = { piece: piece, timer: 0 };
      // Fast scrolling outruns the swarm: a piece that waits too long settles on its own.
      job.timer = window.setTimeout(function () {
        var at = queue.indexOf(job);
        if (at > -1) queue.splice(at, 1);
        settle(piece);
      }, MAX_WAIT);
      queue.push(job);
      refresh();
      pump();
    };

    return api;
  })();

  fonts.soon.then(function () {
    ascii.init();
    swarm.start();
  });

  // Jumping to an anchor (nav, skip link, deep link) must never land on hidden content.
  window.addEventListener('hashchange', function () {
    var target = document.getElementById(location.hash.slice(1));
    if (!target) return;
    target.querySelectorAll('[data-reveal]').forEach(swarm.show);
    swarm.show(target);
  });

  // Hairline under the sticky header once the page has moved.
  var siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    var syncHeader = function () { siteHeader.classList.toggle('is-stuck', window.scrollY > 8); };
    window.addEventListener('scroll', syncHeader, { passive: true });
    syncHeader();
  }

  /* ------------------------------------------------------------------
     Background decoration: an ASCII sky. Stars scattered over the whole
     page, and nebulae, a galaxy and black holes in the gaps between
     sections. The clouds, the galaxy and the black holes are computed
     cell by cell; the star shapes are drawn by hand.
     ------------------------------------------------------------------ */
  (function cosmos() {
    var canvas = document.querySelector('.bg-net');
    if (!canvas) return;
    var small = window.matchMedia('(max-width: 640px)').matches;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Seventy tones from empty to solid: enough steps for smooth shading.
    var TONES = ' .\'`^",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';
    var DUST = ' .,:;~+=*%#@';

    // Small seeded generator: the sky is the same on every visit.
    function prng(seed) {
      return function () {
        seed = (seed + 0x6D2B79F5) | 0;
        var x = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
        return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
      };
    }
    function tone(ramp, v) {
      return ramp.charAt(clamp(Math.floor(v * ramp.length), 0, ramp.length - 1));
    }

    // A cloud: three octaves of value noise, fading out towards an elliptical edge.
    function nebula(cols, rows, seed) {
      var rand = prng(seed);
      var G = 16, grid = [];
      for (var g = 0; g < G * G; g++) grid.push(rand());
      var noise = function (x, y) {
        var x0 = Math.floor(x), y0 = Math.floor(y);
        var fx = x - x0, fy = y - y0;
        fx = fx * fx * (3 - 2 * fx);
        fy = fy * fy * (3 - 2 * fy);
        var at = function (ix, iy) { return grid[((iy % G + G) % G) * G + ((ix % G + G) % G)]; };
        var top = at(x0, y0) + (at(x0 + 1, y0) - at(x0, y0)) * fx;
        var bottom = at(x0, y0 + 1) + (at(x0 + 1, y0 + 1) - at(x0, y0 + 1)) * fx;
        return top + (bottom - top) * fy;
      };
      var lines = [];
      for (var r = 0; r < rows; r++) {
        var line = '';
        for (var c = 0; c < cols; c++) {
          var u = c / cols, v = r / rows;
          var dx = (u - 0.5) * 2, dy = (v - 0.5) * 2;
          var edge = 1 - (dx * dx + dy * dy);
          if (edge <= 0) { line += ' '; continue; }
          var n = 0.56 * noise(u * 4.2, v * 3.1) + 0.28 * noise(u * 9.5 + 5.2, v * 7.3 + 1.3) +
            0.16 * noise(u * 21 + 2.7, v * 15 + 8.1);
          // The jitter breaks the smooth field into grain, so it reads as dust and not as contour bands.
          var value = (n - 0.36) * 2.9 * Math.pow(edge, 0.9) + (rand() - 0.5) * 0.26;
          line += rand() < 0.006 ? '*' : value <= 0.04 ? ' ' : tone(DUST, value * 0.8);
        }
        lines.push(line);
      }
      return lines.join('\n');
    }

    // A spiral galaxy seen at an angle: a bright core and two arms winding out of it.
    function galaxy(cols, rows, seed) {
      var rand = prng(seed);
      var lines = [];
      for (var r = 0; r < rows; r++) {
        var line = '';
        for (var c = 0; c < cols; c++) {
          var x = (c / cols - 0.5) * 2;
          var y = (r / rows - 0.5) * 2; // the cell grid is twice as wide as tall: that is the tilt
          var skew = x * 0.94 + y * 0.34, lift = y * 0.94 - x * 0.34; // tilt the disk a little
          var dist = Math.sqrt(skew * skew + lift * lift);
          if (dist > 1.02) { line += ' '; continue; }
          var angle = Math.atan2(lift, skew);
          var arm = Math.pow(0.5 + 0.5 * Math.cos(2 * angle - 4.6 * Math.log(dist + 0.05) + 0.6), 3.2);
          var core = Math.exp(-Math.pow(dist / 0.1, 2));
          var bulge = 0.4 * Math.exp(-dist * 7);
          var value = core + bulge + arm * 0.8 * Math.exp(-dist * 1.5) * (1 - Math.pow(dist, 6));
          value += (rand() - 0.5) * 0.1 * (1 - core);
          line += rand() < 0.004 ? '*' : value < 0.085 ? ' ' : tone(TONES, value);
        }
        lines.push(line);
      }
      return lines.join('\n');
    }

    // A black hole: an empty horizon, a bright photon ring, the lensed halo above
    // and below it, and a flattened accretion disk crossing in front. `phase` turns the disk.
    function hole(cols, rows, phase) {
      var R = rows * 0.15;      // horizon radius, in rows
      var FLAT = 6.5;           // how edge-on the disk is seen
      var lines = [];
      for (var r = 0; r < rows; r++) {
        var line = '';
        for (var c = 0; c < cols; c++) {
          var x = (c - (cols - 1) / 2) * 0.5; // a cell is about half as wide as it is tall
          var y = r - (rows - 1) / 2;
          var dist = Math.sqrt(x * x + y * y);
          var ring = Math.exp(-Math.pow((dist - R * 1.26) / (R * 0.14), 2));
          var halo = 0.6 * Math.exp(-Math.pow((dist - R * 1.85) / (R * 0.28), 2));
          var d = Math.sqrt(x * x + y * y * FLAT * FLAT);
          var disk = 0;
          if (d > R * 1.45 && d < R * 5.2) {
            var fall = 1 - (d - R * 1.45) / (R * 3.75);
            var turn = Math.atan2(y * FLAT, x);
            var arms = 0.58 + 0.3 * Math.sin(3 * turn + d * 0.85 - phase) + 0.12 * Math.sin(7 * turn - d * 1.7 + phase * 1.6);
            disk = Math.pow(fall, 0.75) * arms;
          }
          var behind = dist < R && y < R * 0.08; // the far side of the disk is hidden by the horizon
          var value = behind ? 0 : Math.max(disk, dist < R ? 0 : Math.max(ring, halo));
          line += value < 0.07 ? ' ' : tone(TONES, value);
        }
        lines.push(line);
      }
      return lines.join('\n');
    }

    // Hand-drawn pieces. Double quotes here so the art needs as few escapes as possible.
    var BURST = [
      "     .",
      "     |",
      "  \\  |  /",
      "   \\ | /",
      "----=*=----",
      "   / | \\",
      "  /  |  \\",
      "     |",
      "     '"
    ].join('\n');
    var SPARK = [" \\|/", "--*--", " /|\\"].join('\n');
    var CONSTELLATION = [
      "*",
      " '.              .*",
      "   '.          .'",
      "     *--------*",
      "      :        '.",
      "      :          '*",
      "      *"
    ].join('\n');

    var layer = document.createElement('div');
    layer.className = 'cosmos';
    layer.setAttribute('aria-hidden', 'true');

    // Stars: single characters placed by percentage, so they follow any page height.
    var rand = prng(20261115);
    var STARS = ['.', '.', '.', '+', '*', '\'', '+', '.'];
    var sky = '';
    for (var s = 0, count = small ? 60 : 130; s < count; s++) {
      sky += '<span class="star' + (rand() < 0.2 ? ' twinkle' : '') + '" style="left:' + (rand() * 100).toFixed(2) +
        '%;top:' + (rand() * 100).toFixed(2) + '%;animation-delay:-' + (rand() * 5).toFixed(1) + 's">' +
        STARS[Math.floor(rand() * STARS.length)] + '</span>';
    }
    layer.innerHTML = sky;

    function add(kind, text) {
      var el = document.createElement('div');
      el.className = 'ascii space space-' + kind;
      el.textContent = text;
      layer.appendChild(el);
      return el;
    }
    // Set pieces sit in the gap above a section, half tucked behind its neighbours.
    // `out` is the share of the piece that hangs outside the content column.
    var BIG = small ? [92, 30] : [138, 44];
    var MINI = small ? [70, 23] : [100, 32];
    var pieces = [
      { kind: 'hole', el: add('hole fine', hole(BIG[0], BIG[1], 0)), size: BIG, anchor: '#sobre-mi', side: 'right', out: 0.45, dy: -10 },
      { kind: 'burst', el: add('burst', BURST), anchor: '#sobre-mi', side: 'left', out: 1.6, dy: -20 },
      { kind: 'nebula', el: add('nebula fine', nebula(small ? 84 : 150, small ? 30 : 46, 7)), anchor: '#proyectos', side: 'right', out: 0.3, dy: 0 },
      { kind: 'constellation', el: add('constellation', CONSTELLATION), anchor: '#otros-proyectos', side: 'right', out: 0.55, dy: 0 },
      { kind: 'galaxy', el: add('galaxy fine', galaxy(small ? 80 : 132, small ? 30 : 48, 23)), anchor: '#servicios', side: 'left', out: 0.4, dy: 0 },
      { kind: 'spark', el: add('burst', SPARK), anchor: '#servicios', side: 'right', out: 0.5, dy: -20 },
      { kind: 'hole', el: add('hole fine', hole(MINI[0], MINI[1], 2)), size: MINI, shift: 2, anchor: '#contacto', side: 'left', out: 0.5, dy: 0 },
      { kind: 'burst', el: add('burst', BURST), anchor: '.site-footer', side: 'right', out: 0.3, dy: 0 }
    ];
    canvas.parentNode.insertBefore(layer, canvas.nextSibling);

    function layout() {
      var column = document.querySelector('main .container');
      if (!column) return;
      var cr = column.getBoundingClientRect();
      var left = cr.left + window.scrollX, right = left + cr.width;
      var vw = document.documentElement.clientWidth;
      pieces.forEach(function (p) {
        var anchor = document.querySelector(p.anchor);
        if (!anchor) return;
        var gap = parseFloat(window.getComputedStyle(anchor).marginTop) || 0;
        var w = p.el.offsetWidth, h = p.el.offsetHeight;
        // On narrow screens there is no margin to sit in: only the big clouds may run off the edge.
        var hang = /fine/.test(p.el.className) ? 0.25 : -0.08;
        var x = p.side === 'left'
          ? Math.max(left - w * p.out, -w * hang)
          : Math.min(right - w * (1 - p.out), vw - w * (1 - hang));
        var y = anchor.getBoundingClientRect().top + window.scrollY - gap / 2 - h / 2 + p.dy;
        p.el.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)';
      });
    }

    // The page height changes with the language, the fonts and the images: follow it.
    var layoutTimer;
    var relayout = function () {
      window.clearTimeout(layoutTimer);
      layoutTimer = window.setTimeout(layout, 120);
    };
    layout();
    fonts.all.then(layout);
    window.addEventListener('load', layout);
    window.addEventListener('resize', relayout);
    if ('ResizeObserver' in window) new ResizeObserver(relayout).observe(document.querySelector('main'));

    // The accretion disks turn, but only while a black hole is on screen.
    if (!('IntersectionObserver' in window)) return;
    var live = [];
    var timer = 0;
    var phase = 0;
    var tick = function () {
      phase += 0.28;
      live.forEach(function (p) {
        p.el.textContent = hole(p.size[0], p.size[1], phase + (p.shift || 0));
      });
    };
    var sync = function () {
      var on = live.length > 0 && !document.hidden && !reduce.matches;
      if (on && !timer) timer = window.setInterval(tick, 150);
      if (!on && timer) { window.clearInterval(timer); timer = 0; }
    };
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var p = pieces.filter(function (item) { return item.el === entry.target; })[0];
        var at = live.indexOf(p);
        if (entry.isIntersecting && at < 0) live.push(p);
        if (!entry.isIntersecting && at > -1) live.splice(at, 1);
      });
      sync();
    });
    pieces.forEach(function (p) {
      if (p.kind === 'hole') seen.observe(p.el);
    });
    document.addEventListener('visibilitychange', sync);
  })();

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

  // For whoever opens the console.
  if (window.console && console.log) {
    console.log(
      '%c' + [
        ' _____ ____',
        '| ____|  _ \\    Eduardo Duarte',
        '|  _| | | | |   AI Systems Engineer',
        '| |___| |_| |   ' + EMAIL,
        '|_____|____/'
      ].join('\n'),
      'font-family: ui-monospace, Consolas, Menlo, monospace; color: #5B86F0'
    );
  }
})();
