// Şeker Yağmuru v5.5.7 — offline game + best-effort full-track music cache.
const CACHE='sy-game-web-v557-offline-audio-20261123';
const PRECACHE=['./','./index.html','./manifest.webmanifest','./game-icon-256.png','./icon-192.png','./icon-512.png','./sy-pastane-background.webp','./sy-pastane-title.png'];
const TRACKS=["./music-1-aef72e2273a9.mp3", "./music-2-6fcd4246939e.mp3", "./music-3-051abd2e50d3.mp3", "./sy54-castle.mp3", "./sy54-chocolate.mp3", "./sy54-crystal.mp3", "./sy54-finale.mp3", "./sy54-garden.mp3", "./sy54-gift.mp3", "./sy54-ice.mp3", "./sy54-stone.mp3"];
const TRACK_PATHS=new Set(TRACKS.map(path=>new URL(path,self.registration.scope).pathname));

self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(PRECACHE);
  // Full 200 responses, never 206 fragments. Failures must not block installation.
  await Promise.allSettled(TRACKS.map(async path=>{
    const response=await fetch(new Request(path,{cache:'reload'}));
    if(!response.ok||response.status!==200)return;
    await cache.put(path,response);
  }));
  await self.skipWaiting();
})()));

self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const names=await caches.keys();
  await Promise.all(names.filter(name=>name.startsWith('sy-game-web-')&&name!==CACHE).map(name=>caches.delete(name)));
  await self.clients.claim();
})()));

// Serve single MP3 byte ranges from complete cached tracks, including offline.
async function audioRange(request){
  const cache=await caches.open(CACHE);
  const full=await cache.match(request.url,{ignoreVary:true});
  if(!full||full.status!==200)return fetch(request); // preserve native network range support
  const header=request.headers.get('range')||'';
  const match=/^bytes=(\d*)-(\d*)$/i.exec(header.trim());
  if(!match||(match[1]===''&&match[2]===''))return fetch(request);
  const data=await full.arrayBuffer();const total=data.byteLength;
  let start,end;
  if(match[1]===''){
    const suffix=Number(match[2]);
    if(!Number.isSafeInteger(suffix)||suffix<=0)return fetch(request);
    start=Math.max(0,total-suffix);end=total-1;
  }else{
    start=Number(match[1]);
    end=match[2]===''?total-1:Number(match[2]);
  }
  if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start> end||start>=total){
    return new Response(null,{status:416,headers:{'Content-Range':`bytes */${total}`,'Accept-Ranges':'bytes'}});
  }
  end=Math.min(end,total-1);
  const headers=new Headers();
  headers.set('Content-Type',full.headers.get('content-type')||'audio/mpeg');
  headers.set('Content-Range',`bytes ${start}-${end}/${total}`);
  headers.set('Content-Length',String(end-start+1));
  headers.set('Accept-Ranges','bytes');
  return new Response(data.slice(start,end+1),{status:206,headers});
}

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;
  if(request.headers.has('range')){
    if(TRACK_PATHS.has(url.pathname))event.respondWith(audioRange(request));
    return;
  }
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).then(response=>{
      if(response.ok){const clone=response.clone();caches.open(CACHE).then(cache=>cache.put('./index.html',clone)).catch(()=>{})}
      return response;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(request).then(hit=>hit||fetch(request).then(response=>{
    if(response.ok&&response.status===200){const clone=response.clone();caches.open(CACHE).then(cache=>cache.put(request,clone)).catch(()=>{})}
    return response;
  })));
});
