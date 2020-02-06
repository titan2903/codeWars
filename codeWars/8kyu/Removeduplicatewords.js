function removeDuplicateWords(s) {
    var str = ''
    var arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            str += s[i]
        } else if (s[i] == ' ') {
            arr.push(str)
            str = ''
        }
    }
    arr.push(str)

    var temp = []
    for (let i = 0; i < arr.length; i++) {
        var find = false
        for (let j = 0; j < temp.length; j++) {
            if (arr[i] == temp[j]) {
                find = true
            }
        }
        if (find == false) {
            temp.push(arr[i])
        }
    }
    // console.log(temp);


    var output = ''
    for (let i = 0; i < temp.length; i++) {
        if (i == temp.length - 1) {
            output += temp[i]
        } else {
            output += temp[i] + ' '
        }
    }
    return output
}


console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');

/*
=====SOAL======
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/
/*
CARA ORANG LAIN
1. ======>
function removeDuplicateWords (s) {
  return s.split(' ').filter((n, i, s) => {
    return s.indexOf(n) === i;
  }).join(' ');
}
2. ======>
const removeDuplicateWords = s => {
  const set = new Set(s.split(' '));
  return Array.from(set).join(' ');
}
3. ======>
const removeDuplicateWords = s => s.split(' ').filter((x,i,y) => y.indexOf(x)==i).join(' ')
*/