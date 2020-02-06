function sortGiftCode(code) {
    var str = code.split('')
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] > str[j]) {
                var temp = str[i]
                str[i] = str[j]
                str[j] = temp
            }
        }
    }

    var output = ''
    for (let i = 0; i < str.length; i++) {
        output += str[i]
    }
    return output
}


console.log(sortGiftCode('abcdef'), 'abcdef');
console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function sortGiftCode(code){
  return code.split('').sort().join('');
}
2. ======>
function sortGiftCode(code) {
    return code && typeof code === "string" && code.length > 0 ? [...code.match(/[a-z]{1}/gi)].sort().join('') : new Error('bad input');
}
3. ======>
function sortGiftCode(code) {
  return code.split('').sort(function(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  }).join('');
}
*/