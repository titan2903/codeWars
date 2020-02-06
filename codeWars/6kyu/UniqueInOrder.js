var uniqueInOrder = function (iterable) {
    var arr = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != iterable[i + 1]) {
            arr.push(iterable[i])
        }
    }
    return arr

}

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
var uniqueInOrder=function(iterable){
  return Array.prototype.filter.call(iterable, function(current, index){ return iterable[index - 1] !== current})
}   
2. ======>
var uniqueInOrder=function(iterable){
  return Array.prototype.reduce.call(iterable, function(a,b) { if (a[a.length-1] !== b) a.push(b); return a; }, []);
}
3. ======>
var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  var result = []; // this array will store unique elements
  for (var i = 0, length = iterable.length; i < length; i++){
  // we step through the elements in iterable from the beginning to the end
    if (iterable.indexOf(iterable[i]) !== iterable.indexOf(iterable[i + 1])) {
      // and add an element to the result array every time this is different from the following element
      result.push(iterable[i]);
    }
  }
  return result;
}
4. =======>
var uniqueInOrder=function(iterable){
  return Array.from(iterable)
    .filter((el, i, arr) => i == 0 || el != arr[i-1])
}
*/