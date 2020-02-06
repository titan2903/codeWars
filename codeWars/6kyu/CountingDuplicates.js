function duplicateCount(text) {
  text = text.toLowerCase()
  let count = 0;

  let arr = []
  if (text.length == 0) return 0;
  for (let i = 0; i < text.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][0] == text[i]) {
        arr[j][1] += 1
        found = true
      }
    }
    if (found == false) {
      arr.push([text[i], 1])
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > 1) count++
  }
  return count
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
2. ======>
function duplicateCount(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];
  
  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });
  
  return count;
}
3. ======>
function duplicateCount(text){
  
  var input = text.toLowerCase().split('');
  
  var obj = {};
  
  for( var i in input) {
    
    if(!obj[ input[i] ]){
      
      obj[ input[i] ] = 1;
      
    } else{
      obj[ input[i] ] += 1;
    }  
  }
  
  var result = 0;
  
  for( var prop in obj) {
    
    if(obj[prop] > 1){
     result++;
    }
  }
  
  return result;
  
}
*/