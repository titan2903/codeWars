function sumMul(n, m) {
  var count = 0;

  for (let i = n; i < m; i += n) {
    count += i
  }
  if (count <= 0) {
    return "INVALID"
  }
  return count
}

console.log(sumMul(0, 0), "INVALID");
console.log(sumMul(2, 9), 20);
console.log(sumMul(4, -7), "INVALID");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function sumMul(n,m){
  if (n >= m) return "INVALID";

var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}
2. ======>
function sumMul(n,m){
  return m<=n ? "INVALID" : Math.floor(m/n)*(Math.floor(m/n)+1)*(n/2);
}
3. ======>
const sumMul = (n, m) => {
  let r = 0;
  if (n < 1 || m < 1) return 'INVALID';
  for (let i = 2; i < m; i++) if (i / n % 1 == 0) r += i;
  return r;
}
*/