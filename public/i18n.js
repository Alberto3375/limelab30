/* ============================================================
   LIMELAB — SISTEMA DE TRADUCCIONES (ES / EN)
   Uso:
   - <span data-i18n="clave">texto</span>       → texto plano
   - <h1 data-i18n-html="clave">...</h1>         → permite HTML (<em>, <br>, <span>)
   - <input data-i18n-placeholder="clave">       → placeholder
============================================================ */

const translations = {
  /* ==================== ESPAÑOL ==================== */
  es: {
    "meta.title": "LIMELAB Technologies | Tecnología con propósito",

    /* NAV */
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.values": "Valores",
    "nav.about": "Nosotros",
    "nav.cta": 'Hablemos <i class="fa-solid fa-arrow-right"></i>',

    /* HERO */
    "hero.eyebrow": "Tecnología hecha con propósito",
    "hero.title": "Ideas que se convierten en <em>experiencias digitales.</em>",
    "hero.text": "En LIMELAB creamos software, sitios web, invitaciones digitales y damos mantenimiento a PCs Gamer. Todo lo tecnológico que necesitas, en un solo lugar.",
    "hero.cta1": "Explorar servicios",
    "hero.proof1": "Ideas<br>sin límites",
    "hero.proof2": "Áreas<br>de servicio",
    "hero.proof3": "Compromiso<br>personal",
    "hero.status": "Sistema listo",
    "hero.float1.title": "Web & Software",
    "hero.float1.sub": "soluciones a medida",
    "hero.float2.title": "PC Gamer",
    "hero.float2.sub": "mantenimiento pro",

    /* INTRO */
    "intro.label": "01 / Lo que hacemos",
    "intro.title": "No hacemos tecnología por hacerla.<br><span>La hacemos para resolver.</span>",
    "intro.p1": "LIMELAB nace de una idea sencilla: la tecnología puede ser poderosa sin dejar de ser humana. Diseñamos soluciones digitales pensando primero en las personas, sus problemas y sus objetivos.",
    "intro.p2": "Desde una invitación digital para un momento especial, hasta el desarrollo de un sitio web empresarial o el mantenimiento completo de tu PC Gamer; cada proyecto recibe la misma atención: entender, crear, probar y entregar algo que realmente tenga sentido.",

    /* SERVICES */
    "services.label": "02 / Servicios",
    "services.title": "Todo lo digital,<br><span>en un solo lugar.</span>",
    "services.sub": "Elige una categoría y descubre todo lo que podemos hacer por ti.",
    "services.tab1": "Web & Software",
    "services.tab2": "PC Gamer & Hardware",
    "services.tab3": "Invitaciones Digitales",

    /* WEB SERVICES */
    "web.s1.title": "Software a medida",
    "web.s1.desc": "Sistemas y herramientas construidas alrededor de la forma real en que trabaja tu negocio.",
    "web.s1.f1": "Aplicaciones empresariales",
    "web.s1.f2": "Dashboards",
    "web.s1.f3": "Integraciones",
    "web.s1.f4": "APIs y automatizaciones",
    "web.s1.cta": "Quiero una solución",

    "web.s2.title": "Web & e-commerce",
    "web.s2.desc": "Experiencias web modernas, rápidas, responsivas y diseñadas para convertir visitas en oportunidades.",
    "web.s2.f1": "Landing pages",
    "web.s2.f2": "Web corporativa",
    "web.s2.f3": "Catálogos",
    "web.s2.f4": "Tiendas online",
    "web.s2.cta": "Crear mi sitio",

    "web.s3.title": "Aplicaciones móviles",
    "web.s3.desc": "Apps para conectar servicios, clientes y procesos desde cualquier lugar.",
    "web.s3.f1": "Apps híbridas",
    "web.s3.f2": "Apps empresariales",
    "web.s3.f3": "Paneles administrativos",
    "web.s3.f4": "Integraciones",
    "web.s3.cta": "Crear una app",

    "web.s4.title": "IA & automatización",
    "web.s4.desc": "Menos tareas repetitivas. Más tiempo para lo que realmente importa.",
    "web.s4.f1": "IA aplicada",
    "web.s4.f2": "WhatsApp",
    "web.s4.f3": "Flujos automáticos",
    "web.s4.f4": "Procesamiento de datos",
    "web.s4.cta": "Automatizar",

    "web.s5.title": "Odoo & ERP",
    "web.s5.desc": "Digitalización de procesos comerciales y operativos con Odoo adaptado a cada empresa.",
    "web.s5.f1": "CRM y Ventas",
    "web.s5.f2": "Studio",
    "web.s5.f3": "Automatizaciones",
    "web.s5.f4": "Capacitación",
    "web.s5.cta": "Digitalizar mi negocio",

    "web.s6.title": "Consultoría tecnológica",
    "web.s6.desc": "Te ayudamos a elegir la mejor estrategia digital para tu negocio.",
    "web.s6.f1": "Arquitectura",
    "web.s6.f2": "Transformación digital",
    "web.s6.f3": "Optimización",
    "web.s6.f4": "Acompañamiento",
    "web.s6.cta": "Asesorarme",

    /* HARDWARE SERVICES */
    "hw.s1.title": "Cambio de RAM",
    "hw.s1.desc": "Ampliamos o reemplazamos la memoria RAM de tu PC Gamer para mejorar el rendimiento.",
    "hw.s1.f1": "Diagnóstico de compatibilidad",
    "hw.s1.f2": "Instalación profesional",
    "hw.s1.f3": "Pruebas de rendimiento",
    "hw.s1.cta": "Mejorar mi RAM",

    "hw.s2.title": "Fuentes de poder",
    "hw.s2.desc": "Reemplazamos fuentes dañadas por modelos certificados que soporten tu configuración.",
    "hw.s2.f1": "Cálculo de wattage",
    "hw.s2.f2": "Fuentes 80+ certificadas",
    "hw.s2.f3": "Instalación y cableado",
    "hw.s2.cta": "Cambiar fuente",

    "hw.s3.title": "Placas madre",
    "hw.s3.desc": "Sustituimos placas madre compatibles con tu procesador y RAM.",
    "hw.s3.f1": "Compatibilidad garantizada",
    "hw.s3.f2": "Actualización de BIOS",
    "hw.s3.f3": "Montaje completo",
    "hw.s3.cta": "Cambiar placa",

    "hw.s4.title": "SSD / NVMe",
    "hw.s4.desc": "Instalamos unidades SSD o NVMe para que tu sistema y juegos carguen en segundos.",
    "hw.s4.f1": "Migración de sistema",
    "hw.s4.f2": "Optimización de arranque",
    "hw.s4.f3": "Clonado de datos",
    "hw.s4.cta": "Instalar SSD",

    "hw.s5.title": "Limpieza y mantenimiento",
    "hw.s5.desc": "Limpieza profunda, cambio de pasta térmica y revisión de ventilación.",
    "hw.s5.f1": "Limpieza interna",
    "hw.s5.f2": "Pasta térmica",
    "hw.s5.f3": "Flujo de aire",
    "hw.s5.cta": "Mantenimiento",

    "hw.s6.title": "Optimización general",
    "hw.s6.desc": "Ajustamos software, drivers y Windows para maximizar el rendimiento.",
    "hw.s6.f1": "Actualización de drivers",
    "hw.s6.f2": "Optimización Windows",
    "hw.s6.f3": "Configuración",
    "hw.s6.cta": "Optimizar PC",

    /* INVITACIONES */
    "inv.s1.title": "Invitaciones de Boda",
    "inv.s1.desc": "Invitaciones digitales elegantes con animaciones, música, galería y confirmación por WhatsApp.",
    "inv.s1.f1": "Diseño personalizado",
    "inv.s1.f2": "Galería y música",
    "inv.s1.f3": "RSVP WhatsApp",
    "inv.s1.cta": "Mi boda",

    "inv.s2.title": "XV Años",
    "inv.s2.desc": "Diseños modernos y coloridos con cuenta regresiva, mapas y sección de regalos.",
    "inv.s2.f1": "Cuenta regresiva",
    "inv.s2.f2": "Mapa interactivo",
    "inv.s2.f3": "Sección de regalos",
    "inv.s2.cta": "Mis XV",

    "inv.s3.title": "Cumpleaños y eventos",
    "inv.s3.desc": "Invitaciones para cumpleaños, baby showers y eventos especiales.",
    "inv.s3.f1": "Diseño temático",
    "inv.s3.f2": "Formulario RSVP",
    "inv.s3.f3": "Compartir por link",
    "inv.s3.cta": "Mi evento",

    "inv.s4.title": "Música y animaciones",
    "inv.s4.desc": "Música de fondo, animaciones suaves y transiciones elegantes.",
    "inv.s4.f1": "Música personalizada",
    "inv.s4.f2": "Animaciones",
    "inv.s4.f3": "Efectos visuales",
    "inv.s4.cta": "Personalizar",

    "inv.s5.title": "Mapas interactivos",
    "inv.s5.desc": "Mapas con la ubicación exacta del evento y botones para Google Maps o Waze.",
    "inv.s5.f1": "Google Maps",
    "inv.s5.f2": "Botón Waze",
    "inv.s5.f3": "Indicaciones claras",
    "inv.s5.cta": "Con mapa",

    "inv.s6.title": "Diseño 100% personalizado",
    "inv.s6.desc": "Cada invitación se diseña desde cero según los colores y estilo del evento.",
    "inv.s6.f1": "Colores a elección",
    "inv.s6.f2": "Tipografías únicas",
    "inv.s6.f3": "Ilustraciones",
    "inv.s6.cta": "Diseñar",

    /* PROCESS */
    "process.label": "03 / Nuestra forma de trabajar",
    "process.title": "De una conversación<br><span>a algo real.</span>",
    "process.sub": "No empezamos programando. Empezamos escuchando.",
    "process.p1.title": "Escuchamos",
    "process.p1.desc": "Entendemos tu idea, problema y objetivo.",
    "process.p2.title": "Diseñamos",
    "process.p2.desc": "Convertimos necesidades en una solución clara.",
    "process.p3.title": "Construimos",
    "process.p3.desc": "Desarrollamos, integramos y probamos.",
    "process.p4.title": "Lanzamos",
    "process.p4.desc": "Publicamos y acompañamos después de entregar.",

    /* VALUES */
    "values.label": "04 / Nuestros valores",
    "values.title": "Lo que hacemos importa.<br><span>Cómo lo hacemos, también.</span>",
    "values.sub": "Nuestros valores están presentes en cada línea de código, cada diseño y cada conversación.",
    "values.v1.title": "Innovación constante",
    "values.v1.desc": "Buscamos nuevas formas de resolver problemas y crear experiencias mejores.",
    "values.v2.title": "Compromiso",
    "values.v2.desc": "Nos involucramos de verdad en cada proyecto y en cada resultado.",
    "values.v3.title": "Calidad con propósito",
    "values.v3.desc": "No buscamos hacer más. Buscamos hacer algo que realmente sirva.",
    "values.v4.title": "Empatía & cercanía",
    "values.v4.desc": "La tecnología funciona mejor cuando primero entendemos a las personas.",
    "values.v5.title": "Responsabilidad",
    "values.v5.desc": "Construimos pensando en el impacto que nuestras decisiones generan.",
    "values.quote": "La tecnología debe adaptarse a las personas, no las personas a la tecnología.",
    "values.quote.author": "— Filosofía LIMELAB",

    /* ABOUT */
    "about.label": "05 / Nuestra historia",
    "about.title": "Una idea que comenzó<br><span>con ganas de crear.</span>",
    "about.lead": "LIMELAB representa la idea de construir tecnología con una perspectiva cercana, creativa y humana.",
    "about.p1": "Comenzamos creando proyectos digitales para convertir necesidades concretas en herramientas funcionales. Con cada proyecto aprendimos algo nuevo: escuchar mejor, diseñar mejor y construir soluciones que realmente puedan utilizarse en el mundo real.",
    "about.p2": "Hoy LIMELAB reúne desarrollo de software, web, aplicaciones, mantenimiento de PCs Gamer, automatización, IA, Odoo e incluso experiencias digitales para momentos especiales como bodas y celebraciones.",
    "about.t1.title": "El comienzo",
    "about.t1.desc": "Primeros proyectos y primeras ideas que dieron forma a LIMELAB.",
    "about.t2.title": "Primeros clientes",
    "about.t2.desc": "Proyectos vendidos y experiencias que ayudaron a definir nuestro camino.",
    "about.t3.title": "Consolidación",
    "about.t3.desc": "Ampliamos nuestra visión hacia software, web y soluciones digitales.",
    "about.t4.title": "Nueva etapa",
    "about.t4.desc": "Hardware, PC Gamer, invitaciones digitales y experiencias web.",
    "about.founder.label": "Fundador",
    "about.founder.role": "Desarrollador & arquitecto de soluciones digitales",
    "about.founder.quote": '"Convertir una idea en algo que funciona es solo el comienzo."',

    /* MISSION / VISION */
    "mission.label": "06 / Nuestra misión",
    "mission.title": "Crear tecnología que tenga un <em>impacto real.</em>",
    "mission.desc": "Desarrollar soluciones digitales útiles, accesibles y significativas que ayuden a personas y empresas a transformar sus ideas, procesos y oportunidades.",
    "vision.label": "Nuestra visión",
    "vision.title": "Ser un referente de tecnología <em>cercana e innovadora.</em>",
    "vision.desc": "Construir una empresa tecnológica reconocida por la calidad de sus soluciones, la confianza con sus clientes y su capacidad de convertir problemas complejos en experiencias simples.",

    /* PORTFOLIO */
    "portfolio.label": "07 / Portafolio",
    "portfolio.title": "Ideas que ya<br><span>se hicieron realidad.</span>",
    "portfolio.sub": "Una selección de proyectos, mantenimientos e invitaciones digitales.",
    "portfolio.filter.all": "Todo",
    "portfolio.filter.web": "Web & Software",
    "portfolio.filter.inv": "Invitaciones",
    "portfolio.filter.hw": "PC Gamer",
    "portfolio.view": "Ver proyecto",
    "portfolio.video": "Video",

    "portfolio.p1.tag": "Sistema web",
    "portfolio.p1.desc": "Gestión de productos, usuarios e inventario.",
    "portfolio.p2.tag": "E-commerce",
    "portfolio.p2.desc": "Tienda online para productos de acero inoxidable.",
    "portfolio.p3.tag": "Invitación digital",
    "portfolio.p3.title": "Boda — Ana & Luis",
    "portfolio.p3.desc": "Invitación animada con música, galería y RSVP por WhatsApp.",
    "portfolio.p4.title": "XV Años — Sofía",
    "portfolio.p4.desc": "Diseño moderno con cuenta regresiva y mapa interactivo.",
    "portfolio.p4.t1": "XV Años",
    "portfolio.p4.t2": "Animaciones",
    "portfolio.p4.t3": "Mapa",
    "portfolio.p5.tag": "PC Gamer",
    "portfolio.p5.title": "Cambio de RAM y SSD",
    "portfolio.p5.desc": "Actualización completa con 32GB RAM y SSD NVMe 1TB.",
    "portfolio.p5.t3": "Optimización",
    "portfolio.p6.title": "Mantenimiento Completo",
    "portfolio.p6.desc": "Limpieza profunda, cambio de pasta térmica y optimización.",
    "portfolio.p6.t1": "Limpieza",
    "portfolio.p6.t2": "Pasta térmica",
    "portfolio.p6.t3": "Temperaturas",
    "portfolio.p7.tag": "Landing page",
    "portfolio.p7.title": "Startup Tecnológica",
    "portfolio.p7.desc": "Landing moderna con animaciones y formulario de contacto.",
    "portfolio.p8.title": "Cambio de Fuente de Poder",
    "portfolio.p8.desc": "Instalación de fuente certificada 80+ Gold de 750W.",
    "portfolio.p8.t2": "Cableado",

    /* PROMISE */
    "promise.label": "08 / Nuestra promesa",
    "promise.title": 'Tu proyecto no es<br><span>"uno más".</span>',
    "promise.desc": "Cada proyecto representa una oportunidad de crear algo extraordinario. Combinamos criterio técnico, creatividad y atención personal para que la solución no solo se vea bien, sino que funcione y tenga sentido.",
    "promise.cta": "Cuéntame tu idea",

    /* CONTACT */
    "contact.label": "09 / Hablemos",
    "contact.title": "¿Qué vamos<br><span>a crear?</span>",
    "contact.sub": "Cuéntame qué tienes en mente. Una idea, un problema, un proyecto o simplemente una pregunta.",
    "contact.whatsapp.cta": "Escríbeme directamente →",
    "contact.email.cta": "Respuesta en 24 horas",
    "contact.location.label": "Ubicación",
    "contact.location.cta": "También trabajamos remotamente",
    "contact.form.name": "Nombre completo *",
    "contact.form.name.ph": "¿Cómo te llamas?",
    "contact.form.email": "Email *",
    "contact.form.email.ph": "tu@email.com",
    "contact.form.service": "¿Qué necesitas?",
    "contact.form.s0": "No estoy seguro",
    "contact.form.s1": "Sitio web / Software",
    "contact.form.s2": "Aplicación móvil",
    "contact.form.s3": "Mantenimiento PC Gamer",
    "contact.form.s4": "Cambio de hardware (RAM, fuente, etc.)",
    "contact.form.s5": "Invitación digital",
    "contact.form.s6": "IA y automatización",
    "contact.form.s7": "Odoo / ERP",
    "contact.form.s8": "Otro",
    "contact.form.message": "Cuéntame sobre tu proyecto *",
    "contact.form.message.ph": "Cuéntame brevemente qué quieres crear...",
    "contact.form.submit": "Enviar por WhatsApp",
    "contact.form.note": "Al enviar, se abrirá WhatsApp con tu mensaje listo para enviarlo.",

    /* FOOTER */
    "footer.tagline": "Innovamos con propósito, creando soluciones digitales que convierten ideas en realidades.",
    "footer.explore": "Explora",
    "footer.services": "Servicios",
    "footer.s1": "Web & Software",
    "footer.s2": "PC Gamer",
    "footer.s3": "Invitaciones",
    "footer.s4": "IA & Automatización",
    "footer.s5": "Odoo",
    "footer.contact": "Contacto",
    "footer.copy": "© 2026 LIMELAB Technologies. Hecho con ❤ en México.",
    "footer.tag": "Innovación hecha con propósito.",
    "float.cta": "Hablemos",
  },

  /* ==================== ENGLISH ==================== */
  en: {
    "meta.title": "LIMELAB Technologies | Technology with purpose",

    /* NAV */
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.values": "Values",
    "nav.about": "About",
    "nav.cta": 'Let\'s talk <i class="fa-solid fa-arrow-right"></i>',

    /* HERO */
    "hero.eyebrow": "Technology made with purpose",
    "hero.title": "Ideas that become <em>digital experiences.</em>",
    "hero.text": "At LIMELAB we build software, websites, digital invitations and provide PC Gamer maintenance. Everything tech you need, in one place.",
    "hero.cta1": "Explore services",
    "hero.proof1": "Ideas<br>without limits",
    "hero.proof2": "Service<br>areas",
    "hero.proof3": "Personal<br>commitment",
    "hero.status": "System ready",
    "hero.float1.title": "Web & Software",
    "hero.float1.sub": "custom solutions",
    "hero.float2.title": "PC Gamer",
    "hero.float2.sub": "pro maintenance",

    /* INTRO */
    "intro.label": "01 / What we do",
    "intro.title": "We don't build tech for the sake of it.<br><span>We build it to solve.</span>",
    "intro.p1": "LIMELAB was born from a simple idea: technology can be powerful without ceasing to be human. We design digital solutions thinking first about people, their problems and their goals.",
    "intro.p2": "From a digital invitation for a special moment, to the development of a business website or a full PC Gamer maintenance; every project receives the same attention: understand, create, test and deliver something that truly makes sense.",

    /* SERVICES */
    "services.label": "02 / Services",
    "services.title": "Everything digital,<br><span>in one place.</span>",
    "services.sub": "Pick a category and discover everything we can do for you.",
    "services.tab1": "Web & Software",
    "services.tab2": "PC Gamer & Hardware",
    "services.tab3": "Digital Invitations",

    /* WEB SERVICES */
    "web.s1.title": "Custom software",
    "web.s1.desc": "Systems and tools built around the real way your business works.",
    "web.s1.f1": "Business applications",
    "web.s1.f2": "Dashboards",
    "web.s1.f3": "Integrations",
    "web.s1.f4": "APIs & automations",
    "web.s1.cta": "I want a solution",

    "web.s2.title": "Web & e-commerce",
    "web.s2.desc": "Modern, fast, responsive web experiences designed to turn visits into opportunities.",
    "web.s2.f1": "Landing pages",
    "web.s2.f2": "Corporate websites",
    "web.s2.f3": "Catalogs",
    "web.s2.f4": "Online stores",
    "web.s2.cta": "Create my site",

    "web.s3.title": "Mobile apps",
    "web.s3.desc": "Apps to connect services, customers and processes from anywhere.",
    "web.s3.f1": "Hybrid apps",
    "web.s3.f2": "Business apps",
    "web.s3.f3": "Admin panels",
    "web.s3.f4": "Integrations",
    "web.s3.cta": "Create an app",

    "web.s4.title": "AI & automation",
    "web.s4.desc": "Fewer repetitive tasks. More time for what really matters.",
    "web.s4.f1": "Applied AI",
    "web.s4.f2": "WhatsApp",
    "web.s4.f3": "Automatic flows",
    "web.s4.f4": "Data processing",
    "web.s4.cta": "Automate",

    "web.s5.title": "Odoo & ERP",
    "web.s5.desc": "Digitization of commercial and operational processes with Odoo adapted to each company.",
    "web.s5.f1": "CRM & Sales",
    "web.s5.f2": "Studio",
    "web.s5.f3": "Automations",
    "web.s5.f4": "Training",
    "web.s5.cta": "Digitize my business",

    "web.s6.title": "Tech consulting",
    "web.s6.desc": "We help you choose the best digital strategy for your business.",
    "web.s6.f1": "Architecture",
    "web.s6.f2": "Digital transformation",
    "web.s6.f3": "Optimization",
    "web.s6.f4": "Support",
    "web.s6.cta": "Advise me",

    /* HARDWARE */
    "hw.s1.title": "RAM upgrade",
    "hw.s1.desc": "We expand or replace your PC Gamer's RAM to improve performance.",
    "hw.s1.f1": "Compatibility diagnosis",
    "hw.s1.f2": "Professional installation",
    "hw.s1.f3": "Performance tests",
    "hw.s1.cta": "Upgrade my RAM",

    "hw.s2.title": "Power supplies",
    "hw.s2.desc": "We replace damaged PSUs with certified models that support your build.",
    "hw.s2.f1": "Wattage calculation",
    "hw.s2.f2": "80+ certified PSUs",
    "hw.s2.f3": "Installation & cabling",
    "hw.s2.cta": "Change PSU",

    "hw.s3.title": "Motherboards",
    "hw.s3.desc": "We replace motherboards compatible with your CPU and RAM.",
    "hw.s3.f1": "Guaranteed compatibility",
    "hw.s3.f2": "BIOS update",
    "hw.s3.f3": "Full assembly",
    "hw.s3.cta": "Change motherboard",

    "hw.s4.title": "SSD / NVMe",
    "hw.s4.desc": "We install SSD or NVMe drives so your system and games load in seconds.",
    "hw.s4.f1": "System migration",
    "hw.s4.f2": "Boot optimization",
    "hw.s4.f3": "Data cloning",
    "hw.s4.cta": "Install SSD",

    "hw.s5.title": "Cleaning & maintenance",
    "hw.s5.desc": "Deep cleaning, thermal paste replacement and ventilation check.",
    "hw.s5.f1": "Internal cleaning",
    "hw.s5.f2": "Thermal paste",
    "hw.s5.f3": "Airflow check",
    "hw.s5.cta": "Maintenance",

    "hw.s6.title": "General optimization",
    "hw.s6.desc": "We tune software, drivers and Windows to maximize performance.",
    "hw.s6.f1": "Driver updates",
    "hw.s6.f2": "Windows optimization",
    "hw.s6.f3": "Configuration",
    "hw.s6.cta": "Optimize PC",

    /* INVITATIONS */
    "inv.s1.title": "Wedding invitations",
    "inv.s1.desc": "Elegant digital invitations with animations, music, gallery and WhatsApp confirmation.",
    "inv.s1.f1": "Custom design",
    "inv.s1.f2": "Gallery & music",
    "inv.s1.f3": "WhatsApp RSVP",
    "inv.s1.cta": "My wedding",

    "inv.s2.title": "Quinceañera (XV)",
    "inv.s2.desc": "Modern, colorful designs with countdown, maps and gift section.",
    "inv.s2.f1": "Countdown",
    "inv.s2.f2": "Interactive map",
    "inv.s2.f3": "Gift section",
    "inv.s2.cta": "My XV",

    "inv.s3.title": "Birthdays & events",
    "inv.s3.desc": "Invitations for birthdays, baby showers and special events.",
    "inv.s3.f1": "Themed design",
    "inv.s3.f2": "RSVP form",
    "inv.s3.f3": "Share by link",
    "inv.s3.cta": "My event",

    "inv.s4.title": "Music & animations",
    "inv.s4.desc": "Background music, smooth animations and elegant transitions.",
    "inv.s4.f1": "Custom music",
    "inv.s4.f2": "Animations",
    "inv.s4.f3": "Visual effects",
    "inv.s4.cta": "Customize",

    "inv.s5.title": "Interactive maps",
    "inv.s5.desc": "Maps with exact event location and buttons to open Google Maps or Waze.",
    "inv.s5.f1": "Google Maps",
    "inv.s5.f2": "Waze button",
    "inv.s5.f3": "Clear directions",
    "inv.s5.cta": "With map",

    "inv.s6.title": "100% custom design",
    "inv.s6.desc": "Each invitation is designed from scratch based on the event's colors and style.",
    "inv.s6.f1": "Colors of choice",
    "inv.s6.f2": "Unique fonts",
    "inv.s6.f3": "Illustrations",
    "inv.s6.cta": "Design",

    /* PROCESS */
    "process.label": "03 / How we work",
    "process.title": "From a conversation<br><span>to something real.</span>",
    "process.sub": "We don't start coding. We start listening.",
    "process.p1.title": "We listen",
    "process.p1.desc": "We understand your idea, problem and goal.",
    "process.p2.title": "We design",
    "process.p2.desc": "We turn needs into a clear solution.",
    "process.p3.title": "We build",
    "process.p3.desc": "We develop, integrate and test.",
    "process.p4.title": "We launch",
    "process.p4.desc": "We publish and support after delivery.",

    /* VALUES */
    "values.label": "04 / Our values",
    "values.title": "What we do matters.<br><span>How we do it, too.</span>",
    "values.sub": "Our values are present in every line of code, every design and every conversation.",
    "values.v1.title": "Constant innovation",
    "values.v1.desc": "We look for new ways to solve problems and create better experiences.",
    "values.v2.title": "Commitment",
    "values.v2.desc": "We truly get involved in every project and every result.",
    "values.v3.title": "Quality with purpose",
    "values.v3.desc": "We don't aim to do more. We aim to do what truly works.",
    "values.v4.title": "Empathy & closeness",
    "values.v4.desc": "Technology works best when we first understand people.",
    "values.v5.title": "Responsibility",
    "values.v5.desc": "We build thinking about the impact our decisions generate.",
    "values.quote": "Technology should adapt to people, not people to technology.",
    "values.quote.author": "— LIMELAB Philosophy",

    /* ABOUT */
    "about.label": "05 / Our story",
    "about.title": "An idea that started<br><span>with the urge to create.</span>",
    "about.lead": "LIMELAB represents the idea of building technology with a close, creative and human perspective.",
    "about.p1": "We started creating digital projects to turn concrete needs into functional tools. With every project we learned something new: listen better, design better and build solutions that can really be used in the real world.",
    "about.p2": "Today LIMELAB brings together software development, web, apps, PC Gamer maintenance, automation, AI, Odoo and even digital experiences for special moments like weddings and celebrations.",
    "about.t1.title": "The beginning",
    "about.t1.desc": "First projects and first ideas that shaped LIMELAB.",
    "about.t2.title": "First clients",
    "about.t2.desc": "Sold projects and experiences that helped define our path.",
    "about.t3.title": "Consolidation",
    "about.t3.desc": "We expanded our vision toward software, web and digital solutions.",
    "about.t4.title": "New stage",
    "about.t4.desc": "Hardware, PC Gamer, digital invitations and web experiences.",
    "about.founder.label": "Founder",
    "about.founder.role": "Developer & digital solutions architect",
    "about.founder.quote": '"Turning an idea into something that works is just the beginning."',

    /* MISSION / VISION */
    "mission.label": "06 / Our mission",
    "mission.title": "Create technology that has a <em>real impact.</em>",
    "mission.desc": "Develop useful, accessible and meaningful digital solutions that help people and businesses transform their ideas, processes and opportunities.",
    "vision.label": "Our vision",
    "vision.title": "Be a reference of technology that is <em>close and innovative.</em>",
    "vision.desc": "Build a tech company recognized for the quality of its solutions, the trust of its clients and its ability to turn complex problems into simple experiences.",

    /* PORTFOLIO */
    "portfolio.label": "07 / Portfolio",
    "portfolio.title": "Ideas that already<br><span>became reality.</span>",
    "portfolio.sub": "A selection of projects, maintenance work and digital invitations.",
    "portfolio.filter.all": "All",
    "portfolio.filter.web": "Web & Software",
    "portfolio.filter.inv": "Invitations",
    "portfolio.filter.hw": "PC Gamer",
    "portfolio.view": "View project",
    "portfolio.video": "Video",

    "portfolio.p1.tag": "Web system",
    "portfolio.p1.desc": "Product, user and inventory management.",
    "portfolio.p2.tag": "E-commerce",
    "portfolio.p2.desc": "Online store for stainless steel products.",
    "portfolio.p3.tag": "Digital invitation",
    "portfolio.p3.title": "Wedding — Ana & Luis",
    "portfolio.p3.desc": "Animated invitation with music, gallery and WhatsApp RSVP.",
    "portfolio.p4.title": "XV Years — Sofía",
    "portfolio.p4.desc": "Modern design with countdown and interactive map.",
    "portfolio.p4.t1": "XV Years",
    "portfolio.p4.t2": "Animations",
    "portfolio.p4.t3": "Map",
    "portfolio.p5.tag": "PC Gamer",
    "portfolio.p5.title": "RAM & SSD upgrade",
    "portfolio.p5.desc": "Full upgrade with 32GB RAM and 1TB NVMe SSD.",
    "portfolio.p5.t3": "Optimization",
    "portfolio.p6.title": "Full maintenance",
    "portfolio.p6.desc": "Deep cleaning, thermal paste replacement and optimization.",
    "portfolio.p6.t1": "Cleaning",
    "portfolio.p6.t2": "Thermal paste",
    "portfolio.p6.t3": "Temperatures",
    "portfolio.p7.tag": "Landing page",
    "portfolio.p7.title": "Tech Startup",
    "portfolio.p7.desc": "Modern landing with animations and contact form.",
    "portfolio.p8.title": "PSU replacement",
    "portfolio.p8.desc": "Installation of a certified 80+ Gold 750W power supply.",
    "portfolio.p8.t2": "Cabling",

    /* PROMISE */
    "promise.label": "08 / Our promise",
    "promise.title": 'Your project is not<br><span>"just another one".</span>',
    "promise.desc": "Every project is an opportunity to create something extraordinary. We combine technical judgment, creativity and personal attention so the solution not only looks good, but works and makes sense.",
    "promise.cta": "Tell me your idea",

    /* CONTACT */
    "contact.label": "09 / Let's talk",
    "contact.title": "What are we<br><span>going to create?</span>",
    "contact.sub": "Tell me what you have in mind. An idea, a problem, a project or just a question.",
    "contact.whatsapp.cta": "Message me directly →",
    "contact.email.cta": "Reply within 24 hours",
    "contact.location.label": "Location",
    "contact.location.cta": "We also work remotely",
    "contact.form.name": "Full name *",
    "contact.form.name.ph": "What's your name?",
    "contact.form.email": "Email *",
    "contact.form.email.ph": "you@email.com",
    "contact.form.service": "What do you need?",
    "contact.form.s0": "Not sure yet",
    "contact.form.s1": "Website / Software",
    "contact.form.s2": "Mobile app",
    "contact.form.s3": "PC Gamer maintenance",
    "contact.form.s4": "Hardware change (RAM, PSU, etc.)",
    "contact.form.s5": "Digital invitation",
    "contact.form.s6": "AI & automation",
    "contact.form.s7": "Odoo / ERP",
    "contact.form.s8": "Other",
    "contact.form.message": "Tell me about your project *",
    "contact.form.message.ph": "Briefly tell me what you want to build...",
    "contact.form.submit": "Send via WhatsApp",
    "contact.form.note": "When submitted, WhatsApp will open with your message ready to send.",

    /* FOOTER */
    "footer.tagline": "We innovate with purpose, creating digital solutions that turn ideas into realities.",
    "footer.explore": "Explore",
    "footer.services": "Services",
    "footer.s1": "Web & Software",
    "footer.s2": "PC Gamer",
    "footer.s3": "Invitations",
    "footer.s4": "AI & Automation",
    "footer.s5": "Odoo",
    "footer.contact": "Contact",
    "footer.copy": "© 2026 LIMELAB Technologies. Made with ❤ in Mexico.",
    "footer.tag": "Innovation made with purpose.",
    "float.cta": "Let's talk",
  }
};

