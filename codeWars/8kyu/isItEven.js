function testEven(n) {
    //Your awesome code here!
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function testEven(n){
  return !(n % 2);
}
2. ======>
function testEven(n) {
  return (Math.round(n) & 1) === 0
}
3. ======>
function testEven(n) {
    return ( n % 2 ) ? false : true;
}
*/