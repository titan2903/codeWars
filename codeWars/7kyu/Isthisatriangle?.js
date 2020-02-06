function isTriangle(a, b, c) {
    if (a === 0 || b === 0 || c === 0) return false
    if (a + b <= c) return false
    if (b + c <= a) return false
    if (c + a <= b) return false
    return true
}

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);
console.log(isTriangle(1, 2, 2));
console.log(isTriangle(-1, 2, 2));
console.log(isTriangle(-1, -2, 2));
console.log(isTriangle(4, 5, 2));
console.log(isTriangle(0, 5, 2));
console.log(isTriangle(0, 0, 0));


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}
2. ======>
var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2
3. ======>
function isTriangle(a,b,c) {
  if(a > 0 && b > 0 && c > 0) {
    if(a < b + c && b < a + c && c < a + b) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
   return false;
  }
}
*/