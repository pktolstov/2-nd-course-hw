//Task1
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

// Task2
let i = 1
do {
    console.log(i);
    i++;
} while (i <= 5);

// Task3
let i = 7
do {
    console.log(i);
    i++;
} while (i <= 22);

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
let n = 1000;
num = 0;
do {
    if (n / 2 < 50) {
        console.log(n);
        break
    }
    n /= 2;
    num++;
} while (n > 50);
console.log(num)

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
for (let i = 1; i <= 12; i++) {
    console.log(`${months[i]} – ${i}-й в году`)
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

for (let i = 0; i < 10; i++) {
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