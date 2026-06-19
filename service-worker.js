const CACHE_NAME = "toolbox-cache-v3";

const FILES_TO_CACHE = [
  "index.html",
  "studenti.html",
  "lavoratori.html",
  "finanza.html",
  "salute.html",
  "auto-viaggi.html",
  "style.css",
  "script.js",
  "favicon.svg",
  "manifest.json"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
