function isIsogram(str) {
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}
2. ======>
function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}
3. ======>
function isIsogram(str) {
  str = str.toLowerCase()
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      return false
    }
  }
  
  return true
}
*/