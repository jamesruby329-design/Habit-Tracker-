const CACHE_NAME = 'habitflow-v2';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install: pre-cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => {
        console.warn('SW install cache failed:', err);
        return self.skipWaiting();
      })
  );
});

// Activate: wipe old caches immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch strategy
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') return;

  // Google Fonts: network first, cache fallback
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Navigation: network first, fall back to cached index.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match('./index.html') || caches.match('./'))
    );
    return;
  }

  // Everything else: cache first, then network
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, clone));
        }
        return res;
      }).catch(() => null);
    })
  );
});
