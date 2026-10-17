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
- Fungsi `buatPerkenalan({ nama, peran })` membentuk kalimat perkenalan, sedangkan `formatKeahlian(daftar)` menggabungkan keahlian dengan pemisah `·`.
- Data proyek disimpan sebagai array of objects. Skrip menampilkan profil dan proyek dengan `console.table()`, lalu memakai `.filter()`, `.find()`, dan `.map()`.
- Pengurutan menggunakan `[...daftarProyek].sort(...)` agar array asli tidak berubah. Buka halaman melalui browser dan lihat Developer Tools Console untuk melihat hasilnya.

## Pertemuan 10 - Asynchronous JavaScript

Worksheet ini mengambil data proyek dan artikel berbahasa Indonesia dari `worksheet-p10/data.json` menggunakan Fetch API, `async`/`await`, Promise, dan JSON. Data dipisahkan menjadi dua lapisan:

- Data Layer — `worksheet-p10/js/api.js`: fungsi `fetchNews()` mengambil respons berkas JSON lokal, memeriksa status HTTP, mengubah respons menjadi JSON, dan melempar kembali galat.
- Presentation Layer — `worksheet-p10/js/app.js`: mengatur status halaman dan merender setiap proyek atau artikel sebagai kartu menggunakan `textContent`.
- Halaman — `worksheet-p10/profil.html`: memuat elemen status dan daftar serta menghubungkan modul JavaScript.

Buka `worksheet-p10/profil.html` melalui server lokal untuk melihat hasilnya. Karena halaman menggunakan ES module dan Fetch API, jangan membukanya langsung dengan skema `file://`.

### Empat interface state

1. Loading: status menampilkan “Memuat data dari server...” saat permintaan berlangsung.
2. Success: setelah data diterima, kartu menampilkan judul, deskripsi, kategori, dan tanggal proyek atau artikel.
3. Failure: jika permintaan jaringan atau status HTTP gagal, pesan galat ditampilkan pada halaman.
4. Empty: jika berkas JSON mengembalikan array kosong, status menampilkan “Belum ada berita yang tersedia saat ini.”

### Deklarasi AI (AI Disclosure)

- Bagian yang dikerjakan sendiri: penyesuaian struktur HTML, pembuatan komponen CSS, dan pengujian empat interface state (Loading, Success, Failure, dan Empty).
- Bagian yang dibantu AI: pembuatan boilerplate `fetchNews` di `js/api.js` dan penanganan `try/catch` di `js/app.js`.
