const daftarBuku = [
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "PHP Dasar"
];

//1. Ganti "CSS Dasar" menjadi "CSS Modern"
console.log("=== DAFTAR BUKU SEBELUM PERUBAHAN ===");
console.log(daftarBuku);

const indeksCss = daftarBuku.indexOf("CSS Dasar");
console.log(`\nIndeks "CSS Dasar": ${indeksCss}`);

if (indeksCss !== -1) {
    daftarBuku.splice(indeksCss, 1, "CSS Modern");
    console.log('"CSS Dasar" diganti menjadi "CSS Modern".');
} else {
    console.log('"CSS Dasar" tidak ditemukan.');
}

//2. Tambah "Git Dasar" tepat setelah "JavaScript Dasar"
const indeksJs = daftarBuku.indexOf("JavaScript Dasar");

if (indeksJs !== -1) {
    daftarBuku.splice(indeksJs + 1, 0, "Git Dasar");
    console.log('"Git Dasar" ditambahkan setelah "JavaScript Dasar".');
} else {
    console.log('"JavaScript Dasar" tidak ditemukan.');
}

//Php di hapus
const indeksPhp = daftarBuku.indexOf("PHP Dasar");

if (indeksPhp !== -1) {
    daftarBuku.splice(indeksPhp, 1);
    console.log('"PHP Dasar" dihapus.');
} else {
    console.log('"PHP Dasar" tidak ditemukan.');
}

console.log("\n=== DAFTAR BUKU SETELAH PERUBAHAN ===");
console.log(daftarBuku);
console.log(`Jumlah buku tersisa: ${daftarBuku.length}`);