function checkExam(array1, array2) {
    let count = 0;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] == array1[i]) {
            count += 4
        } else if (array2[i] == '') {
            count += 0
        } else {
            count -= 1
        }
    }
    if (count < 0) {
        return 0
    }
    return count
}



console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);

/*
=====SOAL======
Array input pertama berisi jawaban yang benar untuk ujian, seperti ["a", "a", "b", "d"]. Yang kedua adalah array "jawaban" dan berisi jawaban siswa.

Dua array tidak kosong dan panjangnya sama. Kembalikan skor untuk array jawaban ini, berikan +4 untuk setiap jawaban yang benar, -1 untuk setiap jawaban yang salah, dan +0 untuk setiap jawaban kosong (string kosong).

Jika skor <0, kembalikan 0.
Kirim masukan
Histori
Disimpan
Komunitas

*/
/*
CARA ORANG LAIN
1. ======>
function checkExam(array1, array2) {
  const reducer = (a, e, idx) => {
    if (e === "") {
      return a;  
    }
    
    if (e === array1[idx]) {
      return a += 4;
    }
    
    return --a;
  }
  const score = array2.reduce(reducer, 0);
  return score < 0 ? 0 : score;
}
2. ======>
checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;

3. ======>
function checkExam(a1, a2) {
 var total = 0
 for(i=0;i<a1.length; i++){
   a1[i] === a2[i]? total += 4: a2[i] === ""? 0: total-=1;
 }
 return total < 0? 0: total;
}
*/