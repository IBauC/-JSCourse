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
  if(numbers.length === 10){
    let result = "(";
    for (let i = 0; i <= 2; ++i)
      result += numbers[i].toString();
    result += ") ";
    for (let i = 3; i <= 5; ++i){
      result += numbers[i].toString();
    }
    result += "-";
    for (let i = 6; i < numbers.length; ++i) 
      result += numbers[i].toString();
    return result;
  } else {
    return "Неверное количество цифр в номере.";
  }
}
const phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(phoneNumber);
