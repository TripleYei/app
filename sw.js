
let CACHE_NAME = 'my-cache';
let urlsToCache = [
    'img/apple-touch-icon.png',    
    'img/favicon-32x32.png',
    'img/favicon-16x16.png',
    'sw.js'

    ];

self.addEventListener("install", event => {
   console.log("Service worker installed");
});
self.addEventListener("activate", event => {
   console.log("Service worker activated");
});

 self.addEventListener('fetch',() => console.log("fetch"));