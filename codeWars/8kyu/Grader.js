function grader(score) {
    if (score > 1 || score < 0.6) return 'F'
    if (score >= 0.9) return 'A'
    if (score >= 0.8) return 'B'
    if (score >= 0.7) return 'C'
    if (score >= 0.6) return 'D'
}


console.log(grader(0.7), "C");
console.log(grader(0.9), "A");
console.log(grader(0.6), "D");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
grader = s => s > 1 || s < 0.6 ? 'F' : s < 0.7 ? 'D' : s < 0.8 ? 'C' : s < 0.9 ? 'B' : 'A';
2. ======>
function grader(score) {
  if (score === 1) return "A";
  return ["D", "C", "B", "A"][Math.floor(score*10) - 6] || "F";
}
3. ======>
function grader(score) {
  if (score>1||score<0.6) return "F"
  if (score<0.7) return "D"
  if (score<0.8) return "C"
  if (score<0.9) return "B"
  else
  return "A"
}
*/