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
