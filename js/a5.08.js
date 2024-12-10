

// Завдання 8/20
// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта. Якщо параметрів багато (більше 2-х), то, як правило, застосовують патерн «Об'єкт параметрів». Ідея цього патерну у тому, щоб передавати як параметр один об'єкт з логічно іменованими властивостями. Значення властивостей такого об'єкта замінять набір аргументів.

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//   name: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }

// До завдання

class Car {
    // Change code below this line
  constructor({brand, model, price}) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    // Change code above this line
  }
  

// Завдання 8/20
// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 }) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }