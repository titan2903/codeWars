function add(n) {
    var fn = function (x) {
        return add(n + x);
    };

    fn.valueOf = function () {
        return n;
    };

    return fn;
}

console.log(add(1) == 1);
console.log(add(1)(2) == 3);
console.log(add(1)(2)(3) == 6);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function add(n){
  // Let the currying begin!
var sum = n;
function f (k){
    sum += k;
    return f;
    }
    f.valueOf = function(){return sum}
    return f
}
2. ======>
function add(n) {
    var next = add.bind(n += this | 0);
    next.valueOf = function() { return n; };
    return next;
}
3. ======>
function add(n) {
    // Return self so we can make a chain
    let tail = (num) => add(n + num);

    Javascript will call toString() before compare,
    We can use this feature to pass this kata.  
    In real world, may need manual call toString
    method.
    
tail.toString = () => n;
return tail;
}

*/