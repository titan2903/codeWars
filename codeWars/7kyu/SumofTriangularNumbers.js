function sumTriangularNumbers(n) {
    var sum = 0;
    var total = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
        total += sum
    }
    console.log(total);
}


console.log(sumTriangularNumbers(6), 56);
console.log(sumTriangularNumbers(34), 7140);
console.log(sumTriangularNumbers(-291), 0);
console.log(sumTriangularNumbers(943), 140205240);
console.log(sumTriangularNumbers(-971), 0);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function sumTriangularNumbers(n) {
var sum = 0;  
for(var i = 1; i <= n; i++)
{
sum += (i*(i+1))/2;
}
return sum;
}
2. ======>
function sumTriangularNumbers(n) {
  return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
}
3. ======>
function sumTriangularNumbers(n) {
  if (n < 0) {
    return 0
  } else {
    return n * (n + 1) * (n + 2) / 6
  }
}
4. ========>
function sumTriangularNumbers(n) {
  let sum = 0
  for (let i=0, j=1; i<n; i++, j += i+1) {
    sum += j
  }
  return sum
}
*/