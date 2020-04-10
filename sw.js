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


self.addEventListener('fetch',req => {
    req.respondWith(
        caches.match(req.request)
        .then(resp => {
            return resp || fetch(req.request).then(response => {
                if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                  }
                return caches.open(version).then(cache => {
                    cache.put(req.request,response.clone());
                    return response;
                })
            })
        })
    )    
})