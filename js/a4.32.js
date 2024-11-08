// Завдання 32/48
// Метод some(callback) перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

// масив.some((element, index, array) => {
//   // Callback function body
// });
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає true, якщо хоча б один елемент масиву задовольняє умову.
// Повертає false, якщо жоден елемент масиву не задовольняє умову.
// Перебирання масиву припиняється, якщо колбек повертає true.
// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// До завдання
// Завдання 32/48
// Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив [26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив [17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна anyElementInFirstIsEven
// Значення змінної anyElementInFirstIsEven - це буль true
// Оголошена змінна anyElementInFirstIsOdd
// Значення змінної anyElementInFirstIsOdd - це буль false
// Оголошена змінна anyElementInSecondIsEven
// Значення змінної anyElementInSecondIsEven - це буль false
// Оголошена змінна anyElementInSecondIsOdd
// Значення змінної anyElementInSecondIsOdd - це буль true
// Оголошена змінна anyElementInThirdIsEven
// Значення змінної anyElementInThirdIsEven - це буль true
// Оголошена змінна anyElementInThirdIsOdd
// Значення змінної anyElementInThirdIsOdd - це буль true
// Для перебирання масивів використаний метод some()

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(itm => itm % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(itm => itm % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(itm => itm % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(itm => itm % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(itm => itm % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(itm => itm % 2 !== 0);
console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);
console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);
console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);