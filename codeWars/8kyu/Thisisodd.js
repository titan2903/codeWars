function isOdd(n) {
    n = Math.round(n)
    if (n % 2 != 0) {
        return true
    } else {
        return false
    }
}

console.log(isOdd(5), true);
console.log(isOdd(4), false);
console.log(isOdd(3), true);
console.log(isOdd(1), true);
console.log(isOdd(0), false);
console.log(isOdd(-5), true);
console.log(isOdd(-4), false);
console.log(isOdd(3.0), true);
console.log(isOdd(-0.1), false);
console.log(isOdd(0.25), false);