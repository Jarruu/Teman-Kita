# PRD Landing Page TemanKita

Oct 9, 2026 · @Rahmat Fajar Saputra

## 1. Ringkasan

TemanKita membutuhkan satu landing page bertema biru gelap yang meyakinkan calon klien dan mengarahkan mereka memesan lewat WhatsApp dalam kurang dari 30 detik.

**Produk:** website satu halaman (single page) untuk jasa joki TemanKita.

**Masalah:** calon klien sulit menilai apakah penyedia joki bisa dipercaya, berapa harganya, dan bagaimana cara memesan. Tanpa halaman resmi, pemesanan hanya bergantung pada chat acak di media sosial.

**Solusi:** halaman yang menjelaskan layanan, harga, alur pesan, dan bukti kepercayaan (testimoni, garansi, FAQ) dengan satu tombol ajakan bertindak (CTA) yang konsisten: Pesan Sekarang.

## 2. Tujuan dan Metrik

Tujuan utama landing page adalah mengubah pengunjung menjadi chat WhatsApp. Target di bawah adalah usulan awal dan perlu disesuaikan dengan data trafik nyata.

| Tujuan | Metrik | Target 30 hari pertama |
| --- | --- | --- |
| Konversi | Klik CTA WhatsApp / total pengunjung | ≥ 8% |
| Kepercayaan | Scroll sampai section testimoni | ≥ 50% pengunjung |
| Kecepatan | Largest Contentful Paint (LCP) di mobile | < 2,5 detik |
| Jangkauan | Pengunjung unik per bulan | ≥ 1.000 |
| Kualitas | Skor Lighthouse (Performance, SEO) | ≥ 90 |

## 3. Target Pengguna

Pengguna utama adalah mahasiswa dan pelajar usia 17–25 tahun yang mencari bantuan cepat lewat ponsel, biasanya dari Instagram, TikTok, atau pencarian Google.

| Persona | Kebutuhan | Hambatan |
| --- | --- | --- |
| Mahasiswa dikejar tenggat | Hasil cepat, harga jelas | Takut ditipu, tidak tahu harga wajar |
| Mahasiswa sibuk (kerja/organisasi) | Jadwal fleksibel, komunikasi lancar | Tidak sempat membandingkan banyak penyedia |
| Orang tua / pihak ketiga | Kejelasan prosedur dan garansi | Butuh bukti legitimasi |

Sekitar 90% pengunjung diperkirakan datang dari ponsel, sehingga desain dibuat mobile-first.

## 4. Ruang Lingkup

Versi pertama (MVP) hanya satu halaman statis dengan CTA ke WhatsApp.

**Termasuk (in-scope)**

- Landing page satu halaman, responsif, bahasa Indonesia
- Tombol WhatsApp dengan pesan otomatis terisi (pre-filled)
- Analitik dasar (pageview, klik CTA, scroll depth)
- SEO dasar: judul, deskripsi, Open Graph, sitemap

**Tidak termasuk (out-of-scope)**

- Login, dashboard klien, dan pembayaran online
- Sistem pelacakan pesanan (order tracking)
- Blog dan multi-bahasa
- Panel admin (konten diubah langsung di kode atau CMS ringan pada fase berikutnya)

## 5. Struktur Halaman dan Kebutuhan Fungsional

Halaman terdiri dari tujuh section berurutan; CTA muncul di navbar, hero, dan footer.

