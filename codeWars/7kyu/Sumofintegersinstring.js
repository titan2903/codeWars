function sumOfIntegersInString(s) {
    var str = '';
    var count = 0
    for (let i = 0; i < s.length; i++) {
        if (Number(Number(s[i])) == Number(s[i])) {
            str += s[i]
        } else {
            count += Number(str)
            str = ''
        }
    }
    count += Number(str)
    return count
}


console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."), 3868);
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"), 3635);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
}
2. ======>
const sumOfIntegersInString = (s) => (s.match(/[0-9]+/g) || []).reduce((a,b) => a+b*1,0);
3. ======>
function sumOfIntegersInString(sent){
  var split = sent.split("")

  var result = split.map(function (element){
  if (Number.isInteger(parseInt(element))) {
    return element
    }
    else {
      return " "
    }
  }).join("").split(" ")

  var filtered = result.filter(function(element){
    return Number.isInteger(parseInt(element))
  })
  
  if (filtered.length === 0){
      return 0
    }
  
  return filtered.map(e => parseInt(e)).reduce( (a,b) => a + b)
}
*/