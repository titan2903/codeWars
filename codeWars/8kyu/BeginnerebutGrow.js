function grow(x) {
    var count = 1;
    for (let i = 0; i < x.length; i++) {
        count *= x[i]
    }
    return count

}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);


//cara orang lain
// const grow=x=> x.reduce((a,b) => a*b);