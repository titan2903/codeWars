function spacify(str) {
    var tempStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i == str.length - 1) {
            tempStr += str[i]
        } else {
            tempStr += str[i] + ' '
        }
    }
    return tempStr
}


console.log(spacify('hello world'), 'h e l l o   w o r l d');
console.log(spacify('12345'), '1 2 3 4 5');

/*
=====SOAL======
Modify the spacify function so that it returns the given string with spaces inserted between each character.
*/
/*
CARA ORANG LAIN
1. ======>
function spacify(str) {
    return str.split("").join(" ");
}
2. ======>
const spacify = str => str.split('').join(' ');
3. ======>
function spacify(str) {
    return Array.from(str).join(' ');
}
*/