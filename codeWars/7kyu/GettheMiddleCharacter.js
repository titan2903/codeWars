function getMiddle(s) {
    //Code goes here!
    length = s.length;
    middle = Math.floor(length / 2)

    if (length % 2 == 0) {
        return s[middle - 1] + s[middle]
    } else {
        return s[middle]
    }
}



console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
2. ======>
function getMiddle(s){
  var a = s.length;
    if (a == 1){console.log(a); return s}
    if ( a & 1 ) {
      a =  Math.floor(a/2);     
     return s[a];
   } else {
      a = (a/2);
      return s[a-1]+s[a];
  }
}
3. ======>
*/