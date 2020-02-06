function squareDigits(num) {
    var strNum = String(num)
    var result = ''
    for (let i = 0; i < strNum.length; i++) {
        let squared = Number(strNum[i]) * Number(strNum[i])
        result += String(squared)
    }
    return Number(result)
}

console.log(squareDigits(9119), 811181);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

2. ======>
function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}
3. ======>
function squareDigits(num) {
  var str = String(num)
  var res = ''
  
  for (var i = 0; i < str.length; i++) {
    res += Math.pow(str.charCodeAt(i) - 48, 2)
  }
  
  return parseInt(res)
}
4. ======>
function squareDigits(num){
  var numArray = num.toString(10).split('').map(Number);
  var powArray = numArray.map(function (n) { return n * n; });
  var powString = powArray.join('');

  return parseInt(powString, 10);
}
*/