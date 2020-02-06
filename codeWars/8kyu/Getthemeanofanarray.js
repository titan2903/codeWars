function getAverage(marks) {
    var count = 0;
    for (let i = 0; i < marks.length; i++) {
        count += marks[i]
    }
    return Math.floor(count / marks.length)

}


console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5, ]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);
2. ======>

3. ======>
*/