function generateRange(min, max, step) {
    var arr = []
    for (let i = min; i <= max; i += step) {
        arr.push(i)

    }
    return arr
}

console.log(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);