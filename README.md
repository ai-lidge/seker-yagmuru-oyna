# 🍬 Şeker Yağmuru 5.5.7

60 bölümlük eşleştirme oyunu. Yayımlama için bu klasörün **içindeki tüm dosyaları** GitHub deposunun köküne yükleyin; ZIP dosyasını tek başına yüklemeyin.

## v5.5.4 — Günlük mücadele, başlangıç dengesi ve masaüstü ölçeği

- Günlük mücadelede **Yenile** artık aynı günlük başlangıç tahtasını 18 hamle, 03:00 süre ve sıfır yardımcı hakla yeniden başlatır; normal bölüm haklarına geri dönmez.
- Geçerli eşleştirmede **Kalan Hamle** sayısı, eşleşme animasyonunun bitmesini beklemeden hemen güncellenir. Geçersiz yer değiştirme hamle tüketmez.
- Masaüstü **Oyun alanı → Kompakt / Otomatik / Büyük** seçimi artık oyun tahtasını gerçekten yeniden boyutlandırır. Mobil genişlik kuralları korunur.
- İlk 1–14 bölümün puan hedefleri düşürüldü; 1–14. bölümlere kademeli ek hamle ve süre tanındı. 1–5. bölümlerde daha az şeker türü bulunur; 1–10. bölümlerin başlangıcında birden fazla geçerli hamle garantilenir.
- Ana menünün altındaki «Hareketli menü alternatifi» ibaresi kaldırıldı, sürüm bilgisi güncellendi.
- Açık renkli HUD'daki toplam puan yazısının kontrastı artırıldı.
- Önceki kaydedilmiş oyunlar ve masaüstü boyut tercihleri korunur. PWA önbellek sürümü yenilendi.

## GitHub Pages'e elle yayımlama

1. GitHub'daki `seker-yagmuru-oyna` deposunu açın.
2. Yedek almak istiyorsanız eski sürümü önce yerel bilgisayarınıza indirin.
3. Bu sürüm ZIP'ini bilgisayarınızda **çıkarın**.
4. Klasörün içindeki `index.html`, `sw.js`, `manifest.webmanifest`, ikon, görüntü ve tüm ses dosyalarını seçin.
5. GitHub'da **Add file → Upload files** bölümünden hepsini depodaki aynı dizine yükleyin. Aynı isimli dosyaların üzerine yazın.
6. **Commit changes** seçeneğini kullanın. GitHub Pages dalı ve klasörü daha önce ayarlandıysa ayrıca değiştirmeniz gerekmez.
7. Site açıldığında bir kez yenileyin. Önbellek nedeniyle eski sürüm görünürse kapatıp tekrar açın veya zorla yenileyin.

> Önemli: `index.html` tek başına ZIP paketinin dışına çıkarılırsa görsel ve sesler için aynı dizindeki diğer dosyalar gerekir. Ayrı verilen `tek-dosya.html` tüm medyayı içinde taşır; GitHub Pages'e yüklemek için **bu ZIP içindeki `index.html`** tercih edilmelidir.

## Notlar

- Bölüm kayıtları tarayıcının yerel depolamasında tutulur. Aynı origin ve tarayıcıda sürüm değişimi bunları silmez.
- Günlük mücadele başlangıç değerleri değiştirilmedi. Yeni başlayanlara özel kolaylaştırmalar günlük meydan okuma tahtalarına uygulanmaz.
- Gerçek mobil cihazlarda, farklı tarayıcılarda ve dağıtımdan sonra HTTPS/PWA kurulumunda ayrıca kontrol önerilir.

## v5.5.5 — PC ekranına sığdırma

