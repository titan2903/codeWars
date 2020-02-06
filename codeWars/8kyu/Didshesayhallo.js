function validateHello(greetings) {
    let l = greetings.toLowerCase();
    let h = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
    for (let i = 0; i < h.length; i++) {
        if (l.indexOf(h[i]) >= 0) return true;
    }
    return false;
}

console.log(validateHello('ahoj'), true);

console.log(validateHello('meh'), false);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function validateHello(greetings) {
    if (greetings.toUpperCase().includes("HELLO")) {return true}
    if (greetings.toUpperCase().includes("CIAO")) {return true}
    if (greetings.toUpperCase().includes("SALUT")) {return true}
    if (greetings.toUpperCase().includes("HALLO")) {return true}
    if (greetings.toUpperCase().includes("HOLA")) {return true}
    if (greetings.toUpperCase().includes("AHOJ")) {return true}
    if (greetings.toUpperCase().includes("CZESC")) {return true}
    return false;
}
2. ======>
let validateHello = s => /hello|ciao|hola|hallo|ahoj|czesc|salut/i.test(s);
3. ======>
function validateHello(greetings) {
const greet = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
let res = false;
let str = greetings.toLowerCase();
    
    for (let i = 0; i < greet.length; i++) {
        if (str.includes(greet[i])) {
        res = true;
        }
    }
return res;
}
*/