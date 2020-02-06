function bingo(a) {
    let x = [2, 9, 14, 7, 15]
    let count = [0, 0, 0, 0, 0]
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < x.length; j++) {
            if (a[i] == x[j]) {
                count[j] += 1
            }
        }
    }

    for (let i = 0; i < count.length; i++) {
        if (count[i] == 0) {
            return "LOSE"
        }
    }
    return "WIN"
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "LOSE");
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]), "WIN");

//A B C D E F G H I J   K  L  M  N  O 
//1 2 3 4 5 6 7 8 9 10 11 12 13  14  15

//B I N  G O
//2 9 14 7 15

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const bingo = ar => [2,7,9,14,15].every(e => ar.includes(e)) ? 'WIN' : 'LOSE';
2. ======>
function bingo(a) {
  let n = [2,9,14,7,15]
  for(let i =0; i< n.length;i++){
  if(!a.includes(n[i])){ return 'LOSE' }
  }
  return 'WIN'
}
3. ======>
function bingo(a) {
    const bingoNumber = [2, 9, 7, 14, 15];
    let win = true;
    bingoNumber.forEach(x => {if (a.indexOf(x) == -1)  win = false})
    return win ? "WIN": "LOSE"
}

4. =====>
function bingo(a) {
   let bingo = new Set([2, 7, 9, 14, 15]);
    for(let i = 0; i < a.length; i++) {
        for(let value of bingo) {
            if(value === a[i]) {
                bingo.delete(value)
            }
        }
    }
    return bingo.size != 0 ? 'LOSE' : 'WIN'
}
*/