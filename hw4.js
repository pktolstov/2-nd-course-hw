//Task1
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

// Task2
let z = 1
do {
    console.log(z);
    z++;
} while (z <= 5);

// Task3
let y = 7
do {
    console.log(y);
    y++;
} while (y <= 22);

//Task 4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for (let staff in obj) {
    console.log(`${staff} – зарплата ${obj[staff]} долларов`)
}

// Task5
//Некорректный код
//let n = 1000;
//num = 0;
//do {
//    if (n / 2 < 50) {
//        console.log(n);
//        break
//    }
//    n /= 2;
//    num++;
//} while (n > 50);
//console.log(num)
// Исправленный наставником код
let n = 1000;
let num = 0;

do {
    n /= 2;  // Делим n на 2
    num++;   // Увеличиваем счетчик итераций
} while (n >= 50);  // Продолжаем, пока n больше или равно 50

console.log(n);  // Выводим конечный результат
console.log(num); // Выводим количество итераций



//Task6 
for (let fridayDate = 1; fridayDate < 31; fridayDate += 7) {
    console.log(`Сегодня пятница, ${fridayDate}-е число. Необходимо подготовить отчет.`)
}

//Task7 ext 1
let k = 100;
let iterations = 0;
while (true) {
    if (k < 0) {
        console.log(`k = ${k} iterations = ${iterations}`);
        break
    }
    k -= 7;
    iterations += 1;
};

//Task8 ext2
let months = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь'
};
for (let w = 1; w <= 12; w++) {
    console.log(`${months[w]} – ${w}-й в году`)
};


//Task9 ext3
let book = {
    'название': 'Сокровища Агры',
    'автор': 'Артур Конан Дойл',
    'год издания': '1901',
    'жанр': 'Детектив'
};
for (let key in book) {
    console.log(`${key} – ${book[key]}`)
};

//Task10 ext4
let randomNumbers = [];

for (let r = 0; r < 10; r++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers);
let randomMin = randomNumbers[0]
for (let item in randomNumbers) {
    console.log(randomMin);
    if (randomNumbers[item] < randomMin) {
        randomMin = randomNumbers[item];
    };
}
console.log(`Min number from random is ${randomMin}`);