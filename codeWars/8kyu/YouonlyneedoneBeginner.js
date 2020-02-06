function check(a, x) {
  // your code here
  for (let i = 0; i < a.length; i++) {
    if (a[i] == x) {
      return true
    } else {
      return false
    }
  }

  
  let result = 1
  if (n == 0) {
    return result;
  } else {
  result *=n
    return result * factorial(n - 1);
  }
}



console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function check(a,x){
    for (let i=0; i<a.length;i++){
      console.log(a[i])
      if (a[i]==x){ return true }
    }
    return false
  }
2. ======>
const check = (a,x) => a.includes(x);
3. ======>
var check = function(array, value) {
  return array.indexOf(value) !== -1;
};
4. ======>
function check(a,x){
  let i=0;
  return checki(a,x,i);
  function checki(a,x,i){
      if(i>=a.length) return false;
      return a[i]===x?true:checki(a,x,i+1);
  }
};
5. ========>
function check(a,x){
if(a[0]==x){
  return true;
}else if (a.length==1){
  return false;

}else{
  
  return check(a.slice(1),x);
}


};
*/