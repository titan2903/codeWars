function positiveSum(arr) {
    var temp = [];
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            // temp.push(arr[i])
            count += arr[i]

        }
        // else {
        //     count += arr[i]
        // }

    }
    return count
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);


/*
Cara Orang lain

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

function positiveSum(arr) {
  return arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
}

*/