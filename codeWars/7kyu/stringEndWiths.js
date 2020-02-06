function solution(str, ending) {
    let start = str.length - ending.length
    var count = 0
    var index = 0
    for (let i = start; i < str.length; i++) {
        if (str[i] == ending[index]) {
            count++
        }
        index++
    }
    return (count == ending.length) ? true : false
}


console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function solution(str, ending){
  return str.endsWith(ending);
}
2. ======>
function solution(str, ending){
  if (typeof(str) != "string" || typeof(ending) != "string")
    throw "wrong type";
  if (ending.length>str.length)
    return false;
  return str.substr(str.length-ending.length, ending.length) == ending;
}
3. ======>
function solution(str, ending){
  return str.substr(-ending.length) == ending;
}


function solution(str, ending){
  return str.match(ending+"$")==ending;
}
*/