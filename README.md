# 🍬 Şeker Yağmuru 5.5.4

60 bölümlük eşleştirme oyunu. Yayımlama için bu klasörün **içindeki tüm dosyaları** GitHub deposunun köküne yükleyin; ZIP dosyasını tek başına yüklemeyin.

## v5.5.4 düzeltmeleri

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
