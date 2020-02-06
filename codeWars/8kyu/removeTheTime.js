function shortenToDate(longDate) {
    var str = '';
    for (let i = 0; i < longDate.length; i++) {
        if (longDate[i] == ',') {
            return str
        } else {
            str += longDate[i]
        }
    }
    return str
}

console.log(shortenToDate("Friday May 2, 9am"), "Friday May 2");
console.log(shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
console.log(shortenToDate("Monday December 25, 10pm"), "Monday December 25");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const shortenToDate = longDate => longDate.split(",")[0];
2. ======>
const shortenToDate =longDate => longDate.replace(/,.+$/,'');
3. ======>
const shortenToDate=d=>d.substr(0,d.indexOf(','))
*/