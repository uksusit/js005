// Завдання 10/48
// Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих методів масиву завдяки коротшому синтаксису оголошення, особливо, якщо не потрібне тіло функції.

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
// Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання. Це варто робити, якщо одна функція використовується у декількох місцях програми або якщо вона громіздка.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// До завдання
// Завдання 10/48
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметром (orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line
const calculateTotalPrice = orderedItems => {
    let totalPrice = 0;
    
    //   orderedItems.forEach(function (item) {

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
}
// Change code above this line


calculateTotalPrice([16, 9, 13, 19, 21, 8, 20, 8, 14, 11, 15, 13, 19, 17, 22, 8, 16]);
//  буде число 249