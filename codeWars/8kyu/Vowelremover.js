function shortcut(string) {
    var tempStr = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] != 'a' && string[i] != 'i' && string[i] != 'u' && string[i] != 'e' && string[i] != 'o') {
            tempStr += string[i]
        }
    }
    return tempStr
}


console.log(shortcut('hello')) //hll 


/*
Cara orang lain:

const shortcut = string => string.replace( /[euioa]/g, '' );


const shortcut = (s) => s.replace(/[aeiou]/g,'');
*/