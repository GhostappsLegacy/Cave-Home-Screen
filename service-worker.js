const cacheName = 'v1';
const assetsToCache = [
    'index.html',
    'styles.css',
    '/path/to/your/logo.png',  // Ensure you list all essential assets here
    'app.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('Caching all the files');
                return cache.addAll(assetsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
