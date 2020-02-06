function accum(s) {
  let letters = s.toLowerCase().split('')
  // console.log(letters)
  for (let i = 0; i < letters.length; i++) {
    letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
  }
  return letters.join('-')
}

console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
2. ======>
function accum(str) {
  var res = [];
  for(var i = 0; i < str.length; i++) {
    var row = '';
    for(var j = 0; j < i + 1; j++) {
      row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();      
    }
    res.push(row);
  }
  return res.join('-');
}
3. ======>
function accum(s) {
  var arr = [];
  s = s.toLowerCase();
  
  for (var i = 0; i < s.length; i++) {
    var current = s[i];
    arr.push(current[0].toUpperCase() + current.repeat(i));
  }
  
  return arr.join('-');
}
*/