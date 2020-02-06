function squareSum(numbers) {
    var count = 0;
    var arr = []
    for (let i = 0; i < numbers.length; i++) {
        arr.push(Math.pow(numbers[i], 2))
    }
    for (let j = 0; j < arr.length; j++) {
        count += arr[j]
    }
    return count
}

console.log(squareSum([1, 2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>Modular Function
function squareSum(numbers){
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
2. ======>
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
3. ======>
function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}
*/