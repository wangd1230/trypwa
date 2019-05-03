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
    console.log('fetch');
});