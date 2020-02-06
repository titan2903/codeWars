function nbYear(p0, percent, aug, p) {
    var year = 0;
    while (p0 < p) {
        p0 += (p0 * (percent / 100)) + aug;
        year++;
    }
    return year;
}


console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function nbYear(p0, percent, aug, p) {
  const percentage = percent / 100
  let result = p0
  let years = 0

  while (result < p) {
    result += result * percentage + aug
    years++
  }

  return years
}
2. ======>
function nbYear(p0, percent, aug, p) {
  for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}
3. ======>
function nbYear(p0, percent, aug, p) {
  if(p0 >= p) {
    return 0;
  } else {
    return 1+nbYear(p0*(1+percent/100)+aug, percent, aug, p);
  }
}

*/