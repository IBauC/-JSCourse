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