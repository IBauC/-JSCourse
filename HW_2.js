// 1
const user = {
    name: "Boris",
    age: 24
}

user.firstName = user.name
delete user.name;


// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

// 2
const fruitContainer = []
    fruitContainer.push ( "Яблоко", "Апельсин" , "Груша")
        fruitContainer[1] = "Киви";

    // Добавьте 3 фрукта в массив fruitContainer
// Измените название второго фрукта

// 3
let yearsOfService = 5;
let performanceRating = 4;
let bonus = 0;
const topPerformance = performanceRating === 4 || performanceRating === 5;

if (yearsOfService < 5 && topPerformance) {
    bonus = 0.05;
} else if (yearsOfService >= 5 && topPerformance) {
    bonus = 0.1;
}

const employeeInfo = {
    yearsOfService,
    performanceRating,
    bonus
};

if (bonus > 0) {
    console.log(`Сотрудник получает бонус: ${bonus * 100}% от заработной платы.`);
} else {
    console.log("Бонуса нет.");
}

console.log("Информация о сотруднике:", employeeInfo);
/*   

 
 Вам нужно создать программу на языке JavaScript для расчета бонусов сотрудникам
 в зависимости от их стажа и производительности. Используйте операторы и условные конструкции для выполнения задачи.

 Определение переменных:
 - Объявите переменную yearsOfService и присвойте ей значение, представляющее стаж сотрудника в годах (например, 5).
 - Объявите переменную performanceRating и присвойте ей значение от 1 до 5, представляющее оценку производительности сотрудника.

 Расчет бонуса:
 На основе стажа и оценки производительности рассчитайте бонус сотрудника. Используйте следующие правила:
   - Если стаж меньше 5 лет, и оценка производительности 4 или 5, бонус составляет 5% от заработной платы.
   -  Если стаж 5 лет или более, и оценка производительности 4 или 5, бонус составляет 10% от заработной платы.
   - В остальных случаях бонуса нет.

 Вывод результатов:
 Выведите результат расчета бонуса с использованием функции console.log. Если бонуса нет, выведите сообщение о том, что сотрудник не получает бонус.
 На основе всех переменных создайте объект employeeInfo с полученными переменными в виде значений
 */

// 4
const userData = {
    name: "Victor",
    age: 31,
    address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        zipCode: '12345'
    }
}

const userData2 = {
    name: "Vlad",
    age: "31",
    address: {
        street: '456 Oak Avenue',
        city: 'Townsville',
        state: 'Stateland',
        zipCode: null
    }
}

const data = [userData, userData2]

if (data[2]) {
    console.log("1") // В масиве нет элемента с индесом 2, потому что отсчет начинается с 0

} else if (data[0].age === data[1].age && !(typeof data[0].name !== "string" || typeof data[1].address.zipCode)) {
    console.log("2")  /* По скольку используется === ,а у userData возраст указан как число у userData2 как строка - эта часть не выполниться.
    Вторая часть также ложь из-за условий внутри отрицания.  */

} else if (typeof data[0].name === "string" && +data[1].age <= 0) {
    console.log("3")
    /* не выполнится, так как +data[1].age преобразует строку в число, и условие <= 0 не выполняется. */
} else if (typeof data[1].address["zipCode"] === "object") {
    console.log("4")
    /* Значение zipCode равно null, а это специальное значение, которое является объектом */

} else {
    console.log("5")
}

/*По скольку строка 4 будет выполнена, интерпретатор дальше не пойдет*/

// в консоле выведено 4
// Что будет выведено в консоли и почему 

// 5
let programmingLanguage = "JavaScript"; 

switch (programmingLanguage) {
    case "JavaScript":
        console.log("JavaScript - отличный выбор для веб-разработки!");
        break;
    case "Python":
        console.log("Python - мощный и удобный язык для разработки.");
        break;
    case "Java":
        console.log("Java - популярный язык для разработки кросс-платформенных приложений.");
        break;
    case "C++":
        console.log("C++ - язык с высокой производительностью и возможностями низкоуровневого программирования.");
        break;
    default:
        console.log("Неизвестный язык");
}
/*
   Выбор языка программирования
   * Объявите переменную `programmingLanguage` и присвойте ей строковое значение,
    представляющее предпочтительный язык программирования (например, "JavaScript", "Python", "Java", "C++").

   * Используя оператор `switch`, напишите код, который выводит сообщение о том, почему выбранный язык программирования является отличным выбором. Например:
     - Если `programmingLanguage` равен "JavaScript", выведите "JavaScript - отличный выбор для веб-разработки!"
     - Если `programmingLanguage` равен "Python", выведите "Python - мощный и удобный язык для разработки."
     - Если `programmingLanguage` равен "Java", выведите "Java - популярный язык для разработки кросс-платформенных приложений."
     - Если `programmingLanguage` равен "C++", выведите "C++ - язык с высокой производительностью и возможностями низкоуровневого программирования."
     - Добавьте обработку для случая, когда `programmingLanguage` не соответствует ни одному из вышеперечисленных вариантов.

   * Вывод результатов:
    - Выведите сообщение о выборе языка программирования с использованием `console.log`.
 */
