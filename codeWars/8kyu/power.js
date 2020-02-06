function numberToPower(number, power) {
    // Code here
    var count = 1;
    for (var i = 0; i <= power; i++) {
        count *= number
    }
    return count
}


console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);



/*
=====SOAL======

*/
/*
CARA ORANG LAIN
1. ======>
function numberToPower(number, power){
  return Array(power).fill(number).reduce((res, n) => res * n, 1);
}
2. ======>
const numberToPower = (n, p) => p > 0 ? n * numberToPower(n, p - 1) : 1;
3. ======>
numberToPower  =ㅤ=  (ᅟ,ᅠ)  =>ᅠ<=  !ㅤ|ㅤ||ᅟ*ㅤ(ᅟ,  ~  -ᅠ)  ;
*/