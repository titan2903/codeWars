function DNAStrand(dna) {
    var complement = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] == 'A') {
            complement += 'T'
        } else if (dna[i] == 'T') {
            complement += 'A'
        }
        if (dna[i] == 'C') {
            complement += 'G'
        } else if (dna[i] == 'G') {
            complement += 'C'
        }
    }
    return complement
}

console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is");
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");

/*
Cara orang lain:

DNAStrand = s => s.split('').map(e => e == 'A' ? 'T' : e == 'T' ? 'A' : e == 'G' ? 'C' : 'G').join('');


function DNAStrand(dna){
var code = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
}
return dna.split('').map(function(i) { return code[i] }).join('')
}
*/