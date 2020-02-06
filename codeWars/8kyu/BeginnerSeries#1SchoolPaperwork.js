function paperwork(n, m) {
    if (n <= 0 || m <= 0) return 0
    return n * m
}

console.log(paperwork(5, 5), 25, 'Failed at paperwork(5, 5)');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);
2. ======>
const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0;
3. ======>
function paperwork(n, m) {
  var w = n*=m
  if (n < 0) {return 0;}
  if (m < 0) {return 0;}
  else return w
}
*/