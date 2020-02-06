function checkTheBucket(bucket) {
    //your code here
    if (bucket.length == 0) {
        return false
    }
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] == "gold") {
            return true
        }
    }
    return false
}



console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]), true);
console.log(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]), true);
console.log(checkTheBucket([]), false);
console.log(checkTheBucket(["stone", "stone", "stone", "gold", "gold"]), true);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
let checkTheBucket = arr => arr.includes('gold')
2. ======>
const checkTheBucket=b=>b.indexOf("gold")!=-1;
3. ======>
var checkTheBucket = function (bucket){
   return bucket.some( e => e === "gold");
}
*/