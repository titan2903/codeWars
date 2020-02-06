function list(names) {
    // let str = '';
    // if (names === undefined) {
    //     return str
    // }

    // for (let i = 0; i <= names.length; i++) {
    //     if (i >= names.length - 2) {
    //         str += names[i]['name'] + ' & '
    //     } else {
    //         str += names[i]['name'] + ', '
    //     }
    // }

    // return str.slice(0, str.length - 2)
    let str = '';
    if (names === undefined) return str
    if (names.length === 1) return names[0].name

    for (let i = 0; i < names.length; i++) {
        if (i == names.length - 1) {
            str += ' & ' + names[i].name
        } else if (i == names.length - 2) {
            str += names[i].name
        } else {
            str += names[i].name + ', '
        }
    }
    return str
}

console.log(list([{
        name: 'Bart'
    }, {
        name: 'Lisa'
    }, {
        name: 'Maggie'
    }, {
        name: 'Homer'
    }, {
        name: 'Marge'
    }]), 'Bart, Lisa, Maggie, Homer & Marge',
    "Must work with many names")
// console.log(list([{
//         name: 'Bart'
//     }, {
//         name: 'Lisa'
//     }, {
//         name: 'Maggie'
//     }]), 'Bart, Lisa & Maggie',
//     "Must work with many names")
// console.log(list([{
//         name: 'Bart'
//     }, {
//         name: 'Lisa'
//     }]), 'Bart & Lisa',
//     "Must work with two names")
// console.log(list([{
//     name: 'Bart'
// }]), 'Bart', "Wrong output for a single name")
// console.log(list([]), '', "Must work with no names")

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }
2. ======>
function list(names) {
    var result = "";
    var comma = ", ";
    var and = " & ";
    while (names.length) {
        result += names.shift().name;
        if (names.length == 1) {
            result += and;
        } else if (names.length > 1) {
            result += comma;
        }
    }

    return result;
}
3. ======>
function list(names){
  return names
           .map((item) => item.name)
           .join(', ')
           .replace(/,\s([^,]+)$/, ' & $1');
}
*/