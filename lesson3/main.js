// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//

const x = 0;
if (x !==0) {
    console.log('Вірно');
}else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 30;
if (time >= 0 && time < 15) {
    console.log('one');
}else if (time > 15 && time <= 30) {
    console.log('two');
}else if (time > 30 && time <= 45) {
    console.log('three');
}else if (time > 45 && time <= 60) {
    console.log('four');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

const day = 13;
if (day >= 1 && day < 10) {
    console.log('first');
}else if (day > 10 && day <= 20) {
    console.log('second');
}else if (day > 20 && day <= 31) {
    console.log('third');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//

const days = +prompt('Enter day');
switch (days) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Nothing');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

const a = 228;
const b = 777;
if (a > b) {
    console.log(a);
}else if (a < b) {
    console.log(b);
}else if (a === b) {
    console.log('The same number');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

const q = NaN || 'default';
console.log(q);