function solution(nums) {
    if (nums == null) {
        return []
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                var temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
}

console.log(solution([1, 2, 10, 50, 5])); // should return [1,2,5,10,50]
console.log(solution(null)); // should return []


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}
2. ======>
function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}
3. ======>
const solution = n => (n !== null && [])? n.sort((a,b) => a - b) : [];
*/