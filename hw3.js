// Task 1
let password = 'Pass4*good';
let userPass = prompt('Введите пароль');
if (password === password) {
    alert('Пароль введен верно');
    console.log('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
    console.log('Пароль введен неправильно');
}


//task 2

let c = Number(prompt('Введите одно из чисел: 0, 10, -3, 2'));
alert(c > 0 && c < 10 ? "Верно" : "Неверно");

//task3
let d = Number(prompt('Введите число'));
let e = Number(prompt('Введите еще одно число'));
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}


//task 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//task 5
let monthNumber = Number(prompt('Введите номер месяца от 1 до 12'));
switch (monthNumber) {
    case 1:
        alert('1-й месяц (он же январь) принадлежит к сезону «зима»');
        break;
    case 2:
        alert('2-й месяц (он же февраль) принадлежит к сезону «зима»');
        break;
    case 3:
        alert('3-й месяц (он же март) принадлежит к сезону «весна»');
        break;
    case 4:
        alert('4-й месяц (он же апрель) принадлежит к сезону «весна»');
        break;
    case 5:
        alert('5-й месяц (он же май) принадлежит к сезону «весна»');
        break;
    case 6:
        alert('6-й месяц (он же июнь) принадлежит к сезону «лето»');
        break;
    case 7:
        alert('7-й месяц (он же июль) принадлежит к сезону «лето»');
        break;
    case 8:
        alert('8-й месяц (он же август) принадлежит к сезону «лето»');
        break;
    case 9:
        alert('9-й месяц (он же сентябрь) принадлежит к сезону «осень»');
        break;
    case 10:
        alert('10-й месяц (он же октябрь) принадлежит к сезону «осень»');
        break;
    case 11:
        alert('11-й месяц (он же ноябрь) принадлежит к сезону «осень»');
        break;
    case 12:
        alert('12-й месяц (он же декабрь) принадлежит к сезону «зима»');
        break;
    default:
        alert('Вы ввели некорректный номер месяца');
}

//task 6 Ext 1
let userNumber = Number(prompt('Пожалуйста, введите любое число'));
//if (typeof(userNumber) == NaN) {
if (isNaN(Number(userNumber))) {
    alert('Вы ввели не число');
} else if (userNumber % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

// task 7 Ext2
let clientOS = 0;
console.log(!clientOS ? 'Установите версию приложения для iOS по ссылке' : 'Установите версию приложения для Android по ссылке');

//task 8 Ext3
let phoneOS = 1; //OS iOS
let phoneProductDate = 1; //Date later 2015

if (phoneOS && phoneProductDate) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (phoneOS && !phoneProductDate) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (!phoneOS && !phoneProductDate) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else if (!phoneOS && phoneProductDate) {
    console.log('Установите версию приложения для Android по ссылке');
}





