// Завдання 24/48
// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
const users =
    [
        {
            name: "Moore Hensley",
            email: "moorehensley@indexia.com",
            eyeColor: "blue",
            friends: ["Sharron Pace"],
            isActive: false,
            balance: 2811,
            gender: "male",
            age: 37
        },
        {
            name: "Sharlene Bush",
            email: "sharlenebush@tubesys.com",
            eyeColor: "blue",
            friends: ["Briana Decker", "Sharron Pace"],
            isActive: true,
            balance: 3821,
            gender: "female",
            age: 34
        },
        {
            name: "Ross Vazquez",
            email: "rossvazquez@xinware.com",
            eyeColor: "green",
            friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
            isActive: false,
            balance: 3793,
            gender: "male",
            age: 24
        },
        {
            name: "Elma Head",
            email: "elmahead@omatom.com",
            eyeColor: "green",
            friends: ["Goldie Gentry", "Aisha Tran"],
            isActive: true,
            balance: 2278,
            gender: "female",
            age: 21
        },
        {
            name: "Carey Barr",
            email: "careybarr@nurali.com",
            eyeColor: "blue",
            friends: ["Jordan Sampson", "Eddie Strong"],
            isActive: true,
            balance: 3951,
            gender: "male",
            age: 27
        },
        {
            name: "Blackburn Dotson",
            email: "blackburndotson@furnigeer.com",
            eyeColor: "brown",
            friends: ["Jacklyn Lucas", "Linda Chapman"],
            isActive: false,
            balance: 1498,
            gender: "male",
            age: 38
        },
        {
            name: "Sheree Anthony",
            email: "shereeanthony@kog.com",
            eyeColor: "brown",
            friends: ["Goldie Gentry", "Briana Decker"],
            isActive: true,
            balance: 2764,
            gender: "female",
            age: 39
        }
    ]
    ;
// До завдання

// Завдання 24/48
// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є друг з вказаним іменем friendName. Друзі кожного користувача зберігаються у властивості friends.

// Поради:

// Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// Оголошена змінна getUsersWithFriend
// Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
   
// };
// // Change code above this line


    // ---------------------------------------------------------
// const friendName = "Goldie Gentry";
// ;
// const friends = users.filter(user =>
// {
//     console.log(user);
//     const fr = user.friends
//     console.log("friends", fr);
//     const uwf =  fr.includes(friendName);
//     console.log(uwf);
    
//     return uwf !=0;
//     }
// ) ;
// console.log(friends);
// --------------------------------------------------------


// Change code below this line
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
// Change code above this line




console.log(getUsersWithFriend(users, 'Briana Decker'));