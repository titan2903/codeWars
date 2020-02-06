// const factorial = n => {
// if (n == 0) {
//     return 1
// }
// for (let i = 1; i <= n; i++) {
//     count *= i
// }
// return count
// var count = 1;
// if (n == 0) {
//     return count
// } else {
//     count *= n
//     return count * factorial(n - 1)
// }

// }
factorial = n => n == 0 ? 1 : n * factorial(n - 1)


console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const factorial = n => n > 1 ? n*factorial(n-1) : 1;
2. ======>
const factorial = n => {
  if (n == 0) return 1;
  return n * factorial(n-1);
};
3. ======>
*/