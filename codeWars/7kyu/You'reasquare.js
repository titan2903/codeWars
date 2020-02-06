function isSquare(n) {
    // var i = 0
    // while (i == n) {
    //     i++
    //     if (i * i == n) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    if ((Math.sqrt(n) % 1) == 0) {
        return true;
    } else {
        return false;
    }
}
// const isSquare = n => Number.isInteger(Math.sqrt(n))

console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare(0), true, "0 is a square number (0 * 0)");
console.log(isSquare(3), false, "3 is not a square number");
console.log(isSquare(4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
var isSquare = function(n){
  return /^[0-9]+$/.test(Math.sqrt(n))
}
2. ======>
var isSquare = function(n){
  return n = Math.sqrt(n), n == ~~n;
}
3. ======>
var isSquare = function(n){
  return Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) == n;
}
*/