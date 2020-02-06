function last(x) {
    var str = '';
    var arr = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] != ' ') {
            str += x[i]
        } else if (x[i] == ' ') {
            arr.push(str)
            str = ''
        }
    }
    arr.push(str)
    // console.log(arr);
    return a[a.length - 1].localeCompare(b[b.length - 1])
}

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
unction last(x){
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
2. ======>
function last(x) {
  return x.split(" ").sort((a,b) => {
    if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
      return -1;
    } else if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
      return 1;
    }   
    return 0;
  });
}
3. ======>
function last(x){
    const letters = 'abcdefghijklmnopqrstuvwxyz\/';
    let result = [];
    let words = x.split(' ');
    for (i=0; i<26; i++) {
    for (w=0; w<words.length; w++) {
        if (words[w].charAt(words[w].length-1) == letters[i]) {
        result.push(words[w]);
        }
    }
    }
    return result
}
*/