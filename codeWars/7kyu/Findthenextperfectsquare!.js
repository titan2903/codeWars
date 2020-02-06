function findNextSquare(sq) {
    var sqRt = Math.sqrt(sq);
    if (NaN === sqRt || sqRt !== parseInt(sqRt, 10)) {
        return -1;
    }
    return Math.pow(sqRt + 1, 2);
}

console.log(findNextSquare(121), 144, "Wrong output for 121");
console.log(findNextSquare(625), 676, "Wrong output for 625");
console.log(findNextSquare(319225), 320356, "Wrong output for 319225");
console.log(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
console.log(findNextSquare(155), -1, "Wrong output for 155");
console.log(findNextSquare(342786627), -1, "Wrong output for 342786627");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}
2. ======>
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
3. ======>
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
*/