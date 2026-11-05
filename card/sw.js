// Service worker for the contact card. Precaches the card shell so it opens
// offline (event venues with poor signal) and serves everything cache-first,
// refreshing in the background. Bump VERSION when card files change.
const VERSION = 'card-v1';
const SHELL = [
  './', './index.html', './manifest.webmanifest', './praveen-vijayan.vcf',
  './qr-link.svg', './qr-offline.svg',
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
