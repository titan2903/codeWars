function reverseWords(str) {
    var result = ''
    var arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            result += str[i]
        } else if (str[i] == ' ') {
            arr.push(result)
            result = ''
        }
    }
    arr.push(result)
    // console.log(arr);

    var Arr2 = []
    var tempStr = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            tempStr += arr[i][j]
        }
        Arr2.push(tempStr)
        tempStr = ''
    }

    console.log(Arr2);
    let output = ''
    for (let k = 0; k < Arr2.length; k++) {
        if (k == Arr2.length - 1) {
            output += Arr2[k]
        } else {

            output += Arr2[k] + ' '
        }
    }
    return output
}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
2. ======>
function reverseWords(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}3. ======>
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
*/