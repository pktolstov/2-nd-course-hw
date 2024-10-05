function callbackWithArrayLength(arr, callback) {
    //console.log(arr.length);
    callback(arr.length);

}

callbackWithArrayLength([1], (length) => {
    console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);

});

function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);


//Task1
//С помощью метода массива sort отсортируйте массив people 
//по возрастанию возраста и выведите результат в консоль.
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort((a, b) => a.age - b.age));

//Task 2
//Реализуйте функцию filter, которая должна работать аналогично методу массива filter. 
//Возьмите за основу функцию map, которую мы реализовывали на уроке.
//Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова  ruleFunction, 
//принимать решение о том, добавлять в результирующий массив очередной элемент или нет.
function isPositive(number) {
    // писать код тут
    return number > 0;
}
function isMale(gend) {
    // писать код тут
    return gend.gender === 'male';
}
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

//Task3
//Напишите программу, которая на протяжении 30 секунд
// каждые 3 секунды будет выводить в консоль текущую дату. 
//Последней строкой должно выводиться сообщение «30 секунд прошло».
const timerDateThirty = () => {
    let currentDate = new Date()
    const interval = setInterval(() => {
        console.log(currentDate);
    }, 3000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло!')
    }, 30000)
};

timerDateThirty();


//Task4
//Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
//Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. 
//Используйте setTimeout
function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000);

    //callback();
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

//Task 5
//Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
let callFunc = () => console.log(sayHi('Глеб'));
delayForSecond(callFunc);