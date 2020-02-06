function any(arr, fun) {
  return arr.some(fun)
}


console.log(any([1, 2, 3, 4], function (v, i) {
  return v > 3
}), true)
console.log(any([1, 2, 3, 4], function (v, i) {
  return v > 4
}), false)

/*
Cara orang lain:

const any = (arr, fun) => arr.some(fun);

function any(arr, fun){
  for (var i=0; i<arr.length; ++i)
    if (fun(arr[i]))
      return true;
  return false;
}

*/