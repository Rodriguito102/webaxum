/* ============================================================
   AXUM — static site generator (build-time only, not deployed)
   Single source of truth for shared header/footer/head + page content.
   Run:  node build/build.js
   Links use explicit .html so they work on any host (Live Server,
   file://, Vercel) without clean-URL rewriting.
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://axum.pe';
const OG = SITE + '/assets/img/og-image.png';
const WA = 'https://wa.me/51974789855';
const EMAIL = 'contacto@axum.pe';
/* cache-busting query for /assets/css and /assets/js (immutable cache in vercel.json) — bump on every CSS/JS change */
const ASSET_V = '4';

/* logical path -> real url (adds .html, home stays /) */
function L(p) { return (!p || p === '/') ? '/' : (p.endsWith('.html') ? p : p + '.html'); }

/* icons */
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
const I = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  search: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="21" cy="21" r="13"/><path d="m31 31 11 11"/></svg>',
  doc: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4h17l11 11v29H12Z"/><path d="M29 4v11h11M18 26h12M18 33h12"/></svg>',
  coin: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="24" cy="13" rx="14" ry="6"/><path d="M10 13v22c0 3.3 6.3 6 14 6s14-2.7 14-6V13M10 24c0 3.3 6.3 6 14 6s14-2.7 14-6"/></svg>',
  shield: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M24 4 8 10v12c0 11 7 18 16 22 9-4 16-11 16-22V10Z"/><path d="m17 24 5 5 9-10"/></svg>',
  wa32: '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.04 4C9.96 4 5 8.96 5 15.04c0 2.13.6 4.12 1.64 5.81L5 28l7.34-1.6a11 11 0 0 0 3.7.64h.01C22.13 27.04 27 22.08 27 16S22.12 4 16.04 4Zm0 19.84c-1.18 0-2.34-.32-3.35-.92l-.24-.14-3.99.87.85-3.89-.16-.25a8.7 8.7 0 0 1-1.34-4.62c0-4.82 3.92-8.74 8.74-8.74 2.34 0 4.53.91 6.18 2.56a8.68 8.68 0 0 1 2.56 6.18c0 4.82-3.92 8.95-8.41 8.95Zm4.79-6.52c-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.6.13-.17.26-.68.85-.83 1.02-.15.17-.31.2-.57.07-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.55-1.46-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.6-1.44-.82-1.97-.21-.52-.43-.45-.6-.46l-.5-.01c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.73.13.17 1.85 2.82 4.48 3.95.63.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.25.22-.61.22-1.14.15-1.25-.06-.11-.24-.18-.5-.31Z"/></svg>'
};

const NAV = [
  ['Nosotros', '/nosotros'],
  ['Soluciones', '/soluciones'],
  ['Sectores', '/sectores'],
  ['Apuntes', '/apuntes'],
  ['Contacto', '/contacto']
];

const logo = '<img src="/assets/img/logo-axum.png" alt="AXUM Corredores de Seguros" width="205" height="45">';

/* ---------- shared blocks ---------- */
function header(active) {
  const links = NAV.map(([t, h]) =>
    `<li><a href="${L(h)}"${h === active ? ' aria-current="page"' : ''}>${t}</a></li>`).join('\n        ');
  const mlinks = NAV.map(([t, h]) => `<li><a href="${L(h)}">${t}</a></li>`).join('\n    ');
  return `<header class="site-header">
  <div class="topbar">Primero confianza, luego decisiones.</div>
  <div class="container">
    <a class="brand" href="/" aria-label="AXUM Corredores de Seguros — Inicio">${logo}</a>
    <nav class="nav" aria-label="Navegación principal">
      <ul class="nav-links">
        ${links}
      </ul>
      <a class="btn btn-gold-outline nav-cta" href="${L('/contacto')}">Dialoguemos ${ARROW}</a>
    </nav>
    <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span><span></span></button>
  </div>
</header>
<nav class="mobile-nav" id="mobile-nav" aria-label="Navegación móvil">
  <ul>
    ${mlinks}
  </ul>
  <div class="m-foot">${EMAIL} · Lima, Perú<br><a href="${WA}">WhatsApp +51 974 789 855</a></div>
</nav>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="/" aria-label="AXUM — Inicio">${logo}</a>
        <p>Confianza para entender. Criterio para decidir.</p>
        <a class="btn btn-outline" href="${L('/contacto')}" style="margin-top:1.2rem;">Conversación técnica ${ARROW}</a>
      </div>
      <div class="footer-col">
        <h4>Explorar</h4>
        <ul>
          <li><a href="${L('/nosotros')}">Nosotros</a></li>
          <li><a href="${L('/soluciones')}">Soluciones</a></li>
          <li><a href="${L('/sectores')}">Sectores</a></li>
          <li><a href="${L('/apuntes')}">Apuntes</a></li>
          <li><a href="${L('/contacto')}">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Soluciones</h4>
        <ul>
          <li><a href="${L('/soluciones/auditoria-de-riesgos')}">Auditoría de riesgos</a></li>
          <li><a href="${L('/soluciones/ingenieria-de-contratos')}">Ingeniería de contratos</a></li>
          <li><a href="${L('/soluciones/eficiencia-de-capital')}">Eficiencia de capital</a></li>
          <li><a href="${L('/soluciones/defensa-en-siniestros')}">Defensa en siniestros</a></li>
        </ul>
      </div>
      <div class="footer-col footer-contact">
        <h4>Contacto</h4>
        <ul>
          <li>${I.mail}<a href="mailto:${EMAIL}">${EMAIL}</a></li>
          <li>${I.wa}<a href="${WA}">+51 974 789 855</a></li>
          <li>${I.pin}<span>Lima, Perú</span></li>
          <li>${I.clock}<span>Lun — Vie · 9:00 – 18:00</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© <span data-year>2026</span> AXUM Corredores de Seguros · Todos los derechos reservados</div>
      <div class="legal"><span>Confianza para entender · Criterio para decidir</span></div>
    </div>
  </div>
</footer>
<a class="wa-float" href="${WA}" aria-label="Escríbenos por WhatsApp" target="_blank" rel="noopener">${I.wa32}</a>
<script src="/assets/js/main.js?v=${ASSET_V}" defer></script>`;
}

