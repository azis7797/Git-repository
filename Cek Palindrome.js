//Buat kode untuk mengecek apakah suatu string adalah palindrome atau bukan.
function cekPalindrome(string) {
  return string === string.split("").reverse().join("");
}
console.log(cekPalindrome("katak")); // true
console.log(cekPalindrome("kucing")); // false
