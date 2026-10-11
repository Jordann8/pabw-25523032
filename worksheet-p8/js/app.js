// Lembar B: simpan data profil dan keahlian dalam objek.
const profil = {
  nama: "Ahmad Dzakki (Jordan)",
  peran: "Pengembang Web",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

// Lembar B: tampilkan keahlian pertama dengan optional chaining dan nilai cadangan nullish.
const keahlianUtama = profil?.keahlian?.[0] ?? "Belum ada keahlian";
console.log("Keahlian utama:", keahlianUtama);

// Lembar C: fungsi murni untuk membuat kalimat perkenalan dari data profil.
function buatPerkenalan({ nama, peran }) {
  return `Halo, saya ${nama} dan saya seorang ${peran}.`;
}

// Lembar C: fungsi murni untuk menggabungkan daftar keahlian.
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log("Keahlian:", formatKeahlian(profil.keahlian));
console.table(profil.keahlian);

// Lembar D: simpan data proyek sebagai array berisi objek.
const daftarProyek = [
  { judul: "Koleksi Film Marvel", tahun: 2024, selesai: true },
  { judul: "Portfolio Pribadi", tahun: 2025, selesai: true },
  { judul: "Aplikasi Daftar Tugas", tahun: 2026, selesai: false },
];

// Hitung jumlah proyek yang telah selesai dan tampilkan semua proyek.
const jumlahProyekSelesai = daftarProyek.filter((proyek) => proyek.selesai === true).length;
console.log("Jumlah proyek selesai:", jumlahProyekSelesai);
console.table(daftarProyek);

// Saring dan tampilkan hanya proyek yang sudah selesai.
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai === true);
console.table(proyekSelesai);

// Temukan satu proyek berdasarkan judulnya.
const proyekPilihan = daftarProyek.find(
  (proyek) => proyek.judul === "Portfolio Pribadi",
);
console.log("Proyek pilihan:", proyekPilihan);

// Ambil semua judul proyek menjadi array baru.
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log("Judul proyek:", judulProyek);

// Urutkan salinan proyek berdasarkan tahun tanpa mengubah array aslinya.
const proyekTerurut = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);
console.table(proyekTerurut);
