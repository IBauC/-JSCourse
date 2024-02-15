
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
function generateRow(number, n) {
  let row = ''; //
  for (let j = 1; j <= n; j++) {
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
function addWithLoss(a, b, z) {
   let sum = a + b;
   return +sum.toFixed(z);
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
// Кодирование

function encode_string(s, key) {
   let encodedResult = ""; // Переменная для хранения закодированной строки
 
   for (let i = 0; i < s.length; i++) {
     let charCode = s.charCodeAt(i); 
     let encodedCharCode = charCode + key; 
     encodedResult += String.fromCharCode(encodedCharCode);
   }
 
   return encodedResult; 
}
 
console.log(encode_string("thisIsJavaScript!", 1)); // Вывод: "uijtJtKfbqujOdujwfst!"
 
 
 // Декодирования строки
function decode_string(encoded_s, key) {
   let decodedResult = ""; 
   
   for (let i = 0; i < encoded_s.length; i++) {
     let encodedCharCode = encoded_s.charCodeAt(i);
     let charCode = encodedCharCode - key; 
     decodedResult += String.fromCharCode(charCode); 
   }
 
   return decodedResult; // Возвращаем декодированную строку
}
 
console.log(decode_string("uijtJtKfbqujOdujwfst!", 1)); // Вывод: "thisIsJavaScript!"