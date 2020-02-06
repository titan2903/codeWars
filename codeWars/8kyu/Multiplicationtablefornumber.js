function multiTable(number) {
    let result = ''
    for (let i = 1; i <= 10; i++) {
        let output = i * number
        if (i == 10) {
            result += `${i} * ${number} = ${output}`
        } else {
            result += `${i} * ${number} = ${output}\n`
        }
    }
    return result
}

console.log(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
console.log(multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function multiTable(n) {
  return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}
2. ======>
const multiTable = (number) => {
  let table = '';
  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }
  return table;
}
3. ======>
function multiTable(n, i = 1) {
   if (i === 10) {
     return `10 * ${n} = ${n}0`;
   }
   return `${i} * ${n} = ${n * i}\n` + multiTable(n, i + 1);
};
*/