var summation = function (num) {
  var count = 0;
  for (let i = 0; i <= num; i++) {
    count += i
  }
  return count
}



console.log(summation(1), 1)
console.log(summation(8), 36)


/*
Cara orang lain:

const summation = n => n * (n + 1) / 2;

var summation = function (num) {
  return num * (num+1) / 2;
}
*/