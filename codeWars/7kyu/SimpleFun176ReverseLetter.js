function reverseLetter(str) {
    //coding and coding..

    var temp = ''
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (str[i] == alpha[j]) {
                temp += str[i]
            }
        }
    }

    var output = ''
    for (let k = temp.length - 1; k >= 0; k--) {
        output += temp[k]
    }
    return output
}



console.log(reverseLetter("krishan"), "nahsirk")
console.log(reverseLetter("ultr53o?n"), "nortlu")
console.log(reverseLetter("ab23c"), "cba")
console.log(reverseLetter("krish21an"), "nahsirk")



/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function reverseLetter(str) {
  return str.split('')
            .reverse()
            .filter(val => /[a-zA-Z]/.test(val))
            .join('');  
}
2. ======>
function reverseLetter(str) {
  return str.split('').reverse().filter(function(el) {
    if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
      return el;
    }
  }).join('');
}
3. ======>
reverseLetter=s=>s.replace(/[^a-z]/g,'').split``.reverse().join``

*/