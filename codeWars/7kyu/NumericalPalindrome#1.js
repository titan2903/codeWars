function palindrome(num) {
    if (typeof num == 'string' || num <= 0) return 'Not valid'

    num = String(num)
    var str = '';
    for (let i = num.length - 1; i >= 0; i--) {
        str += num[i]
    }
    return num == str
}


console.log(palindrome(1221), true);
console.log(palindrome(123322), false);
console.log(palindrome("ACCDDCCA"), "Not valid");
console.log(palindrome("1221"), "Not valid");
console.log(palindrome(-450), "Not valid");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const palindrome = n => {
  if (typeof n !== 'number' || n < 0) return "Not valid"
  return String(n).split('').reverse().join('') === String(n)
}
2. ======>
function palindrome(num) {
  if (typeof num === 'number' && num > 0) {
    num = num.toString().toLowerCase();

    for (var left = 0, right = num.length - 1; left < right;) {
      if (num.charAt(left++) !== num.charAt(right--)) {
        return false;
      }
    }

    return true;
  }

  return 'Not valid';
}
3. ======>
function palindrome(num) {
let str = "";
        if (typeof num !== 'number' || num < 0) {
        return "Not valid";
        }
        str = num + '';
        for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
        }
        return true;
    }
*/