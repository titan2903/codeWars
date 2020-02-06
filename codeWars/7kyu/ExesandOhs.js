function XO(str) {
    //code here
    var xo = str.toLowerCase()


    var tempX = ''
    var tempO = ''
    for (let i = 0; i < xo.length; i++) {
        if (xo[i] == 'x') {
            tempX += 'x'
        } else if (xo[i] == 'o') {
            tempO += 'o'
        }
    }

    if (tempO.length == tempX.length) {
        return true
    } else if (tempO.length != tempX.length) {
        return false
    }
}
console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
console.log(XO("zpzpzpp"), true);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
2. ======>
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
3. ======>
function XO(str) {
    let countX = countStr(str, 'x');
    let countO = countStr(str, 'o');
    return countX === countO;
}

function countStr(s, match) {
  let regex = new RegExp(match, "gi");
  return (s.match(regex) || []).length;
}
*/