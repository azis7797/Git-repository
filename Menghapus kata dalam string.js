// Buat kode yang menghapus kemunculan pertama dari kata tertentu dalam sebuah string. Gunakan fungsi string.
function hapusKata(kata, string) {
  return string.replace(kata, "");
}
console.log(hapusKata("kucing", "kucing hitam berkucing-kucingan")); // hitam berkucing-kucingan
console.log(hapusKata("biru", "biru langit")); // langit
