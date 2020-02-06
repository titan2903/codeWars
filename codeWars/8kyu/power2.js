function powersOfTwo(n) {
  var arr = []
  if (n == 0 || n == 1) {
    return [1]
  }

  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i))
  }
  return arr

}

console.log(powersOfTwo(0), [1])
console.log(powersOfTwo(1), [1, 2])
console.log(powersOfTwo(4), [1, 2, 4, 8, 16])

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
powersOfTwo = n => [...Array(n + 1)].map((e, i) => Math.pow(2, i));
2. ======>
function powersOfTwo(n){
  var ar = new Array();
  var p=1;
  for (let i=0;i<=n;i++){
    ar.push(p)
    p*=2;
  }
  return ar;
}
3. ======>
const powersOfTwo = n => Array.from({length : n + 1}, (val, i) => Math.pow(2, i))

4. ======>
function powerOfTwo(num) {
	if (num===1|| num===0){
		return true;
	}
	while (num>=1){
		num/=2;
		if (num===2||num===1){
			return true;
		}
	}return false;
}
*/