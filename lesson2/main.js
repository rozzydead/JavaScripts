// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let cars = [`Toyota`, `BMW`, `Honda`, `Volvo`, `Mercedes`, `Volkswagen`, `Cherry`, `Fiat`, `Audi`, `Ford`];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);
console.log(cars[6]);
console.log(cars[7]);
console.log(cars[8]);
console.log(cars[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: `The Picture of Dorian Gray`,
    pageCount: 123,
    genre: 'Classics',
};

let book2 = {
    title: `The Little Prince`,
    pageCount: 777,
    genre: 'Fantasy',
};


let book3 = {
    title: `The Lord of the Rings`,
    pageCount: 228,
    genre: 'Adventure',
};

console.log(book1);
console.log(book2);
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.Кожен автор має поля name,age

let firstObj = {
    title: `Harry Potter`,
    pageCount: 777,
    genre: 'Fantasy',
    authors: [
        {
            name: 'Jordan',
            age: 23
        }
    ]
};

let secondObj = {
    title: `Harry Potter`,
    pageCount: 700,
    genre: 'Fantasy',
    authors: [
        {
            name: 'Tomas',
            age: 34
        }
    ]
};

let thirdObj = {
    title: `Harry Potter`,
    pageCount: 783,
    genre: 'Fantasy',
    authors: [
        {
            name: 'Jerry',
            age: 45
        }
    ]
};

console.log(firstObj);
console.log(secondObj);
console.log(thirdObj);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Petro', username: 'sdsargd', password: 'dasgffgs443'},
    {name: 'Ivan', username: 'xkgjfjfj', password: '454235hggf'},
    {name: 'Anton', username: 'gfgotrotxxv', password: '56gs34ccv'},
    {name: 'Stepan', username: 'bvbgfhllss', password: 'g35cxzy543'},
    {name: 'Ruslan', username: 'gfdghryuuc', password: '34315gcghgeqqq'},
    {name: 'Denis', username: 'gftsqqtrucbm', password: 'qt0506xgf'},
    {name: 'Sviatoslav', username: 'bcxcnbvzp', password: 'abvgd32'},
    {name: 'Moriarty', username: 'trytutcbm', password: 'qwerty'},
    {name: 'Jack', username: 'cxbtyudhksss', password: '12345qwe'},
    {name: 'Jesus', username: 'xfcxbvptrqeee', password: 'gg1337228wp'}
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
