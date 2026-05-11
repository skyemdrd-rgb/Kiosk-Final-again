const CACHE_NAME = 'msc-kiosk-v1';

const urlsToCache = [

  './',
  './index.html',
  './style.css',
  './script.js',

  './interface/home.png',
  './interface/about.png',
  './interface/guide.png',
  './interface/restaurant.png',
  './interface/msc.png',

  './map/msc-map.png',
  './map/msc-2nd-floor.png',
  './map/msc-3rd-floor.png',
  './map/msc-4th-floor.png',

  './map/old-building-map.png',
  './map/old-building-2nd-floor.png',
  './map/old-building-3rd-floor.png'

];

self.addEventListener('install', event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))

  );

});

self.addEventListener('fetch', event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => {

        return response || fetch(event.request);

      })

  );

});