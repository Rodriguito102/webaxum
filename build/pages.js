/* AXUM — page content definitions (light/corporate theme). */
module.exports = function (ctx) {
  const { SITE, OG, WA, ARROW, I, L, shell, cta, pageHero, breadcrumb, serviceLd, articleLd, writePage } = ctx;

  /* ---------- content sub-components ---------- */
  const solCard = (tag, title, desc, href, d) => `<article class="card" data-reveal data-d="${d}">
        <span class="tag">${tag}</span>
        <h3>${title}</h3>
        <p>${desc}</p>
        <a class="link-arrow card-link" href="${L(href)}">Ver solución ${ARROW}</a>
      </article>`;

  const solIconCard = (icon, tag, title, desc, href, d) => `<article class="card" data-reveal data-d="${d}">
        <span class="card-icon">${icon}</span>
        <span class="tag">${tag}</span>
        <h3>${title}</h3>
        <p>${desc}</p>
        <a class="link-arrow card-link" href="${L(href)}">Ver solución ${ARROW}</a>
      </article>`;

  const sectorCard = (href, img, alt, title, tagline, d) => `<a class="sector-card" href="${L(href)}" data-reveal data-d="${d}">
        <img src="${img}" alt="${alt}" loading="lazy" width="640" height="427">
        <div class="sc-body">
          <span class="tag">Especialidad</span>
          <h3>${title}</h3>
          <p>${tagline}</p>
          <span class="link-arrow card-link">Ver sector ${ARROW}</span>
        </div>
      </a>`;

  const segment = (title, tagline, href, d) => `<div class="segment" data-reveal data-d="${d}">
        <span class="s-mark">◆</span>
        <div>
          <h3>${title}</h3>
          <p>${tagline}</p>
          <a class="link-arrow" href="${L(href)}" style="margin-top:.7rem;">Ver segmento ${ARROW}</a>
        </div>
      </div>`;

  const articleCard = (kicker, sub, title, desc, href, d) => `<article class="article-card" data-reveal data-d="${d}">
        <span class="ac-top"></span>
        <div class="ac-body">
          <span class="kicker">${kicker} <span>· ${sub}</span></span>
          <h3>${title}</h3>
          <p>${desc}</p>
          <a class="link-arrow card-link" href="${L(href)}">Leer apunte ${ARROW}</a>
        </div>
      </article>`;

  const step = (k, h, p, d) => `<article class="step" data-reveal data-d="${d}">
        <span class="k">${k}</span>${h ? `\n        <h3>${h}</h3>` : ''}
        <p>${p}</p>
      </article>`;

  const bullets = (arr) => `<ul class="bullets">${arr.map(b => `<li>${b}</li>`).join('')}</ul>`;

  const solStrip = `<div class="grid grid-4">
      ${solCard('Análisis previo', 'Auditoría de riesgos', 'Lo que hoy parece un detalle, mañana reescribe sus resultados.', '/soluciones/auditoria-de-riesgos', 1)}
      ${solCard('Diseño a medida', 'Ingeniería de contratos', 'La póliza responde a la naturaleza de su operación.', '/soluciones/ingenieria-de-contratos', 2)}
      ${solCard('Optimización TCOR', 'Eficiencia de capital', 'Capturamos costos no asegurables para sumar rentabilidad a su caja.', '/soluciones/eficiencia-de-capital', 3)}
      ${solCard('Respuesta estructural', 'Defensa en siniestros', 'Representación técnica experta en el momento de la verdad.', '/soluciones/defensa-en-siniestros', 4)}
    </div>`;

  /* ===================== HOME ===================== */
  const homeMain = `<section class="hero" aria-label="Presentación">
  <div class="hero-bg"></div>
  <div class="container">
    <div class="hero-grid2">
      <div class="hero-copy">
        <span class="eyebrow hero-eyebrow fade-up">Corredores de Seguros · Perú</span>
        <h1 class="fade-up">La decisión es <span class="accent">el primer seguro</span></h1>
        <p class="hero-sub fade-up">Porque lo que hoy parece un detalle, mañana puede cambiar un resultado.</p>
        <div class="hero-actions fade-up">
          <a class="btn btn-primary btn-lg" href="${L('/contacto')}">Agendar conversación ${ARROW}</a>
          <a class="btn btn-outline btn-lg" href="${L('/nosotros')}">Cómo pensamos</a>
        </div>
      </div>
      <div class="hero-visual fade-up">
        <div class="hero-frame">
          <img src="/assets/img/hero.jpg" alt="Análisis técnico de riesgos y contratos de seguro — AXUM Corredores de Seguros" width="760" height="855">
        </div>
        <div class="hero-badge">
          <span class="hb-ic">${I.shield}</span>
          <div><b>Método AXUM</b><span>Entender · Priorizar · Decidir</span></div>
        </div>
      </div>
    </div>
    <div class="hero-pillars fade-up">
      <div class="pillar"><span class="num">01</span><h3>Primero comprender</h3><p>Lo esencial suele permanecer oculto.</p></div>
      <div class="pillar"><span class="num">02</span><h3>Luego decidir</h3><p>No confundimos información con entendimiento.</p></div>
      <div class="pillar"><span class="num">03</span><h3>Proteger valor</h3><p>Lo valioso merece mejores decisiones.</p></div>
    </div>
  </div>
</section>

<section class="band-blue" aria-labelledby="vision-h">
  <div class="narrow center">
    <span class="eyebrow center" data-reveal>Primero confianza, luego decisiones</span>
    <p class="h2" id="vision-h" data-reveal data-d="1" style="margin-top:1rem;">Nadie conoce su operación mejor que usted. Nuestra tarea es transformar ese conocimiento en <span class="accent">decisiones y protección.</span></p>
    <div style="margin-top:1.8rem;" data-reveal data-d="2">
      <a class="link-arrow" href="${L('/nosotros')}">Conoce el Método AXUM ${ARROW}</a>
    </div>
  </div>
</section>

<section aria-labelledby="metodo-h">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">¿Cómo pensamos?</span>
      <h2 class="h2" id="metodo-h">Método AXUM</h2>
      <p class="lead">Tres movimientos para convertir el conocimiento de su operación en protección real.</p>
    </div>
    <div class="steps cols">
      ${step('Entender', 'La exposición real, no la evidente', 'Auditoría de la exposición real frente a la evidente. Lo esencial suele permanecer oculto.', 1)}
      ${step('Priorizar', 'Lo que explica el resultado', 'No todas las variables explican el mismo resultado. Distinguimos lo determinante de lo accesorio.', 2)}
      ${step('Decidir', 'Dirección antes que velocidad', 'La dirección correcta importa más que la velocidad. Decidir bien es la primera forma de protección.', 3)}
    </div>
  </div>
</section>

<section class="section-alt" aria-labelledby="sol-h">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Soluciones</span>
      <h2 class="h2" id="sol-h">Intermediación estratégica ante el mercado asegurador</h2>
      <p class="lead">…pero nuestra visión no se agota ahí.</p>
    </div>
    ${solStrip}
  </div>
</section>

<section aria-labelledby="sec-h">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Sectores</span>
      <h2 class="h2" id="sec-h">Detrás de cada activo, siempre hay personas tomando decisiones</h2>
      <p class="lead">Nos ocupamos de asegurar a ambos.</p>
    </div>
    <div class="grid grid-3">
      ${sectorCard('/sectores/mineria', '/assets/img/mineria.webp', 'Operación minera — gestión de riesgos AXUM', 'Minería', 'La tierra se mueve. Su balance, no.', 1)}
      ${sectorCard('/sectores/energia', '/assets/img/energia.webp', 'Infraestructura de energía — continuidad del suministro', 'Energía', 'El entorno es incierto. La continuidad del suministro, una constante.', 2)}
      ${sectorCard('/sectores/manufactura-construccion', '/assets/img/manufactura.webp', 'Planta de manufactura y construcción', 'Manufactura y Construcción', 'Los desvíos aparecen. Las metas se mantienen.', 3)}
    </div>
    <div class="grid grid-3" style="margin-top:.5rem;">
      ${segment('Corporativo', 'La exposición crece y la información falta.', '/sectores/corporativo', 1)}
      ${segment('PYMES', 'Un error para perder el resultado de todo el año.', '/sectores/pymes', 2)}
      ${segment('Agroindustria', 'El clima es variable. La exposición, permanente.', '/sectores/agroindustria', 3)}
    </div>
  </div>
</section>

<section class="section-alt" aria-labelledby="resp-h">
  <div class="container">
    <div class="split">
      <div data-reveal>
        <span class="eyebrow">Respaldo</span>
        <h2 class="h2" id="resp-h" style="margin-top:.8rem;">No vendemos pólizas. Construimos criterio.</h2>
        <hr class="divider-gold">
        <p class="lead">Intermediación estratégica ante el mercado asegurador, con un método propio que antepone el entendimiento a la transacción. Lo valioso merece mejores decisiones.</p>
        <div class="tag-row">
          <span class="chip">Auditoría de exposición</span>
          <span class="chip">Diseño de coberturas</span>
          <span class="chip">Optimización del TCOR</span>
          <span class="chip">Defensa en siniestros</span>
        </div>
      </div>
      <div data-reveal data-d="2">
        <div class="steps">
          ${step('Comprender', '', 'Auditamos la exposición real de su operación frente a la que se da por evidente.', 1)}
          ${step('Decidir', '', 'No confundimos información con entendimiento: priorizamos lo que mueve el resultado.', 2)}
          ${step('Proteger', '', 'Representación técnica en el momento de la verdad, cuando el siniestro ocurre.', 3)}
        </div>
      </div>
    </div>
  </div>
</section>

<section aria-labelledby="ap-h">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Apuntes</span>
      <h2 class="h2" id="ap-h">Ideas para decidir mejor</h2>
      <p class="lead">Análisis, experiencias y conversaciones para transformar el riesgo en decisiones con impacto financiero y estratégico.</p>
    </div>
    <div class="grid grid-3">
      ${articleCard('Bitácora', 'Estrategia C-Level', 'TCOR: la métrica que su directorio debería exigir', 'Cómo el Costo Total del Riesgo redefine la conversación de protección en la sala de directores.', '/apuntes/tcor-la-metrica-que-su-directorio-deberia-exigir', 1)}
      ${articleCard('Casuística', 'Transferencia selectiva', 'Profundidad en transferencia selectiva de riesgo', 'El arte de decidir qué retener, qué transferir y cómo estructurar cada decisión con impacto financiero medible.', '/apuntes/transferencia-selectiva-de-riesgo', 2)}
      ${articleCard('Mesa redonda', 'Siniestros complejos', 'Lecciones de un siniestro que estaba «cubierto»', 'Estar asegurado no es estar protegido. Una revisión técnica de los puntos de quiebre más frecuentes en pólizas de empresas.', '/apuntes/lecciones-de-un-siniestro-que-estaba-cubierto', 3)}
    </div>
  </div>
</section>

${cta('Si estás evaluando una decisión importante, vale la pena entender el riesgo antes.')}`;

  writePage('index.html', shell({
    canonical: '/',
    title: 'AXUM Corredores de Seguros | Gestión de riesgos para empresas en Perú',
    desc: 'Corredores de seguros para empresas en Perú. Auditoría de riesgos, ingeniería de contratos, eficiencia de capital (TCOR) y defensa en siniestros. Confianza para entender, criterio para decidir.',
    keywords: 'corredores de seguros Perú, corredora de seguros empresas, gestión de riesgos, broker de seguros corporativos, TCOR, auditoría de riesgos, seguros minería, seguros energía, seguros industria',
    ogTitle: 'AXUM Corredores de Seguros | Gestión de riesgos para empresas en Perú',
    ogDesc: 'Asesoría estratégica en seguros y gestión de riesgos para empresas en Perú. La decisión es el primer seguro.',
    active: '/',
    main: homeMain,
    jsonld: [{
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "InsuranceAgency", "@id": SITE + "/#organization",
          "name": "AXUM Corredores de Seguros", "url": SITE + "/", "image": OG,
          "logo": SITE + "/assets/img/logo-axum.png", "email": "contacto@axum.pe", "telephone": "+51974789855",
          "slogan": "Confianza para entender. Criterio para decidir.",
          "description": "Corredores de seguros especializados en gestión estratégica de riesgos para empresas en Perú.",
          "priceRange": "$$$",
          "address": { "@type": "PostalAddress", "addressLocality": "Lima", "addressCountry": "PE" },
          "areaServed": { "@type": "Country", "name": "Perú" },
          "knowsAbout": ["Gestión de riesgos", "Seguros corporativos", "TCOR", "Auditoría de riesgos", "Defensa en siniestros"],
          "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "18:00" }
        },
        { "@type": "WebSite", "@id": SITE + "/#website", "url": SITE + "/", "name": "AXUM Corredores de Seguros", "inLanguage": "es-PE", "publisher": { "@id": SITE + "/#organization" } }
      ]
    }]
  }));

  /* ===================== NOSOTROS ===================== */
  const nosotrosMain = `${pageHero({
    crumb: [['Inicio', '/'], ['Nosotros', '/nosotros']],
    eyebrow: 'Quiénes somos',
    h1: 'Confianza para entender. Criterio para decidir.',
    lead: 'Primero confianza, luego decisiones. Somos corredores de seguros que anteponen el entendimiento de tu operación a cualquier transacción.'
  })}

<section aria-labelledby="vis-h">
  <div class="container">
    <div class="split">
      <div data-reveal>
        <span class="eyebrow">Visión</span>
        <h2 class="h2" id="vis-h" style="margin-top:.8rem;">Nadie conoce su operación mejor que usted.</h2>
        <hr class="divider-gold">
        <p class="lead">Nuestra tarea es transformar ese conocimiento en <span class="accent">decisiones y protección.</span> Porque lo que hoy parece un detalle, mañana puede cambiar un resultado.</p>
      </div>
      <div data-reveal data-d="2">
        <div class="steps">
          ${step('Primero comprender', '', 'Lo esencial suele permanecer oculto.', 1)}
          ${step('Luego decidir', '', 'No confundimos información con entendimiento.', 2)}
          ${step('Proteger valor', '', 'Lo valioso merece mejores decisiones.', 3)}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-alt" aria-labelledby="met-h">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">¿Cómo pensamos?</span>
      <h2 class="h2" id="met-h">Método AXUM</h2>
      <p class="lead">Tres movimientos para convertir el conocimiento de tu operación en protección real. La dirección correcta importa más que la velocidad.</p>
    </div>
    <div class="steps cols">
      ${step('Entender', 'Auditoría de la exposición', 'Auditoría de la exposición real frente a la evidente. Lo esencial suele permanecer oculto.', 1)}
      ${step('Priorizar', 'Lo que explica el resultado', 'No todas las variables explican el mismo resultado. Separamos lo determinante de lo accesorio.', 2)}
      ${step('Decidir', 'Dirección antes que velocidad', 'La dirección correcta importa más que la velocidad. Decidir bien es la primera forma de protección.', 3)}
    </div>
  </div>
</section>

<section aria-labelledby="fil-h">
  <div class="narrow center">
    <span class="eyebrow center" data-reveal>Nuestra premisa</span>
    <p class="h2" style="max-width:none;margin-top:1rem;" id="fil-h" data-reveal data-d="1">«La decisión es el primer seguro.»</p>
    <p class="lead" style="margin:1.2rem auto 0;" data-reveal data-d="2">No vendemos pólizas: construimos criterio. Antes de transferir un riesgo, ayudamos a entenderlo. Esa es la diferencia entre estar asegurado y estar protegido.</p>
  </div>
</section>

<section class="section-alt" aria-labelledby="res-h">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Respaldo</span>
      <h2 class="h2" id="res-h">Intermediación estratégica ante el mercado asegurador</h2>
      <p class="lead">…pero nuestra visión no se agota ahí. Acompañamos cada decisión, del análisis previo a la defensa en el siniestro.</p>
    </div>
    ${solStrip}
  </div>
</section>

${cta('Si estás evaluando una decisión importante, vale la pena entender el riesgo antes.')}`;

  writePage('nosotros.html', shell({
    canonical: '/nosotros',
    title: 'Nosotros — Cómo pensamos y el Método AXUM | AXUM Corredores de Seguros',
    desc: 'Conoce a AXUM Corredores de Seguros: nuestra forma de pensar y el Método AXUM (Entender, Priorizar, Decidir) para transformar el conocimiento de tu operación en decisiones y protección.',
    keywords: 'corredor de seguros Perú, método de gestión de riesgos, asesoría de seguros empresas, filosofía corredora de seguros',
    active: '/nosotros',
    main: nosotrosMain,
    jsonld: [breadcrumb([['Inicio', '/'], ['Nosotros', '/nosotros']])]
  }));

  /* ===================== SOLUCIONES (index) ===================== */
  const solucionesMain = `${pageHero({
    crumb: [['Inicio', '/'], ['Soluciones', '/soluciones']],
    eyebrow: 'Soluciones',
    h1: 'Intermediación estratégica ante el mercado asegurador',
    lead: '…pero nuestra visión no se agota ahí. Acompañamos cada decisión: del análisis previo al diseño de coberturas, de la eficiencia de capital a la defensa en el siniestro.'
  })}

<section aria-labelledby="solg-h">
  <div class="container">
    <h2 class="visually-hidden" id="solg-h">Nuestras soluciones</h2>
    <div class="grid grid-4">
      ${solIconCard(I.search, 'Análisis previo', 'Auditoría de riesgos', 'Lo que hoy parece un detalle, mañana reescribe sus resultados.', '/soluciones/auditoria-de-riesgos', 1)}
      ${solIconCard(I.doc, 'Diseño a medida', 'Ingeniería de contratos', 'Estructuración para que la póliza responda a la naturaleza de su operación.', '/soluciones/ingenieria-de-contratos', 2)}
      ${solIconCard(I.coin, 'Optimización TCOR', 'Eficiencia de capital', 'Capturamos costos no asegurables para sumar rentabilidad real a su caja.', '/soluciones/eficiencia-de-capital', 3)}
      ${solIconCard(I.shield, 'Respuesta estructural', 'Defensa en siniestros', 'Representación técnica experta en el momento de la verdad.', '/soluciones/defensa-en-siniestros', 4)}
    </div>
  </div>
</section>

<section class="section-alt" aria-labelledby="solm-h">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Cómo trabajamos</span>
      <h2 class="h2" id="solm-h">El Método AXUM atraviesa cada solución</h2>
      <p class="lead">Entender antes de decidir; decidir antes de transferir. Así cada póliza responde a la naturaleza real de su operación.</p>
    </div>
    <div class="steps cols">
      ${step('Entender', 'Exposición real', 'Auditamos la exposición real frente a la evidente.', 1)}
      ${step('Priorizar', 'Lo determinante', 'Distinguimos las variables que explican el resultado.', 2)}
      ${step('Decidir', 'Protección con criterio', 'Estructuramos coberturas y defensa con impacto financiero medible.', 3)}
    </div>
  </div>
</section>

${cta('¿Qué decisión está evaluando hoy? Conversemos sobre el riesgo antes.')}`;

  writePage('soluciones.html', shell({
    canonical: '/soluciones',
    title: 'Soluciones — Gestión integral de riesgos y seguros | AXUM',
    desc: 'Soluciones de AXUM: auditoría de riesgos, ingeniería de contratos, eficiencia de capital (TCOR) y defensa en siniestros para empresas en Perú.',
    keywords: 'soluciones de seguros empresas, auditoría de riesgos, ingeniería de pólizas, optimización TCOR, defensa de siniestros Perú',
    active: '/soluciones',
    main: solucionesMain,
    jsonld: [breadcrumb([['Inicio', '/'], ['Soluciones', '/soluciones']]), {
      "@context": "https://schema.org", "@type": "ItemList",
      "itemListElement": [
        ["Auditoría de riesgos", "/soluciones/auditoria-de-riesgos"],
        ["Ingeniería de contratos", "/soluciones/ingenieria-de-contratos"],
        ["Eficiencia de capital", "/soluciones/eficiencia-de-capital"],
        ["Defensa en siniestros", "/soluciones/defensa-en-siniestros"]
      ].map((s, i) => ({ "@type": "ListItem", "position": i + 1, "name": s[0], "url": SITE + L(s[1]) }))
    }]
  }));

  /* ===================== SERVICE PAGES ===================== */
  function servicePage(p) {
    const main = `${pageHero({
      crumb: [['Inicio', '/'], ['Soluciones', '/soluciones'], [p.h1, p.url]],
      eyebrow: p.tag, h1: p.h1, lead: p.tagline
    })}

<section aria-labelledby="s-intro">
  <div class="container">
    <div class="split">
      <div data-reveal>
        <span class="eyebrow">El reto</span>
        <h2 class="h2" id="s-intro" style="margin-top:.8rem;">${p.introTitle}</h2>
        <hr class="divider-gold">
        <p class="lead">${p.intro}</p>
      </div>
      <div data-reveal data-d="2">
        <div class="card">
          <span class="card-icon">${p.icon}</span>
          <h3>Qué resolvemos</h3>
          <div class="prose" style="margin-top:.8rem;">${bullets(p.resuelve)}</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-alt" aria-labelledby="s-how">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Cómo lo abordamos</span>
      <h2 class="h2" id="s-how">${p.howTitle}</h2>
    </div>
    <div class="steps cols">
      ${p.abordaje.map((a, i) => step(a[0], a[1], a[2], i + 1)).join('\n      ')}
    </div>
  </div>
</section>

<section aria-labelledby="s-rel">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Soluciones</span>
      <h2 class="h2" id="s-rel">Una decisión rara vez se toma sola</h2>
      <p class="lead">Cada solución potencia a las demás. Así se construye protección con criterio.</p>
    </div>
    ${solStrip}
  </div>
</section>

${cta(p.cta || 'Conversemos sobre su operación antes de la próxima renovación.')}`;

    writePage('soluciones/' + p.slug + '.html', shell({
      canonical: p.url, title: p.title, desc: p.desc, keywords: p.keywords, active: '/soluciones', main,
      jsonld: [breadcrumb([['Inicio', '/'], ['Soluciones', '/soluciones'], [p.h1, p.url]]), serviceLd(p.h1, p.desc, p.url)]
    }));
  }

  servicePage({
    slug: 'auditoria-de-riesgos', url: '/soluciones/auditoria-de-riesgos', tag: 'Análisis previo',
    h1: 'Auditoría de riesgos', tagline: 'Lo que hoy parece un detalle, mañana reescribe sus resultados.', icon: I.search,
    title: 'Auditoría de riesgos para empresas | AXUM Corredores de Seguros',
    desc: 'Auditoría de la exposición real frente a la evidente: identificamos brechas de cobertura, concentraciones de riesgo y supuestos críticos antes de transferir nada.',
    keywords: 'auditoría de riesgos empresas, mapeo de exposición, brechas de cobertura, gestión de riesgos Perú',
    introTitle: 'La exposición real suele permanecer oculta',
    intro: 'Antes de cotizar o renovar una póliza, auditamos lo que su operación realmente expone, no solo lo evidente. La diferencia entre ambos define el resultado el día que algo ocurre.',
    resuelve: ['Mapeo de la exposición real frente a la que se da por evidente.', 'Brechas entre lo que está asegurado y lo que está expuesto.', 'Concentraciones de riesgo y dependencias críticas de la operación.', 'Supuestos y condiciones que podrían reescribir el resultado de un siniestro.'],
    howTitle: 'Del dato al entendimiento',
    abordaje: [['Levantar', 'Conocer la operación', 'Relevamos activos, procesos y contratos para entender de qué depende su resultado.'], ['Contrastar', 'Real vs. evidente', 'Comparamos la exposición efectiva con lo que las pólizas vigentes realmente cubren.'], ['Priorizar', 'Lo que mueve la aguja', 'Ordenamos las brechas por su impacto financiero, no por su probabilidad aparente.']],
    cta: 'Antes de su próxima renovación, conviene auditar la exposición real.'
  });

  servicePage({
    slug: 'ingenieria-de-contratos', url: '/soluciones/ingenieria-de-contratos', tag: 'Diseño a medida',
    h1: 'Ingeniería de contratos', tagline: 'Estructuración para que la póliza responda a la naturaleza de su operación.', icon: I.doc,
    title: 'Ingeniería de contratos de seguros | AXUM Corredores de Seguros',
    desc: 'Diseñamos y estructuramos las condiciones de su póliza —alcances, exclusiones y sublímites— para que respondan a la naturaleza real de su operación.',
    keywords: 'diseño de pólizas, condiciones de seguro a medida, cláusulas de cobertura, sublímites, broker corporativo Perú',
    introTitle: 'Una póliza estándar protege un riesgo estándar',
    intro: 'Su operación no lo es. Estructuramos las condiciones del contrato —coberturas, exclusiones, sublímites y condiciones particulares— para que respondan a cómo funciona su negocio en la práctica.',
    resuelve: ['Redacción y revisión de coberturas, alcances y exclusiones.', 'Sublímites y condiciones particulares ajustados a su exposición.', 'Coherencia entre las pólizas y los contratos comerciales de la operación.', 'Lenguaje técnico que evita ambigüedades el día del siniestro.'],
    howTitle: 'La póliza como instrumento, no como formulario',
    abordaje: [['Traducir', 'Operación a contrato', 'Convertimos la realidad de su operación en condiciones contractuales precisas.'], ['Estructurar', 'Coberturas a medida', 'Definimos alcances, exclusiones y sublímites que responden a su exposición real.'], ['Validar', 'Sin zonas grises', 'Revisamos cada cláusula para que la cobertura responda cuando importa.']],
    cta: '¿Su póliza responde a su operación o a un formulario?'
  });

  servicePage({
    slug: 'eficiencia-de-capital', url: '/soluciones/eficiencia-de-capital', tag: 'Optimización TCOR',
    h1: 'Eficiencia de capital', tagline: 'Capturamos costos no asegurables para sumar rentabilidad real a su caja.', icon: I.coin,
    title: 'Eficiencia de capital y optimización del TCOR | AXUM',
    desc: 'Optimizamos el Costo Total del Riesgo (TCOR): equilibramos retención y transferencia y capturamos costos no asegurables para sumar rentabilidad real a su caja.',
    keywords: 'TCOR, costo total del riesgo, eficiencia de capital, retención vs transferencia, financiamiento de riesgos',
    introTitle: 'El seguro es solo una parte del costo del riesgo',
    intro: 'El Costo Total del Riesgo (TCOR) incluye primas, retenciones, costos no asegurables y la administración del riesgo. Trabajamos sobre el total —no solo la prima— para sumar rentabilidad real a su caja.',
    resuelve: ['Medición del Costo Total del Riesgo (TCOR) de la operación.', 'Equilibrio entre lo que conviene retener y lo que conviene transferir.', 'Captura de costos no asegurables que hoy erosionan el resultado.', 'Impacto del programa de riesgos en la caja y la rentabilidad.'],
    howTitle: 'Del costo de la prima al costo del riesgo',
    abordaje: [['Medir', 'TCOR completo', 'Cuantificamos el costo total del riesgo, más allá de la prima.'], ['Decidir', 'Retener o transferir', 'Definimos qué riesgo conviene asumir y cuál transferir al mercado.'], ['Capturar', 'Rentabilidad real', 'Recuperamos costos no asegurables para que sumen a su caja.']],
    cta: '¿Su directorio conoce el TCOR de la operación?'
  });

  servicePage({
    slug: 'defensa-en-siniestros', url: '/soluciones/defensa-en-siniestros', tag: 'Respuesta estructural',
    h1: 'Defensa en siniestros', tagline: 'Representación técnica experta en el momento de la verdad.', icon: I.shield,
    title: 'Defensa en siniestros — Representación técnica | AXUM',
    desc: 'Representación técnica experta cuando el siniestro ocurre: sustentamos el reclamo, negociamos con el asegurador y acompañamos hasta la indemnización justa.',
    keywords: 'defensa de siniestros, gestión de reclamos, ajuste de siniestros, indemnización justa, broker de seguros Perú',
    introTitle: 'Estar asegurado no es estar protegido',
    intro: 'El siniestro es el momento de la verdad de toda póliza. Asumimos la representación técnica del reclamo para que la cobertura contratada se traduzca en una indemnización justa y oportuna.',
    resuelve: ['Gestión y sustento técnico del reclamo desde el primer día.', 'Interlocución y negociación con el asegurador y el ajustador.', 'Defensa de la interpretación correcta de las condiciones de la póliza.', 'Acompañamiento hasta la indemnización justa y oportuna.'],
    howTitle: 'Cuando ocurre, importa quién lo sostiene',
    abordaje: [['Activar', 'Respuesta inmediata', 'Estructuramos el reclamo y aseguramos la evidencia desde el inicio.'], ['Sustentar', 'Argumento técnico', 'Construimos el sustento que respalda la cobertura contratada.'], ['Negociar', 'Indemnización justa', 'Representamos su posición hasta el cierre del siniestro.']],
    cta: 'El mejor momento para preparar un siniestro es antes de que ocurra.'
  });

  /* ===================== SECTORES (index) ===================== */
  const sectoresMain = `${pageHero({
    crumb: [['Inicio', '/'], ['Sectores', '/sectores']],
    eyebrow: 'Sectores',
    h1: 'Detrás de cada activo, siempre hay personas tomando decisiones',
    lead: 'Nos ocupamos de asegurar a ambos. Conocemos la naturaleza de cada industria y la traducimos en protección.'
  })}

<section aria-labelledby="secg-h">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Especialidades</span>
      <h2 class="h2" id="secg-h">Industrias donde el riesgo define el resultado</h2>
    </div>
    <div class="grid grid-3">
      ${sectorCard('/sectores/mineria', '/assets/img/mineria.webp', 'Operación minera — gestión de riesgos AXUM', 'Minería', 'La tierra se mueve. Su balance, no.', 1)}
      ${sectorCard('/sectores/energia', '/assets/img/energia.webp', 'Infraestructura de energía — continuidad del suministro', 'Energía', 'El entorno es incierto. La continuidad del suministro, una constante.', 2)}
      ${sectorCard('/sectores/manufactura-construccion', '/assets/img/manufactura.webp', 'Planta de manufactura y construcción', 'Manufactura y Construcción', 'Los desvíos aparecen. Las metas se mantienen.', 3)}
    </div>
  </div>
</section>

<section class="section-alt" aria-labelledby="seg-h">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Segmentos</span>
      <h2 class="h2" id="seg-h">Cada tamaño de empresa enfrenta su propia exposición</h2>
    </div>
    <div class="grid grid-3">
      ${segment('Corporativo', 'La exposición crece y la información falta.', '/sectores/corporativo', 1)}
      ${segment('PYMES', 'Un error para perder el resultado de todo el año.', '/sectores/pymes', 2)}
      ${segment('Agroindustria', 'El clima es variable. La exposición, permanente.', '/sectores/agroindustria', 3)}
    </div>
  </div>
</section>

${cta('Hablemos de la exposición específica de su sector.')}`;

  writePage('sectores.html', shell({
    canonical: '/sectores',
    title: 'Sectores — Especialidades y segmentos | AXUM Corredores de Seguros',
    desc: 'Especialidades de AXUM por industria: minería, energía, manufactura y construcción; y segmentos corporativo, PYMES y agroindustria. Aseguramos activos y a quienes deciden.',
    keywords: 'seguros minería Perú, seguros energía, seguros industria, seguros agroindustria, seguros corporativos, seguros PYMES',
    active: '/sectores', main: sectoresMain,
    jsonld: [breadcrumb([['Inicio', '/'], ['Sectores', '/sectores']])]
  }));

  /* ===================== SECTOR PAGES ===================== */
  function sectorPage(p) {
    const intro = p.img ? `
<section aria-labelledby="se-int">
  <div class="container">
    <div class="split">
      <div class="media-frame" data-reveal>
        <img src="${p.img}" alt="${p.alt}" loading="lazy" width="900" height="675">
        <span class="media-tag">${p.h1}</span>
      </div>
      <div data-reveal data-d="2">
        <span class="eyebrow">Contexto</span>
        <h2 class="h2" id="se-int" style="margin-top:.8rem;">${p.introTitle}</h2>
        <hr class="divider-gold">
        <p class="lead">${p.intro}</p>
      </div>
    </div>
  </div>
</section>` : `
<section aria-labelledby="se-int">
  <div class="narrow">
    <div data-reveal>
      <span class="eyebrow">Contexto</span>
      <h2 class="h2" id="se-int" style="margin-top:.8rem;">${p.introTitle}</h2>
      <hr class="divider-gold">
      <p class="lead">${p.intro}</p>
    </div>
  </div>
</section>`;

    const main = `${pageHero({
      crumb: [['Inicio', '/'], ['Sectores', '/sectores'], [p.h1, p.url]],
      eyebrow: p.kind, h1: p.h1, lead: p.tagline
    })}
${intro}

<section class="section-alt" aria-labelledby="se-exp">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Exposición típica</span>
      <h2 class="h2" id="se-exp">Lo que está realmente en juego</h2>
    </div>
    <div class="prose" style="margin-left:0;max-width:760px;" data-reveal data-d="1">${bullets(p.exposicion)}</div>
  </div>
</section>

<section aria-labelledby="se-sol">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Cómo acompañamos</span>
      <h2 class="h2" id="se-sol">Del entendimiento a la protección</h2>
      <p class="lead">Aplicamos el Método AXUM al perfil específico de su operación.</p>
    </div>
    ${solStrip}
  </div>
</section>

${cta(p.cta || 'Conversemos sobre la exposición específica de su operación.')}`;

    writePage('sectores/' + p.slug + '.html', shell({
      canonical: p.url, title: p.title, desc: p.desc, keywords: p.keywords, active: '/sectores', main,
      jsonld: [breadcrumb([['Inicio', '/'], ['Sectores', '/sectores'], [p.h1, p.url]]), serviceLd('Gestión de riesgos para ' + p.h1, p.desc, p.url)]
    }));
  }

  sectorPage({
    slug: 'mineria', url: '/sectores/mineria', kind: 'Especialidad', h1: 'Minería',
    tagline: 'La tierra se mueve. Su balance, no.', img: '/assets/img/mineria.webp', alt: 'Operación minera en Perú — gestión de riesgos AXUM',
    title: 'Seguros y gestión de riesgos para Minería | AXUM',
    desc: 'Gestión de riesgos y seguros para minería en Perú: continuidad operativa, equipo pesado, responsabilidad y exposición ambiental. La tierra se mueve; su balance, no.',
    keywords: 'seguros minería Perú, riesgos mineros, seguro equipo pesado, continuidad operativa minería, broker minero',
    introTitle: 'En minería, un evento puede mover el resultado de un año',
    intro: 'La operación convive con condiciones geológicas, equipo de alto valor y cadenas logísticas extensas. Auditamos esa exposición para que la protección sostenga el balance cuando la tierra se mueve.',
    exposicion: ['Daño y paralización de equipo pesado y plantas de proceso.', 'Interrupción del negocio por cortes en la cadena operativa o logística.', 'Responsabilidad civil y exposición ambiental.', 'Concentración de valor en activos críticos y de largo plazo.'],
    cta: 'Hablemos de la continuidad operativa de su mina.'
  });

  sectorPage({
    slug: 'energia', url: '/sectores/energia', kind: 'Especialidad', h1: 'Energía',
    tagline: 'El entorno es incierto. La continuidad del suministro, una constante.', img: '/assets/img/energia.webp', alt: 'Infraestructura de energía — continuidad del suministro',
    title: 'Seguros y gestión de riesgos para Energía | AXUM',
    desc: 'Gestión de riesgos y seguros para el sector energía en Perú: generación, transmisión y distribución, con foco en la continuidad del suministro.',
    keywords: 'seguros energía Perú, riesgos eléctricos, continuidad del suministro, seguro de generación, infraestructura energética',
    introTitle: 'La continuidad no admite interrupciones',
    intro: 'Generación, transmisión y distribución conviven con un entorno incierto, pero el suministro debe permanecer constante. Estructuramos coberturas que protegen la continuidad y los activos que la sostienen.',
    exposicion: ['Daño a equipos de generación, subestaciones y redes.', 'Interrupción del suministro y sus consecuencias contractuales.', 'Responsabilidad frente a terceros y al sistema.', 'Exposición de proyectos en construcción y puesta en marcha.'],
    cta: 'Conversemos sobre la continuidad de su operación energética.'
  });

  sectorPage({
    slug: 'manufactura-construccion', url: '/sectores/manufactura-construccion', kind: 'Especialidad', h1: 'Manufactura y Construcción',
    tagline: 'Los desvíos aparecen. Las metas se mantienen.', img: '/assets/img/manufactura.webp', alt: 'Planta de manufactura y construcción — gestión de riesgos',
    title: 'Seguros para Manufactura y Construcción | AXUM',
    desc: 'Gestión de riesgos y seguros para manufactura y construcción en Perú: plantas, maquinaria, proyectos y cadena de suministro. Los desvíos aparecen; las metas se mantienen.',
    keywords: 'seguros manufactura, seguros construcción Perú, todo riesgo construcción, avería de maquinaria, riesgos industriales',
    introTitle: 'Entre el desvío y la meta está la protección',
    intro: 'Plantas, maquinaria y proyectos enfrentan desvíos que no deberían comprometer la meta. Diseñamos coberturas que absorben el imprevisto y sostienen la producción y los plazos.',
    exposicion: ['Avería de maquinaria y paralización de líneas de producción.', 'Riesgos de obra y montaje en proyectos de construcción.', 'Interrupción del negocio y dependencia de proveedores.', 'Responsabilidad por producto y por la ejecución de obra.'],
    cta: 'Hablemos de cómo sostener sus metas ante el imprevisto.'
  });

  sectorPage({
    slug: 'corporativo', url: '/sectores/corporativo', kind: 'Segmento', h1: 'Corporativo',
    tagline: 'La exposición crece y la información falta.', img: null,
    title: 'Seguros corporativos y gestión de riesgos | AXUM',
    desc: 'Programas de seguros corporativos en Perú: a mayor escala, mayor exposición y más decisiones. Convertimos información dispersa en criterio para el directorio.',
    keywords: 'seguros corporativos Perú, programa de seguros, gestión de riesgos empresariales, TCOR, gobierno de riesgos',
    introTitle: 'A mayor escala, más decisiones y menos visibilidad',
    intro: 'En la empresa corporativa la exposición crece más rápido que la información disponible para gestionarla. Ordenamos esa complejidad en un programa de riesgos que el directorio puede entender y decidir.',
    exposicion: ['Programas multilínea con exposición creciente y dispersa.', 'Falta de una métrica común de costo del riesgo (TCOR).', 'Decisiones de retención y transferencia sin información suficiente.', 'Necesidad de reportar el riesgo en lenguaje de directorio.'],
    cta: 'Llevemos el riesgo a la mesa del directorio, con criterio.'
  });

  sectorPage({
    slug: 'pymes', url: '/sectores/pymes', kind: 'Segmento', h1: 'PYMES',
    tagline: 'Un error para perder el resultado de todo el año.', img: null,
    title: 'Seguros para PYMES — Protección con criterio | AXUM',
    desc: 'Gestión de riesgos y seguros para PYMES en Perú: una protección bien diseñada evita que un solo evento se lleve el resultado de todo el año.',
    keywords: 'seguros PYMES Perú, seguro para pequeña empresa, protección empresarial, gestión de riesgos PYME',
    introTitle: 'Un solo evento puede definir el año',
    intro: 'En la PYME el margen para el error es estrecho: un evento mal cubierto puede llevarse el resultado de todo un ejercicio. Diseñamos una protección proporcional, sin coberturas de más ni brechas de menos.',
    exposicion: ['Concentración del resultado en pocos activos o clientes.', 'Cobertura insuficiente justo donde más expone la operación.', 'Primas que no se traducen en protección real.', 'Poco tiempo para gestionar un siniestro sin acompañamiento.'],
    cta: 'Protejamos el resultado de su año con una cobertura a medida.'
  });

  sectorPage({
    slug: 'agroindustria', url: '/sectores/agroindustria', kind: 'Segmento', h1: 'Agroindustria',
    tagline: 'El clima es variable. La exposición, permanente.', img: null,
    title: 'Seguros para Agroindustria | AXUM Corredores de Seguros',
    desc: 'Gestión de riesgos y seguros para agroindustria en Perú: clima, campo, planta y cadena de exportación. El clima es variable; la exposición, permanente.',
    keywords: 'seguros agroindustria Perú, seguro agrícola, riesgo climático, seguro de cosecha, exportación agroindustrial',
    introTitle: 'El clima cambia; la exposición no descansa',
    intro: 'La agroindustria depende de variables que no controla —clima, biología, logística de exportación— sobre activos de alto valor. Estructuramos protección para una exposición que es permanente aunque el clima sea variable.',
    exposicion: ['Riesgo climático sobre campo y producción.', 'Daño y paralización en planta de proceso y packing.', 'Interrupción de la cadena de frío y de exportación.', 'Responsabilidad por producto en mercados de destino.'],
    cta: 'Hablemos de su exposición de campo a exportación.'
  });

  /* ===================== APUNTES (index) ===================== */
  const apuntesMain = `${pageHero({
    crumb: [['Inicio', '/'], ['Apuntes', '/apuntes']],
    eyebrow: 'Apuntes',
    h1: 'Ideas para decidir mejor',
    lead: 'Análisis, experiencias y conversaciones para transformar el riesgo en decisiones con impacto financiero y estratégico.'
  })}

<section aria-labelledby="apg-h">
  <div class="container">
    <h2 class="visually-hidden" id="apg-h">Artículos</h2>
    <div class="grid grid-3">
      ${articleCard('Bitácora', 'Estrategia C-Level', 'TCOR: la métrica que su directorio debería exigir', 'Cómo el Costo Total del Riesgo redefine la conversación de protección en la sala de directores.', '/apuntes/tcor-la-metrica-que-su-directorio-deberia-exigir', 1)}
      ${articleCard('Casuística', 'Transferencia selectiva', 'Profundidad en transferencia selectiva de riesgo', 'El arte de decidir qué retener, qué transferir y cómo estructurar cada decisión con impacto financiero medible.', '/apuntes/transferencia-selectiva-de-riesgo', 2)}
      ${articleCard('Mesa redonda', 'Siniestros complejos', 'Lecciones de un siniestro que estaba «cubierto»', 'Estar asegurado no es estar protegido. Una revisión técnica de los puntos de quiebre más frecuentes en pólizas de empresas.', '/apuntes/lecciones-de-un-siniestro-que-estaba-cubierto', 3)}
    </div>
  </div>
</section>

${cta('¿Tiene una decisión entre manos? Conversémosla en términos de riesgo.')}`;

  writePage('apuntes.html', shell({
    canonical: '/apuntes',
    title: 'Apuntes — Ideas para decidir mejor sobre riesgo y seguros | AXUM',
    desc: 'Apuntes de AXUM: análisis sobre TCOR, transferencia selectiva de riesgo y siniestros complejos para transformar el riesgo en decisiones con impacto financiero.',
    keywords: 'blog seguros empresas, TCOR, transferencia de riesgo, gestión de siniestros, gestión de riesgos Perú',
    active: '/apuntes', main: apuntesMain,
    jsonld: [breadcrumb([['Inicio', '/'], ['Apuntes', '/apuntes']]), {
      "@context": "https://schema.org", "@type": "Blog", "name": "Apuntes — AXUM Corredores de Seguros",
      "url": SITE + "/apuntes", "inLanguage": "es-PE", "publisher": { "@type": "Organization", "name": "AXUM Corredores de Seguros" }
    }]
  }));

  /* ===================== ARTICLES ===================== */
  function articlePage(p) {
    const main = `${pageHero({
      crumb: [['Inicio', '/'], ['Apuntes', '/apuntes'], [p.short, p.url]],
      eyebrow: p.kicker + ' · ' + p.sub, h1: p.h1, lead: p.lead,
      extra: `\n    <div class="article-meta"><span>${p.kicker}</span><span class="dot"></span><span>${p.read}</span><span class="dot"></span><span>AXUM</span></div>`
    })}

<article>
<section>
  <div class="prose">
    ${p.body}
    <hr class="divider-gold" style="margin:2.4rem auto;">
    <p class="pull">${p.pull}</p>
  </div>
</section>
</article>

${cta('¿Quiere aplicar esto a su operación? Conversemos.')}`;

    writePage('apuntes/' + p.slug + '.html', shell({
      canonical: p.url, title: p.title, desc: p.desc, keywords: p.keywords, ogType: 'article', active: '/apuntes', main,
      jsonld: [breadcrumb([['Inicio', '/'], ['Apuntes', '/apuntes'], [p.short, p.url]]), articleLd(p.h1, p.desc, p.url)]
    }));
  }

  articlePage({
    slug: 'tcor-la-metrica-que-su-directorio-deberia-exigir', url: '/apuntes/tcor-la-metrica-que-su-directorio-deberia-exigir',
    kicker: 'Bitácora', sub: 'Estrategia C-Level', read: '5 min de lectura', short: 'TCOR para el directorio',
    h1: 'TCOR: la métrica que su directorio debería exigir',
    lead: 'Cómo el Costo Total del Riesgo redefine la conversación de protección en la sala de directores.',
    title: 'TCOR: la métrica que su directorio debería exigir | Apuntes AXUM',
    desc: 'El Costo Total del Riesgo (TCOR) reúne primas, retenciones y costos no asegurables en una sola métrica que el directorio puede usar para decidir.',
    keywords: 'TCOR, costo total del riesgo, métrica de riesgo directorio, gestión de riesgos C-Level',
    body: `<p>La mayoría de las conversaciones sobre seguros en una empresa empiezan —y terminan— en una sola pregunta: cuánto cuesta la prima. Es una pregunta legítima, pero incompleta. La prima es apenas una parte de lo que el riesgo le cuesta realmente a la operación.</p>
    <h2>Qué mide el TCOR</h2>
    <p>El Costo Total del Riesgo (TCOR, por sus siglas en inglés) reúne en una sola métrica las primas pagadas, los riesgos retenidos por la empresa, los costos no asegurables y el costo de administrar todo el programa. Visto así, el riesgo deja de ser una línea de gasto aislada y se convierte en una variable de gestión.</p>
    <h2>Por qué importa en la sala de directores</h2>
    <p>Cuando el riesgo se expresa como un costo total, la conversación cambia de naturaleza. Ya no se trata de negociar una prima a la baja, sino de decidir, con criterio, qué conviene retener, qué conviene transferir y dónde se está pagando de más sin obtener protección real.</p>
    <ul class="bullets">
      <li>Hace comparable, año a año, el costo de gestionar el riesgo.</li>
      <li>Revela costos no asegurables que erosionan el resultado en silencio.</li>
      <li>Convierte la decisión de cobertura en una decisión financiera.</li>
    </ul>
    <p>No confundimos información con entendimiento: el valor del TCOR no está en el número, sino en las decisiones que habilita. Es la métrica que permite llevar el riesgo a la mesa del directorio en su mismo lenguaje.</p>`,
    pull: '«El riesgo no se gestiona por su prima, sino por su costo total.»'
  });

  articlePage({
    slug: 'transferencia-selectiva-de-riesgo', url: '/apuntes/transferencia-selectiva-de-riesgo',
    kicker: 'Casuística', sub: 'Transferencia selectiva', read: '6 min de lectura', short: 'Transferencia selectiva',
    h1: 'Profundidad en transferencia selectiva de riesgo',
    lead: 'El arte de decidir qué retener, qué transferir y cómo estructurar cada decisión con impacto financiero medible.',
    title: 'Transferencia selectiva de riesgo | Apuntes AXUM',
    desc: 'No todo riesgo debe transferirse. La transferencia selectiva decide qué retener y qué ceder al mercado, con impacto financiero medible.',
    keywords: 'transferencia de riesgo, retención de riesgo, financiamiento de riesgos, estructura de seguros',
    body: `<p>Transferir todo el riesgo al mercado asegurador es tan ineficiente como no transferir nada. Entre ambos extremos está la decisión que realmente agrega valor: qué retener y qué ceder, y bajo qué condiciones.</p>
    <h2>Retener no es desproteger</h2>
    <p>Hay riesgos frecuentes y de bajo impacto que cuesta más asegurar que asumir. Retenerlos de forma consciente —con los recursos y los límites adecuados— libera capital para proteger lo que de verdad puede comprometer el balance.</p>
    <h2>Transferir lo que no se debe absorber</h2>
    <p>El riesgo de baja frecuencia y alto impacto es el que justifica el seguro. Allí la transferencia protege la continuidad de la operación y la solidez del resultado. La clave está en estructurar esa transferencia para que responda exactamente cuando se la necesita.</p>
    <ul class="bullets">
      <li>Separar lo frecuente y absorbible de lo severo e inabsorbible.</li>
      <li>Definir retenciones que liberen capital sin exponer el balance.</li>
      <li>Estructurar la transferencia con condiciones que respondan al siniestro real.</li>
    </ul>
    <p>Cada decisión de retención o transferencia tiene un impacto financiero medible. Tomarla con método es lo que distingue un programa de seguros de una verdadera estrategia de riesgos.</p>`,
    pull: '«Decidir qué retener es tan estratégico como decidir qué transferir.»'
  });

  articlePage({
    slug: 'lecciones-de-un-siniestro-que-estaba-cubierto', url: '/apuntes/lecciones-de-un-siniestro-que-estaba-cubierto',
    kicker: 'Mesa redonda', sub: 'Siniestros complejos', read: '6 min de lectura', short: 'Un siniestro «cubierto»',
    h1: 'Lecciones de un siniestro que estaba «cubierto»',
    lead: 'Estar asegurado no es estar protegido. Una revisión técnica de los puntos de quiebre más frecuentes en pólizas de empresas.',
    title: 'Lecciones de un siniestro que estaba «cubierto» | Apuntes AXUM',
    desc: 'Estar asegurado no es estar protegido. Revisamos los puntos de quiebre que separan una póliza vigente de una indemnización efectiva.',
    keywords: 'gestión de siniestros, rechazo de siniestro, condiciones de póliza, defensa de siniestros empresas',
    body: `<p>«Estábamos asegurados.» Es la frase que más se repite cuando un siniestro no termina como se esperaba. Y casi siempre es cierta: la póliza estaba vigente. El problema rara vez es la existencia de cobertura; es la distancia entre lo que la póliza decía y lo que la operación necesitaba.</p>
    <h2>Dónde se rompen las pólizas</h2>
    <p>Los puntos de quiebre suelen aparecer mucho antes del siniestro, en condiciones que nadie revisó a tiempo: una exclusión que no se discutió, un sublímite insuficiente, una obligación del asegurado que no se cumplió, una definición ambigua que el ajustador interpreta a su favor.</p>
    <ul class="bullets">
      <li>Exclusiones y sublímites que vacían la cobertura justo donde más expone.</li>
      <li>Obligaciones del asegurado incumplidas por desconocimiento.</li>
      <li>Definiciones ambiguas que se resuelven en contra del asegurado.</li>
      <li>Falta de evidencia y sustento técnico al momento del reclamo.</li>
    </ul>
    <h2>La diferencia entre asegurado y protegido</h2>
    <p>La protección real se construye antes: auditando la exposición, diseñando condiciones sin zonas grises y preparando el sustento del reclamo. Y se sostiene después, con representación técnica el día de la verdad. Esa es la diferencia entre tener una póliza y tener protección.</p>`,
    pull: '«Estar asegurado no es estar protegido.»'
  });

  /* ===================== CONTACTO ===================== */
  const contactoMain = `${pageHero({
    crumb: [['Inicio', '/'], ['Contacto', '/contacto']],
    eyebrow: 'Dialoguemos',
    h1: 'Conversación técnica, sin compromiso',
    lead: 'Si estás evaluando una decisión importante, vale la pena entender el riesgo antes. Cuéntanos tu operación y conversemos.'
  })}

<section aria-labelledby="ct-h">
  <div class="container">
    <h2 class="visually-hidden" id="ct-h">Contacto</h2>
    <div class="contact-grid">
      <form id="contact-form" data-reveal novalidate>
        <div class="field">
          <label for="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" autocomplete="name" placeholder="Tu nombre" required>
        </div>
        <div class="field">
          <label for="empresa">Empresa</label>
          <input id="empresa" name="empresa" type="text" autocomplete="organization" placeholder="Razón social">
        </div>
        <div class="field">
          <label for="sector">Sector</label>
          <select id="sector" name="sector">
            <option value="">Selecciona tu sector</option>
            <option>Minería</option><option>Energía</option><option>Manufactura y Construcción</option>
            <option>Agroindustria</option><option>Corporativo</option><option>PYME</option><option>Otro</option>
          </select>
        </div>
        <div class="field">
          <label for="mensaje">¿Qué decisión estás evaluando?</label>
          <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos brevemente tu operación o la decisión que tienes entre manos."></textarea>
        </div>
        <button class="btn btn-primary btn-lg" type="submit">Enviar por WhatsApp ${ARROW}</button>
        <p class="form-note" style="display:none;margin-top:1rem;color:var(--ink-soft);font-size:var(--step--1);"></p>
        <p style="margin-top:1rem;color:var(--muted);font-size:var(--step--1);">Al enviar, se abrirá WhatsApp con tu mensaje listo. También puedes escribirnos a <a class="accent" href="mailto:contacto@axum.pe">contacto@axum.pe</a>.</p>
      </form>

      <aside class="contact-aside" data-reveal data-d="2">
        <span class="eyebrow">Contacto directo</span>
        <h3 class="h3" style="margin-top:.8rem;">Confianza para entender. Criterio para decidir.</h3>
        <div class="contact-list">
          <a href="mailto:contacto@axum.pe">${I.mail}<span><span class="k">Correo</span>contacto@axum.pe</span></a>
          <a href="${WA}" target="_blank" rel="noopener">${I.wa}<span><span class="k">WhatsApp</span>+51 974 789 855</span></a>
          <span>${I.pin}<span><span class="k">Ubicación</span>Lima, Perú</span></span>
          <span>${I.clock}<span><span class="k">Horario</span>Lun — Vie · 9:00 – 18:00</span></span>
        </div>
      </aside>
    </div>
  </div>
</section>`;

  writePage('contacto.html', shell({
    canonical: '/contacto',
    title: 'Contacto — Agenda una conversación técnica | AXUM Corredores de Seguros',
    desc: 'Conversemos sobre la decisión que tienes entre manos. Escríbenos por WhatsApp (+51 974 789 855) o a contacto@axum.pe. Lima, Perú · Lun a Vie 9:00–18:00.',
    keywords: 'contacto AXUM, corredor de seguros Lima, asesoría de seguros empresas, WhatsApp seguros Perú',
    active: '/contacto', main: contactoMain,
    jsonld: [breadcrumb([['Inicio', '/'], ['Contacto', '/contacto']]), {
      "@context": "https://schema.org", "@type": "ContactPage", "name": "Contacto — AXUM Corredores de Seguros", "url": SITE + "/contacto"
    }]
  }));

  /* ===================== 404 ===================== */
  const notFoundMain = `<section class="page-hero" style="min-height:66vh;display:flex;align-items:center;">
  <div class="container center" style="margin-inline:auto;">
    <span class="eyebrow center">Error 404</span>
    <h1 style="margin-top:.8rem;">La página que busca no existe</h1>
    <p class="lead" style="margin:1rem auto 0;">Puede que el enlace haya cambiado. Volvamos a un terreno conocido.</p>
    <div class="hero-actions" style="justify-content:center;margin-top:1.8rem;">
      <a class="btn btn-primary btn-lg" href="/">Volver al inicio ${ARROW}</a>
      <a class="btn btn-outline btn-lg" href="${L('/contacto')}">Contacto</a>
    </div>
  </div>
</section>`;

  writePage('404.html', shell({
    canonical: '/404', title: 'Página no encontrada (404) | AXUM Corredores de Seguros',
    desc: 'La página que busca no existe.', active: '', main: notFoundMain, jsonld: []
  }));

  console.log('\nDone.');
};
