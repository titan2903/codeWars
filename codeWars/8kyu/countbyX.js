function countBy(x, n) {
    var z = [];
    for (let i = 1; i <= n; i++) {
        z.push(i * x)

    }
    return z

}

console.log(countBy(1, 5), [1, 2, 3, 4, 5], "Array does not match")
console.log(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match")


/*
=====SOAL======
Create a function with two arguments that will return an array of length (n) with multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).
*/
/*
CARA ORANG LAIN
1. ======>
function countBy(x, n) {
  return Array.apply(null, Array(n)).map((_, i) => (i+1)*x);
}
2. ======>
const countBy = (x, n) => Array.from({length: n}, (_, k) => (k + 1) * x);
3. ======>
const countBy = (x, n) => Array(n).fill().map((_, k) => (k + 1) * x)
*/