self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("komerscan-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png",
        "https://unpkg.com/html5-qrcode"
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
