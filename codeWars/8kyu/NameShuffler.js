function nameShuffler(str) {
    var tempstring = ''
    var output = []
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            tempstring += str[i]
        } else if (str[i] == ' ') {
            output.push(tempstring)
            tempstring = ''
        }
    }
    output.push(tempstring)

    return `${output[1]} ${output[0]}`
}

console.log(nameShuffler('john McClane'), 'McClane john');

/*
Cara orang lain:

var nameShuffler = str => str.split(" ").reverse().join(" ");
*/