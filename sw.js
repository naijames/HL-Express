const CACHE_NAME = 'hl-express-v1';
const ASSETS = [
  './',
  './index.html',
  './icon-192.png',
  './icon-512.png',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
