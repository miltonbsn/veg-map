const CACHE_NAME = 'veg-cache-vx';
const urlsToCache = [
    '/',
    './index.html',
    './static/js/bundle.js',
    './static/js/bundle.js.map',
    'https://fonts.googleapis.com/css?family=Raleway',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2',
    'https://api.foursquare.com/v2/venues/explore?client_id=M3NWSYKLIE0VD1QNNS1DAJJ0TL3TQNIMD2D4P240N11KWZHP&client_secret=NPFWAHR4B02KDKZEK4HIVU23V3V3151ABSZEV23GVNS04TC2&v=20180711&ll=-27.6221602,-48.4918816&query=comida%20vegetariana&limit=50'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
