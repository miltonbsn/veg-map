const CACHE_NAME = 'veg-cache-v3';
const urlsToCache = [
    '/',
    './index.html',
    './static/js/bundle.js',
    './static/js/bundle.js.map',
    'https://fonts.googleapis.com/css?family=Raleway',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2',
    'https://lh5.googleusercontent.com/p/AF1QipNtl0rTCoXaKQf4tljeohDDfZL3jsJfoLjFbQP5=w408-h306-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipNeIix1qz3YXI-wx78Oo84gCZQhQrQ7aIn9dQx9=w408-h544-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipMbFdm2xbJ_IU4jbRWl7OpI1lirucrV6jGv7veC=w408-h544-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipNjEOnYJOq6losgYeBGbSt6n-UxR8YQm4hQaVi8=w408-h306-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipPXueqR2pvzEyJhvXCL6PwWzDgUbqjb2odfLM7X=w408-h544-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipOIpFSzXFVEzDRQD0SsoFMSuNDhNAptG_CCFiW5=w408-h306-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipNSJQHy7_FPfqwzxudK0OB68SfCoUdmwYh8maga=w408-h306-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipMCgWAD_7UEcAF5h83oCSUIZ7Tal0VQsH-QGdH1=w408-h408-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipPXL0zEC73CxWKMQJuC4O_jqfgiC-s021uTCCuq=w408-h306-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipOBhPMRUydY_Eyi_dd7OHjpzjnFnVnrrPSKST-1=w408-h306-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipPvkSYihFp1x9duDgu6DydHECZ1ralNwR0lwt-_=w408-h510-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipN4TwQHBBvD-mfk4qMqbuNcQ95Fn-fEnJO0ilyw=w408-h272-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipMfLWapyY72G7GN7Vwo3lrroxvKOmz12jYqhBVl=w408-h229-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipP9kTMb5rOByURCfB3uNWF6xiufQnq_xQvQ2rzH=w408-h272-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipPTYQ4DJnX-QGGZcBYj0ogX3thVAStjQRNCfGpr=w408-h408-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipNg_nnLWZiiNbyBwn8vhJ9lKbHQ-c-A2JVA56aV=w408-h229-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipPdFGbK6NA7pvlZDpr0gPyntcQV9Wd9XWz-nGiz=w408-h229-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipNKdeF21XlecXG73a1OS2MWKHpIKMBiwUywfECo=w408-h304-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipNQLh4iVSlqXEQ9FgFBcQM7jv2TPFic0GqkkrlC=w408-h306-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipNNuIr3vqRZhr_hRz4hjKoRwM758Y-715IV1rpi=w408-h229-k-no',
    'https://lh5.googleusercontent.com/p/AF1QipNOJiCQKGuzyS5AZXBZ1BtoiBreiixdRaqBXGtC=w408-h306-k-no' 
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true })
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
