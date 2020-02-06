function GetSum(a, b) {
    let start;
    let end;
    if (a > b) {
        start = b
        end = a
    } else {
        start = a
        end = b
    }

    var count = 0;
    for (var i = start; i <= end; i++) {
        count += i
    }
    return count
}


console.log(GetSum(0, -1), -1);
console.log(GetSum(0, 1), 1);



/*
Cara orang lain:

function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

const GetSum= (a, b, x=Math.min(a,b), y=Math.max(a,b)) => (y-x+1)*(x+y)/2

function GetSum(a, b) {
  return (a + b) * (Math.abs(a - b) + 1) / 2;
}
*/