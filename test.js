let personName;
let personMiddleName;
let personFamilyName;
let personAge;
let personAgeInDays;
let personAgePlus5;
let personRetired;

x(personName, 'имя');
x(personMiddleName,'отчество');
x(personFamilyName, 'Фамилию');

    

while (circleBreaker); {
    personAge = Number(prompt('введите возраст'));
    if (isNaN(personAge)) {
        alert('Ошибка, используйте только числа');
        circleBreaker = true;
    } else {
        if (personAge > 0 && personAge < 130) {
            circleBreaker = false;
        } else {
            alert('Вы вообще человек?');
            circleBreaker = true;
        }

    }
} 
let personSex = confirm('Вы мужчина?') ? 'мужской' : 'женский';
personAgeInDays = personAge * 365;
personAgePlus5 = personAge + 5;
if (personSex === 'мужской') {
    personRetired = (personAge > 65) ? 'Да' : 'Нет';
} else {
    personRetired = (personAge > 60) ? 'Да' : 'Нет';
}
alert(`Ваше ФИО: ${personName}, ${personMiddleName}, ${personFamilyName}\n
        Ваш возраст в годах: ${personAge} \n
        Ваш возраст в днях Вашь в днях: ${personAgeInDays}\n
        Через 5 лет вам будет: ${personAgePlus5}\n
        Ваш пол: ${personSex}\n
        Вы на пенсии: ${personRetired}`);
    
function x(varName, text){
    let circleBreaker;
    do {
        varName = prompt(`Введите ${text}`);
        if (varName) {
            return varName;
        } else {
            alert('Ошибка, заполните форму');
            circleBreaker = true;
        }
    } while (circleBreaker);
}