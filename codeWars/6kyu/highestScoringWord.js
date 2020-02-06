function high(x) {
    x = x.toLowerCase()
    var str = ''
    var temp = []
    for (let i = 0; i < x.length; i++) {
        if (x[i] != ' ') {
            str += x[i]
        } else if (x[i] == ' ') {
            temp.push(str)
            str = ''
        }
    }
    temp.push(str)
    // console.log(temp)

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var output = [];
    for (let i = 0; i < temp.length; i++) {
        var count = 0;
        for (let j = 0; j < temp[i].length; j++) {
            for (let k = 0; k < alphabet.length; k++) {
                if (temp[i][j] == alphabet[k]) {
                    count += k + 1
                }
            }
        }
        output.push(temp[i], count)
    }
    // console.log(output)

    let hitung = 0;
    let index = 0;
    for (let i = 0; i < output.length; i++) {
        if (output[i + 1] > hitung) {
            hitung = output[i + 1]
            index = i
        }
    }
    // console.log(output);
    return output[index]
}


console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');


/*
Cara orang lain:
function high(x) {
    return x.split(' ').map(e => [e, e.split('').reduce((a,b) => a + b.charCodeAt() - 'a'.charCodeAt() + 1, 0)]).sort((a,b) => a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0).shift().shift();
}
*/