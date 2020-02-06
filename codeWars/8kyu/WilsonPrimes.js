function amIWilson(p) {
    if (p === 1) {
        return false;
    } else if (p === 2) {
        return true;
    } else {
        for (var i = 2; i < p; i++) {
            if (p % i == 0) {
                return false;
            }
        }
        return true;
    }

}

console.log(amIWilson(5), true)
console.log(amIWilson(9), false)
console.log(amIWilson(6), false)

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function amIWilson(p) {
  function fact(x) {
    return x <= 1 ? 1 : x * fact(x-1);
  }
  
  return (fact(p-1) + 1) / (p*p) % 1 === 0;
}
2. ======>
function amIWilson(p) {
  var factorial = p - 1;
  for (i = factorial; i > 1; i--) {
    factorial = factorial * (i - 1)
  }
  var wilson = (factorial + 1) / (p * p);

  if (wilson % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
3. ======>
*/