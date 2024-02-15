
// 1
function multiplyTable(n) {
    if (Number.isInteger(n) && n > 0) {
      generateMultiplicationTable(n);
    } else {
      console.log("Введите целое положительное число");
    }
  }
  
  function generateMultiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
      let row = generateRow(i, n);
      console.log(row);
    }
  }
  
  function generateRow(number, multiplier) {
    let row = ''; 
    for (let j = 1; j <= multiplier; j++) {
      row += (number * j) + ' ';
    }
    return row;
  }
  
  multiplyTable(5);

// 2
function calculateFactorial(n) {
  if (Number.isInteger(n) && n >= 0) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  } else {
    return "Введите целое положительное число";
  }
}


//3
function addWithLoss(first, second, third) {
   let sum = first + second;
   return +sum.toFixed(third);
 }
 
 console.log(addWithLoss(1.5, 2.281, 3)); // Вывод: 3.781
 console.log(addWithLoss(1.5, 2.281, 2)); // Вывод: 3.78

 //4
function processText(a) {
   a = a.trim().toLowerCase().replace(/a/g, "X");
   return a;
 }
 
 console.log(processText(" thisIsJavaScript!   ")); // thisisjXvXscXript!


//5
function encodeString(s, key) {
   let encodedResult = ""; 
 
   for (let i = 0; i < s.length; i++) {
     let charCode = s.charCodeAt(i); 
     let encodedCharCode = charCode + key; 
     encodedResult += String.fromCharCode(encodedCharCode);
   }
 
   return encodedResult; 
}
 
function decodeString(encodedS, key) {
   let decodedResult = ""; 
   
   for (let i = 0; i < encodedS.length; i++) {
     let encodedCharCode = encodedS.charCodeAt(i);
     let charCode = encodedCharCode - key; 
     decodedResult += String.fromCharCode(charCode); 
   }
 
   return decodedResult;
}

const key = 5;
const encoded = encodeString("thisIsJavaScript", key); 
const decoded = decodeString(encoded, key);
console.log(encoded, decoded);
