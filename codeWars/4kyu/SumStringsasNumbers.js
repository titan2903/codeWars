function sumStrings(num1, num2) {
  while (num1.length > 1 && num1[0] === '0')
    num1 = num1.slice(1);

  while (num2.length > 1 && num2[0] === '0')
    num2 = num2.slice(1);

  num1 = num1.split('').reverse().join('');
  num2 = num2.split('').reverse().join('');

  var add = 0,
    ans = '';
  for (var i = 0, len = num1.length > num2.length ? num1.length : num2.length; i < len; i++) {
    var a = i < num1.length ? Number(num1[i]) : 0,
      b = i < num2.length ? Number(num2[i]) : 0;

    var c = a + b + add;
    ans += c % 10;
    add = c >= 10 ? 1 : 0;
  }

  if (add) ans += add;

  let str = ''
  for (let i = ans.length - 1; i >= 0; i--) {
    str += ans[i]
  }
  console.log(str);

  return str
}

console.log(sumStrings('123', '456'), '579')


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function sumStrings(a,b) { 
  if(a === ""){
      a = "0";
  }else if ( b === ""){
      b = "0";
  }; 
  var result = new BigNumber(a).add(b);
  
  return result.toString();
}

sumStrings('712569312664357328695151392', '8100824045303269669937') ;
2. ======>
function sumStrings(a, b) {
  a = "0" + a.replace(/\D/g,"");
  b = "0" + b.replace(/\D/g,"");
  var c = 0;
  var result = "";

  for(var i=b.length-a.length; i>0; --i) a = "0" + a;
  for(var i=a.length-b.length; i>0; --i) b = "0" + b;

  for(var i=a.length-1; i>-1; --i) {
    c = +a[i] + +b[i] + c;
    result = (c%10) + result;
    c = Math.floor(c/10);
  }
  
  return result.replace(/^0+/,"");
}
3. ======>
function sumStrings(a,b) {
   var x = 0;
   var y = 0;
   var s = "";
   var i = a.length-1;
   var j = b.length-1;
   for (;i>-1||j>-1||y;i--,j--) {
    x = 0;
    if (i>=0) x += parseInt(a[i]);
    if (j>=0) x += parseInt(b[j]);
    x += y;
    if (x>9) {
      y=1;
      x = x % 10;
    } else {y=0;}
    s = String(x)+s;
   }
   for (i=0;i<s.length;i++) {
     if (s[i]!=0) {
      s = s.substring(i);
      break;
     }
   }
   return s;
}
*/