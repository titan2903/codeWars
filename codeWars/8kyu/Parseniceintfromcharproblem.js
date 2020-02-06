function getAge(inputString) {
    // return correct age (int). Happy coding :) 
    var str = ''
    var arr = []
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] != ' ') {
            str += inputString[i]
        } else if (inputString[i] == ' ') {
            arr.push(str)
            str = ''
        }
    }
    arr.push(str)
    return Number(arr[0])

}


console.log(getAge("4 years old"), 4);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function getAge(inputString){
  return parseInt(inputString);
}
2. ======>
function getAge(inputString){
  return +inputString[0];
}
3. ======>
function getAge(inputString){
// return correct age (int). Happy coding :) 
 var newString = inputString.split(' ')
 var updateString = newString.slice(0, 1)
 var finalString = updateString.join()
 var potato = Number(finalString)
 return potato
}
*/