function digital_root(n) {
    digit = String(n).split('')
    let count = 0;
    for (let i = 0; i < digit.length; i++) {
        count += Number(digit[i])
    }

    str = String(count).split('')
    var sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
    return sum
}

console.log(digital_root(16), 7)
console.log(digital_root(456), 6)
console.log(digital_root(123343));

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
2. ======>
function digital_root(n) {
  var s = 0;
  while (n) {
    s+=n%10;
    n=Math.floor(n/10);
  }
  return s < 10 ? s : digital_root(s);
  
}
3. ======>
*/