function numericals(s) {
    let object = {};
    let finalStr = ''
    for (let i = 0; i < s.length; i++) {
        let elem = s[i]
        if (!object[elem]) {
            object[elem] = 1
        } else {
            object[elem] += 1
        }
        finalStr += object[elem]
    }
    return finalStr
}


console.log(numericals("Hello, World!"), "1112111121311");
console.log(numericals("Hello, World! It's me, JomoPipi!"), "11121111213112111131224132411122");
console.log(numericals("hello hello"), "11121122342");
console.log(numericals("Hello"), "11121");
console.log(numericals("aaaaaaaaaaaa"), "123456789101112");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const numericals = (str, seen = {}) =>
  str.replace(/./g, char => 
    seen[char] = (seen[char] || 0) + 1)
2. ======>
function numericals(s){
  let result="";
  let chars={};
  for(let i=0;i<s.length;i++){
    chars[s[i]]=chars[s[i]]?chars[s[i]]+1:1;
  result+=chars[s[i]];
  } 
  return result;
}
3. ======>
function numericals(s){
  let data = {};
  let newString = '';
  for(let i = 0; i < s.length; i++) {
    if(data[s[i]]) {
      data[s[i]]++;
      newString += data[s[i]];
    } else {    
      data[s[i]] = 1;
      newString += data[s[i]];
  }
  }
  return newString
}
4. ======>
function numericals(s){
  let seenChars = new Map();
  let result = "";
  
  for (let i = 0; i < s.length; i++) {
    let views = seenChars.get(s[i]);
    views = views === undefined ? 1 : views + 1;
    result += views;
    seenChars.set(s[i], views);
  }
  
  return result;
}
5. ======>
function numericals(s){
  let str = '';
  let obj = {};
  for (let i = 0; i < s.length; i++) {   
    (s[i] in obj) ? obj[s[i]]++ : obj[s[i]] = 1;
    
    str += obj[s[i]];
  }
  return str;
}
*/