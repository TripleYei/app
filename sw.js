
let CACHE_NAME = 'my-cache';
let urlsToCache = [
    'img/apple-touch-icon.png',    
    'img/favicon-32x32.png',
    'img/favicon-16x16.png',
    'sw.js'

    ];

self.addEventListener("install", event => {
  console.log('Service Worker install event');
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      console.log("Service Worker: Caching files");
      return cache.addAll(cacheResources );
    })
    .catch(err => console.log(err))
  );
});




self.addEventListener("fetch", event => {
  console.log('Sw: fetching');
  event.respondWith(caches.match(event.request)
  .then(cachedResponse => {
    return cachedResponse || fetch(event.request)
  }))
})




