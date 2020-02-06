function solution(str) {
    var result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result
}

console.log(solution('world'), 'dlrow')


/*
CAra orang lain:

function solution(str){
return str.split('').reverse().join('');  
}

const solution = str => str.split('').reverse().join('');
*/