function DNAtoRNA(dna) {
    var rna = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] == 'T') {
            rna += 'U'
        } else {
            rna += dna[i]
        }
    }
    return rna
}

console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")


/*
Cara orang lain:
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

const DNAtoRNA = dna => dna.split('T').join('U')
*/