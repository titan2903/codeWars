function stringToArray(string) {
    var temp = [];
    var str = ''
    // for (let i = 0; i < string.length; i++) {
    //     if (string[i] != ' ') {
    //         str += string[i]
    //     } else if (string[i] == ' ') {
    //         temp.push(str)
    //         str = ''
    //     }

    // }
    // temp.push(str)
    // return temp
    for (let i = 0; i < string.length; i++) {
        if (str) {
            if (string[i] == ' ') {
                temp.push(str)
                str = ''
            } else {
                str += string[i]
            }
        } else {
            if (string[i] != ' ') {
                str += string[i]
            }
        }
    }
    if (str) {
        temp.push(str)
    }
    return temp
}

console.log(stringToArray("  Robin     Singh"), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);

/*
Cara orang lain :

function stringToArray(string){
return string.split(' ');
}

const stringToArray = string => string.split(' ');

stringToArray=(s)=>s.split(' ')
*/