- 900 piksel ve üzeri masaüstü ekranlarda oyun tahtası solda, puan/süre/hamle ve yardımcı kontroller sağda görünür. Tahta ekran yüksekliğini aşmaz.
- Ana menü geniş ekranlarda iki sütuna ayrıldı; alt düğmeler görünür alana taşındı.
- Oyun alanı boyutu tercihi (Otomatik/Büyük/Kompakt), dokunmatik mobil görünüm ve mevcut oyun kaydı korunur.
- Tam ekran düğmesinin açık arka plan üzerindeki kontrastı artırıldı.
- Servis çalışanı önbelleği sürüm yükseltildi.

## v5.5.6 — Performans optimizasyonu

- Şekerlerin hareketi yeniden yerleşim hesabı isteyen `left/top` animasyonu yerine GPU tarafından işlenebilen `transform: translate3d()` animasyonuyla yapılır. Oyun tahtası ve başlangıç konumları aynı kalır.
- Bölüm hedefi, ilerleme ve yardımcı kontrollerin aynı DOM metnini ve erişilebilirlik özniteliklerini gereksiz yere tekrar yazması engellendi.
- Patlama, parıltı, düşüş ve diğer görsel efektlerin yoğunluğu, müzikleri, süre ve hamle kuralları değiştirilmedi.
- 1366×768, 900×600 ve 390×844 ekranlarda 64 şekerin yerleşimi doğrulandı. Otomatik Chromium karşılaştırmalarında daha az yerleşim hesabı görüldü; her fiziksel cihazda sabit FPS artışı garanti edilmez.
- GitHub Pages/PWA çevrimdışı önbellek kimliği yenilendi. Eski kayıtlar korunur.

## v5.5.7 — Erişilebilirlik, performans ve çevrimdışı müzik

- Ayarlardaki **Hareketleri azalt** seçeneği ve işletim sisteminin `prefers-reduced-motion` tercihi şeker konum geçişlerini de durdurur.
- 64 şekere kalıcı GPU katmanı rezervasyonu kaldırıldı. `will-change:transform` yalnızca gerçekten hareket eden şekerlerde geçici olarak açılır ve geçiş bitince temizlenir.
- Tahtadaki şekerlerde daha önce `transform` ile birlikte yazılan gereksiz `style.left/top` kodları temizlendi; rehber, kıvılcım ve diğer görsel efektlerin konumlandırılması korunmuştur.
- Kullanıcıya gösterilen sürüm bilgileri tek `APP_VERSION` sabitinden üretilir. Emeği Geçenler, paylaşım mesajı, final başarı kartı ve geri bildirim sürüm numarası düzeltildi.
- Güncel PWA servis çalışanı, temel varlıklara ek olarak 11 MP3'ü de ilk çevrimiçi kurulum sırasında önbelleğe almayı **dener**. Tam olarak önbelleğe alınmış müzikleri çevrimdışıyken HTTP `Range`/206 yanıtlarıyla dinlemek mümkün olur. Ağ/kota nedeniyle eksik dosyalar çevrimdışı çalmayabilir; indirme tamamlanmadan çevrimdışı moda geçmeyin.
- İlk kurulum sırasında yaklaşık 3 MB ek müzik trafiği oluşabilir. Çevrimdışı müzik önbelleklemesi başarılı olsa da iOS/Android ve farklı tarayıcılarda gerçek cihaz testi önerilir.
- Oyun kuralları, bölüm hedefleri, kayıt anahtarları, sesler ve görsel efektlerin yoğunluğu değiştirilmedi.

**Not:** Depoda `index.html`, `manifest.webmanifest` ve `sw.js` birlikte güncellenmelidir. ZIP'i değil, içindeki dosyaları GitHub'a yükleyin. Bu paket otomatik olarak GitHub'da yayımlanmaz.

## v5.5.7 — Erişilebilirlik, performans ve çevrimdışı müzik

