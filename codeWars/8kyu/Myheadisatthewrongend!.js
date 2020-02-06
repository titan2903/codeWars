function fixTheMeerkat(arr) {
    var newarr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newarr.push(arr[i]);
    }
    return newarr;
}


console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
fixTheMeerkat = (arr) => arr.reverse()
2. ======>
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]
3. ======>
function fixTheMeerkat(arr) { 
  tmp = arr[0]
  arr[0] = arr[2]
  arr[2] = tmp
  return arr
}
*/