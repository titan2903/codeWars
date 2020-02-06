function isLeapYear(year) {
    console.log(year)
    if (year % 4 == 0 && year % 100 != 0) {
        return true
    } else if (year % 400 == 0) {
        return true
    } else {
        return false
    }
}

console.log(isLeapYear(1234), false, 'Year 1234');
console.log(isLeapYear(1984), true, 'Year 1984');
console.log(isLeapYear(2000), true, 'Year 2000');
console.log(isLeapYear(2010), false, 'Year 2010');
console.log(isLeapYear(2013), false, 'Year 2013');


/*
=====SOAL======
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.


*/
/*
CARA ORANG LAIN
1. ======>
function isLeapYear(year) {
  if(0 == year%400) return true;
  if(0 == year%100) return false;
  if(0 == year%4) return true;
  return false;
}
2. ======>
const moment = require('moment');

function isLeapYear(year) {
  return moment([year]).isLeapYear()
}
3. ======>
const isLeapYear = y => !(y%4) && ( !(y%400) || !!(y%100) );
*/