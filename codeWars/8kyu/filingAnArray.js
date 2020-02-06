function arr(N) {
    var tempArr = []
    for (let i = 0; i < N; i++) {
        tempArr.push(i)


    }
    return tempArr

}

console.log(arr(4), [0, 1, 2, 3]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const arr = (n=0) => [...Array(n)].map((_, i) => i);
2. ======>
const arr = (n = 0) => [...Array(n).keys()]
3. ======>
const arr = N => Array.from({length: N}, (_, i) => i)
*/