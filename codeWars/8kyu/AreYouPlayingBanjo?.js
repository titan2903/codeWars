function areYouPlayingBanjo(name) {
    if (name[0] == 'R' || name[0] == 'r') return `${name} plays banjo`
    else {
        return `${name} does not play banjo`
    }
}

console.log(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
console.log(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
2. ======>
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}
3. ======>
const areYouPlayingBanjo = n => n+(n.match(/^r/i) ? " plays banjo" : " does not play banjo");
*/