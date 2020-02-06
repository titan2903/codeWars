function sum(numbers) {
    var count = 0;
    if (numbers.length == 0) {
        return 0
    }

    for (let i = 0; i < numbers.length; i++) {
        count += numbers[i]
    }
    return count
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);


/*
Cara orang lain:

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

const sum = n => n.reduce((a,b) => a+b, 0);

*/