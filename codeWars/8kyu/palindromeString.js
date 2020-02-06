function isPalindrome(line) {
    var string = String(line)
    var str = '';
    for (let i = string.length - 1; i >= 0; i--) {
        str += string[i]

    }

    if (string == str) {
        return true
    } else {
        return false
    }
}




console.log(isPalindrome("anna"), true);
console.log(isPalindrome("walter"), false);
console.log(isPalindrome(12321), true);
console.log(isPalindrome(123456), false);
console.log(isPalindrome("."), true);
console.log(isPalindrome(".!!."), true);

/*
=====SOAL======
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.
*/
/*
CARA ORANG LAIN
1. ======>
function isPalindrome(line) {
  return (String(line) == String(line).split('').reverse().join('') )
  
}
2. ======>
const isPalindrome = line => line == line.split('').reverse().join('')
3. ======>function isPalindrome(line) {
 var reg = /[\W_]/g;
 var newStr = line.toLowerCase().replace(reg, "");
  let reversed = newStr.split("").reverse().join("");
  if (reversed === newStr) {
  return true;
  }
  else {return false;
  }
   
  }
  
isPalindrome("eye");
*/