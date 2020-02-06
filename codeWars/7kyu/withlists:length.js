function length(head) {
    // if (head == null) {
    //     return 0
    // }

    let count = 0;
    while (head) {
        head = head.next;
        count++;
    }
    return count;

}


console.log(length(null), 0);
console.log(length([1, 2, 3, 4]), 4);



/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function length(head) {
  if (head == null) return 0;
  return 1 + length(head.next);
}
2. ======>
function length(head) {
  return !head ? 0 : 1 + length(head.next);
}
3. ======>
function length(head) {
// first test if head exists
// if not return 0
// else return 1 + call function again with next element in list and do the same check
// so each time we have a pointer to a next elemnt we will add 1 and return the sum in the end
  return typeof head === 'undefined' || head === null ? 0 : 1 + length(head.next);
}
*/