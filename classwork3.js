function getTimeOfDay(currentHour) {
    if (currentHour >= 0 && currentHour < 6) {
        return "ночь";
    } else if (currentHour >= 6 && currentHour < 12) {
        return "утро";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "день";
    } else {
        return "вечер";
    }
}


const currentHour = (new Date()).getHours(); 
const timeOfDay = getTimeOfDay(currentHour);
console.log("Сейчас " + timeOfDay);

for (let i = 1; i <= 10; i++) {
    console.log(i);

for (let i = 1; i <= 10; i++) {
    if (i > 7) {
        break; 
    }
    console.log(i);
}


    let i = 1; 

while (i <= 20) {
    if (i % 2 === 0 && i % 5 !== 0) {
        console.log(i);
    }
    i++; 
}


function createPhoneNumber(numbers){
  const isNumber = num => typeof num === 'number' && !isNaN(num) && num >= 0 && num <= 9;
  const isValidInput = numbers.length === 10 && numbers.every(isNumber);
  
  if(isValidInput){
    let result = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
    return result;
  } else {
    return "Неверные данные для создания номера телефона.";
  }
}

const phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber);
