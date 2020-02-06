var capitals = function (word) {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var arr = []
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (word[i] == alpha[j]) {
                arr.push(i)
            }
        }
    }
    console.log(arr);
}

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
var capitals = function (word) {
  return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};
2. ======>
var capitals = function (word) {
  var caps = [];
  for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};
3. ======>
var capitals = function (word) {
  var result=[];
  for (var i=0,n=word.length;i<n;i++)
    if (word[i]>='A' && word[i]<='Z') result.push(i);
  return result;
};
4. ======>
var capitals = function (word) {
  return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};
*/