var sumAndMultiply = function (sum, multiply) {
    for (let i = 0; i <= sum; i++) {
        for (let j = 0; j <= i; j++) {
            if (i + j === sum && i * j === multiply) {
                return [j, i]
            }
        }
    }
    return null
}


console.log(sumAndMultiply(13, 12), [1, 12]);
console.log(sumAndMultiply(6, 9), [3, 3]);
console.log(sumAndMultiply(200, 8452), null);
console.log(sumAndMultiply(15, 56), [7, 8]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const sumAndMultiply = (sum, multiply, a=0, b=sum-a) => a*b==multiply ? [a,b] : b<a ? null : sumAndMultiply(sum, multiply, a+1)
2. ======>
function sumAndMultiply(sum, mul, max = Math.sqrt(mul)) {
  for (var a = -1, b; a <= max; a++, b = sum - a)
    if (a * b === mul) return [a, b];
  return null;
}
3. ======>
const sumAndMultiply = (sum, multiply) => {
  let res = null;
  
  for (let i = 0; i <= sum; i++) {
    if (multiply / i + i === sum) res = [multiply / i, i]
  }
  
  return res;
};
4. ========>
var sumAndMultiply = function(sum, multiply) {
  for (var n = 0; n <= sum; n ++) {
    if (n + (sum - n) === sum && n * (sum - n) === multiply) {
      var x = n;
      var y = sum - x;
      return [x, y];
    }
  }
  return null;
}
*/