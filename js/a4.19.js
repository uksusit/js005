// Завдання 19/48
// Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

// масив.filter((element, index, array) => {
//   // Тіло колбек-функції
// });
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає новий масив.
// Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
// Якщо колбек повернув true, елемент додається у масив, що повертається.
// Якщо колбек повернув false, елемент не додається у масив, що повертається.
// Якщо жоден елемент не задовольнив умову, повертає порожній масив.
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву і, якщо результат її виконання - true, додає поточний елемент у новий масив.

// До завдання
// Завдання 19/48
// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().

// Оголошена змінна numbers
// Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Оголошена змінна evenNumbers
// Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
// Оголошена змінна oddNumbers
// Значення змінної oddNumbers - це масив [17, 61, 47, 73]
// Для перебирання масиву numbers використаний метод filter()

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number %2 === 0 ) ;

const oddNumbers =  numbers.filter(number => number %2 !== 0);



console.log(evenNumbers);
console.log(oddNumbers);


// ----------------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// const even = numbers => numbers.filter(number => number %2 === 0 );
// const evenNumbers = even(numbers);
 
// console.log(evenNumbers);
// // evenNumbers(numbers);
//   const odd = numbers => numbers.filter(number => number %2 !== 0);
// const oddNumbers = odd(numbers);

// console.log(oddNumbers);
