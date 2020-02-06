function solution(number) {
    var count = 0;
    for (let i = 1; i < number; i++) {
        if (i % 5 == 0 || i % 3 == 0) {
            count += i
        }
    }
    return count
}




console.log(solution(10)); //23

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function solution(number){
  var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}
2. ======>
solution = n => {
  let s = 0;
  for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
  return s;
}
3. ======>
function solution(number) {   
   for (var res = 0, i = 0; i < number; i++) {   
       res += (!(i % 3) || !(i % 5)) ? i : 0;
   }
   return res;
}
*/