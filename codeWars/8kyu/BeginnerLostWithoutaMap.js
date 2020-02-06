function maps(x) {
    var arr = []
    for (let i = 0; i < x.length; i++) {
        arr.push(x[i] * 2)
    }
    return arr

}


console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function maps(x){
  return x.map(n => n * 2);
}
2. ======>
function maps(x){
  var a = [];
  var c;
  var b;
  for (b in x) {
    c = x[b] + x[b];
    a.push(c);
  }
  return a;
}
3. ======>
*/