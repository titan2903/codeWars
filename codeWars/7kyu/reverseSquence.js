const reverseSeq = n => {
    var arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i)
    }
    return arr
}



console.log(reverseSeq(5), [5, 4, 3, 2, 1]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};
2. ======>
const reverseSeq = length => Array.from({length}, () => length--)
3. ======>
const reverseSeq = n => [...Array(n)].map(_ => n--);
*/