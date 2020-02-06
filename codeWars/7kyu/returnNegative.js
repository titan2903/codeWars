function makeNegative(num) {
    if (num < 0) {
        return num * 1
    } else {
        return num * -1
    }
}

console.log(makeNegative(42), -42);









/*
Cara orang lain:

function makeNegative(num) {
  return -Math.abs(num);
}


makeNegative = n => -Math.abs(n)


function makeNegative(num) {
  return num < 0 ? num : -num;
}
*/