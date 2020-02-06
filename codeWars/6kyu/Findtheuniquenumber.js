function findUniq(arr) {
  // let compareArr = [arr[0], arr[1]];
  // for (let i = 2; i < arr.length; i++) {
  //     if (compareArr[0] == compareArr[1]) {
  //         if (compareArr[0] != arr[i]) {
  //             return arr[i]
  //         }
  //     } else {
  //         let uniqNum = compareArr[0] !== arr[i] ? compareArr[0] : compareArr[1]
  //         return uniqNum
  //     }
  // }

  let result = []
  for (let i = 0; i < arr.length; i++) {
    let found = false
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j][0]) {
        found = true
        result[j][1]++
      }
    }
    if (!found) {
      result.push([arr[i], 1])
    }
  }
  // console.log(result);

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[i][1] < result[j][1]) {
        var temp = result[i]
        result[i] = result[j]
        result[j] = temp
      }
    }
  }
  return result[0][0]
}

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
2. ======>
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if( a != b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}
3. ======>
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
4. ======>
findUniq = (a) => a.sort()[0] === a.sort()[1] ? a.sort()[a.length - 1] : a.sort()[0];
*/