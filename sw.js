// Şeker Yağmuru 4.8.0 · opt-in offline asset cache.
const CACHE='sy-game-web-v480-flat-df400d2460';
const PRECACHE=['./','./index.html','./manifest.webmanifest',"./game-icon-256.png","./icon-192.png","./icon-512.png","./music-1-aef72e2273a9.mp3","./music-2-6fcd4246939e.mp3","./music-3-051abd2e50d3.mp3"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(names=>Promise.all(names.filter(n=>n.startsWith('sy-game-web-')&&n!==CACHE).map(n=>caches.delete(n)))),self.clients.claim()]))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(res=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',clone)).catch(()=>{})}return res}).catch(()=>caches.match('./index.html')));
  }else{
    e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then(c=>c.put(e.request,clone)).catch(()=>{})}return res})));
  }
});
