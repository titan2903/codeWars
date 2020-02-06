function spEng(sentence) {
    t = sentence.toUpperCase()
    if (t == "ENGLISH") {
        return true
    } else {
        return false
    }
}

console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function spEng(sentence){
var test = sentence.toLowerCase();
if (test.indexOf("english") == -1){return false}
else{return true}
}
2. ======>
const spEng = (sentence) => {
    let a = sentence.toLowerCase()
    if(a.includes("english")) {
    return true
    } else {
    return false
    }
}
3. ======>
function spEng(sentence){
 let sntc = sentence.toUpperCase();
 let english = sntc.includes("ENGLISH");   

 if (english != true){
    return false;
  }else{
    return true;
  }
}
4. =======>
function spEng(str){
str=str.toLowerCase();
let pos=str.search("english");
if (pos!=-1)
{
return true;
}
else{
return false;
}
}
5. =========>
function spEng(sentence){
  var caseCleared = sentence.toLowerCase();
  if (caseCleared.indexOf('english') > -1) {
  return true;
  } else {
  return false;
  }
} 
*/