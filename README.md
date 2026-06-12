# AXUM Corredores de Seguros — sitio web

Sitio estático (HTML + CSS + JS, sin frameworks) que reemplaza la versión de WordPress de **axum.pe**.
Mismo contenido, nueva estructura multipágina, diseño premium (navy + dorado) y SEO técnico completo.

## Estructura

```
/
├── index.html                     Home
├── nosotros.html                  Quiénes somos · Método AXUM · Respaldo
├── soluciones.html                Índice de soluciones
├── soluciones/                    4 servicios
│   ├── auditoria-de-riesgos.html
│   ├── ingenieria-de-contratos.html
│   ├── eficiencia-de-capital.html
│   └── defensa-en-siniestros.html
├── sectores.html                  Índice de sectores
├── sectores/                      6 sectores
│   ├── mineria.html  energia.html  manufactura-construccion.html
│   └── corporativo.html  pymes.html  agroindustria.html
├── apuntes.html                   Blog (índice)
├── apuntes/                       3 artículos
├── contacto.html                  Formulario → WhatsApp
├── 404.html
├── assets/
│   ├── css/styles.css             Sistema de diseño completo
│   ├── js/main.js                 Nav móvil, scroll-reveal, formulario
│   └── img/                       favicon.svg, og-image.png, fotos de sectores
├── sitemap.xml  robots.txt  site.webmanifest  vercel.json
└── build/                         (solo desarrollo — ver abajo)
```

## Editar contenido

Todo el HTML se genera desde **una sola fuente de verdad** para mantener header/footer/SEO
idénticos en las 20 páginas. No edites los `.html` a mano: edita el contenido en
`build/pages.js` y vuelve a generar.

```bash
node build/build.js     # regenera todos los .html
```

(El header, footer y la estructura del `<head>` viven en `build/build.js`.)

> Si prefieres editar el HTML directamente, también puedes hacerlo: son archivos estáticos
> normales. Solo recuerda replicar el cambio en `build/pages.js` si luego vuelves a generar.

## Vista previa local

```bash
node dev-server.js      # http://localhost:8137  (emula las "clean URLs" de Vercel)
```

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio (GitHub/GitLab) o usa `vercel` CLI.
2. En Vercel: **Framework Preset = Other**, sin build command, output = raíz del proyecto.
3. `vercel.json` ya activa cabeceras de seguridad y caché de assets, y la redirección `/index.html → /`.
4. Conecta el dominio **axum.pe** en *Settings → Domains*.

Los enlaces internos usan extensión `.html` explícita, así funcionan igual en
Live Server, `file://`, Vercel, Netlify, Cloudflare Pages o cualquier hosting estático
—sin reglas de reescritura.

## Diseño

Tema claro y corporativo. Una sola tipografía (**Source Sans 3**) para máxima velocidad.
Colores tomados exactamente del logo:

- Azul de marca `#187098` (primario)
- Dorado `#c89800` (acento, uso discreto)
- Blanco dominante + gris claro `#f5f8fa` para secciones alternas

## SEO aplicado

- `<title>` y `meta description` únicos por página + `meta keywords`.
- Open Graph + Twitter Card con imagen `og-image.png` (1200×630).
- Canonical por página y `sitemap.xml` + `robots.txt`.
- Datos estructurados **JSON-LD**: `InsuranceAgency`, `WebSite`, `BreadcrumbList`,
  `Service`, `BlogPosting`, `ItemList`, `ContactPage`.
- HTML semántico (un solo `h1` por página, jerarquía de encabezados, `aria-*`, `alt`).
- Rendimiento: CSS/JS propios y ligeros, imágenes `loading="lazy"`, fuentes con `preconnect`.

## Pendientes recomendados (necesito tus datos)

- [ ] **RUC y dirección fiscal exacta** → para reforzar el schema `InsuranceAgency`
      (campos `address`, `taxID`) y aparecer mejor en búsquedas locales.
- [ ] **Google Search Console**: verificar el dominio y enviar `sitemap.xml`.
- [ ] **Analítica** (Google Analytics 4 o Plausible): dime cuál y la añado.
- [ ] **Registro SBS**: si AXUM está registrado como corredor ante la SBS, conviene
      mostrar el N.º de registro en el footer (requisito habitual del sector).
- [ ] Redes sociales (LinkedIn, etc.) → para enlazar en footer y `sameAs` del schema.
