const nbrOfLaps = (x, y) => {
    let count = x
    while (count % y != 0) {
        count += x
    }
    return [count / x, count / y]
}


console.log(nbrOfLaps(5, 3), [3, 5])
console.log(nbrOfLaps(4, 6), [3, 2])
console.log(nbrOfLaps(5, 5), [1, 1])