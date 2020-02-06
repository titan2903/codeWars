/**
Instructions
Output
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 */

function highAndLow(numbers) {
    var output = []
    var temp = ''
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != ' ') {
            temp += numbers[i]
        } else if (numbers[i] == ' ') {
            output.push(Number(temp))
            temp = ''
        }
    }
    output.push(Number(temp))

    for (let i = 0; i < output.length; i++) {
        for (let j = i + 1; j < output.length; j++) {
            if (output[i] > output[j]) {
                let temp = output[i]
                output[i] = output[j]
                output[j] = temp
            }
        }
    }
    // console.log(output);

    return `${output[output.length - 1]} ${output[0]}`


}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");