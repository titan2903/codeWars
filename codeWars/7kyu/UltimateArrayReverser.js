const ultimateReverse = s => {
    let str = s.join('').split('').reverse()
    let arr = []
    for (let i = 0; i < s.length; i++) {
        arr.push(str.splice(0, s[i].length).join(''))
    }
    return arr
};


console.log(ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]),
    ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"])

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function ultimateReverse(words) {
    let reversed = [...words.join('')].reverse();
    return words.map(word => reversed.splice(0, word.length).join(''));
}
2. ======>
const ultimateReverse = s => {
  const orig = s.join("");
  const reverse = [];
  var x = orig.length - 1;
  for (var i = 0; i < s.length; ++i) {
    reverse.push("");
    for (var j = 0; j < s[i].length; ++j) {
      reverse[i] += orig[x--];
    }
  }
  return reverse;
};
3. ======>
*/