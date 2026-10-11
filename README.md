## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1D3A8C (biru dongker), dipilih karena warnanya solid, profesional, dan UII Banget.

### Token yang saya tetapkan

| Token           | Nilai   | Untuk apa                                |
| --------------- | ------- | ---------------------------------------- |
| --color-primary | #1D3A8C | warna utama: tombol, tautan, penanda     |
| --color-fg      | #0F172A | warna teks utama                         |
| --color-bg      | #F8FAFC | latar halaman                            |
| --radius-md     | 0.5rem  | sudut membulat pada tombol, kartu, isian |
| --space-4       | 1rem    | jarak standar antar elemen               |

Kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.


## Pertemuan 3 — Halaman profil saya

Topik halaman saya: Daftar film Marvel yang pernah saya tonton.

- Judul halaman: Koleksi Film Marvel
- Deskripsi: Daftar film Marvel Cinematic Universe (MCU) beserta rating yang saya berikan.
- Tautan navigasi: Daftar Film, Tambah Film
- Dua bagian utama: Daftar Film Marvel, Tambah Daftar Tontonan
- Kolom tabel: Judul Film, Tahun Rilis, Rating
- Kolom form: Judul Film, Tahun Rilis, Tanggal Menonton
- Gambar: marvel_movies.jpeg

## Catatan penggunaan AI

Penggunaan AI pada tugas ini hanya sebatas untuk membantu menjawab pertanyaan di lembar evaluasi (Tiket Keluar) dan mencari referensi isian teks konten saja.

## Worksheet P8 — JavaScript Modern ES6+, Struktur Data, dan Array Methods

- Halaman `worksheet-p4/profil.html` memuat modul JavaScript `worksheet-p4/js/app.js` sebelum tag `</body>`.
- Skrip mendefinisikan data profil dengan `const`, termasuk daftar keahlian, dan memberikan contoh optional chaining (`?.`) serta nullish coalescing (`??`).
- Fungsi `buatPerkenalan({ nama, peran })` membentuk kalimat perkenalan, sedangkan `formatKeahlian(daftar)` menggabungkan keahlian dengan pemisah ` · `.
- Data proyek disimpan sebagai array of objects. Skrip menampilkan profil dan proyek dengan `console.table()`, lalu memakai `.filter()`, `.find()`, dan `.map()`.
- Pengurutan menggunakan `[...daftarProyek].sort(...)` agar array asli tidak berubah. Buka halaman melalui browser dan lihat Developer Tools Console untuk melihat hasilnya.
