// Şeker Yağmuru 5.5.3 · fast startup: media fetched and cached on demand.
const CACHE='sy-game-web-v553-desktop-20261121';
const PRECACHE=['./','./index.html','./manifest.webmanifest',"./game-icon-256.png","./icon-192.png","./icon-512.png","./sy-pastane-background.webp","./sy-pastane-title.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(names=>Promise.all(names.filter(n=>n.startsWith('sy-game-web-')&&n!==CACHE).map(n=>caches.delete(n)))),self.clients.claim()]))});
self.addEventListener('fetch',e=>{
  // Byte-range MP3 is managed by the browser; caching partial 206 responses can disrupt seeking on mobile.
  if(e.request.headers.has('range'))return;
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(res=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',clone)).catch(()=>{})}return res}).catch(()=>caches.match('./index.html')));
  }else{
    e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then(c=>c.put(e.request,clone)).catch(()=>{})}return res})));
  }
});
