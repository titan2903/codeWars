function validParentheses(parens) {
    var indent = 0;
    for (var i = 0; i < parens.length && indent >= 0; i++) { //indent>=0 is critical
        indent += (parens[i] == '(') ? 1 : -1;
        // console.log(indent, parens[i]);
    }
    return (indent == 0);
}


console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function validParentheses(str){
  
  if(str.length===0){return true;}
  if(str[0]===")"||str[str.length-1]==="("){
    return false;
  }else{ 
    if(str[1]===")"){
      return validParentheses(str.slice(2));
    }else {
     var index=str.indexOf(")");
     return validParentheses(str.slice(0, index-1) + str.slice(index + 1));
    }
  }
}
2. ======>
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
3. ======>
function validParentheses(str){
  //TODO 
    let result = []
  for(let i = 0; i < str.length; i++) {
    result.push(str[i])
    if(result[result.length - 2] === '(' && result[result.length - 1] === ')'
    ||result[result.length - 2] === '{' && result[result.length - 1] === '}'
    ||result[result.length - 2] === '[' && result[result.length - 1] === ']') {
      result = result.slice(0, -2)
    }
  }
  return !result.length
}
4. ===>
function validParentheses (parens) {
  // Constraints -> 0 <= input.length <= 100
  if (parens.length < 0 || parens.length > 100) return false
  // Check if the first parentheses is valid
  if (parens[0] === ')' && parens.length === 1) return false
  // Start checking the input parentheses
  let counter = 0
  for (let i = 0; i < parens.length; i++) {
    // Add counter >= 0 because if counter is minus, it means it's missing an opening parentheses.
    if (parens[i] === '(' && counter >= 0) counter++
    if (parens[i] === ')') counter--
  }
  return counter === 0
}
5. =====>
function validParentheses(parens) {
    var kiri = 0
    var kanan = 0

    for (var i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            kiri++
        } else if (parens[i] === ')') {
            kanan++
        }
    }
    if (kiri === kanan && parens[0] === '(' && parens[parens.length - 1] === ')') {
        return true
    } else if (kiri === 0 && kanan === 0) {
        return true
    } else {
        return false
    }
}
*/