// function array(arr) {
// //Good luck
// if (arr.length == 0) {
//     return null
// } else if (arr.length == 1) {
//     return null
// }

// var temp = ''
// for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] != ',') {
//         temp += arr[i]
//     }
// }

// for (let j = 0; j < temp.length; j++) {
//     if (temp[0] == 0) {
//         return null
//     }
// }

// return temp

// }
array = arr =>
    arr
    .split(',')
    .slice(1, -1)
    .join(' ') || null



console.log(array(''), null);
console.log(array('1'), null);
console.log(array('1, 3'), null);
console.log(array('1,2,3'), '2');