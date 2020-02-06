function countPositivesSumNegatives(input) {
    var tempPositive = [];
    var tempNegative = [];
    var countNegative = 0;
    var output = []
    if (input == null || input.length == 0) {
        return []
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            tempPositive.push(input[i])
        } else if (input[i] < 0) {
            tempNegative.push(input[i])
        }
    }
    output.push(tempPositive.length)
    // console.log(tempPositive)
    // console.log(tempNegative)
    // console.log(output)

    for (let i = 0; i < tempNegative.length; i++) {
        countNegative += tempNegative[i]
    }
    output.push(countNegative)
    // console.log(output)

    return output
}



console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]


/*
const countPositivesSumNegatives = input => input && input.length ? input.reduce((p, n) => (n > 0 ? p[0]++ : p[1] += n, p), [0, 0]) : [];

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
*/