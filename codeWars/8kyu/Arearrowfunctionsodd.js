function odds(values) {
    var result = [];
    for (var i = 0; i < values.length; i++) {
        if (values[i] % 2 !== 0) {
            result.push(values[i]);
        }
    }
    return result;
}


console.log(odds([]), [], "Should handle empty array");
console.log(odds([2, 4, 6]), [], "Should handle array with even numbers only");
console.log(odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only");
console.log(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function odds(values){
  // arrow it
  return values.filter(n => n % 2);
}
2. ======>
function odds(values){

  if(values.length > 0){
      return getOddNumbers(values);
  }else{
      return [];
  }
}
function checkEvenNo(values){
 return values.filter(value=>value%2===0);
}

function getOddNumbers(values){
 return values.filter(value=>value%2!==0);
}
3. ======>
function odds(xs) {
  return xs.filter(isOdd)
}

function isOdd(x) {
  return x % 2 === 1
}
*/