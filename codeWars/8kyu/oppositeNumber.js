function opposite(number) {
  if (number < 0) {
    return Math.abs(number)
  } else {
    return -Math.abs(number)
  }
}

console.log(opposite(1), -1)


/*
Cara orang lain: 

function opposite(number) {
  return(-number);
}

const opposite = number => -number;

const opposite = n => -n;

function opposite(number) {
  return number > 0 ? -number : Math.abs(number);
}

const opposite = n => n * -1
*/