function letterFrequency(text) {
  var arr = [];
  var s = text.toLowerCase();
  for (var i = 0; i < s.length; ++i) {
    if (s[i] >= 'a' && s[i] <= 'z') {
      var count = 0;
      for (var j = 0; j < arr.length; ++j)
        if (arr[j][0] == s[i]) {
          arr[j][1]++;
          count = 1;
          break;
        }
      if (count == 0)
        arr.push([s[i], 1]);
    }
  }
  for (var i = 0; i < arr.length - 1; ++i)
    for (var j = i + 1; j < arr.length; ++j)
      if ((arr[i][1] < arr[j][1]) || (arr[i][1] == arr[j][1] && arr[i][0] > arr[j][0])) {
        var c = arr[i];
        arr[i] = arr[j];
        arr[j] = c;
      }
  return arr
}

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function letterFrequency(text){
  return (text.toLowerCase()
              .replace(/[^a-z]/g,"")
              .split("")
              .sort()
              .join("")
              .match(/(\w)\1+|(\w)/g) || [])
              .map(function(v){ return [v[0], v.length]; })
              .sort(function(a,b){ 
                  if (a[1] === b[1]) return (a[0].charCodeAt(0) - b[0].charCodeAt(0))
                  else return b[1] - a[1]
              });
}
2. ======>
const letterFrequency = string => {
  const chars = string
    .replace(/[^a-zA-Z]/g, '')
    .toLowerCase()
    .split``
    .reduce((r, e) => {
      r[e] = r[e] ? ++r[e] : 1;
      return r;
    }, []);

  const result = [];
  for (let k in chars) result.push([k, chars[k]]);
  return result.sort((x, y) => 
         x[1] === y[1] ?
           x[0].localeCompare(y[0]) :
           y[1] - x[1]);
}
3. ======>
function comparatorNumber(a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    return comparatorLetter(a,b);
}

function comparatorLetter(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
}

function letterFrequency(text){
  const allLettersArray = text.replace(/[^A-Za-z]/g, "").toLowerCase().split('').sort();
  let a = [], b = [], jarray = [], prev;
  
  allLettersArray.forEach((ele, i) => {
    if (allLettersArray[i] !== prev) {
      a.push(allLettersArray[i]);
      b.push(1);
    } else {
      b[b.length-1]++;
    }
    prev = allLettersArray[i];
  });
    
  a.forEach((ele, i) => {
    jarray[i] = [a[i], b[i]];
  });
   
  const sortedValues = jarray.sort(comparatorNumber);
  return sortedValues;
}
*/