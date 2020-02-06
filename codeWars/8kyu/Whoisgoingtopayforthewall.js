function whoIsPaying(name) {
    //your code here
    if (name.length <= 2) {
        return [name]
    } else if (name.length > 2) {
        return [`${name}`, `${name[0]}${name[1]}`]
    }
}


console.log(whoIsPaying("Mexico"), ["Mexico", "Me"]);
console.log(whoIsPaying("Melania"), ["Melania", "Me"]);
console.log(whoIsPaying("Melissa"), ["Melissa", "Me"]);
console.log(whoIsPaying("Me"), ["Me"]);
console.log(whoIsPaying(""), [""]);
console.log(whoIsPaying("I"), ["I"]);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function whoIsPaying(name){
  return (name.length>2)?([name, name.substr(0,2)]):[name];
}
2. ======>
function whoIsPaying(name){
  return name.length > 2 ? [name, name.slice(0,2)] : [name]
}
3. ======>
function whoIsPaying(name){
    if (name.length <= 2)
    return [name];
    else
  return [name, name.substr(0,2)];
}
*/