/* ============================================================
   MOTOR DE TRADUCCIÓN
============================================================ */
function applyTranslations(lang) {
  const dict = translations[lang];
  if (!dict) return;

  /* textContent */
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* innerHTML (permite <em>, <br>, <span>) */
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  /* placeholder */
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  /* title */
  const titleEl = document.querySelector("[data-i18n='meta.title']");
  if (titleEl) document.title = titleEl.textContent;

  /* <html lang=""> */
  document.documentElement.lang = lang;

  /* localStorage */
  try {
    localStorage.setItem("limelab-lang", lang);
  } catch (e) {}
}

/* ============================================================
   CAMBIO DE IDIOMA
============================================================ */
function initLangSwitch() {
  const switchEl = document.getElementById("langSwitch");
  if (!switchEl) return;

  const buttons = switchEl.querySelectorAll(".lang-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      buttons.forEach((b) => b.classList.toggle("active", b === btn));
      applyTranslations(lang);
    });
  });

  /* Idioma guardado o por defecto */
  let savedLang = "es";
  try {
    savedLang = localStorage.getItem("limelab-lang") || "es";
  } catch (e) {}
  if (!translations[savedLang]) savedLang = "es";

  buttons.forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === savedLang)
  );
  applyTranslations(savedLang);
}

/* Ejecutar al cargar el DOM */
document.addEventListener("DOMContentLoaded", initLangSwitch);
