// Завдання 25/48
// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

const users = [
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
        friends: ["Goldie Gentry", "bruce lee", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
        age: 21
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "popa begemota", "Eddie Strong"],
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
        friends: ["Goldie Gentry", "Briana Decker", "popa begemota", "bruce lee"],
        isActive: true,
        balance: 2764,
        gender: "female",
        age: 39
    }
];

// До завдання
// Завдання 25/48
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// Оголошена змінна getFriends
// Змінній getFriends присвоєна стрілочна функція з параметром (users)
// Виклик функції із зазначеним масивом користувачів повертає масив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getFriends = (users) => {
   
// };
// // Change code above this line

// Change code below this line
// const uniFr = [];
    // console.log("input ", users);
const getFriends = (users) => {
    const allFr = [];
    users.filter(user => allFr.push(...user.friends));
    
    const uniFr = allFr.filter(
        (fr, idx, arr) => arr.indexOf(fr) === idx);
    console.log("unique friends", uniFr);
 
    return uniFr;
}  ;
    //  const afs = allFr.map(fr,idx,arr)
    // return allFr;
    
// Change code above this line



// abo:
// const getFriends = (users) => {
// const allFr = [];
//     users.filter(user => allFr.push(...user.friends));
//      return allFr.filter(
//         (fr, idx, arr) => arr.indexOf(fr) === idx);
// }  ;

console.log(getFriends(users));