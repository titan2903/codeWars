function checkForFactor(base, factor) {
    if (base % factor == 0) {
        return true
    } else {
        return false
    }
}


console.log(checkForFactor(10, 2), true)
console.log(checkForFactor(63, 7), true)
console.log(checkForFactor(2450, 5), true)
console.log(checkForFactor(24612, 3), true)
console.log(checkForFactor(9, 2), false)
console.log(checkForFactor(653, 7), false)
console.log(checkForFactor(2453, 5), false)
console.log(checkForFactor(24617, 3), false)

/*
Cara orang lain:

function checkForFactor (base, factor) {
  return base % factor === 0;
}

const checkForFactor = (base, factor) => base % factor === 0;

const checkForFactor = (base, factor) => !(base % factor);
*/