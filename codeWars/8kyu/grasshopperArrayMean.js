var findAverage = function (nums) {
    var count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i]
    }

    return count / nums.length
}

console.log(findAverage([1]), 1)
console.log(findAverage([1, 3, 5, 7]), 4)


/*
Cara orang lain:

const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;
*/