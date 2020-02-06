function take(arr, n) {
    var result = []
    if (arr.length == 0) {
        return []
    }
    if (arr.length < n) {
        return arr
    }
    for (var i = 0; i < n; i++) {
        // result.push(arr[i])
        result.push(arr[i])
    }
    return result
}


console.log(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");


/*
Cara orang lain:
let take = (arr, n) => arr.slice(0, n);


function take(arr, n) {
  let newArray = []
  for(let i=0; i<n; i++){
  if(arr[i] !== undefined) {
  newArray.push(arr[i])
  }}
  return newArray
}
*/