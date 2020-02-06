function closeCompare(a, b, margin) {
    if (Math.abs(a - b) <= margin) return 0
    if (a < b) return -1
    if (a == b) return 0
    return 1
}

console.log(closeCompare(4, 5), -1)
console.log(closeCompare(5, 5), 0)
console.log(closeCompare(6, 5), 1)
console.log(closeCompare(-6, -5), -1)
console.log(closeCompare(2, 5, 3), 0)
console.log(closeCompare(8.1, 5, 3), 1)
console.log(closeCompare(1.99, 5, 3), -1)


/*
=====SOAL======
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. a is "close to" b if margin is higher than or equal to the difference between a and b.

When a is lower than b, return -1.

When a is higher than b, return 1.

When a is close to b, return 0.

If margin is not given, treat it as zero.

Example: if a = 3, b = 5 and the margin = 3, since a and b are no more than 3 apart, close_compare should return 0. Otherwise, if instead margin = 0, a is lower than b and close_compare should return -1.

Assume: margin >= 0
*/
/*
CARA ORANG LAIN
1. ======>
function closeCompare(a, b, m = 0){
  return Math.abs(a - b) <= m? 0: Math.sign(a - b);
}
2. ======>
function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}
3. ======>
function closeCompare(a, b, margin){
  if(a == b || Math.abs(a - b) <= margin){
    return 0
  }
  return a > b ? 1 : -1;
}
*/