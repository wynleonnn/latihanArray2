const antreanSiswa = ["Andi", "budi", "citra"];

//antrian awal
console.log("Antrian awal");
console.log(antreanSiswa);
console.log(`Jumlah siswa: ${antreanSiswa.length}`);

//Push deni
antreanSiswa.push("Deni");
console.log("\nSetelah push('Deni'):");
console.log(antreanSiswa);

//unshift Eka
antreanSiswa.unshift("Eka");
console.log("\nSetelah unshift('Eka'):");
console.log(antreanSiswa);

//Siswa pertama di hapus
const siswaPertamaDihapus = antreanSiswa.shift();
console.log(`\nSiswa yang dihapus dari awal: ${siswaPertamaDihapus}`);
console.log(antreanSiswa);

//siswa terahkirdi hapus
const siswaTerakhirDihapus = antreanSiswa.pop();
console.log(`\nSiswa yang dihapus dari akhir: ${siswaTerakhirDihapus}`);
console.log(antreanSiswa);

//
console.log("\n=== ANTREAN AKHIR ===");
console.log(antreanSiswa);
console.log(`Jumlah siswa tersisa: ${antreanSiswa.length}`);