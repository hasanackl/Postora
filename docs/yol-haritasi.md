# Postora: Yol Haritası (frontend-only sürüm)

## Kararlar

| Konu | Karar |
|---|---|
| Konu | Çok kategorili ilan sitesi (vasıta, emlak, elektronik, giyim, ...) |
| Veri | Backend yok. Veriler `data/seed.ts` içinde başlar, `useReducer` store'unda tutulur, `localStorage`'a kaydedilir |
| Backend | .NET backend ileride ayrı bir çalışma olarak eklenecek |
| İkonlar | Font Awesome (emoji yok) |
| Formlar | React Hook Form + Zod |
| Stil | Tailwind v4 (`@theme` tokenları) |
| URL'ler | İngilizce (`/listings`, `/login`, `/my-listings`, ...) |
| Dil | TR/EN (i18next) |
| Güvenlik sınırı | Demo şifreleri kodda görünür, roller tarayıcıdan değiştirilebilir. Bu gerçek güvenlik değil, arayüz simülasyonudur |

## Klasör yapısı (hedef)

```
src/
├─ components/
│  ├─ common/      Button, TextInput, SelectInput, TextArea, FieldError, Badge, StatusBadge,
│  │               EmptyState, ConfirmDialog, Toast, Pagination
│  ├─ layout/      Header, Sidebar, Footer, ScrollToTop, LanguageSwitcher
│  ├─ home/        HeroSection, CategoriesSection, LatestListingsSection
│  ├─ listing/     ListingCard, FavoriteButton, ListingForm, FilterPanel, Gallery
│  ├─ dashboard/   StatCard, DashboardNav, ...
│  ├─ admin/       ModerationTable, RejectDialog, charts
│  └─ routes/      ProtectedRoute, RoleRoute
├─ layouts/        PublicLayout, UserLayout, AdminLayout
├─ pages/
│  ├─ public/      Home, Listings, ListingDetail, Login, AdminLogin, Register, Unauthorized, NotFound
│  ├─ user/        Dashboard, MyListings, CreateListing, EditListing, Favorites, Orders, Notifications, Profile
│  └─ admin/       AdminDashboard, AdminListings, AdminUsers, AdminOrders, Reports, AuditLog, Settings
├─ store/          AppDataContext, AppDataProvider, reducer, actions
├─ context/        AuthContext, AuthProvider, ToastContext
├─ hooks/          useAuth, useAppData, useToast
├─ schemas/        Zod şemaları (login, register, listing, profile, password, reject)
├─ data/           seed.ts
├─ lib/            storage.ts (güvenli localStorage)
├─ types/          tek dosya = tek tip grubu
├─ constants/      categoryIcons, formClasses, statusStyles
├─ utils/          saf fonksiyonlar (date, formatPrice, getInitials, ...)
└─ i18n/           en, tr, index
```

`api/` ve `mocks/` klasörleri, store kurulunca `data/seed.ts` ve store ile değiştirilecek.

## Sayfalar ve URL'ler

