// Task-1
let userString = "ddd@bbb@ccc";
alert(userString.replace(/@/g, "!"));
document.write(userString.replace(/@/g, "!") + "<br>");

// Task-2
let userString2 = "js";
document.write(userString2.toUpperCase() + "<br>");

// Task-3
let userString3 = "JS";
document.write(userString3.toLowerCase() + "<br");

// Task-4
let userString4 = "I am a hero";
console.log(userString4.length);

//  Task-5  Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.

// Пример: "Номер вашей карты: **********1245"

// let userCard = prompt("Введите номер кредитной карты:");
// document.write(
//   "Номер вашей карты: " +
//     userCard.replace(userCard.slice(0, -4), "************")
// );
