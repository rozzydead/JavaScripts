// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let hello = 'hello';
console.log(hello);
document.write(hello);
alert(hello);

let owu = 'owu';
console.log(owu);
document.write(owu);
alert(owu);

let com = 'com';
console.log(com);
document.write(com);
alert(com);

let ua = 'ua';
console.log(ua);
document.write(ua);
alert(ua);

let number = 1;
console.log(number);
document.write(number);
alert(number);

let number10 = 10;
console.log(number10);
document.write(number10);
alert(number10);

let number999 = -999;
console.log(number999);
document.write(number999);
alert(number999);

let number123 = 123;
console.log(number123);
document.write(number123);
alert(number123);

let number314 = 3.14;
console.log(number314);
document.write(number314);
alert(number314);

let number27 = 2.7;
console.log(number27);
document.write(number27);
alert(number27);

let number16 = 16;
console.log(number16);
document.write(number16);
alert(number16);

let boolean_true = true;
console.log(boolean_true);
document.write(boolean_true);
alert(boolean_true);

let boolean_false = false;
console.log(boolean_false);
document.write(boolean_false);
alert(boolean_false);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Sviatoslav';
let middleName = 'Andriyovich';
let lastName = 'Sadovyi';
let res = `${firstName} ${middleName} ${lastName}`;
console.log(res);

let fio = firstName + ' ' + middleName + ' ' + lastName
console.log(fio);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Enter name');
let secondName = prompt('Enter middle name')
let age = +prompt('Enter age')
console.log(name);
console.log(secondName);
console.log(age);