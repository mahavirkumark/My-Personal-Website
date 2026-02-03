const CACHE_NAME = "savig-v1";
// Add all your files here that you want to load INSTANTLY
const ASSETS = [
  "/",
  "/index.html",
  "/homemob.html",
  "https://cdn.tailwindcss.com",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
];

// Install Event: Save files to phone storage
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Fetch Event: Serve files from Cache first, then Network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached file if found, otherwise fetch from web
      return response || fetch(event.request);
    })
  );
});
