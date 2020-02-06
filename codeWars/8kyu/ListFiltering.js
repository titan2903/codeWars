function filter_list(l) {
    var arr = []
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] == 'number') arr.push(l[i])
    }
    return arr
}

console.log(filter_list([1, 2, 'a', 'b']), [1, 2])
console.log(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15])
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123])


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function filter_list(l) {
 return l.filter(v => typeof v == "number")
}
2. ======>
function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}
3. ======>
function filter_list(l) {
  return l.filter(i=> typeof i !== 'string');
}
*/