| Alan | URL | Sayfa |
|---|---|---|
| Ziyaretçi | `/` | Ana sayfa (hero arama, kategoriler, son ilanlar) |
| | `/listings` | Katalog: arama, kategori/şehir/fiyat filtresi, sıralama, sayfalama |
| | `/listings/:id` | İlan detay: galeri, satıcı, sipariş talebi |
| | `/login` | Kullanıcı girişi |
| | `/admin/login` | Admin girişi |
| | `/register` | Kayıt (telefon ve şehir dahil) |
| | `/unauthorized` | 403 sayfası |
| | `*` | 404 sayfası |
| Kullanıcı | `/dashboard` | Özet: ilan, favori ve sipariş sayıları |
| | `/my-listings` | İlanlarım (durum filtresi) |
| | `/my-listings/new` | Çok adımlı ilan formu ve taslak |
| | `/my-listings/:id/edit` | Taslak veya reddedilen ilanı düzenleme |
| | `/favorites` | Favorilerim |
| | `/orders` | Siparişlerim |
| | `/notifications` | Bildirimler (onay, ret, sipariş) |
| | `/profile` | Profil bilgileri ve şifre değiştirme |
| Admin | `/admin` | Dashboard (KPI'lar, bekleyen ilanlar) |
| | `/admin/listings` | İlan moderasyonu: onayla, reddet (gerekçeli) |
| | `/admin/users` | Kullanıcılar: arama, pasife alma |
| | `/admin/orders` | Sipariş yönetimi |
| | `/admin/reports` | Raporlar (Recharts) |
| | `/admin/audit-log` | İşlem geçmişi |
| | `/admin/settings` | Demo verisini sıfırlama, JSON dışa aktarma |

## İlan durumları

```text
draft    ──(onaya gönder)─────> pending
pending  ──(admin onaylar)────> approved
pending  ──(admin reddeder)───> rejected
rejected ──(düzenle, gönder)──> pending
approved ──(arşivle)──────────> archived
```

İş kuralları:
- Herkese açık listede sadece `approved` ilanlar görünür.
- Kullanıcı sadece kendi ilanını düzenleyebilir.
- Ret gerekçesi en az 5 karakter olmalıdır.
- Aynı `(userId, listingId)` favorisi iki kez eklenemez.
- Kullanıcı kendi ilanına sipariş veremez.
- İptal edilen sipariş tekrar onaylanamaz.
- Pasif kullanıcı giriş yapamaz.
- Kayıtta rol seçilemez, herkes `user` olur.

## Nerede ne tutulur

| Tür | Yer |
|---|---|
| Sadece o ekranda geçici | `useState` (modal açık mı, form adımı) |
| Birden çok ekranın kullandığı | Store (Context + `useReducer`) |
| Yenilemede kalmalı | `localStorage` (store ve oturum) |
| Paylaşılabilir filtre | URL query (`useSearchParams`) |

---

## Adımlar

Her adımda sırayla: kodu yaz, test et, "kontrol et" de, git commit at.

### A. Temel
1. **Git ve README:** Postora klasöründe kendi git reposunu aç (`.gitignore` ile), README'ye kapsam bölümünü yaz, ilk commit'i at.
2. **Klasör düzeni:**
   - `components/layout/` ve `components/common/` klasörlerini aç, Header, Sidebar, Footer ve ScrollToTop'u `layout/` altına taşı.
   - `pages/` klasörünü `public/`, `user/` ve `admin/` alt klasörlerine böl.
3. **Güvenli depolama:** `lib/storage.ts` dosyasında `readStorage` ve `writeStorage` fonksiyonları, `try/catch` ile. Bozuk kayıt uygulamayı çökertmemeli, şu anki `getSavedUser` hatası bununla düzelecek.

### B. Veri katmanı
4. **Domain tipleri:**
   - `ListingStatus` 5 durumlu olacak.
   - `User` tipine `phone`, `cityId` ve `isActive` eklenecek.
   - Yeni tipler: `Order`, `Notification`, `AuditLog`.
5. **Seed verisi:** Bütün mock'lar tek `data/seed.ts` dosyasında toplanacak: kullanıcılar, kategoriler, şehirler, ilanlar (her durumdan en az bir tane), favoriler, siparişler.
6. **Store:** `AppDataContext`, `AppDataProvider`, `reducer` ve action'lar.
   - Store `useEffect` ile `localStorage`'a kaydedilir.
   - `useAppData` hook'u yazılır.
   - Favoriler store'a taşınır.
   - `api/` ve `mocks/` klasörleri kaldırılır.

### C. Ortak bileşenler ve formlar
7. **Ortak UI bileşenleri:** `Button`, `TextInput`, `SelectInput`, `TextArea`, `FieldError`, `Badge`, `StatusBadge`, `EmptyState`, `ConfirmDialog`.
8. **Toast:** `ToastContext` ve `useToast`. İşlem sonrası "Kaydedildi" gibi bildirimler için.
9. **React Hook Form + Zod kurulumu:** `schemas/` klasörü açılır. Zod hata mesajları i18n anahtarları olarak yazılır.

### D. Giriş ve yetki
10. **Giriş ve kayıt (RHF + Zod):**
    - E-posta biçimi kontrol edilir.
    - Şifre en az 8 karakter olmalı, harf ve rakam içermeli.
    - Telefon `05XX XXX XX XX` biçiminde olmalı.
    - Şehir seçimi zorunlu.
    - Şifre tekrarı eşleşmeli.
    - E-posta zaten kayıtlıysa hata verilir.
    - Kayıt olan kullanıcı store'a ve `localStorage`'a yazılır, yenilemede kaybolmaz.
11. **Ayrı admin girişi ve 403:**
    - `/admin/login` sayfası eklenir.
    - Girişten sonra role göre yönlendirilir: kullanıcı `/dashboard`'a, admin `/admin`'e.
    - `RoleRoute` yazılır, `/unauthorized` sayfası eklenir.
    - Pasif kullanıcı giriş yapamaz.
12. **Layout'lar:**
    - `PublicLayout`: Header, Sidebar, Footer
    - `UserLayout`: `NavLink` ile yan menü, `Outlet`
    - `AdminLayout`: ayrı yan menü
    - Route'lar bu layout'lara göre yeniden düzenlenir.

### E. Ziyaretçi ilan deneyimi (dokümandaki Sprint 3, adım 16–20)
13. **Ana sayfa:** Hero'ya arama çubuğu eklenir, arama `/listings?q=...` adresini açar. "Öne çıkan 3 ilan" bölümü ve CTA (İlan ver) eklenir.
14. **Katalog (`/listings`):** Sadece `approved` ilanlar gösterilir. Sonuç yoksa `EmptyState` görünür.
15. **URL filtreleri:**
    - Metin, kategori, şehir, min/maks fiyat. Filtrelerin tek kaynağı `useSearchParams`.
    - `useMemo` ile filtrelenmiş liste, `useDeferredValue` ile metin araması.
    - Filtre paneli `useState` ile geçici değer tutar.
    - Ölçüt: Filtreli adres yeni sekmede açılınca aynı sonuçlar gelir.
16. **Sıralama ve sayfalama:**
    - Fiyat (artan/azalan) ve en yeni. Sayfa başına 9 kart, `page` parametresi.
    - Önce filtrele, sonra sırala, en son `slice` ile dilimle.
    - Filtre değişince `page=1` olur. Sayfa sayısından büyük `page` değeri geçerli aralığa çekilir.
    - 9'dan fazla yayında ilan olsun diye seed'e ilan eklenir.
17. **İlan detayı ve galeri:**
    - Büyük fotoğraf ve küçük resim seçimi (`useState`).
    - Benzer ilanlar (`useMemo`): aynı kategoriden ilanlar.
    - Geçersiz id için açıklamalı 404 gösterilir. Onaylanmamış ilan herkese açılmaz.

> Not: Eski planda katalog ve galeri en sondaydı (28–29). Dokümandaki sprint sırasına uymak için buraya taşındı. Aşağıdaki adım numaraları 5 kaydı.

### F. Kullanıcı paneli
18. **Dashboard (`/dashboard`):** `StatCard` bileşenleri. İlan sayısı (duruma göre), favori, sipariş ve okunmamış bildirim sayıları.
19. **İlan ver (`/my-listings/new`):**
    - Çok adımlı form: 1) temel bilgi, 2) fiyat ve konum, 3) fotoğraflar (`useFieldArray` ile URL listesi), 4) önizleme.
    - "Taslak kaydet" ilanı `draft` olarak, "Onaya gönder" `pending` olarak kaydeder.
