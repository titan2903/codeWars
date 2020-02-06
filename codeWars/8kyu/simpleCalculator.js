function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "unknown value";
    }
    if (sign == "+") {
        return a + b
    } else if (sign == "-") {
        return a - b
    } else if (sign == "/") {
        return a / b
    } else if (sign == "*") {
        return a * b
    } else {
        return 'unknown value'
    }

}


console.log(calculator(1, 2, "+"), 3, "calculate");
console.log(calculator(1, 2, "-"), -1, "calculate");
console.log(calculator(3, 5, "*"), 15, "calculate");
console.log(calculator(6, 2, "/"), 3, "calculate");
console.log(calculator(6, 2, "$"), "unknown value", "calculate");
console.log(calculator(6, "h", "*"), "unknown value", "calculate");


/*
Cara orang lain:

function calculator(a,b,sign){
switch(sign)
{
case '+': return a + b;
case '-': return a - b;
case '*': return a * b;
case '/': return a / b;
default: return "unknown value";
}
}

function calculator(a,b,sign){
console.log(sign)
if (sign == '+') return a + b;
if (sign == '-') return a - b;
if (sign == '*') return a * b;
if (sign == '/') return a / b;

return "unknown value";
}

function calculator(a,b,sign) {
try
    { return eval(a+sign+b); }
catch(e)
    { return "unknown value"; }
}
*/