// Завдання 12/48
// ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ 2.0

// До завдання
// Завдання 12/48
// Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна getCommonElements.
// Змінній getCommonElements присвоєна стрілочна функція з параметрами (firstArray, secondArray)
// Для перебирання масиву firstArray використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line

// function getCommonElements(firstArray, secondArray) {
    
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

    //   firstArray.forEach(function (element) {
    
    firstArray.forEach(element => {
      
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}

getCommonElements([8, 11, 21, 12, 16, 14, 5, 21, 22, 8, 19, 10, 14, 9, 23, 16, 18, 9, 7], [8, 5, 10, 24, 22, 12, 21, 14, 5, 7, 7, 16, 18, 17, 18, 12, 8, 21, 20]);
// буде[8, 21, 12, 16, 14, 5, 21, 22, 8, 10, 14, 16, 18, 7]