// Завдання 4/20
// Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, не знайденої в одному об'єкті. Сполучною ланкою виступає спеціальна прихована властивість [[Prototype]], яка в консолі браузера відображається як __proto__.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Об'єкт, на який вказує посилання в __proto__, називається прототипом. У нашому прикладі об'єкт animal - це прототип для об'єкта dog. Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Mango'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4
// Звернення dog.name працює очевидним чином - повертає власну властивість name об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з dog.__ proto__, тобто, у цьому випадку, в об'єкті animal - його прототипі.

// Тобто прототип - це резервне сховище властивостей і методів об'єкта, що автоматично використовується під час їх пошуку. Об'єкт, який виступає прототипом, може також мати свій прототип, наступний - свій, і так далі.

// Пошук властивості виконується до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті, якщо не знаходить, то звертається до властивості __proto__, тобто переходить за посиланням до об'єкта-прототипу, а потім - до прототипу прототипу. Якщо інтерпретатор дійде до кінця ланцюжка і не знайде властивості з таким ім'ям, то поверне undefined.


// Завдання 4/20
// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// Оголошена змінна parent
// Значення змінної parent - це об'єкт
// Виклик parent.hasOwnProperty("surname") повертає true
// Виклик parent.hasOwnProperty("heritage") повертає true
// Оголошена змінна child
// Значення змінної child - це об'єкт
// Виклик child.hasOwnProperty("name") повертає true
// Звернення до child.name повертає "Jason"
// Виклик child.hasOwnProperty("age") повертає true
// Звернення до child.age повертає 27
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Виклик parent.isPrototypeOf(child) повертає true
// Використовується метод Object.create()
// До завдання

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);
// {};

// Change code above this line
child.name = "Jason";
child.age = 27;
 