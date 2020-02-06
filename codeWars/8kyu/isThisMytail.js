function correctTail(bod, tail) {
  // sub = bod.substr(bod.length - tail.length)
  // if (sub = tail) {
  //     return true
  // } else {
  //     return false
  // }


  if (bod[bod.length - 1] == tail) {
    return true
  } else {
    return false
  }


}

console.log(correctTail("Fox", "x"), true);
console.log(correctTail("Rhino", "o"), true);
console.log(correctTail("Meerkat", "t"), true);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function correctTail(bod, tail) {
  return bod[bod.length-1] === tail
}
2. ======>
const correctTail = (body, tail) => body.slice(-1) === tail[0]

const correctTail = ( bod, tail ) => bod.split("").reverse()[0] === tail;
3. ======>

const correctTail = (body, tail) => body.charAt(body.length -1) === tail;


function correctTail(body, tail) {
  
  var sub = body.substr(body.length-(tail.length));
  
  if (sub === tail) {
    return true;
  }
  else {
    return false;
  }
}
*/