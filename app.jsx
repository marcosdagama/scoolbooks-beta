const { useState, useEffect, useRef, useMemo } = React;

/* ============ ICONS ============ */
const I = {
  arrow: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  camera: (p) => <svg viewBox="0 0 24 24" className="ico ico-lg" {...p}><path d="M3 7h3l2-3h8l2 3h3v12H3z"/><circle cx="12" cy="13" r="3.6"/></svg>,
  sparkle: (p) => <svg viewBox="0 0 24 24" className="ico ico-lg" {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6.5 6.5l3 3M14.5 14.5l3 3M17.5 6.5l-3 3M9.5 14.5l-3 3"/></svg>,
  layers: (p) => <svg viewBox="0 0 24 24" className="ico ico-lg" {...p}><path d="M12 3 3 8l9 5 9-5-9-5zM3 13l9 5 9-5M3 18l9 5 9-5"/></svg>,
  truck: (p) => <svg viewBox="0 0 24 24" className="ico ico-lg" {...p}><path d="M3 16V6h11v10M14 10h5l2 3v3h-2"/><circle cx="7.5" cy="17.5" r="2"/><circle cx="17.5" cy="17.5" r="2"/></svg>,
  hand: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M8 13V6a2 2 0 1 1 4 0v7M12 13V4a2 2 0 1 1 4 0v9M16 13V7a2 2 0 1 1 4 0v9a5 5 0 0 1-5 5h-2a6 6 0 0 1-6-6v-4l-1.5-2.5a1.6 1.6 0 0 1 2.7-1.7L9 11"/></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>,
  heart: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>,
  globe: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>,
  bolt: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M13 3 4 14h6l-1 7 9-11h-6z"/></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  phone: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M5 4h4l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>,
  pin: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  check: (p) => <svg viewBox="0 0 20 20" width="18" height="18" {...p}><circle cx="10" cy="10" r="10" fill="var(--grass)"/><path d="m6 10 3 3 5-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  menu: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  close: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M6 6l12 12M18 6 6 18"/></svg>,
  ig: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" className="dot"/></svg>,
  wa: (p) => <svg viewBox="0 0 24 24" className="ico" {...p}><path d="M20 12a8 8 0 1 1-3.4-6.6L21 4l-1.4 4A8 8 0 0 1 20 12z"/><path d="M8 9c0 4 3 7 7 7l1.5-1.5-2-1-1 1c-1.5-.5-2.5-1.5-3-3l1-1-1-2L9 8z"/></svg>,
};

/* ============ TRANSLATIONS ============ */
const COPY = {
  en: {
    nav: { services: "Services", gallery: "Gallery", process: "Process", why: "Why ScoolBooks", packages: "Pricing", faq: "FAQ", contact: "Contact", cta: "Get a quote" },
    hero: {
      eyebrow: "Yearbooks for schools that care",
      title1: "Every smile,",
      title2: "every story,",
      title3wave: "bound to last.",
      sub: "ScoolBooks crafts photographic yearbooks that turn a school year into a keepsake — for the students who lived it, and the ones who'll inherit it.",
      cta1: "Get a free quote",
      cta2: "See the gallery",
      m1: "10+ years serving schools across Spain",
      m2: "Bilingual EN / ES production",
      m3: "Delivered before graduation, guaranteed",
    },
    marquee: ["Portraits", "Class spreads", "Sports days", "Field trips", "Senior quotes", "Art &amp; theater", "Graduation", "Community"],
    manifesto: {
      label: "Why we exist",
      body1: "A yearbook isn't a brochure.",
      body2: "It's a ",
      bodyHl: "time capsule",
      body3: " — proof that ",
      bodyEm: "this year really happened, ",
      body4: "that these were our friends, our teachers, our small daily heroics. We bind it so well it outlives the locker, the laptop, and the algorithm.",
      stats: [
        { n: "10+", l: "Years specialised in school imagery" },
        { n: "Spain", l: "Schools we partner with nationwide" },
        { n: "100%", l: "GDPR-compliant image workflow" },
        { n: "On time", l: "Every yearbook, every year" },
      ],
    },
    gallery: {
      label: "01 · What's inside",
      title: "Pages that feel like home.",
      sub: "Every ScoolBook is built around your students — their faces, their teams, their inside jokes, their first stage.",
      cards: [
        { t: "Student portraits", c: "Studio-quality lighting in your own gym", tag: "Portraits" },
        { t: "Class composites", c: "Every grade, every name, perfectly aligned", tag: "Class" },
        { t: "Sports & teams", c: "Action shots and team rosters that pop", tag: "Sports" },
        { t: "Stage & arts", c: "Theater, choir, music, dance — captured", tag: "Stage" },
        { t: "Field trips & life", c: "The candid stuff that makes a year a year", tag: "Trips" },
        { t: "Graduation", c: "The big day, frame by frame", tag: "Graduation" },
      ],
      featuredBig: "10× the memories",
      featuredSmall: "Compared to a phone camera roll — sorted, designed, printed, and bound forever.",
    },
    process: {
      label: "02 · How it works",
      title: "Four steps, zero stress.",
      sub: "We bring the studio to you. You bring the kids and the chaos. We do the rest.",
      steps: [
        { num: "i.", t: "We come to your school", d: "Our photo crew sets up on-site for portraits, classes, sports and candids — no field trip required." },
        { num: "ii.", t: "Your team picks the story", d: "Pick the cover, the spreads, the senior quotes. We design around your school's character." },
        { num: "iii.", t: "We design & print", d: "Professional layout, color-managed printing, and bookbinding that will survive a backpack." },
        { num: "iv.", t: "Delivered, on time", d: "Boxed, labeled by class, and at your door before the final assembly. Guaranteed." },
      ],
    },
    why: {
      label: "03 · Why ScoolBooks",
      title: "Built for school administrators, loved by students.",
      sub: "Yearbook season is hard. We make it the easiest line item on your calendar.",
      cards: [
        { t: "A keepsake students keep.", d: "Premium paper, lay-flat binding, and design that doesn't age like a 2014 PowerPoint.", icon: "heart", color: "hero-card" },
        { t: "Zero admin overhead.", d: "One contact, one timeline, one invoice. We handle parents, photos, and proofs.", icon: "shield", color: "b" },
        { t: "Truly bilingual.", d: "Spanish / English, French, Catalan — page-by-page if you need it.", icon: "globe", color: "c" },
        { t: "On-time, every time.", d: "Our delivery promise is built into the contract. No surprises in May.", icon: "bolt", color: "d" },
        { t: "A human you can call.", d: "A dedicated producer for your school — not a chatbot, not a queue.", icon: "hand", color: "e" },
      ],
    },
    stories: {
      label: "04 · Stories",
      title: "What school leaders say.",
      sub: "We're proudest of the quotes we didn't ask for.",
      items: [
        { q: "The first time we got a yearbook back from ScoolBooks, three teachers cried. Parents now order extra copies for grandparents.", n: "Marta Reyes", r: "Principal · Colegio San Ramón" },
        { q: "We used to spend two weeks chasing photos and proofs. With ScoolBooks I sign off in one meeting and the books arrive boxed by class.", n: "David Okonkwo", r: "Head of Operations · Hillcrest Academy" },
        { q: "Their bilingual layout is genuinely good — not just translated. Our community feels seen.", n: "Lucía Fernández", r: "Director · Escuela Bilingüe del Valle" },
        { q: "The senior class still talks about the cover. That's a first in fifteen years of yearbooks.", n: "Karen Ofori", r: "Dean of Students · Northside Prep" },
      ],
    },
    services: {
      label: "05 · Services",
      title: "One partner for the school's whole image.",
      sub: "From the first portrait day to the graduation video — four services that fit together, or work on their own.",
      items: [
        {
          name: "Anuarios", kicker: "Yearbooks",
          desc: "Photo-rich yearbooks designed around your school's character. Printed in Spain, delivered boxed by class.",
          featured: true,
          features: ["On-site photography", "Custom design & layout", "Class composites & senior quotes", "Quality print, robust binding", "Delivered before graduation"],
          img: "anuario",
        },
        {
          name: "Fotografía escolar", kicker: "Photography",
          desc: "Photo packs, class composites, graduations, first communions — captured by photographers who know how to talk to kids.",
          featured: false,
          features: ["Portrait packs for families", "Class & sports composites", "Graduations & communions", "Event coverage", "Family ordering portal"],
          img: "fotografia",
        },
        {
          name: "Vídeos conmemorativos", kicker: "Commemorative video",
          desc: "Year-in-review films that make the auditorium go quiet. Then loud. Then both at once.",
          featured: false,
          features: ["Multi-camera event shoots", "Year-in-review edits", "Graduation films", "QR-coded yearbook companions"],
          img: "video",
        },
        {
          name: "ImageHub", kicker: "Image management software",
          desc: "Our own platform for ingesting, tagging, and serving school imagery — GDPR-clean, automated, fast.",
          featured: false,
          features: ["Automated tagging & sorting", "GDPR-compliant access", "Family & teacher portals", "Multi-year archive"],
          img: "imagehub",
        },
      ],
      footnote: "Mix and match. We'll send an itemized quote tailored to your enrollment and calendar.",
      cta: "Request a quote",
      learn: "Learn more",
    },
    pkg: {
      label: "06 · Anuario pricing",
      title: "Three ways to do your yearbook.",
      sub: "Per-student pricing for the yearbook itself. Photography, video and ImageHub are quoted on top.",
      items: [
        { name: "Essential", price: "€58", per: "/ student", desc: "For schools printing their first ScoolBook.", featured: false, features: ["On-site portrait day", "64-page softcover", "Class composites", "Standard cover design", "Delivered before graduation"] },
        { name: "Classic", price: "€78", per: "/ student", desc: "Our most popular — built for the full school year.", featured: true, features: ["Everything in Essential, plus:", "96-page hardcover", "Sports, arts & trips coverage", "Custom cover with school colors", "Senior quotes & signature pages", "Online re-shoot for absentees"] },
        { name: "Signature", price: "On request", per: "custom", desc: "For graduating classes that deserve a coffee-table book.", featured: false, features: ["Everything in Classic, plus:", "120+ page premium hardcover", "Lay-flat binding & embossed cover", "Student-led editorial team", "Foreword video QR code", "Archive copies for the school"] },
      ],
      footnote: "Final pricing depends on enrollment, format and timeline. VAT not included.",
      cta: "Request a custom quote",
    },
    faq: {
      label: "07 · FAQ",
      title: "What administrators ask us.",
      items: [
        { q: "When should we start the process?", a: "Ideally 4–6 months before graduation. We've turned around full yearbooks in 8 weeks when needed — talk to us early." },
        { q: "What if a student is absent on portrait day?", a: "We schedule a free make-up session, or photograph them remotely. No student gets left out of their own yearbook." },
        { q: "Can families order extra copies?", a: "Yes. We open a parent portal 6 weeks before delivery. Extra copies ship directly to homes." },
        { q: "How is pricing structured?", a: "Per student, with a per-school minimum. Larger schools get tiered pricing. Quotes are free and itemized — no hidden line items." },
        { q: "Are the books printed locally?", a: "Yes — we print regionally to keep delivery short and our footprint smaller. Paper is FSC-certified." },
        { q: "What about photo privacy and consent?", a: "We follow your school's existing consent forms. Opt-outs are honored at the design stage, and we never resell imagery." },
      ],
    },
    contact: {
      title: "Let's make this year unforgettable.",
      lead: "Tell us about your school. We'll send a custom quote in 48 hours — no commitment, no chatbot.",
      info: [
        { ic: "mail", b: "scoolbooks@scoolbooks.com", s: "Reply within 1 business day", href: "mailto:scoolbooks@scoolbooks.com" },
        { ic: "phone", b: "(+34) 91 351 20 28", s: "Mon–Fri · 9:00–18:00 CET", href: "tel:+34913512028" },
        { ic: "pin", b: "Las Rozas · Madrid", s: "On-site shoots across Spain", href: "https://maps.google.com/?q=Las+Rozas+Madrid" },
      ],
      form: {
        name: "Your name", school: "School name", role: "Your role", email: "Email", phone: "Phone (optional)",
        students: "Number of students", year: "School year", message: "Tell us what you have in mind",
        roles: ["Principal / Head of School", "Operations / Admin", "Communications", "Parent representative", "Teacher", "Other"],
        years: ["2025–26", "2026–27", "Just exploring"],
        submit: "Send my request",
        sending: "Sending…",
        small: "We never share your details. Quotes are free and itemized.",
        successT: "Thank you — we're on it.",
        successD: "A producer will reply within one business day with a tailored quote.",
        errReq: "Required",
        errEmail: "Please enter a valid email",
      },
    },
    foot: {
      tag: ["Every yearbook we print is", "someone's ", "favorite book", " one day."],
      cols: [
        { h: "Product", l: ["Services", "Gallery", "Process", "Pricing", "FAQ"] },
        { h: "Company", l: ["About", "Schools we love", "Careers", "Press"] },
        { h: "Resources", l: ["Photo consent kit", "Parent portal", "Sustainability", "Privacy"] },
      ],
      copy: "© 2026 ScoolBooks. Made with care for schools everywhere.",
      lang: "Language",
    },
  },
  es: {
    nav: { services: "Servicios", gallery: "Galería", process: "Proceso", why: "Por qué ScoolBooks", packages: "Tarifas", faq: "Preguntas", contact: "Contacto", cta: "Pedir presupuesto" },
    hero: {
      eyebrow: "Anuarios para colegios que se cuidan",
      title1: "Cada sonrisa,",
      title2: "cada historia,",
      title3wave: "hecha para durar.",
      sub: "ScoolBooks diseña anuarios fotográficos que convierten un año escolar en un tesoro — para quienes lo vivieron y para quienes lo heredarán.",
      cta1: "Solicitar presupuesto",
      cta2: "Ver galería",
      m1: "+10 años al servicio de colegios de toda España",
      m2: "Producción bilingüe ES / EN",
      m3: "Entregado antes de la graduación, garantizado",
    },
    marquee: ["Retratos", "Orlas de clase", "Días de deporte", "Excursiones", "Frases de promoción", "Arte y teatro", "Graduación", "Comunidad"],
    manifesto: {
      label: "Por qué existimos",
      body1: "Un anuario no es un folleto.",
      body2: "Es una ",
      bodyHl: "cápsula del tiempo",
      body3: " — la prueba de que ",
      bodyEm: "este año pasó de verdad, ",
      body4: "de que estos fueron nuestros amigos, nuestros profes, nuestras pequeñas hazañas diarias. Lo encuadernamos tan bien que sobrevive a la taquilla, al portátil y al algoritmo.",
      stats: [
        { n: "+10", l: "Años especializados en imagen escolar" },
        { n: "España", l: "Colegios de todo el país" },
        { n: "100%", l: "Cumplimiento con la LOPD" },
        { n: "A tiempo", l: "Cada anuario, cada curso" },
      ],
    },
    gallery: {
      label: "01 · Lo que hay dentro",
      title: "Páginas que se sienten como casa.",
      sub: "Cada ScoolBook se construye en torno a tus alumnos — sus caras, sus equipos, sus bromas internas, su primer escenario.",
      cards: [
        { t: "Retratos de alumnos", c: "Iluminación de estudio en vuestro propio gimnasio", tag: "Retratos" },
        { t: "Orlas de clase", c: "Cada curso, cada nombre, perfectamente alineado", tag: "Orlas" },
        { t: "Deportes y equipos", c: "Fotos de acción y plantillas que destacan", tag: "Deporte" },
        { t: "Escenario y artes", c: "Teatro, coro, música, danza — todo capturado", tag: "Escenario" },
        { t: "Excursiones y vida", c: "Lo espontáneo que hace que un año sea ese año", tag: "Excursión" },
        { t: "Graduación", c: "El gran día, fotograma a fotograma", tag: "Graduación" },
      ],
      featuredBig: "10× los recuerdos",
      featuredSmall: "Comparado con una galería del móvil — clasificado, diseñado, impreso y encuadernado para siempre.",
    },
    process: {
      label: "02 · Cómo funciona",
      title: "Cuatro pasos, cero estrés.",
      sub: "Llevamos el estudio a vuestro centro. Vosotros traéis a los alumnos y el caos. Del resto nos encargamos nosotros.",
      steps: [
        { num: "i.", t: "Vamos a vuestro colegio", d: "Nuestro equipo monta in situ para retratos, clases, deportes y momentos espontáneos." },
        { num: "ii.", t: "Vuestro equipo elige la historia", d: "Elegís la portada, las páginas, las frases de promo. Diseñamos en torno al carácter del colegio." },
        { num: "iii.", t: "Diseñamos e imprimimos", d: "Maquetación profesional, impresión con gestión de color y encuadernación que sobrevive a la mochila." },
        { num: "iv.", t: "Entregado, a tiempo", d: "Embalado, etiquetado por clase y en la puerta antes de la entrega final. Garantizado." },
      ],
    },
    why: {
      label: "03 · Por qué ScoolBooks",
      title: "Pensado para administradores, querido por los alumnos.",
      sub: "La temporada de anuarios es dura. Lo convertimos en el punto más fácil de vuestra agenda.",
      cards: [
        { t: "Un tesoro que de verdad se guarda.", d: "Papel de alta calidad, encuadernación lay-flat y un diseño que no envejece como un PowerPoint de 2014.", icon: "heart", color: "hero-card" },
        { t: "Cero carga administrativa.", d: "Un contacto, una agenda, una factura. Gestionamos familias, fotos y pruebas.", icon: "shield", color: "b" },
        { t: "De verdad bilingüe.", d: "Español / inglés, francés, catalán — página a página si hace falta.", icon: "globe", color: "c" },
        { t: "A tiempo, siempre.", d: "Nuestra promesa de entrega va en el contrato. Sin sustos en mayo.", icon: "bolt", color: "d" },
        { t: "Una persona a la que llamar.", d: "Un productor dedicado para vuestro colegio — sin bots, sin colas.", icon: "hand", color: "e" },
      ],
    },
    stories: {
      label: "04 · Historias",
      title: "Lo que dicen los equipos directivos.",
      sub: "Las frases de las que más orgullosos estamos son las que no pedimos.",
      items: [
        { q: "La primera vez que recibimos un anuario de ScoolBooks, tres profesores lloraron. Las familias ya piden copias extra para los abuelos.", n: "Marta Reyes", r: "Directora · Colegio San Ramón" },
        { q: "Antes pasábamos dos semanas persiguiendo fotos y pruebas. Con ScoolBooks lo firmo en una reunión y los libros llegan ya organizados por clase.", n: "David Okonkwo", r: "Jefe de Operaciones · Hillcrest Academy" },
        { q: "Su maquetación bilingüe es realmente buena — no es solo una traducción. Nuestra comunidad se siente vista.", n: "Lucía Fernández", r: "Directora · Escuela Bilingüe del Valle" },
        { q: "La promoción aún habla de la portada. Es la primera vez en quince años de anuarios.", n: "Karen Ofori", r: "Jefa de Estudios · Northside Prep" },
      ],
    },
    services: {
      label: "05 · Servicios",
      title: "Un solo aliado para toda la imagen del colegio.",
      sub: "Del primer día de retratos al vídeo de graduación — cuatro servicios que encajan entre sí, o funcionan por separado.",
      items: [
        {
          name: "Anuarios", kicker: "El libro del curso",
          desc: "Anuarios fotográficos diseñados en torno al carácter de vuestro centro. Impresos en España, entregados ya organizados por clase.",
          featured: true,
          features: ["Fotografía in situ", "Diseño y maquetación a medida", "Orlas y frases de promoción", "Impresión de calidad, encuadernación robusta", "Entrega antes de la graduación"],
          img: "anuario",
        },
        {
          name: "Fotografía escolar", kicker: "La imagen del día a día",
          desc: "Packs fotográficos, orlas, graduaciones, primeras comuniones — capturados por fotógrafos que saben tratar con niños.",
          featured: false,
          features: ["Packs de retrato para familias", "Orlas de clase y deporte", "Graduaciones y comuniones", "Cobertura de eventos", "Portal de pedidos para familias"],
          img: "fotografia",
        },
        {
          name: "Vídeos conmemorativos", kicker: "El curso, en movimiento",
          desc: "Vídeos resumen que dejan el auditorio en silencio. Luego en aplausos. Luego ambos a la vez.",
          featured: false,
          features: ["Rodajes multicámara", "Edición resumen del curso", "Vídeos de graduación", "Códigos QR para el anuario"],
          img: "video",
        },
        {
          name: "ImageHub", kicker: "Software de gestión de imágenes",
          desc: "Nuestra plataforma propia para subir, etiquetar y servir la imagen escolar — LOPD limpia, automatizada, rápida.",
          featured: false,
          features: ["Etiquetado automático", "Acceso conforme a LOPD", "Portales para familias y profes", "Archivo plurianual"],
          img: "imagehub",
        },
      ],
      footnote: "Combinables. Te enviamos un presupuesto detallado según tu matrícula y calendario.",
      cta: "Solicitar presupuesto",
      learn: "Más info",
    },
    pkg: {
      label: "06 · Tarifas de anuario",
      title: "Tres maneras de hacer vuestro anuario.",
      sub: "Precio por alumno del propio anuario. Fotografía, vídeo e ImageHub se presupuestan aparte.",
      items: [
        { name: "Essential", price: "58 €", per: "/ alumno", desc: "Para colegios que imprimen su primer ScoolBook.", featured: false, features: ["Jornada de retratos in situ", "Tapa blanda, 64 páginas", "Orlas de clase", "Diseño de portada estándar", "Entrega antes de la graduación"] },
        { name: "Classic", price: "78 €", per: "/ alumno", desc: "Nuestro más popular — diseñado para todo el curso.", featured: true, features: ["Todo lo de Essential, más:", "Tapa dura, 96 páginas", "Cobertura de deporte, arte y excursiones", "Portada personalizada con vuestros colores", "Frases de promoción y páginas de firmas", "Re-toma online para alumnos ausentes"] },
        { name: "Signature", price: "A medida", per: "personalizado", desc: "Para promociones que merecen un libro de mesa.", featured: false, features: ["Todo lo de Classic, más:", "Tapa dura premium 120+ páginas", "Encuadernación lay-flat y portada en relieve", "Equipo editorial de alumnos", "Vídeo prólogo con QR", "Copias de archivo para el colegio"] },
      ],
      footnote: "El precio final depende de matrícula, formato y plazos. IVA no incluido.",
      cta: "Solicitar presupuesto a medida",
    },
    faq: {
      label: "07 · Preguntas",
      title: "Lo que nos preguntan los administradores.",
      items: [
        { q: "¿Cuándo deberíamos empezar el proceso?", a: "Idealmente 4–6 meses antes de la graduación. Hemos sacado anuarios completos en 8 semanas cuando hace falta — hablemos pronto." },
        { q: "¿Y si un alumno falta el día del retrato?", a: "Programamos una sesión de recuperación gratis, o lo fotografiamos en remoto. Ningún alumno se queda fuera." },
        { q: "¿Pueden las familias pedir copias extra?", a: "Sí. Abrimos un portal para familias 6 semanas antes de la entrega. Las copias extra llegan directamente a casa." },
        { q: "¿Cómo es la estructura de precios?", a: "Por alumno, con un mínimo por centro. Los colegios grandes tienen precios escalonados. Los presupuestos son gratis y detallados — sin líneas ocultas." },
        { q: "¿Se imprime localmente?", a: "Sí — imprimimos a nivel regional para reducir entregas y nuestra huella. El papel es FSC." },
        { q: "¿Qué pasa con la privacidad y los consentimientos?", a: "Seguimos los formularios de consentimiento del colegio. Las renuncias se respetan en el diseño y nunca revendemos imagen." },
      ],
    },
    contact: {
      title: "Hagamos que este curso sea inolvidable.",
      lead: "Cuéntanos sobre tu colegio. Te enviamos un presupuesto a medida en 48h — sin compromiso, sin chatbot.",
      info: [
        { ic: "mail", b: "scoolbooks@scoolbooks.com", s: "Respuesta en 1 día laborable", href: "mailto:scoolbooks@scoolbooks.com" },
        { ic: "phone", b: "(+34) 91 351 20 28", s: "Lun–Vie · 9:00–18:00 CET", href: "tel:+34913512028" },
        { ic: "pin", b: "Las Rozas · Madrid", s: "Sesiones in situ por toda España", href: "https://maps.google.com/?q=Las+Rozas+Madrid" },
      ],
      form: {
        name: "Tu nombre", school: "Nombre del colegio", role: "Tu rol", email: "Correo", phone: "Teléfono (opcional)",
        students: "Número de alumnos", year: "Curso escolar", message: "Cuéntanos qué tienes en mente",
        roles: ["Director/a", "Operaciones / Admin", "Comunicación", "Representante de familias", "Profesor/a", "Otro"],
        years: ["2025–26", "2026–27", "Solo investigando"],
        submit: "Enviar solicitud",
        sending: "Enviando…",
        small: "No compartimos tus datos. Los presupuestos son gratis y detallados.",
        successT: "Gracias — estamos en ello.",
        successD: "Un productor te responderá en un día laborable con un presupuesto a medida.",
        errReq: "Obligatorio",
        errEmail: "Introduce un correo válido",
      },
    },
    foot: {
      tag: ["Cada anuario que imprimimos será", "el ", "libro favorito", " de alguien algún día."],
      cols: [
        { h: "Producto", l: ["Servicios", "Galería", "Proceso", "Tarifas", "FAQ"] },
        { h: "Empresa", l: ["Sobre nosotros", "Colegios que queremos", "Trabaja con nosotros", "Prensa"] },
        { h: "Recursos", l: ["Kit de consentimiento", "Portal familias", "Sostenibilidad", "Privacidad"] },
      ],
      copy: "© 2026 ScoolBooks. Hecho con cariño para colegios de todas partes.",
      lang: "Idioma",
    },
  },
};

/* ============ IMAGES (absolute URLs — real + Unsplash) ============ */
const U = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const SB = "https://anuarios.scoolbooks.com/wp-content/uploads";

const IMG = {
  // Real Scoolbooks photos
  real_kid: `${SB}/2018/04/foto-peque.jpg`,
  real_reading: `${SB}/2018/04/Ni%C3%B1os-leyendo-anuarios.jpg`,
  // Hero collage: real photos + Unsplash for variety
  hero1: `${SB}/2018/04/Ni%C3%B1os-leyendo-anuarios.jpg`,
  hero2: U("1427504494785-3a9ca7044f45"),       // graduation caps thrown
  hero3: `${SB}/2018/04/foto-peque.jpg`,
  hero4: U("1509869175650-a1d97972541a"),       // students walking
  // Gallery: rich mix
  gal: [
    { src: `${SB}/2018/04/Ni%C3%B1os-leyendo-anuarios.jpg`, tagEn: "Portraits", tagEs: "Retratos" },
    { src: U("1543269865-cbf427effbad"), tagEn: "Class", tagEs: "Clase" },
    { src: U("1517649763962-0c623066013b"), tagEn: "Sports", tagEs: "Deporte" },
    { src: U("1503454537195-1dcabb73ffb9"), tagEn: "Stage", tagEs: "Escenario" },
    { src: U("1497486751825-1233686d5d80"), tagEn: "Trips", tagEs: "Excursión" },
    { src: U("1571260899304-425eee4c7efc"), tagEn: "Graduation", tagEs: "Graduación" },
  ],
  // Service section imagery
  serv: {
    anuario: U("1517245386807-bb43f82c33c4"),    // open book / yearbook
    fotografia: U("1606983340126-99ab4feaa64a"),  // camera/portrait
    video: U("1492619267744-f1e7a5af1b3d"),       // film
    imagehub: U("1551033406-611cf9a28f67"),       // tech / interface
  },
  avatars: [
    U("1573496359142-b8d87734a5a2", 200),
    U("1507003211169-0a1dd7228f2d", 200),
    U("1544005313-94ddf0286df2", 200),
    U("1531123897727-8f129e1688ce", 200),
  ],
};

/* ============ NAV ============ */
function Nav({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return (
    <header className="nav">
      <div className="container-wide nav-inner">
        <a href="#top" className="logo" aria-label="ScoolBooks home">
          <span className="logo-mark"><span>S</span></span>
          <span>ScoolBooks</span>
        </a>
        <nav className="nav-links">
          <a href="#services">{t.nav.services}</a>
          <a href="#gallery">{t.nav.gallery}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#packages">{t.nav.packages}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>
        <div className="nav-spacer"/>
        <div className="lang-toggle" role="group" aria-label="Language">
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
          <button className={lang === "es" ? "on" : ""} onClick={() => setLang("es")} aria-pressed={lang === "es"}>ES</button>
        </div>
        <a href="#contact" className="cta-btn nav-cta">{t.nav.cta}<I.arrow className="ico arrow" /></a>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen(true)}><I.menu /></button>
      </div>
      {open && (
        <div style={{position:"fixed",inset:0,background:"var(--paper)",zIndex:80,padding:"24px",display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span className="logo"><span className="logo-mark"><span>S</span></span><span>ScoolBooks</span></span>
            <button className="hamburger" onClick={() => setOpen(false)} aria-label="Close"><I.close /></button>
          </div>
          <nav style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"40px",fontFamily:"Bricolage Grotesque",fontSize:"36px",fontWeight:600,letterSpacing:"-0.02em"}}>
            {[["services",t.nav.services],["gallery",t.nav.gallery],["process",t.nav.process],["why",t.nav.why],["packages",t.nav.packages],["faq",t.nav.faq],["contact",t.nav.contact]].map(([id,label])=>(
              <a key={id} href={`#${id}`} onClick={()=>setOpen(false)} style={{padding:"8px 0", borderBottom:"1px solid var(--line)"}}>{label}</a>
            ))}
          </nav>
          <a href="#contact" onClick={()=>setOpen(false)} className="cta-btn coral" style={{marginTop:"auto",justifyContent:"center",padding:"16px"}}>{t.nav.cta}<I.arrow className="ico arrow"/></a>
        </div>
      )}
    </header>
  );
}

/* ============ HERO ============ */
function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-blob"/>
      <div className="hero-blob b2"/>
      <div className="container-wide">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="hero-eyebrow"><span className="eyebrow-dot"/> {t.hero.eyebrow}</span>
            <h1>{t.hero.title1}<br/>{t.hero.title2}<br/><span className="wave">{t.hero.title3wave}</span></h1>
            <p className="hero-sub">{t.hero.sub}</p>
            <div className="hero-ctas">
              <a href="#contact" className="cta-btn coral">{t.hero.cta1}<I.arrow className="ico arrow"/></a>
              <a href="#gallery" className="cta-btn ghost">{t.hero.cta2}</a>
            </div>
            <div className="hero-meta">
              <span><span className="dot"/><b>{t.hero.m1}</b></span>
              <span><span className="dot"/>{t.hero.m2}</span>
              <span><span className="dot"/>{t.hero.m3}</span>
            </div>
          </div>
          <div className="hero-collage">
            <div className="card c1"><img src={IMG.hero1} alt="" loading="eager" /></div>
            <div className="card c2"><img src={IMG.hero2} alt="" /></div>
            <div className="card c3"><img src={IMG.hero3} alt="" /></div>
            <div className="card c4"><img src={IMG.hero4} alt="" /></div>
            <div className="sticker s1">★ 2026 Edition</div>
            <div className="sticker s2">+120 schools</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ MARQUEE ============ */
function Marquee({ t }) {
  const items = [...t.marquee, ...t.marquee, ...t.marquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((m, i) => (<span key={i}>{m}<em>✶</em></span>))}
      </div>
    </div>
  );
}

