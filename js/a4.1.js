// Виконано
// Завдання 1/48
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza,
//  а у змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;
