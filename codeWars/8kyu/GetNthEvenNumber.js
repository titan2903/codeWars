// function nthEven(n) {
//     // your code here
//     // return (n - 1) * 2
//     let temp = 0;
//     for (let i = 0; i < n; i++) {
//         temp += 2

//     }
//     return temp
// }

const nthEven = n => (n - 1) * 2


// Basic Tests

console.log(nthEven(1), 0, "Wrong Value!");
console.log(nthEven(2), 2, "Wrong Value!");
console.log(nthEven(3), 4, "Wrong Value!");
console.log(nthEven(100), 198, "Wrong Value!");
console.log(nthEven(1298734), 2597466, "Wrong Value!");