/* ============ MANIFESTO ============ */
function Manifesto({ t }) {
  return (
    <section className="manifesto">
      <div className="manifesto-inner">
        <span className="hero-eyebrow"><span className="eyebrow-dot"/> {t.manifesto.label}</span>
        <h2 style={{marginTop:"24px"}}>
          {t.manifesto.body1}<br/>
          {t.manifesto.body2}<span className="hl">{t.manifesto.bodyHl}</span>{t.manifesto.body3}<em className="serif">{t.manifesto.bodyEm}</em>
          {t.manifesto.body4}
        </h2>
        <div className="manifesto-foot">
          {t.manifesto.stats.map((s, i) => (
            <div className="stat" key={i}><b>{s.n}</b><span>{s.l}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ GALLERY (horizontal swipe) ============ */
function Gallery({ t }) {
  const rail = useRef(null);
  const scroll = (dir) => {
    if (!rail.current) return;
    const w = rail.current.querySelector(".gallery-card")?.clientWidth || 460;
    rail.current.scrollBy({ left: dir * (w + 22), behavior: "smooth" });
  };
  return (
    <section className="gallery" id="gallery">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="label"><span className="num">1</span> {t.gallery.label.replace(/^01\s·\s/, "")}</span>
            <h2 style={{marginTop:"16px"}}>{t.gallery.title}</h2>
          </div>
          <p className="head-sub">{t.gallery.sub}</p>
        </div>
      </div>
      <div className="gallery-rail-wrap">
        <div className="gallery-rail" ref={rail}>
          {t.gallery.cards.map((c, i) => (
            <article className="gallery-card" key={i}>
              <img src={IMG.gal[i].src} alt={c.t} loading="lazy"/>
              <span className="tag">{c.tag}</span>
              <div className="cap">
                <h3>{c.t}</h3>
                <span>{String(i+1).padStart(2,"0")}</span>
              </div>
            </article>
          ))}
          <article className="gallery-card featured">
            <div>
              <div className="big">{t.gallery.featuredBig}</div>
              <div className="small">{t.gallery.featuredSmall}</div>
            </div>
          </article>
        </div>
      </div>
      <div className="container-wide">
        <div className="rail-controls">
          <button className="rail-btn" onClick={() => scroll(-1)} aria-label="Previous"><svg viewBox="0 0 24 24" className="ico"><path d="M14 6 8 12l6 6"/></svg></button>
          <button className="rail-btn" onClick={() => scroll(1)} aria-label="Next"><svg viewBox="0 0 24 24" className="ico"><path d="m10 6 6 6-6 6"/></svg></button>
        </div>
      </div>
    </section>
  );
}

/* ============ PROCESS ============ */
function Process({ t }) {
  const icons = [I.camera, I.sparkle, I.layers, I.truck];
  return (
    <section className="process" id="process">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="label"><span className="num">2</span> {t.process.label.replace(/^02\s·\s/, "")}</span>
            <h2 style={{marginTop:"16px"}}>{t.process.title}</h2>
          </div>
          <p className="head-sub">{t.process.sub}</p>
        </div>
        <div className="process-grid">
          {t.process.steps.map((s, i) => {
            const Ic = icons[i];
            return (
              <div className="step" key={i}>
                <div className="step-icon"><Ic /></div>
                <span className="stepnum">{s.num}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ WHY ============ */
function Why({ t }) {
  const icons = { heart: I.heart, shield: I.shield, globe: I.globe, bolt: I.bolt, hand: I.hand };
  return (
    <section className="why" id="why">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="label"><span className="num">3</span> {t.why.label.replace(/^03\s·\s/, "")}</span>
            <h2 style={{marginTop:"16px"}}>{t.why.title}</h2>
          </div>
          <p className="head-sub">{t.why.sub}</p>
        </div>
        <div className="why-grid">
          {t.why.cards.slice(0, 3).map((c, i) => {
            const Ic = icons[c.icon];
            return (
              <div className={`why-card ${c.color}`} key={i}>
                <div className="icon"><Ic /></div>
                <div>
                  <h3>{c.t}</h3>
                  <p style={{marginTop:"12px"}}>{c.d}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="why-row2">
          {t.why.cards.slice(3).map((c, i) => {
            const Ic = icons[c.icon];
            return (
              <div className={`why-card ${c.color}`} key={i}>
                <div className="icon"><Ic /></div>
                <div>
                  <h3>{c.t}</h3>
                  <p style={{marginTop:"12px"}}>{c.d}</p>
                </div>
              </div>
            );
          })}
          <div className="why-card hero-card" style={{background:"var(--ink)", color:"var(--paper)"}}>
            <div className="icon" style={{background:"rgba(255,255,255,0.18)"}}><I.heart /></div>
            <div>
              <h3 style={{fontSize:"36px"}}>{t.hero.cta1}</h3>
              <p style={{marginTop:"14px", color:"color-mix(in oklab, var(--paper) 75%, transparent)"}}>{t.contact.lead}</p>
              <a href="#contact" className="cta-btn coral" style={{marginTop:"22px"}}>{t.nav.cta}<I.arrow className="ico arrow"/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ STORIES ============ */
function Stories({ t }) {
  return (
    <section className="stories" id="stories">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="label"><span className="num">4</span> {t.stories.label.replace(/^04\s·\s/, "")}</span>
            <h2 style={{marginTop:"16px"}}>{t.stories.title}</h2>
          </div>
          <p className="head-sub">{t.stories.sub}</p>
        </div>
      </div>
      <div className="stories-rail">
        {t.stories.items.map((s, i) => (
          <article className="story-card" key={i}>
            <span className="quote-mark">"</span>
            <blockquote>{s.q}</blockquote>
            <div className="who">
              <div className="story-avatar"><img src={IMG.avatars[i]} alt={s.n} loading="lazy"/></div>
              <div className="story-who-text">
                <b>{s.n}</b>
                <span>{s.r}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============ SERVICES ============ */
function Services({ t }) {
  return (
    <section className="services" id="services">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="label"><span className="num">5</span> {t.services.label.replace(/^05\s·\s/, "")}</span>
            <h2 style={{marginTop:"16px"}}>{t.services.title}</h2>
          </div>
          <p className="head-sub">{t.services.sub}</p>
        </div>
        <div className="services-grid">
          {t.services.items.map((s, i) => (
            <article className={`svc-card ${s.featured ? "featured" : ""}`} key={i}>
              <div className="svc-photo">
                <img src={IMG.serv[s.img]} alt={s.name} loading="lazy"/>
                <span className="svc-kicker">{s.kicker}</span>
              </div>
              <div className="svc-body">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.features.map((f, j) => <li key={j}><span className="bul"/>{f}</li>)}
                </ul>
                <a href="#contact" className="cta-btn ghost svc-cta">{t.services.cta}<I.arrow className="ico arrow"/></a>
              </div>
            </article>
          ))}
        </div>
        <p style={{marginTop:"28px", color:"var(--mute)", fontSize:"14px", textAlign:"center"}}>{t.services.footnote}</p>
      </div>
    </section>
  );
}

/* ============ PACKAGES ============ */
function Packages({ t }) {
  return (
    <section className="packages" id="packages">
      <div className="container-wide">
        <div className="section-head">
          <div>
            <span className="label"><span className="num">6</span> {t.pkg.label.replace(/^06\s·\s/, "")}</span>
            <h2 style={{marginTop:"16px"}}>{t.pkg.title}</h2>
          </div>
          <p className="head-sub">{t.pkg.sub}</p>
        </div>
        <div className="pkg-grid">
          {t.pkg.items.map((p, i) => (
            <div className={`pkg ${p.featured ? "featured" : ""}`} key={i}>
              {p.featured && <span className="ribbon">★ Most picked</span>}
              <span className="pkg-name">{p.name}</span>
              <h3>{p.desc}</h3>
              <div className="price">{p.price}<small>{p.per}</small></div>
              <ul>
                {p.features.map((f, j) => (
                  <li key={j}><I.check /> <span>{f}</span></li>
                ))}
              </ul>
              <a href="#contact" className="cta-btn" style={p.featured ? {background:"var(--sun)", color:"var(--ink)"} : {}}>{t.pkg.cta}<I.arrow className="ico arrow"/></a>
            </div>
          ))}
        </div>
        <p style={{marginTop:"24px", color:"var(--mute)", fontSize:"14px", textAlign:"center"}}>{t.pkg.footnote}</p>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function FAQ({ t }) {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head" style={{justifyContent:"center", textAlign:"center", flexDirection:"column", alignItems:"center"}}>
          <span className="label"><span className="num">7</span> {t.faq.label.replace(/^07\s·\s/, "")}</span>
          <h2 style={{marginTop:"16px"}}>{t.faq.title}</h2>
        </div>
        <div className="faq-list">
          {t.faq.items.map((f, i) => (
            <details className="faq-item" key={i}>
              <summary>{f.q}<span className="plus">+</span></summary>
              <div className="ans">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT ============ */
function Contact({ t }) {
  const [form, setForm] = useState({ name: "", school: "", role: "", email: "", phone: "", students: "", year: "", message: "" });
  const [errs, setErrs] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const icons = { mail: I.mail, phone: I.phone, pin: I.pin };

  const update = (k) => (e) => { setForm({ ...form, [k]: e.target.value }); if (errs[k]) setErrs({ ...errs, [k]: null }); };
  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = t.contact.form.errReq;
    if (!form.school.trim()) next.school = t.contact.form.errReq;
    if (!form.email.trim()) next.email = t.contact.form.errReq;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t.contact.form.errEmail;
    if (!form.message.trim()) next.message = t.contact.form.errReq;
    setErrs(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section className="contact" id="contact">
      <div className="container-wide">
        <div className="contact-grid">
          <div className="contact-side">
            <span className="hero-eyebrow"><span className="eyebrow-dot"/> {t.nav.contact}</span>
            <h2 style={{marginTop:"16px"}}>{t.contact.title}</h2>
            <p className="lead">{t.contact.lead}</p>
            <div className="contact-info">
              {t.contact.info.map((row, i) => {
                const Ic = icons[row.ic];
                return (
                  <div className="row" key={i}>
                    <div className="ic"><Ic /></div>
                    <div><b>{row.b}</b><span>{row.s}</span></div>
                  </div>
                );
              })}
            </div>
          </div>
          {status === "sent" ? (
            <div className="form-card">
              <div className="form-success">
                <div className="ic"><svg viewBox="0 0 24 24" className="ico" style={{stroke:"white"}}><path d="m4 12 6 6L20 6"/></svg></div>
                <div>
                  <h4>{t.contact.form.successT}</h4>
                  <p>{t.contact.form.successD}</p>
                </div>
              </div>
            </div>
          ) : (
            <form className="form-card" onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label>{t.contact.form.name} <span className="req">*</span></label>
                  <input value={form.name} onChange={update("name")} type="text"/>
                  <span className="err">{errs.name || ""}</span>
                </div>
                <div className="field">
                  <label>{t.contact.form.school} <span className="req">*</span></label>
                  <input value={form.school} onChange={update("school")} type="text"/>
                  <span className="err">{errs.school || ""}</span>
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>{t.contact.form.role}</label>
                  <select value={form.role} onChange={update("role")}>
                    <option value="">—</option>
                    {t.contact.form.roles.map((r, i) => <option key={i} value={r}>{r}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label>{t.contact.form.year}</label>
                  <select value={form.year} onChange={update("year")}>
                    <option value="">—</option>
                    {t.contact.form.years.map((y, i) => <option key={i} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>{t.contact.form.email} <span className="req">*</span></label>
                  <input value={form.email} onChange={update("email")} type="email"/>
                  <span className="err">{errs.email || ""}</span>
                </div>
                <div className="field">
                  <label>{t.contact.form.phone}</label>
                  <input value={form.phone} onChange={update("phone")} type="tel"/>
                  <span className="err"></span>
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>{t.contact.form.students}</label>
                  <input value={form.students} onChange={update("students")} type="number" min="1" placeholder="e.g. 320"/>
                </div>
                <div className="field" style={{justifyContent:"flex-end"}}></div>
              </div>
              <div className="form-row single">
                <div className="field">
                  <label>{t.contact.form.message} <span className="req">*</span></label>
                  <textarea value={form.message} onChange={update("message")}></textarea>
                  <span className="err">{errs.message || ""}</span>
                </div>
              </div>
              <div className="submit-row">
                <small>{t.contact.form.small}</small>
                <button className="submit-btn" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
                  <I.arrow className="ico arrow"/>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
function Footer({ t, lang, setLang }) {
  return (
    <footer>
      <div className="container-wide">
        <div className="footer-top">
          <div>
            <span className="logo" style={{color:"var(--paper)"}}><span className="logo-mark"><span>S</span></span><span>ScoolBooks</span></span>
            <p className="footer-tag">
              {t.foot.tag[0]} <em className="serif">{t.foot.tag[1]}{t.foot.tag[2]}</em>{t.foot.tag[3]}
            </p>
            <div style={{display:"flex", gap:"12px", marginTop:"22px"}}>
              <a href="#" aria-label="Instagram" style={{width:"40px",height:"40px",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",display:"grid",placeItems:"center"}}><I.ig/></a>
              <a href="#" aria-label="WhatsApp" style={{width:"40px",height:"40px",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",display:"grid",placeItems:"center"}}><I.wa/></a>
              <a href="mailto:scoolbooks@scoolbooks.com" aria-label="Email" style={{width:"40px",height:"40px",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",display:"grid",placeItems:"center"}}><I.mail/></a>
            </div>
          </div>
          {t.foot.cols.map((c, i) => (
            <div key={i}>
              <h4>{c.h}</h4>
              <ul>{c.l.map((l, j) => <li key={j}><a href="#">{l}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>{t.foot.copy}</span>
          <div style={{display:"flex",gap:"14px",alignItems:"center"}}>
            <span>{t.foot.lang}:</span>
            <div className="lang-toggle">
              <button className={lang === "en" ? "on" : ""} onClick={()=>setLang("en")} style={{color:"var(--paper)"}}>EN</button>
              <button className={lang === "es" ? "on" : ""} onClick={()=>setLang("es")} style={{color:"var(--paper)"}}>ES</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============ APP ============ */
function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("sb-lang") || (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
    } catch { return "en"; }
  });
  useEffect(() => {
    try { localStorage.setItem("sb-lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);
  const t = COPY[lang];
  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Marquee t={t} />
      <Manifesto t={t} />
      <Gallery t={t} />
      <Process t={t} />
      <Why t={t} />
      <Stories t={t} />
      <Services t={t} />
      <Packages t={t} />
      <FAQ t={t} />
      <Contact t={t} />
      <Footer t={t} lang={lang} setLang={setLang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
