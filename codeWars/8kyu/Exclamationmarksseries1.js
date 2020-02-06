function remove(s) {
    //coding and coding....
    var temp = '';
    for (let i = 0; i < s.length; i++) {
        if (i == s.length - 1 && s[i] == '!') {
            temp += ''
        } else {
            temp += s[i]
        }

    }
    console.log(temp)

}



console.log(remove("Hi!"), "Hi")
console.log(remove("Hi!!!"), "Hi!!")
console.log(remove("!Hi"), "!Hi")
console.log(remove("!Hi!"), "!Hi")
console.log(remove("Hi! Hi!"), "Hi! Hi")
console.log(remove("Hi"), "Hi")


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const remove = s => s.replace(/!$/, '');
2. ======>
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}
3. ======>
function remove(s){
  if(s && s[s.length-1]==='!')
    return s.substr(0,s.length-1);
  return s;
}
*/