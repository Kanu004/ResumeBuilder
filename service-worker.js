// service-worker.js

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('resume-builder-cache-v1').then((cache) => {
        return cache.addAll([
          './',
          './resumeBuilder.html',
          './manifest.json',
          './android-chrome-192x192.png',
          './android-chrome-512x512.png',
          './favicon.ico',
          'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
        ]);
      })
    );
    console.log('Service Worker installed.');
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
  });
  