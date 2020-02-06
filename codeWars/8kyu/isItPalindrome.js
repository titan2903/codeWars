function isPalindrome(x) {
  y = x.toLowerCase()
  var result = '';
  for (var i = x.length - 1; i >= 0; i--) {
    result += x[i].toLowerCase();
  }
  console.log(result);


  if (result == y) {
    return true
  } else {
    return false
  }
}




console.log(isPalindrome("a"), true)
console.log(isPalindrome("aba"), true)
console.log(isPalindrome("Abba"), true)
console.log(isPalindrome("hello"), false)
console.log(isPalindrome("Bob"), true)
console.log(isPalindrome("Madam"), true)
console.log(isPalindrome("AbBa"), true)
console.log(isPalindrome(""), true)


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

2. ======>
function isPalindrome(x) {
  x = x.toLowerCase()
  let a = 0
  let b = x.length
  while (a < b) {
    if (x[a] != x[b-1])
      return false
    a++
    b--
  }
  return true
}

3. ======>
function isPalindrome(line) {
  line = line.toString().toLowerCase();

  for (var left = 0, right = line.length - 1; left < right;) {
    if (line.charAt(left++) !== line.charAt(right--)) {
      return false;
    }
  }

  return true;
}
*/