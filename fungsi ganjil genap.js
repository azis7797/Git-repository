// Buat fungsi yang menerima angka n dan mengembalikan "GANJIL" jika n ganjil dan "GENAP" jika n genap.
function ganjilGenap(n) {
  if (n % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
}
console.log(ganjilGenap(10)); // GENAP
console.log(ganjilGenap(5)); // GANJIL