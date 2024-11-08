// Завдання 7/48
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція getCommonElements(firstArray, secondArray)
// Для перебирання параметра (масиву) використаний метод forEach
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

    firstArray.forEach(itm => {
        if (secondArray.includes(itm)) {
            console.log(itm);
            commonElements.push(itm)
        }
        
    });
    console.log('common-- ', commonElements)
  return commonElements;
  // Change code above this line
}


getCommonElements([1, 2, 3], [2, 4]);
// повертає[2]
getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// повертає[1, 2]
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// повертає[12, 27, 3]
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// повертає[10, 30, 40]
getCommonElements([1, 2, 3], [10, 20, 30]);
// повертає[]
getCommonElements([12, 9, 11, 5, 13, 23, 13, 12, 8, 9, 17, 14, 13, 18, 15], [5, 20, 12, 23, 6, 6, 8, 5, 9, 13, 9, 8, 23, 13, 9]);
// буде[12, 9, 5, 13, 23, 13, 12, 8, 9, 13]