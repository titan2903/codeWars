function basicOp(operation, value1, value2) {
    if (operation == '+') {
        return value1 + value2
    } else if (operation == '-') {
        return value1 - value2
    } else if (operation == '*') {
        return value1 * value2
    } else if (operation == '/') {
        return value1 / value2
    }
}



console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
2. ======>
function basicOp(o, a, b) {
  return eval(a+o+b);
}
3. ======>
const basicOp = (o, a, b) => eval(a + o + b)
*/