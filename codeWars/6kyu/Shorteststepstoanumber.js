function shortestStepsToNum(num) {
  if (num < 3) return num - 1;
  let n = 0;
  while (num > 1)
    num % 2 == 0 ? num /= 2 : num--, n++;
  return n;
}


console.log(shortestStepsToNum(1), 0);
console.log(shortestStepsToNum(12), 4);
console.log(shortestStepsToNum(16), 4);
console.log(shortestStepsToNum(71), 9);


/*
=====SOAL======
Given a number, num, return the shortest amount of steps it would take from 1, to land exactly on that number.

Description:
A step is defined as:

Adding 1 to the number: num += 1
Doubling the number: num *= 2
You will always start from the number 1 and you will have to return the shortest count of steps it would take to land exactly on that number.

1 <= num <= 10000

Examples:

num == 3 would return 2 steps:

1 -- +1 --> 2:        1 step
2 -- +1 --> 3:        2 steps

2 steps
num == 12 would return 4 steps:

1 -- +1 --> 2:        1 step
2 -- +1 --> 3:        2 steps
3 -- x2 --> 6:        3 steps
6 -- x2 --> 12:       4 steps

4 steps
num == 16 would return 4 steps:

1 -- +1 --> 2:        1 step
2 -- x2 --> 4:        2 steps
4 -- x2 --> 8:        3 steps
8 -- x2 --> 16:       4 steps

4 steps

*/
/*
CARA ORANG LAIN
1. ======>
function shortestStepsToNum(num) {

  if (num < 3)
    return num - 1;
    
  let next = num % 2 ? num - 1 : num / 2;

  return 1 + shortestStepsToNum(next);
    
}
2. ======>
function shortestStepsToNum(num) {
  // work backwards. unless you're not trying
  var ticks = 0;
  while (num > 1)
    num % 2 == 0 ? num /= 2 : num--, ticks++;
  return ticks
}
3. ======>
function shortestStepsToNum(num) {
  if(num <= 1) return 0;
  if(num%2 == 1) return 1 + shortestStepsToNum(num -1);
  return 1 + shortestStepsToNum(num/2);
}
4. =====>
function shortestStepsToNum(num) {
  for(var c=0; num>1; c++) {
    if(num&1) num--;
    else num/=2;
  }
  return c;
}
*/