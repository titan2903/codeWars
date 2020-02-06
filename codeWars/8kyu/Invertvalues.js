function invert(array) {
    var invertedArr = []
    if (array.length === 0) {
        return []
    } else if (array == 0) {
        return array
    }
    for (let i = 0; i < array.length; i++) {
        invertedArr.push(-array[i])
    }
    return invertedArr
}


console.log(invert([1, 2, 3, 4, 5])), [-1, -2, -3, -4, -5];
console.log(invert([1, -2, 3, -4, 5])), [-1, 2, -3, 4, -5];
console.log(invert([])), [];
console.log(invert([0])), [0];

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}
2. ======>
function invert(array) {
  let newAry = [];
  for (let i = 0; i < array.length; i++) {
    if ( array[i] === 0) {
      newAry.push(array[i]);
    } else {
      newAry.push(array[i] * -1)
    }
  }
  return newAry;
}
3. ======>
function invert(array) {
   return array.map(function(item) {
      return ~item + 1;
   });
}
*/