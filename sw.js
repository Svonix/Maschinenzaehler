self.addEventListener('install',e=>{
  e.waitUntil(caches.open('mz-v1').then(c=>c.addAll([
    './','./index.html','./v2_2_5.html','./v2_2_6.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'
  ])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});