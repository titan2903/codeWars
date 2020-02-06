function century(year) {
    let aCentury = 100;
    let time = year / aCentury
    if (year <= aCentury) {
        return 1
    } else if (time > Math.round(time)) {
        return Math.round(time) + 1
    } else if (year > aCentury) {
        return Math.round(time)
    }
}


console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const century = year => Math.ceil(year/100)
2. ======>
function century(year) {
  return (year + 99) / 100 | 0;
}
3. ======>
function century(year) {
  var century = 0;
  
  for(var i = 0; i < year; i++) {
    if(i % 100 == 0) {
      century++;
    }
  }
  return century;
}
*/