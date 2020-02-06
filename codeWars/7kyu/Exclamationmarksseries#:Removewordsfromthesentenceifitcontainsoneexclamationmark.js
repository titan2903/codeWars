function remove(s) {
    var arr = []
    var temp = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            temp += s[i]
        } else if (s[i] == ' ') {
            arr.push(temp)
            temp = ''
        }
    }
    arr.push(temp)
    console.log(arr);

}

function remove(s) {
    var arr = s.split(' ');
    var ans = [];
    for (var i = 0; i < arr.length; ++i) {
        var c = 0;
        for (var j = 0; j < arr[i].length; ++j)
            if (arr[i][j] == '!')
                c++;
        if (c != 1)
            ans.push(arr[i]);
    }
    return ans.join(' ');
}



console.log(remove("Hi!"), "")
console.log(remove("Hi! Hi!"), "")
console.log(remove("Hi! Hi! Hi!"), "")
console.log(remove("Hi Hi! Hi!"), "Hi")
console.log(remove("Hi! !Hi Hi!"), "")
console.log(remove("Hi! Hi!! Hi!"), "Hi!!")
console.log(remove("Hi! !Hi! Hi!"), "!Hi!")



/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function remove(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}
2. ======>
function remove(s){
  return s
    .split(" ")
    .filter(s => !s.includes("!") || (s.indexOf("!") !== s.lastIndexOf("!")))
    .join(" ")
}   
3. ======>
function remove(s){
  return s.split(' ').filter(x => x.indexOf('!') !== x.lastIndexOf('!') || x.indexOf('!') < 0).join(' ');
}
*/