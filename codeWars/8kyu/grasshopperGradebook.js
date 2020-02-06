function getGrade(s1, s2, s3) {
    if ((s1 + s2 + s3) / 3 >= 90) {
        return 'A'
    } else if ((s1 + s2 + s3) / 3 >= 80 && (s1 + s2 + s3) / 3 < 90) {
        return 'B'
    } else if ((s1 + s2 + s3) / 3 >= 70 && (s1 + s2 + s3) / 3 < 80) {
        return 'C'
    } else if ((s1 + s2 + s3) / 3 >= 60 && (s1 + s2 + s3) / 3 < 70) {
        return 'D'
    } else if ((s1 + s2 + s3) / 3 < 60) {
        return 'F'
    }
}


console.log(getGrade(95, 90, 93), 'A')
console.log(getGrade(100, 85, 96), 'A')
console.log(getGrade(92, 93, 94), 'A')
console.log(getGrade(70, 70, 100), 'B')
console.log(getGrade(82, 85, 87), 'B')
console.log(getGrade(84, 79, 85), 'B')
console.log(getGrade(89, 89, 90), 'B')
console.log(getGrade(70, 70, 70), 'C')
console.log(getGrade(75, 70, 79), 'C')
console.log(getGrade(60, 82, 76), 'C')
console.log(getGrade(65, 70, 59), 'D')
console.log(getGrade(66, 62, 68), 'D')
console.log(getGrade(58, 62, 70), 'D')
console.log(getGrade(44, 55, 52), 'F')
console.log(getGrade(48, 55, 52), 'F')
console.log(getGrade(58, 59, 60), 'F')


/*
=====SOAL======
Grade book
Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
/*
CARA ORANG LAIN
1. ======>
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

2. ======>
function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

3. ======>
function getGrade (s1, s2, s3) {
 var avg = (s1 + s2 + s3)/3;
 switch(true) {
   case (avg >= 90):
     return 'A';
   case ( avg >= 80):
     return 'B';
   case ( avg >= 70):
     return 'C';
   case ( avg >= 60):
     return 'D'; 
   default:
     return 'F';   
 }
}
*/