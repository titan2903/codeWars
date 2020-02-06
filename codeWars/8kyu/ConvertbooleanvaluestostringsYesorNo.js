function boolToWord(bool) {
    if (bool == true) {
        return 'Yes'
    } else {
        return 'No'
    }
}


console.log(boolToWord(true), 'Yes')
console.log(boolToWord(false), 'No')


/*
Cara orang lain:
function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

let boolToWord = bool => bool ? 'Yes' : 'No';

*/