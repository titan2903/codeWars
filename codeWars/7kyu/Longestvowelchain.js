function solve(s) {
    tempArr = []
    var tempBig = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'i' || s[i] == 'u' || s[i] == 'e' || s[i] == 'o') {
            tempArr.pus;
            h(s[i])
        } else {
            tempBig.push(tempArr)
            tempArr = []
        }
    }
    tempBig.push(tempArr)
    var temp = []
    for (let i = 0; i < tempBig.length; i++) {
        temp.push(tempBig[i].length)
    }

    var result = 0
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] > result) {
            result = temp[i]
        }
    }
    return result
}
console.log(solve("codewarriors"), 2);
console.log(solve("suoidea"), 3);
console.log(solve("ultrarevolutionariees"), 3);
console.log(solve("strengthlessnesses"), 1);
console.log(solve("cuboideonavicuare"), 2);
console.log(solve("chrononhotonthuooaos"), 5);
console.log(solve("iiihoovaeaaaoougjyaw"), 8);


/*
Cara orang lain:
function solve(s){
  //console.log(s)
  var max=0;
  for (var i=0; i<s.length;)
    if (s[i]=='e' || s[i]=='u' || s[i]=='i' || s[i]=='o' || s[i]=='a')
    {
      var count=0;
      while (i!=s.length && (s[i]=='e' || s[i]=='u' || s[i]=='i' || s[i]=='o' || s[i]=='a'))    
      {
        i++;
        count++;
      }
      if (count>max) max=count;
    }
    else
      i++;
  return max;
}


function solve(str) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === 'o' || char === 'e' || char === 'a' || char === 'i' || char === 'u') {
            sum += 1;
            if (sum > max) {
                max = sum;
            }
        } else sum = 0;
    }
    return max;
}
*/