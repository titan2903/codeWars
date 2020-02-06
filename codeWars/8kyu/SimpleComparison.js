function add(a, b) {
    if (a === b) {
        return true
    } else {
        return false
    }
}


console.log(add('1', 1), true);
console.log(add(1, '1'), true);
console.log(add(1, '0'), false);
console.log(add('11', 11), true);
console.log(add(12, 12), true);
console.log(add(120, '021'), false);


/*
Cara orang lain:

const add = (a, b) => a == b

function add(a, b){
  return a == b 
}
*/