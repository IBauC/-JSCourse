//  1
function AverageNum(obj) {
    console.log(obj);
    
    let sum = 0;
    let count = 0;
       
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key) && typeof obj[key] === 'number') {
        sum += obj[key];
        count++;
      }
    }
  
    if (count === 0) {
      console.log("В объекте нет числовых значений.");
      return;
    }
  
    const average = Math.round(sum / count);
    console.log(`Среднее арифметическое всех чисел (округленное): ${average}`);
}

const person = {
    name: "Pete",
    age: 24,
    salary: 2550,
    street: "Some street",
    houseNum: 52
};
  
AverageNum(person);

//  2
function formatDate(date) {
    if (!(date instanceof Date)) {
        throw new TypeError("The provided argument must be a Date object.");
    }

    const zeroPad = (num) => num.toString().padStart(2, '0');

    const day = zeroPad(date.getDate());
    const month = zeroPad(date.getMonth() + 1); // +1 потому что getMonth() возвращает месяц от 0 до 11
    const year = date.getFullYear();
    const hours = zeroPad(date.getHours());
    const minutes = zeroPad(date.getMinutes());
    const seconds = zeroPad(date.getSeconds());

    return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}

try {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    console.log(formattedDate);
} catch (error) {
    console.error(error);
}
