function typeOfSum(a, b) {
    if (typeof (a) === 'string' || typeof (b) === 'string') return 'string';
    if (typeof (a) === 'number' || typeof (b) === 'number') return 'number';
    if (typeof (a) === 'boolean' || typeof (b) === 'boolean') return 'number';
    if (typeof (a) === 'undefined' || typeof (b) === 'undefined') return 'number';
    if (typeof (a) === 'object' && typeof (b) === 'object') return 'number';

    // return typeof (a + b)
}


console.log(typeOfSum(12, 1), 'number');
console.log(typeOfSum('d', 1), 'string');
console.log(typeOfSum(1, 'a'), 'string');
console.log(typeOfSum('dd', ''), 'string');
console.log(typeOfSum(true, 1), 'number');
console.log(typeOfSum('s', false), 'string');
console.log(typeOfSum(null, 1), 'number');
console.log(typeOfSum('s', null), 'string');
console.log(typeOfSum(null, undefined), 'number');
console.log(typeOfSum(undefined, 're'), 'string');
console.log(typeOfSum(undefined, true), 'number');
console.log(typeOfSum(null, false), 'number');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function typeOfSum(a, b) {
  // good luck
  if(typeof (a+b) == 'number'){
    return 'number';
  }
  else if(typeof (a+b) == 'string'){
    return 'string';
  }
}
2. ======>
function typeOfSum(a, b) {
  let c = a + b;
  if( typeof c === 'number') { 
  return 'number';
  } else {
  return 'string'
  }
}
3. ======>
function typeOfSum(a, b) {
  return [typeof a, typeof b].includes('string') ? 'string' : 'number';
}
*/