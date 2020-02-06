function correct(string) {
    var str = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] == '5') {
            str += 'S'
        } else if (string[i] == '1') {
            str += 'I'
        } else if (string[i] == '0') {
            str += 'O'
        } else {
            str += string[i]
        }
    }
    return str
}


console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");


/*
=====SOAL======
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/
/*
CARA ORANG LAIN
1. ======>
const corrections = {
  '5': 'S',
  '0': 'O',
  '1': 'I',
};

const correct = string => (
  string.replace(/[501]/g, character => corrections[character])
);
2. ======>
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
3. ======>
function correct(string){
//   for(var i = 0; i<string.length; i++){
//     if(string[i] == 0 && string[i] !== ' '){
//      string = string.substring(0, i) + 'O' + string.substring(i+1);
//     }
//     else if(string[i] == 5){
//      string = string.substring(0, i) + 'S' + string.substring(i+1);
//     } 
//     else if(string[i] == 1){
//      string = string.substring(0, i) + 'I' + string.substring(i+1);
//     } 
//   }
//   return string; 
  return string.split('').map(function(l) { return l === '0' ? 'O' : l === '1' ? 'I' : l === '5' ? 'S' : l; }).join('');
}
*/