function sumEvenNumbers(input) {
    var arr = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            arr.push(input[i])
        }
    }

    var count = 0;
    for (let j = 0; j < arr.length; j++) {
        count += arr[j]
    }
    return count
}


console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 30


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const sumEvenNumbers = a => a.reduce((r, e) => r + (e % 2 ? 0 : e), 0);
2. ======>
function sumEvenNumbers(input) {
 var sum=0;
 for (var i=0; i<input.length; ++i)
   if (input[i]%2==0)
     sum+=input[i];
  return sum;
}
3. ======>
function sumEvenNumbers(input) {
  var sum = 0;
  for (var value of input){
    if (value %2 == 0)
      sum += value  
  }
  return sum
}
*/