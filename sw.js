/* Fiches Claires — cache local ; les bibliothèques CDN ne sont disponibles hors ligne qu'après leur premier chargement réussi. */
const VERSION = 'fiches-claires-v1';
const LOCAL = ['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./ocr/worker.min.js','./ocr/tesseract-core-lstm.wasm.js','./ocr/fra-traineddata.wasm'];
self.addEventListener('install', event => event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(LOCAL)).then(()=>self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || !/^https?:/.test(req.url)) return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    event.respondWith(caches.match(req).then(hit=>hit || fetch(req).then(resp=>{if(resp.ok){const cp=resp.clone();caches.open(VERSION).then(c=>c.put(req,cp));}return resp;})));
  } else if (/^(cdnjs.cloudflare.com|cdn.jsdelivr.net|fonts.googleapis.com|fonts.gstatic.com)$/.test(url.hostname)) {
    event.respondWith(caches.match(req).then(hit=>hit || fetch(req).then(resp=>{if(resp.ok||resp.type==='opaque'){const cp=resp.clone();caches.open(VERSION).then(c=>c.put(req,cp));}return resp;})));
  }
});
