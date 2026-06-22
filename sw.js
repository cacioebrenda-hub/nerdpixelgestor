const CACHE_NAME = 'nerdpixel-gestor-v1';
const ARQUIVOS_PARA_CACHE = [
  './index.html',
  './manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ARQUIVOS_PARA_CACHE);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(nomes) {
      return Promise.all(
        nomes.filter(function(nome) { return nome !== CACHE_NAME; })
             .map(function(nome) { return caches.delete(nome); })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resposta) {
      return resposta || fetch(event.request);
    })
  );
});
