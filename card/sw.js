// Service worker for the contact card. Precaches the card shell so it opens
// offline (event venues with poor signal) and serves everything cache-first,
// refreshing in the background. Bump VERSION when card files change.
// praveen-vijayan.vcf?n=<note> is answered here: the plain vCard with a NOTE line added,
// so the visitor saves where they met Praveen without a separate file per event.
const VERSION = 'card-v2';
const SHELL = [
  './', './index.html', './manifest.webmanifest', './praveen-vijayan.vcf',
  './qr-link.svg', './qr-offline.svg', './qrcode.js',
  './icon-192.png', './icon-512.png', './icon-512-maskable.png',
  '../tokens.css', '../assets/praveen.jpg', '../favicon.svg', '../favicon.png', '../apple-touch-icon.png'
];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  if (!sameOrigin && !FONT_HOSTS.includes(url.host)) return;
  if (sameOrigin && url.pathname.endsWith('/praveen-vijayan.vcf') && url.searchParams.get('n')) {
    e.respondWith(vcardWithNote(url.searchParams.get('n').trim()));
    return;
  }

  e.respondWith(
    caches.open(VERSION).then(async cache => {
      const cached = await cache.match(req, { ignoreSearch: sameOrigin });
      const refresh = fetch(req).then(res => {
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      }).catch(() => null);
      if (cached) { e.waitUntil(refresh); return cached; }
      const fresh = await refresh;
      if (fresh) return fresh;
      if (req.mode === 'navigate') return cache.match('./index.html');
      return Response.error();
    })
  );
});

const unfold = t => t.split(/\r?\n/).reduce((a, l) => { if (l[0] === ' ' || l[0] === '\t') a[a.length - 1] += l.slice(1); else if (l) a.push(l); return a; }, []);
const fold = l => { const out = []; while (l.length > 75) { out.push(l.slice(0, 75)); l = ' ' + l.slice(75); } out.push(l); return out.join('\r\n'); };
const esc = s => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n');

async function vcardWithNote(note) {
  const plain = new Request(new URL('./praveen-vijayan.vcf', self.location).href);
  const cache = await caches.open(VERSION);
  const res = (await cache.match(plain)) || (await fetch(plain).catch(() => null));
  if (!res || !res.ok) return Response.error();
  const lines = unfold(await res.text()).filter(l => !/^NOTE[;:]/.test(l));
  if (note) {
    const at = lines.findIndex(l => /^(PHOTO[;:]|END:VCARD)/.test(l));
    lines.splice(at, 0, 'NOTE:' + esc(note));
  }
  return new Response(lines.map(fold).join('\r\n') + '\r\n', {
    headers: {
      'Content-Type': 'text/x-vcard; charset=utf-8',
      'Content-Disposition': 'inline; filename="praveen-vijayan.vcf"',
      'Cache-Control': 'no-store'
    }
  });
}
