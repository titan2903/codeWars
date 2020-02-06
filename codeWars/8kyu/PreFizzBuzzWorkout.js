function preFizz(n) {

    var arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}


console.log(preFizz(1), [1], `Array should be from 1 to 1`);
console.log(preFizz(2), [1, 2], `Array should be from 1 to 2`);
console.log(preFizz(3), [1, 2, 3], `Array should be from 1 to 3`);
console.log(preFizz(4), [1, 2, 3, 4], `Array should be from 1 to 4`);
console.log(preFizz(5), [1, 2, 3, 4, 5], `Array should be from 1 to 5`);



/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
let preFizz = n => [...Array(n)].map((x, i) => i+1);
2. ======>
preFizz = n => new Array( n ).fill().map( (val, index) => index + 1 );
3. ======>
function preFizz(n) {
  const x = []
  let   y = 0
  while (y < n) {
    y++
    x.push(y)
  }
  return x
}
*/