20. **İlanlarım (`/my-listings`):** Durum filtresi, `StatusBadge`, ret gerekçesi. Düzenle, sil (`ConfirmDialog` ile) ve arşivle işlemleri.
21. **İlan düzenle (`/my-listings/:id/edit`):** Form `reset` ile mevcut değerlerle dolar. Sadece `draft` ve `rejected` ilanlar düzenlenebilir. Başkasının ilanı açılmaz. İlan sahibi kendi onaylanmamış ilanını önizleyebilir.
22. **Favoriler:** Mevcut sayfa `UserLayout`'a taşınır.
23. **Sipariş:**
    - Detay sayfasındaki "Sipariş ver" butonu çalışır. Misafir giriş sayfasına gider, kendi ilanında buton pasiftir.
    - `/orders` sayfası eklenir, sipariş iptal edilebilir.
24. **Bildirimler (`/notifications`):** İlan onay ve ret bildirimleri, sipariş bildirimleri. Okundu işaretleme, Header'da sayı rozeti.
25. **Profil (`/profile`):** Ad, e-posta, telefon ve şehir güncelleme. Ayrı bir formda şifre değiştirme: mevcut şifre, yeni şifre ve tekrarı. RHF + Zod, `useId`.

### G. Admin paneli
26. **Admin dashboard (`/admin`):** KPI kartları ve bekleyen ilanlar listesi.
27. **İlan moderasyonu (`/admin/listings`):**
    - Duruma göre filtre, Onayla ve Reddet. Ret gerekçesi en az 5 karakter.
    - Her işlem bildirim ve işlem geçmişi kaydı oluşturur.
28. **Kullanıcılar (`/admin/users`):** Arama, rol ve durum filtresi, pasife alma ve aktif etme.
29. **Siparişler (`/admin/orders`):** Onaylama ve iptal etme.
30. **Raporlar (`/admin/reports`):** Recharts kurulumu. Kategoriye ve şehre göre ilan sayısı, durum dağılımı. `reduce` ve `useMemo` kullanılır.
31. **İşlem geçmişi (`/admin/audit-log`):** Kim, ne zaman, ne yaptı. Filtre ve sıralama.
32. **Ayarlar (`/admin/settings`):** Demo verisini seed'e sıfırlama (onaylı), verileri JSON olarak dışa aktarma.

### H. Kalite ve bitiriş
33. **Kod bölme:** Admin sayfaları `React.lazy` + `Suspense` ile ayrı yüklenir.
34. **Unit ve component testleri:** Vitest ve React Testing Library. Şemalar, reducer, `StatusBadge`, `ListingCard` ve formlar test edilir.
35. **E2E testi:** Playwright ile ana akış: kullanıcı ilan verir, admin onaylar, ziyaretçi ilanı katalogda görür.
36. **Son düzenlemeler:**
    - 404 ve 403 sayfalarının çevirisi.
    - Hakkımızda, Yardım, İletişim ve Güvenli alışveriş sayfaları.
    - `npm run build` hatasız çalışmalı, mobil görünüm kontrol edilmeli, README güncellenmeli.

### Sonra (ayrı çalışma)
- .NET onion backend: Domain, Persistence (EF Core), Application, Infrastructure (JWT), API. Bittiğinde store action'ları `fetch` çağrılarına bağlanacak.
