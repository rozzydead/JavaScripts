// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const str = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(str[0].length);
console.log(str[1].length);
console.log(str[2].length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const str2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(str2[0].toUpperCase());
console.log(str2[1].toUpperCase());
console.log(str2[2].toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

const str3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
console.log(str3[0].toLowerCase());
console.log(str3[1].toLowerCase());
console.log(str3[2].toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// const dirty = ' dirty string   ';
// const clear = dirty.substring(1,13);
// console.log(clear);
const dirty = ' dirty string  ';
clear = dirty.trim();
console.log(clear);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const str4 = 'Ревуть воли як ясла повні';
const str44 = str4.split(' ');
console.log(str44);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const str5 = [10,8,-7,55,987,-1011,0,1050,0];
str5.map(()=>toString());
console.log(str5.toString());

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const nums = [11,21,3];
const sortNums = (array) => array.sort((num1, num2)=> num1 - num2);
console.log(sortNums(nums));
const sortNumss = (array) => array.sort((num1, num2)=> num2 - num1);
console.log(sortNumss(nums));

// - є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
const sortCourses = coursesAndDurationArray.sort((u1, u2) => {
    return u2.monthDuration - u1.monthDuration;
});
console.log(sortCourses);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
function filter(array, predicateFn) {
    let filterArr = [];
    for (const item of array) {
        if (predicateFn(item)) {
            filterArr.push(item);
        }
    }
    return filterArr;
}
console.log(filter(coursesAndDurationArray,(item) => item.monthDuration > 5));
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const cards = [
    {cardSuit: 'clubs', value: 'Ace', color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'},
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},

    {cardSuit: 'diamonds', value: 'Ace', color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'},
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},

    {cardSuit: 'hearts', value: 'Ace', color:'red'},
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {value: 'Joker', color:'red'},

    {cardSuit: 'spades', value: 'Ace', color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'},
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {value: 'Joker', color:'black'},
];
const sortAce = cards.filter(card => card.cardSuit === 'clubs' && card.value === 'Ace');
console.log(sortAce);

const sort6 = cards.filter(card => card.value === 6);
console.log(sort6);

const sortRed = cards.filter(card => card.color === 'red' && card.value >= 6 + '');
console.log(sortRed);

const sortDiamond = cards.filter(card => card.cardSuit === 'diamonds' && card.value >= 6 + '');
console.log(sortDiamond);

const sortSpades = cards.filter(card => card.cardSuit === 'spades' && card.value >= 9 + '');
console.log(sortSpades);