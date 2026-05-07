const CACHE_NAME = 'fastsave-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './api.js',
  './favicon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Best-effort caching. If one fails, others still cache.
      return Promise.allSettled(ASSETS.map(asset => cache.add(asset)));
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Cache hit - return response
      if (response) return response;
      return fetch(event.request);
    })
  );
});
