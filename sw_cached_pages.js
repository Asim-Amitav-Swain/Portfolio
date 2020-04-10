const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'assets/scripts/main.js',
    // 'assets/images/goup.png',
    // 'assets/images/waving-hand.png',
];

// Call Install Event
self.addEventListener("install", e => {
  console.log("Service Worker Installed");

  e.waitUntil(
    caches
    .open(cacheName)
    .then(cache => {
        console.log('Service Worker : Installed');
        cache.addAll(cacheAssets)
    })
  )
  .then(() => self.skipWaiting);
});

self.addEventListener("activate", () => {
  console.log("Service Worker Activated");
});