| # | Section | Isi dan perilaku | Prioritas |
| --- | --- | --- | --- |
| 1 | Navbar | Logo TemanKita, menu anchor (Layanan, Cara Kerja, FAQ), tombol Pesan; sticky saat scroll | Wajib |
| 2 | Hero | Headline singkat, subjudul satu kalimat, dua tombol (Pesan Sekarang, Lihat Layanan), lencana kepercayaan | Wajib |
| 3 | Layanan | Kartu layanan (nama, deskripsi singkat, estimasi waktu pengerjaan) | Wajib |
| 4 | Cara Kerja | Empat langkah: Chat, Kirim detail, Konfirmasi dan bayar, Terima hasil | Wajib |
| 5 | Testimoni dan Statistik | Angka (klien terbantu, rating) dan kutipan klien asli; baru ada 1 testimoni, tampilkan sebagai satu kutipan unggulan; angka statistik disembunyikan sampai datanya nyata | Wajib |
| 6 | FAQ | Akordeon 6–8 pertanyaan: keamanan data, revisi, waktu, pembayaran | Wajib |
| 7 | CTA Akhir dan Footer | Ajakan terakhir, kontak WhatsApp/Instagram, kebijakan privasi, hak cipta | Wajib |

**Kebutuhan fungsional utama**

1. Setiap tombol Pesan membuka `wa.me` dengan teks awal, misalnya nama paket yang dipilih.
2. Menu anchor melakukan smooth scroll dan menandai section aktif.
3. Menu navbar berubah menjadi hamburger di layar di bawah 768 px.
4. Klik CTA, buka FAQ, dan scroll depth tercatat sebagai event analitik.
5. Tombol WhatsApp mengambang (floating) tampil di mobile setelah pengguna melewati hero.

**Daftar layanan di section Layanan** (harga mulai dari Rp10.000)

| Kategori | Isi | Catatan tampilan |
| --- | --- | --- |
| Website | Web portofolio, company profile, toko online, landing page, web custom | Kartu utama, urutan teratas |
| Aplikasi mobile | Pembuatan aplikasi | Kartu terpisah |
| UI/UX | Desain antarmuka dan alur pengguna | Kartu terpisah |
| Dokumen akademik | Makalah, laporan, essay, review jurnal | Satu kartu gabungan |
| Resume | Penyusunan CV | Kartu terpisah |
| Tugas coding | Tugas pemrograman | Kartu terpisah |
| Presentasi | PPT dan presentasi | Kartu terpisah |
| Desain grafis | Logo, poster, infografis | Kartu terpisah |
| Instalasi software | Microsoft Office (Word, Excel, PowerPoint) di Windows 10/11 | Kartu terpisah; jelaskan di FAQ soal lisensi |
| Lainnya | Permintaan di luar daftar | Kartu ajakan: "Tanya dulu aja" lewat WhatsApp |

Karena harga bervariasi per kategori, harga ditanyakan lewat chat untuk penawaran pasti; tiap kartu layanan menyediakan tombol tanya.

## 6. Arahan Desain

Gayanya bersih, modern, dan tepercaya: latar putih dengan warna hijau soft sebagai warna utama. Semua warna solid, tanpa gradien di mana pun.

| Peran | Warna | Hex | Pemakaian |
| --- | --- | --- | --- |
| Latar halaman | Putih | #FFFFFF | Background semua section |
| Warna utama | Hijau soft | #2D6A4F | Judul, tombol CTA, navbar, footer, section CTA akhir |
| Utama saat hover | Hijau lebih gelap | #24583F | Hover tombol dan link |
| Aksen | Hijau | #1B7F5A | Ikon, link teks, penanda menu aktif |
| Border | Abu kehijauan terang | #D6E6DC | Garis kartu dan pemisah |
| Teks utama | Hijau gelap | #2D6A4F | Judul dan isi |
| Teks sekunder | Abu kehijauan | #4F6B5D | Deskripsi dan caption |
| Teks di atas hijau | Putih | #FFFFFF | Teks pada tombol dan blok hijau |

**Tipografi:** judul memakai Plus Jakarta Sans atau Poppins (bold), isi memakai Inter (regular, 16 px, tinggi baris 1,6).

**Nada bahasa:** santai dan akrab (pakai "kamu", kalimat pendek, tanpa jargon berat), tetap rapi agar terasa tepercaya. Contoh tombol: "Chat Dulu, Gratis Tanya-tanya".

**Komponen dan gaya**

