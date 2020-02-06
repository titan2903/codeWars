// Smash Words
function smash(words) {
    var str = ''
    for (let i = 0; i < words.length; i++) {
        if (i == words.length - 1) {
            str += words[i]
        } else {
            str += words[i] + ' '
        }
    }
    return str
}


console.log(smash(["hello"]), "hello");
console.log(smash(["hello", "world"]), "hello world");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
let smash = words => words.join(" ");
2. ======>
function smash (words) {
    "use strict";
    var smashed = '';
    for(var i = 0; i<words.length; i++) {
      smashed += words[i];
      if(i!=words.length-1) {
        smashed += ' ';
      }
    }
    return smashed;
};
3. ======>
function smash (words) {
    "use strict";
    console.log(words.toString());
    return (words.toString()).replace(/,/g, ' ');
};
*/