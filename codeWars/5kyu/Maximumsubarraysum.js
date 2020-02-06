var maxSequence = function (arr) {
    let rec = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > rec) {
                rec = sum;
            }
        }
    }

    return rec;
}



console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}
2. ======>
var maxSequence = function(arr){
    let start = 0 
  let end = 1
  let max = 0 
  while(start < arr.length){
    if(end > arr.length){
      start++
      end = start + 1
    }
    if(sumArr(arr.slice(start, end)) > max){
      max = sumArr(arr.slice(start, end))
    }
    end++
  }
  return max
}

const sumArr = (arr) =>{
  return arr.reduce((a, b) => a + b, 0)
}
3. ======>
function maxSequence (arr) {
  let min = 0
  let highest = 0
  let sum = 0
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i]
    min = Math.min(sum, min)
    highest = Math.max(highest, sum - min)
  }
  return highest
}
*/