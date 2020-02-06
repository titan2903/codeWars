function solve(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] > arr[j]) {
    //             let temp = arr[i]
    //             arr[i] = arr[j]
    //             arr[j] = temp
    //         }
    //     }
    // }
    // console.log(arr)

    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        var find = false
        for (let j = 0; j < result.length; j++) {
            if (arr[i] == result[j]) {
                find = true
            }
        }
        if (find == false) {
            result.push(arr[i])
        }
    }

    var output = [];
    for (var i = result.length - 1; i >= 0; i--) {
        output.push(result[i])
    }
    return output
}


console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);



/*
Cara orang lain: 

const solve = a => Array.from(new Set(a.reverse())).reverse() ;


const solve = row => row.filter((x, i) => row.lastIndexOf(x) === i)
*/