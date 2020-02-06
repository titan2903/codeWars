function comp(array1, array2) {
    if (array2 == null || array1 == null) return false
    if (array1.length == 0 && array2.length == 0) return true

    for (let i = 0; i < array1.length; i++) {
        let found = false
        for (let j = 0; j < array2.length; j++) {
            if (Math.sqrt(array2[j]) == array1[i]) {
                array1[i] = -1
                array2[j] = -1
                found = true
                break;
            }
        }
        if (found == false) {
            return found
        }
    }
    return true
}


a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2), true);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

2. ======>
function comp(arr1,arr2){
  if(!arr1 || !arr2) return false;
  arr1.map(function(x){
    arr2.map(function(y){
      if(x*x == y){
        const ind = arr2.indexOf(y);
        arr2.splice(ind,1)
      }
    })
  })
  return arr2.length == 0
}
3. ======>
function comp(array1, array2){
  //your code here
  function add(a, b) {
      return a + b;
  }
  if (!array1 || !array2) {
    return false
  }
  if (array1.length === 0 && array2.length === 0) { 
    return true
  }

  if (array1.length !== array2.length) {
    return false
  }
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
      newArray.push(Math.pow(array1[i],2));
  }
  return newArray.reduce(add) === array2.reduce(add) ? true : false

}
*/