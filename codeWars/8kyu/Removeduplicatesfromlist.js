function distinct(a) {
    var result = [];
    for (let i = 0; i < a.length; i++) {
        let find = false
        for (let j = 0; j < result.length; j++) {
            if (a[i] == result[j]) {
                find = true
            }
        }
        if (find == false) {
            result.push(a[i])
        }
    }
    return result
}
console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
distinct = a => Array.from(new Set(a));
2. ======>
function distinct(arr) {
  let res = []; 
  
  for(let i = 0; i < arr.length; i++){
    if(!res.includes(arr[i])){
      res.push(arr[i]);
    }
}
return res;
}
3. ======>
const {uniq: distinct} = require('lodash');
*/