function cta(title, eyebrow) {
  return `<section class="cta-band" aria-labelledby="cta-h">
  <div class="narrow">
    <span class="eyebrow center" data-reveal>${eyebrow || 'Dialoguemos'}</span>
    <h2 class="h2" id="cta-h" data-reveal data-d="1" style="margin-top:1rem;">${title}</h2>
    <div class="hero-actions" data-reveal data-d="2">
      <a class="btn btn-white btn-lg" href="${L('/contacto')}">Agendar conversación ${ARROW}</a>
      <a class="btn btn-light btn-lg" href="${WA}">WhatsApp</a>
    </div>
  </div>
</section>`;
}

function pageHero({ crumb, eyebrow, h1, lead, extra }) {
  const trail = crumb.map((c, i) =>
    i === crumb.length - 1 ? `<span>${c[0]}</span>` : `<a href="${L(c[1])}">${c[0]}</a> / `).join('');
  return `<section class="page-hero">
  <div class="container">
    <nav class="breadcrumb" aria-label="Ruta de navegación">${trail}</nav>
    <span class="eyebrow" style="margin-top:1.2rem;">${eyebrow}</span>
    <h1>${h1}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ''}${extra || ''}
  </div>
</section>`;
}

/* ---------- HTML shell ---------- */
function shell(p) {
  const jsonld = (p.jsonld || []).map(j =>
    `<script type="application/ld+json">\n${JSON.stringify(j, null, 2)}\n</script>`).join('\n');
  const canonical = SITE + L(p.canonical);
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${p.title}</title>
<meta name="description" content="${p.desc}">
${p.keywords ? `<meta name="keywords" content="${p.keywords}">` : ''}
<meta name="author" content="AXUM Corredores de Seguros">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${p.ogType || 'website'}">
<meta property="og:locale" content="es_PE">
<meta property="og:site_name" content="AXUM Corredores de Seguros">
<meta property="og:title" content="${p.ogTitle || p.title}">
<meta property="og:description" content="${p.ogDesc || p.desc}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${OG}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="AXUM Corredores de Seguros">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${p.ogTitle || p.title}">
<meta name="twitter:description" content="${p.ogDesc || p.desc}">
<meta name="twitter:image" content="${OG}">
<meta name="theme-color" content="#187098">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/favicon.svg">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap">
<link rel="stylesheet" href="/assets/css/styles.css?v=${ASSET_V}">
${jsonld}
</head>
<body>
${header(p.active || '')}
<main>
${p.main}
</main>
${footer()}
</body>
</html>
`;
}

/* JSON-LD helpers */
function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, i) => ({
      "@type": "ListItem", "position": i + 1, "name": it[0], "item": SITE + L(it[1])
    }))
  };
}
function serviceLd(name, desc, url) {
  return {
    "@context": "https://schema.org", "@type": "Service", "name": name, "description": desc,
    "serviceType": name, "url": SITE + L(url), "areaServed": { "@type": "Country", "name": "Perú" },
    "provider": { "@type": "InsuranceAgency", "name": "AXUM Corredores de Seguros", "url": SITE + "/" }
  };
}
function articleLd(title, desc, url) {
  return {
    "@context": "https://schema.org", "@type": "BlogPosting", "headline": title, "description": desc,
    "url": SITE + L(url), "inLanguage": "es-PE",
    "author": { "@type": "Organization", "name": "AXUM Corredores de Seguros" },
    "publisher": { "@type": "Organization", "name": "AXUM Corredores de Seguros", "logo": { "@type": "ImageObject", "url": SITE + "/assets/img/logo-axum.png" } },
    "image": OG, "mainEntityOfPage": SITE + L(url)
  };
}

console.log('Building AXUM site…');
require('./pages')({ ROOT, SITE, OG, WA, EMAIL, ARROW, I, L, shell, cta, pageHero, breadcrumb, serviceLd, articleLd, writePage });

/* ---------- writer ---------- */
function writePage(rel, html) {
  const full = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, 'utf8');
  console.log('  ✓', rel);
}
