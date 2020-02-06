function descendingOrder(n) {
    // console.log(n);

    n = n.toString().split('').sort()
    var temp = [];
    for (let i = 0; i < n.length; i++) {
        temp.push(Number(n[i]))
    }
    let sorted = temp.sort(function (a, b) {
        return b - a
    });
    let sorted2 = sorted.join('')
    return Number(sorted2)
}

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)
console.log(descendingOrder(011), 110)

/*
Cara orang lain:
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
*/