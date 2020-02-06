function removeChar(str) {
    var temp = '';
    for (let i = 1; i < str.length - 1; i++) {
        temp += str[i]
    }
    return temp
}

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');

/*
Cara orang lain:

const removeChar = str => str.slice(1,-1)

removeChar = str => str.slice(1,-1)
*/