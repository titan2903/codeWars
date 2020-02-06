function toWeirdCase(string) {
    var str = ''
    var result = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            str += string[i]
        } else if (string[i] == ' ') {
            result.push(str)
            str = ''
        }
    }
    result.push(str)
    // console.log(result);
    

}

console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');