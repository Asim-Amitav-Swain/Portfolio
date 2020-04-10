const cacheName = 'v1';

const cacheAssest = [
    'index.html',
    'assets/scripts/main.js',
    // 'assets/images/goup.png',
    // 'assets/images/waving-hand.png',
];

// Call Install Event
self.addEventListener("install", e => {
  console.log("Service Worker Installed");

  e.waitUntil({

  })
});

self.addEventListener("activate", () => {
  console.log("Service Worker Activated");
});
