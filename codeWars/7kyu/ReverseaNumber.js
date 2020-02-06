function reverseNumber(n) {
    var str = String(n)
    var end;
    if (str[0] == '-') {
        end = 1
    } else {
        end = 0
    }

    var temp = ''
    for (let i = str.length - 1; i >= end; i--) {
        temp += str[i]

    }
    if (str[0] == '-') {
        return Number(-temp)
    } else {
        return Number(temp)
    }
}


console.log(reverseNumber(123), 321)
console.log(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
console.log(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
console.log(reverseNumber(4321234), 4321234)
console.log(reverseNumber(5), 5)
console.log(reverseNumber(0), 0)
console.log(reverseNumber(98989898), 89898989)


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')
2. ======>
function reverseNumber(n) {
  return Math.sign(n) * Math.abs(n)
    .toString()
    .split``
    .reverse()
    .join``;
}
3. ======>
function reverseNumber(n) {
  return (n+'').match(/\d/g).reverse().join('') * (n<0? -1 : 1)
}
*/