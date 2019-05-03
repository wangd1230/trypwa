const staticAssets = [
    './',
    './style.css',
    './app.js'
];




self.addEventListener('install', event => {
    const cache = await cache.open('final-static');
    cache.addAll(staticAssets); 
});

self.addEventListener('fetch', event => {
    const req = event.request;
    event.respndWith(cacheFirst(req));
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}