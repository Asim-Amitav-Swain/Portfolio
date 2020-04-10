var version = 'portfolio';

var cachedAssets = [
    '/',
    'index.html',
    'assets/images/goup.png',
    'assets/images/waving-hand.png'
];

self.addEventListener('install',e => {
    e.waitUntil(
        caches.open(version)
        .then(cache => cache.addAll(cachedAssets))
        .catch(err => console.log('Error'))
    );
})
