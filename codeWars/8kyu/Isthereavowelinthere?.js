function isVow(a) {
    var arr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 97 || a[i] === 101 || a[i] === 105 || a[i] === 111 || a[i] === 117) {
            arr.push(String.fromCharCode(a[i]))
        } else {
            arr.push(a[i])
        }
    }
    return arr
}


console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]), [118, "u", 120, 121, "u", 98, 122, "a", 120, 106, 104, 116, 113, 114, 113, 120, 106]);
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]), ["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}
2. ======>
const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)
3. ======>
const vowels = new Set('aeiou');

function isVow(a) {
  return a.map(v => {
    let c = String.fromCharCode(v);
    return vowels.has(c) ? c : v;
  });
}
*/