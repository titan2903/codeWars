function arrayPlusArray(arr1, arr2) {
    var output = []
    for (let i = 0; i < arr1.length; i++) {
        output.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        output.push(arr2[i])
    }

    var count = 0;
    for (let i = 0; i < output.length; i++) {
        count += output[i]
    }
    return count
}



console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

/*
=====SOAL======
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/
/*
CARA ORANG LAIN
1. ======>
function arrayPlusArray(arr1, arr2) {
var join = arr1.concat(arr2);

function getSum(a,b) {
    return a+b;
}
    return join.reduce(getSum);
}
2. ======>
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b)
}
3. ======>
const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a,b)=>a+b)
*/