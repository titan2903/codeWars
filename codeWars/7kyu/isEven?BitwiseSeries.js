var isEven = function (n) {
    if (n % 2 == 0) return true
    return false
}


console.log(isEven(2), true)
console.log(isEven(3), false)
console.log(isEven(14), true)
console.log(isEven(15), false)
console.log(isEven(26), true)
console.log(isEven(27), false)


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
var isEven = function (n) { //if n is even return true, otherwise, return false
  return (n & 1) == 0
}
2. ======>
let isEven = n=> (n & 1) ? false : true;
3. ======>
var isEven = function (n) {
  var num = 2
  while(num < n) {
    num += 2
  }
  return num === n ? true: false
}
*/