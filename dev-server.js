// Minimal static server emulating Vercel cleanUrls for local preview. Not deployed.
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const PORT = process.env.PORT || 8137;
const TYPES = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'application/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.webmanifest':'application/manifest+json', '.xml':'application/xml', '.ico':'image/x-icon', '.txt':'text/plain; charset=utf-8' };
function send(res, code, body, type){ res.writeHead(code, { 'Content-Type': type || 'text/plain' }); res.end(body); }
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  let fp = path.join(ROOT, p);
  const tryFiles = [fp];
  if (!path.extname(p)) { tryFiles.push(fp + '.html', path.join(fp, 'index.html')); }
  for (const f of tryFiles) {
    if (fs.existsSync(f) && fs.statSync(f).isFile()) {
      return send(res, 200, fs.readFileSync(f), TYPES[path.extname(f)] || 'application/octet-stream');
    }
  }
  const nf = path.join(ROOT, '404.html');
  if (fs.existsSync(nf)) return send(res, 404, fs.readFileSync(nf), 'text/html; charset=utf-8');
  send(res, 404, 'Not found');
}).listen(PORT, () => console.log('dev server on http://localhost:' + PORT));
