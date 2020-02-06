function calculate(str) {
    let arr = []
    let temp = ''
    let num = ''
    for (let i = 0; i < str.length; i++) {
        if (!Number(Number(str[i])) && str[i] != '0') {
            temp += str[i]
        }

        if (Number(Number(str[i])) || str[i] == '0') {
            num += str[i]
            if (temp) {
                arr.push(temp)
                temp = ''
            }
        } else if (!Number(Number(str[i]))) {
            if (num) {
                arr.push(Number(num))
                num = ''
            }
        }
    }
    arr.push(Number(num))

    let output = arr[0]
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] == 'plus') {
            output += arr[i + 1]
        } else {
            output -= arr[i + 1]
        }
    }
    return String(output)
}

console.log(calculate("1plus2plus3plus4"), '10');
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('1plus2plus3minus4'), '2');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function calculate(str) {

  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}
2. ======>
function calculate(str) {
  let numbers = str.split(/plus|minus/);
  let operations = str.match(/[a-z]+/g);
  let sum = parseInt(numbers[0]);
  for(let i = 0, len = operations.length; i < len; i++){
    switch(operations[i]){
      case "plus":
        sum += parseInt(numbers[i+1]);
        break;
      case "minus":
        sum -= parseInt(numbers[i+1]);
        break;
    }
  }
  return sum+"";
}
3. ======>
function calculate(str) {
  var arr=str.split('plus');
  var sum=0;
  for (var i=0; i<arr.length; ++i)
    if (arr[i].indexOf('minus')==-1)
      sum+=+arr[i];
    else
    {
      var ar=arr[i].split('minus');
      var s=+ar[0];
      for (var j=1; j<ar.length; ++j)
        s-=ar[j];
      sum+=s;
    }
  return sum.toString();
}
4. =======>
const calculate = str => {
  const rep = { 'plus': ' + ', 'minus': ' - '};
  for(let x in rep) str = str.replace(new RegExp(x, 'g'), rep[x]);
  return ''+eval(str);
}
*/