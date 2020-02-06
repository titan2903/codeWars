function reverseList(arr) {
    var output = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i])
    }
    return output

}

console.log(reverseList([]), []);
console.log(reverseList([1, 2, 3]), [3, 2, 1]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const reverseList = arr => [...arr].reverse();
2. ======>
const reverseList = Function.call.bind(Array.prototype.reverse);
3. ======>
function reverseList(arr) {
  return arr.map((i,g)=>arr[arr.length-1-g])
}
*/