// Register service worker and cache files for offline use
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("static-v1").then(cache => {
      return cache.addAll([
        "/QRManager/index.html",
        "/QRManager/style.css",
        "/QRManager/index.js",
        "/QRManager/icons/icon-192x192.png",
        "/QRManager/icons/icon-512x512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