- Ayarlardaki **Hareketleri azalt** seçeneği ve işletim sisteminin `prefers-reduced-motion` tercihi şeker konum geçişlerini de durdurur.
- 64 şekere kalıcı GPU katmanı rezervasyonu kaldırıldı. `will-change:transform` yalnızca gerçekten hareket eden şekerlerde geçici olarak açılır ve geçiş bitince temizlenir.
- Tahtadaki şekerlerde daha önce `transform` ile birlikte yazılan gereksiz `style.left/top` kodları temizlendi; rehber, kıvılcım ve diğer görsel efektlerin konumlandırılması korunmuştur.
- Kullanıcıya gösterilen sürüm bilgileri tek `APP_VERSION` sabitinden üretilir. Emeği Geçenler, paylaşım mesajı, final başarı kartı ve geri bildirim sürüm numarası düzeltildi.
- Güncel PWA servis çalışanı, temel varlıklara ek olarak 11 MP3'ü de ilk çevrimiçi kurulum sırasında önbelleğe almayı **dener**. Tam olarak önbelleğe alınmış müzikleri çevrimdışıyken HTTP `Range`/206 yanıtlarıyla dinlemek mümkün olur. Ağ/kota nedeniyle eksik dosyalar çevrimdışı çalmayabilir; indirme tamamlanmadan çevrimdışı moda geçmeyin.
- İlk kurulum sırasında yaklaşık 3 MB ek müzik trafiği oluşabilir. Çevrimdışı müzik önbelleklemesi başarılı olsa da iOS/Android ve farklı tarayıcılarda gerçek cihaz testi önerilir.
- Oyun kuralları, bölüm hedefleri, kayıt anahtarları, sesler ve görsel efektlerin yoğunluğu değiştirilmedi.

**Not:** Depoda `index.html`, `manifest.webmanifest` ve `sw.js` birlikte güncellenmelidir. ZIP'i değil, içindeki dosyaları GitHub'a yükleyin. Bu paket otomatik olarak GitHub'da yayımlanmaz.

## v5.5.7 — Erişilebilirlik, performans ve çevrimdışı müzik

- Ayarlardaki **Hareketleri azalt** seçeneği ve işletim sisteminin `prefers-reduced-motion` tercihi şeker konum geçişlerini de durdurur.
- 64 şekere kalıcı GPU katmanı rezervasyonu kaldırıldı. `will-change:transform` yalnızca gerçekten hareket eden şekerlerde geçici olarak açılır ve geçiş bitince temizlenir.
- Tahtadaki şekerlerde daha önce `transform` ile birlikte yazılan gereksiz `style.left/top` kodları temizlendi; rehber, kıvılcım ve diğer görsel efektlerin konumlandırılması korunmuştur.
- Kullanıcıya gösterilen sürüm bilgileri tek `APP_VERSION` sabitinden üretilir. Emeği Geçenler, paylaşım mesajı, final başarı kartı ve geri bildirim sürüm numarası düzeltildi.
- Güncel PWA servis çalışanı, temel varlıklara ek olarak 11 MP3'ü de ilk çevrimiçi kurulum sırasında önbelleğe almayı **dener**. Tam olarak önbelleğe alınmış müzikleri çevrimdışıyken HTTP `Range`/206 yanıtlarıyla dinlemek mümkün olur. Ağ/kota nedeniyle eksik dosyalar çevrimdışı çalmayabilir; indirme tamamlanmadan çevrimdışı moda geçmeyin.
- İlk kurulum sırasında yaklaşık 3 MB ek müzik trafiği oluşabilir. Çevrimdışı müzik önbelleklemesi başarılı olsa da iOS/Android ve farklı tarayıcılarda gerçek cihaz testi önerilir.
- Oyun kuralları, bölüm hedefleri, kayıt anahtarları, sesler ve görsel efektlerin yoğunluğu değiştirilmedi.

**Not:** Depoda `index.html`, `manifest.webmanifest` ve `sw.js` birlikte güncellenmelidir. ZIP'i değil, içindeki dosyaları GitHub'a yükleyin. Bu paket otomatik olarak GitHub'da yayımlanmaz.
