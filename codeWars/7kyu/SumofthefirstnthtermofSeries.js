function SeriesSum(n) {
    let count = 1
    let inc = 0
    if (n == 0) return '0.00'
    if (n == 1) return '1.00'

    for (let i = 1; i < n; i++) {
        count += (1 / (inc + 4))
        inc += 3
    }
    return count.toFixed(2)
}

console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}
2. ======>
function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}
3. ======>
function SeriesSum(n)
{
  var s = 0;
  while(n) {
    s += 1/(1 + 3 * --n);
  }
  return s.toFixed(2);
}
*/