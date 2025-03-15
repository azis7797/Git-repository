// mengubah satuan cm ke km dan sebaliknya
function konversiSatuan(satuan, nilai) {
  if (satuan === "cm") {
    return nilai / 100000;
  } else if (satuan === "km") {
    return nilai * 100000;
  }
}
console.log(konversiSatuan("cm", 100)); // 0.001
console.log(konversiSatuan("km", 1)); // 100000