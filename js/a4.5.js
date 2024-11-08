
// Завдання 5/48
// Метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.

// массив.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });
// Поелементо перебирає масив.
// Викликає колбек-функцію для кожного елемента масиву.
// Нічого не повертає.
// Аргументи колбек-функції - це значення поточного елемента element, його індекс index і власне вихідний масив array. Можна оголошувати тільки необхідні параметри, найчастіше - це елемент, головне не забувати про їх порядок.

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
// Єдиним випадком, коли варто використовувати цикли for або for...of для перебирання масиву, - це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.


// До завдання

// Завдання 5/48
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція calculateTotalPrice(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }
orderedItems.forEach(itm => {
    totalPrice += itm
});
    console.log(totalPrice);
  // Change code above this line
  return totalPrice;
}


// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([412, 371, 94, 63, 176])
calculateTotalPrice([11, 14, 7, 5, 14, 15, 19, 8, 19, 11, 5, 22, 9, 17, 5, 10, 22, 21, 5, 20, 16]) 
// буде число 275