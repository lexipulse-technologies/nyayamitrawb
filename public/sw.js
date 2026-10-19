/**
 * NYAYAMITRA PRODUCTION SERVICE WORKER (v3.1 - Hardened)
 * Guaranteed Non-Failing Offline Rural Caching Engine
 * Safe against Dev Server HMR, missing assets, and navigation promise drops.
 */

const CACHE_NAME = 'nyayamitra-v3.1-cache';

const STATIC_PRECACHE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/robots.txt',
  '/sitemap.xml',
  '/assets/hero-banner.webp',
  '/assets/footer-banner.webp'
];

// Fallback HTML synthesized in memory so navigation can NEVER return undefined
const OFFLINE_FALLBACK_HTML = `<!doctype html>
<html lang="bn">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>NyayaMitra Offline</title>
  <style>
    body { font-family: sans-serif; background: #071626; color: #fff; text-align: center; padding: 40px 16px; margin: 0; }
    .card { max-width: 480px; margin: auto; background: #0a1e34; border: 1px solid #f59e0b; border-radius: 16px; padding: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    h2 { color: #f59e0b; margin-top: 0; }
    p { font-size: 14px; color: #cbd5e1; line-height: 1.6; }
    button { background: #059669; color: #fff; border: 0; padding: 10px 20px; font-weight: bold; border-radius: 8px; cursor: pointer; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <h2>অফলাইন মোড সক্রিয় (Offline Mode)</h2>
    <p>ইন্টারনেট সংযোগ সাময়িকভাবে বিচ্ছিন্ন হলেও আপনার ডিভাইসে ডেটা সংরক্ষিত রয়েছে। সংযোগ স্বাভাবিক হলে রিলোড করুন।</p>
    <button onclick="window.location.reload()">পুনরায় চেষ্টা করুন (Retry)</button>
  </div>
</body>
</html>`;

// Install Event: Tolerant precaching (Promise.allSettled prevents one missing asset from breaking the cache)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        STATIC_PRECACHE.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[PWA Precache Notice] Skipped asset:', url, err.message);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clear older cache versions immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Bulletproof routing with strict Return-Response guarantees
self.addEventListener('fetch', (event) => {
  // 1. Only intercept HTTP/HTTPS GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);

  // 2. Ignore non-HTTP schemes (chrome-extension://, edge://, etc.)
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // 3. Bypass serverless API endpoints and Vite dev internals (Hot Module Replacement, /@vite, @fs)
  if (
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/@') ||
    url.pathname.includes('node_modules') ||
    url.search.includes('t=')
  ) {
    return;
  }

  // 4. Navigation Requests (URL changes, SPA routes, deep links with query parameters)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Attempt network first to ensure fresh data
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, clone);
            return networkResponse;
          }
        } catch {
          // Network failed or offline - fall through to cache
        }

        // Cache fallback: Try requested URL, then /index.html, then /
        const cached =
          (await caches.match(event.request)) ||
          (await caches.match('/index.html')) ||
          (await caches.match('/'));

        if (cached) {
          return cached;
        }

        // Ultimate guarantee: Returns synthesized HTML response (NEVER undefined)
        return new Response(OFFLINE_FALLBACK_HTML, {
          status: 200,
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      })()
    );
    return;
  }

  // 5. Static Assets (Scripts, Styles, Fonts, Images) - Cache First with Network Fallback
  event.respondWith(
    (async () => {
      const cached = await caches.match(event.request);
      if (cached) {
        return cached;
      }

      try {
        const networkResponse = await fetch(event.request);
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (networkResponse.type === 'basic' || networkResponse.type === 'cors')
        ) {
          const clone = networkResponse.clone();
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, clone);
        }
        return networkResponse;
      } catch {
        // If offline and asset is not cached, return an empty 408 response rather than throwing undefined
        return new Response('', {
          status: 408,
          statusText: 'Asset unavailable offline'
        });
      }
    })()
  );
});