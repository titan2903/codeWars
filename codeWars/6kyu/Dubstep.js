function songDecoder(song) {
    var a = song.split('WUB');
    for (var i = a.length; i >= 0; i--) {
        if (a[i] === '') {
            a.splice(i, 1)
        }
    }
    return a.join(' ');
}

console.log(songDecoder("AWUBBWUBC"), "A B C", "WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C", "multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB"), "A B C", "heading or trailing spaces should be removed");