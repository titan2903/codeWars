function replace(s) {
    var newStr = ""
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
            newStr += "!"
        } else {
            newStr += s[i]
        }
    }
    return newStr
}


console.log(replace("Hi!"), "H!!")
console.log(replace("!Hi! Hi!"), "!H!! H!!")
console.log(replace("aeiou"), "!!!!!")
console.log(replace("ABCDE"), "!BCD!")

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}
2. ======>
function replace(s){
  var newS = ''
  var vowels = "aAeEiIoOuU"
  for (var i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) === -1) {
      newS += s[i]
    }  else {
      newS += '!'
    }
  }
  return newS
}
3. ======>
function replace(s){
  //coding and coding....
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = "";
  for (let character of s) {
    if (vowels.includes(character)) {
      result += '!';
    }
    else {
      result += character;
    }
  
  }
  return result;
  
}

4. ======>
  var out = "";
  
  for (var i = 0; i < s.length; i++) {
  
  let sym = s.charAt(i);
    out += sym == "a" ? "!" :
           sym == "e" ? "!" : 
           sym == "i" ? "!" : 
           sym == "o" ? "!" : 
           sym == "u" ? "!" : 
           sym == "A" ? "!" : 
           sym == "E" ? "!" : 
           sym == "I" ? "!" : 
           sym == "O" ? "!" : 
           sym == "U" ? "!" : 
           sym;
           
  }
  
  return out;
  
}
5. ======>
function replace(s){
  //coding and coding....
 var char = (s.split(''));
 
 for (let i = 0; i < char.length; i++) {
   if (char[i] === 'i'){
   char[i] = '!';
   } else if (char[i] === 'a'){
   char[i] = '!';
   } else if (char[i] === 'e'){
   char[i] = '!';
   } else if (char[i] === 'o'){
   char[i] = '!';
   } else if (char[i] === 'u'){
   char[i] = '!';
   } else if (char[i] === 'A'){
   char[i] = '!';
   } else if (char[i] === 'E'){
   char[i] = '!';
   } else if (char[i] === 'I'){
   char[i] = '!';
   } else if (char[i] === 'O'){
   char[i] = '!';
   } else if (char[i] === 'U'){
   char[i] = '!';
   } else {
   char[i] = char[i];
   }
 }
return(char.join(""));
}
6.======>
let replace = (s) => {
  let arr = [];
  arr = s.split('').map(x => x);
  for(let i = 0; i<arr.length;i++){
    if(arr[i]=='a') arr[i] = '!';
    else if(arr[i]=='e') arr[i] = '!';
    else if(arr[i]=='i') arr[i] = '!';
    else if(arr[i]=='o') arr[i] = '!';
    else if(arr[i]=='u') arr[i] = '!';
    else if(arr[i]=='A') arr[i] = '!';
    else if(arr[i]=='E') arr[i] = '!';
    else if(arr[i]=='I') arr[i] = '!';
    else if(arr[i]=='O') arr[i] = '!';
    else if(arr[i]=='U') arr[i] = '!';
  }
  return arr.join('');
}
*/