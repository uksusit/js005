// Завдання 1/20

// Всередині функцій можна використовувати зарезервоване ключове слово this. Під час виконання функції, в this записується посилання на об'єкт, в контексті якого вона була викликана. Таким чином, в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
// Методи getAuthors і addAuthor - це функції (методи об'єкта), які викликаються в контексті об'єкта bookShelf. Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.


// До завдання

// Завдання 1/20

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// Метод checkPizza об'єкта pizzaPalace використовує this.
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};
