function sortByLength(array) {
    return [...array].sort((a, b) => a.length - b.length)
};



console.log(sortByLength(["Beg", "Life", "I", "To"]), ["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]), ["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["Longer", "Longest", "Short"]), ["Short", "Longer", "Longest"]);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};
2. ======>
const sorter = (a, b) => a.length - b.length;
const sortByLength = (array) => array.sort(sorter);
3. ======>
function sortByLength(array) {
  array.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    return 0;
  });
  return array;
}

*/