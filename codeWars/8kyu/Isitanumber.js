function isDigit(s) {
    return Number(s) === parseFloat(s)
}




console.log(isDigit("s2324"), false);
console.log(isDigit("-234.4"), true);


/*
Cara orang lain:

function isDigit(s) {
return Number(s) === parseFloat(s) ? true : false
}


const isDigit = (s) => s.trim().length ? !!(Number(s)) || Number(s) == 0 : false;


function isDigit(s) {
console.log(s);
if (s.trim() === '' ){
return false;
}
 if (isNaN(s)) {
  return false;
 } else {
 return true;
   }
}
*/