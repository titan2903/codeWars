function removeExclamationMarks(s) {
    var alpha = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var str = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (s[i] == alpha[j]) {
                str += s[i]
            }
        }
    }
    return str
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
2. ======>
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
3. ======>
let removeExclamationMarks = s => s.split('').filter(e=> e!='!').join('')
*/