- Tombol CTA solid hijau (#2D6A4F) dengan teks putih, sudut membulat (pill); saat hover berubah ke #24583F, tanpa gradien atau efek glow.
- Kartu berlatar putih, border 1 px #D6E6DC, sudut 12 px, tanpa bayangan tebal.
- Hero berlatar putih polos: headline hijau di kiri, ilustrasi atau mockup di kanan.
- Section CTA akhir dan footer berupa blok hijau solid dengan teks putih agar ada penutup yang tegas.
- Animasi masuk (fade-up) ringan dan menghormati pengaturan reduced motion.
- Rasio kontras teks terhadap latar minimal 4,5:1 (WCAG AA); kombinasi hijau di atas putih sudah memenuhi.

## 7. Kebutuhan Non-Fungsional

| Area | Kebutuhan |
| --- | --- |
| Performa | LCP < 2,5 detik di 4G; total ukuran halaman < 1 MB; gambar WebP dengan lazy loading |
| Responsif | Diuji di lebar 360, 390, 768, 1024, dan 1440 px |
| SEO | Title < 60 karakter, meta description < 160 karakter, Open Graph, schema Organization, sitemap.xml, robots.txt |
| Aksesibilitas | Navigasi keyboard, atribut alt pada gambar, label ARIA pada akordeon, kontras WCAG AA |
| Keamanan | HTTPS wajib, header keamanan dasar, tanpa penyimpanan data pribadi di sisi website |
| Privasi | Halaman kebijakan privasi; banner cookie jika memakai analitik yang melacak individu |
| Browser | Dua versi terakhir Chrome, Safari, Firefox, Edge |

## 8. Tech Stack dan Timeline

Rekomendasi: Next.js atau Astro dengan Tailwind CSS, di-hosting di Vercel atau Netlify, domain lewat registrar pilihan. Pilihan ini gratis di tahap awal, cepat, dan mudah diubah.

| Fase | Durasi | Hasil |
| --- | --- | --- |
| 1. Konten dan wireframe | 2 hari | Copywriting, daftar layanan dan harga, wireframe mobile |
| 2. Desain visual | 3 hari | Mockup biru gelap, panduan warna dan komponen |
| 3. Pengembangan | 4 hari | Halaman responsif, integrasi WhatsApp dan analitik |
| 4. QA dan optimasi | 2 hari | Uji perangkat, Lighthouse ≥ 90, perbaikan bug |
| 5. Peluncuran | 1 hari | Domain, HTTPS, sitemap dikirim ke Google Search Console |

Total sekitar 12 hari kerja untuk satu orang.

## 9. Risiko, Asumsi, dan Pertanyaan Terbuka

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Testimoni atau statistik tidak nyata | Kepercayaan hilang, risiko hukum | Hanya tampilkan data asli dan izin klien |
| Platform memblokir atau membatasi iklan/akun | Trafik turun | Bangun SEO dan jangan bergantung satu kanal |
| Wording layanan dianggap melanggar aturan kampus/platform | Halaman dilaporkan | Gunakan bahasa netral seperti bantuan dan pendampingan; hindari klaim yang menyesatkan |
| Banyak chat masuk sekaligus | Respons lambat | Jam operasional jelas dan balasan otomatis WhatsApp Business |

**Asumsi:** pemesanan lewat WhatsApp, tanpa pembayaran di website; harga dan layanan diisi oleh pemilik; semua teks dalam bahasa Indonesia.

**Pertanyaan terbuka**

- [x] Kategori layanan: sudah ditentukan (lihat section 5)
- [x] Harga: mulai dari Rp10.000; rincian per kategori diisi pemilik
- [x] Logo dan nomor WhatsApp bisnis sudah ada; akun Instagram resmi belum dikonfirmasi
- [x] Testimoni: baru 1
- [x] Nada bahasa: santai
- [ ] Akun Instagram resmi, jika ada
- [ ] Isi dan izin untuk 1 testimoni yang akan ditampilkan
