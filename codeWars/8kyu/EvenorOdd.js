// function even_or_odd(number) {

//     if (number % 2 == 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }

// }

var even_or_odd = n => n & 1 ? 'Odd' : 'Even'

console.log(even_or_odd(2), "Even")
console.log(even_or_odd(0), "Even")
console.log(even_or_odd(7), "Odd")
console.log(even_or_odd(1), "Odd")

/*CARA ORANG LAIN
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';

const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';

var even_or_odd = n => n & 1 ? 'Odd' : 'Even'

*/