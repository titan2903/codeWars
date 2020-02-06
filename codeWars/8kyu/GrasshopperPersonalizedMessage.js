function greet(name, owner) {
    if (name == owner) {
        return `Hello boss`
    } else {
        return `Hello guest`
    }
}


console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';
2. ======>
greet = (n, o) => `Hello ${n == o ? 'boss' : 'guest'}`;
3. ======>
let greet=(n,o)=>'Hello '+(n===o?'boss':'guest');
*/