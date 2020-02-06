function countArara(n) {
    let anane = 'anane';
    let adak = 'adak';
    let arr = []
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 == 0) arr.push(adak)
            if (i % 2 != 0 && i == n) arr.push(anane)
        }
    }
    return arr.join(' ')
}

console.log(countArara(1), "anane");
console.log(countArara(3), "adak anane");
console.log(countArara(8), "adak adak adak adak");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function countArara(n) {
  switch (n) {
    case 0:  return '';
    case 1:  return 'anane';
    case 2:  return 'adak';
    default: return 'adak ' + countArara(n-2);
  }
}
2. ======>
function countArara(n) {
    //your code here
    var count = [];
    for (var i = 2; i <= n; i+=2) {
      count.push("adak");
    }
    if (n % 2 != 0) { count.push("anane"); }
    
    return count.join(" ");
}
3. ======>
function countArara(n) {
    if(n === 1) return "anane";
    if(n === 2) return "adak";
    if(n % 2 === 0) {
      return countArara(n-2) + ' adak';
    } else {
      return countArara(n-1) + ' anane';
    }
}
*/