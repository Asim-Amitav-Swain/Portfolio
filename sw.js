var version = 'portfolio';

var cachedAssets = [
    '/Portfolio/',
    '/Portfolio/index.html',
    '/Portfolio/assets/images/goup.png',
    '/Portfolio/assets/images/waving-hand.png'
];

self.addEventListener('install',e => {
    e.waitUntil(
        caches.open(version)
        .then(cache => cache.addAll(cachedAssets))
        .catch(err => console.log('Error'))
    );
})
