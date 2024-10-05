// Task 1
let jsStr = 'js';
jsStr = jsStr.toUpperCase();
console.log(jsStr);


// Task 2
//Создать функцию, которая принимает массив строк и строку. 
//Функция должна вернуть новый массив, содержащий только те элементы первого массива, 
//которые начинаются со второй строки. Регистр символов не влияет на результат.

function compareStr(strList, strTmplt) {
    const newArray = new Array();
    strList.forEach(element => {
        if (element.toLowerCase().startsWith(strTmplt.toLowerCase())) {
            newArray.push(element);
        }
    });
    return newArray;
}

compareStr(['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 'Груша Конференция'], 'Молоко');

//Task 3
//Округлить число 32.58884:
//До меньшего целого.
//До большего целого.
//До ближайшего целого.

let ourNumber = 32.58884;
console.log(Math.floor(ourNumber));
console.log(Math.ceil(ourNumber));
console.log(Math.round(ourNumber));


//Task4
//Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const minMaxNumberArray = [52, 53, 49, 77, 21, 32];
let minNumber = Math.min(...minMaxNumberArray);
let maxNumber = Math.max(...minMaxNumberArray);

console.log(minMaxNumberArray.sort()[0], minMaxNumberArray.sort().reverse()[0]);
console.log(minNumber, maxNumber);

//Task 5 
//Создать функцию, которая выводит в консоль случайное число от 1 до 10.
function randomNumber() {
    let rndNum = Math.floor((Math.random() * 10) + 1);
    return rndNum;
}

console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

// Task 6
//Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. 
//Длина массива должна быть в два раза меньше переданного числа.
function randomArrayFromNumber(quontNum) {
    const outArray = new Array();
    for (let i = 0; i < Math.floor(quontNum / 2); i++) {
        outArray.push(Math.floor(Math.random() * quontNum));
    }
    return outArray;
}

console.log(randomArrayFromNumber(7));
console.log(randomArrayFromNumber(17));
console.log(randomArrayFromNumber(10));

//Task 7 
//Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function randomNumberFromRange(numberOne, numberTwo) {

    const minNumber = Math.ceil(Math.min(numberOne, numberTwo));
    const maxNumber = Math.floor(Math.max(numberOne, numberTwo));
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}
console.log(randomNumberFromRange(6, 8));

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomArbitrary(6, 100));

// Task 8
//Вывести в консоль текущую дату.
let engCurrentDate = new Date();
console.log(engCurrentDate);

// Task 9
// Создать переменную currentDate, хранящую текущую дату. 
//Вывести дату, которая наступит через 73 дня после текущей.

let currentDate = new Date();
let futureDate = new Date(currentDate);  // Копируем текущую дату
//console.log(futureDate);
futureDate.setDate(currentDate.getDate() + 73); // Прибавляем 73 дня

console.log(futureDate);






//Task 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
//Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//Время: [часы]:[минуты]:[секунды]
let currentDateTask10 = new Date();
function currentDayOutput(currentDateTask10) {
    let strToConsole = `Дата: ${currentDateTask10.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })} - это ${currentDateTask10.toLocaleDateString('ru-RU', { weekday: 'long' })}. Время: ${currentDateTask10.toLocaleTimeString('ru-RU')}`;
    return strToConsole;
}

//console.log(currentDateTask10.toLocaleDateString('ru-RU', {day: 'numeric', month: 'long', year: 'numeric'}));
//console.log(currentDateTask10.toLocaleTimeString('ru-RU')); 
currentDayOutput(currentDateTask10);

let stR = 'abcd';
stR.split('').reverse().join('')
console.log(stR.split('').reverse().join(''))