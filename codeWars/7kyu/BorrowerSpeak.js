function borrow(s) {
    s = s.toLowerCase()
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ' && s[i] != '!' && s[i] != '?' && s[i] != '.' && s[i] != ':' && s[i] != ',' && s[i] != ';') {
            str += s[i]
        }
    }
    return str
}

console.log(borrow('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake');
console.log(borrow('THE big PeOpLE Here!!'), 'thebigpeoplehere');
console.log(borrow('i AM a TINY BoY!!'), 'iamatinyboy');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const borrow = s => s.toLowerCase().replace(/\W/g,'');
2. ======>
const borrow = s => s.toLowerCase().replace(/[^a-z]/g, ''); 
3. ======>
function borrow(s){
  const temp = s.replace(/\W/g, '').toLowerCase();

  return temp;
}
*/