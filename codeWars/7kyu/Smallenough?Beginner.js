function smallEnough(a, limit) {
    for (var i of a) {
        if (i > limit)
            return false;
    }
    return true;
}

console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}
2. ======>
function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}
3. ======>
function smallEnough(a, limit){
  return a.every(n => n <= limit);
}
*/