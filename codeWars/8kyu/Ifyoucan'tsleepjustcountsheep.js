var countSheep = function (num) {
    var str = ''
    for (let i = 1; i <= num; i++) {
        str += i + ' ' + 'sheep...'
    }
    return str

}


console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``
2. ======>
const countSheep = length =>
  Array.from({ length }, (_, i) => ++i + ' sheep...').join('')
3. ======>
const countSheep = num =>
  num ? countSheep(num - 1) + num + ' sheep...' : ''
*/