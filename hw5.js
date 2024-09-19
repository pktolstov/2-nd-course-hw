
//Вариант 1
const randomNumber = Math.floor(Math.random() * 100) + 1;
let userNumber = Number(prompt('Попробуйте угадать число от 1 до 100 '));
let attempts = 0
let statusWhile = false
//alert(`randomNumber = ${randomNumber} \n userNumber = ${userNumber} \n attempts = ${attempts}`)
while (statusWhile = false) {
    attempts++;
    if (isNaN(userNumber) || userNumber <= 0 || userNumber > 100) {
        userNumber = Number(prompt('Вы ввели некорректное число. Введите число от 1 до 100 '));

    } else if (randomNumber > userNumber) {
        userNumber = Number(prompt('Ваше число меньше загаданного'));

    } else if (randomNumber < userNumber) {
        userNumber = Number(prompt('Ваше число больше загаданного'));

    } else if (randomNumber === userNumber) {
        alert(`Игра окончена! Вы угадали! Ваше число: ${userNumber}\n Загаданное число ${randomNumber} за ${attempts} попыток`);
        //statusWhile = true;
        break;
    }

    console.log(attempts);
}


// Вариант 2

function checkNumber(randomNumber, userNumber) {

    if (isNaN(userNumber) || userNumber <= 0 || userNumber > 100) {
        alert('Вы ввели некорректное число. Введите число от 1 до 100 ');
        return false;
    } else if (randomNumber > userNumber) {
        alert(`Ваше число ${userNumber} меньше загаданного`);
        return false;
    } else if (randomNumber < userNumber) {
        alert(`Ваше число ${userNumber} больше загаданного`);
        return false;
    } else if (randomNumber === userNumber) {
        alert(`Игра окончена! Вы угадали! Ваше число: ${userNumber}\n Загаданное число ${randomNumber}`);
        return true;
    }
}


//const randomNumber = Math.floor(Math.random() * 100) + 1;
//let userNumber = Number(prompt('Попробуйте угадать число от 1 до 100 '));
//let attempts = 0
//let statusWhile = false
//console.log(`randomNumber = ${randomNumber} \n userNumber = ${userNumber} \n attempts = ${attempts}`)
while (statusWhile === false) {

    statusWhile = checkNumber(randomNumber, userNumber);
    if (statusWhile === true) {
        break;
    } else {
        userNumber = Number(prompt('Попробуйте угадать число от 1 до 100 '));
        attempts++;
        console.log(attempts);
    }


}





// Task 2
//Не работает стрелочный вариант...
//let checkOddEven = a => { return a % 2 === 0 ? console.log('Число четное') : console.log('Число нечетное'); };
function checkOddEven(digits) {
    if (digits % 2 === 0) {
        return console.log('Число четное');
    } else {
        return console.log('Число нечетное');
    }
}
let myNumber = Number(prompt('Введите число'));
checkOddEven(myNumber);

//Task 3
const squaredNumberConsole = (x) => x ** 2;
const squaredNumber = (x) => {
    let x = x ** 2;
    return x
}

let x = Number(prompt('Введите число'));

squaredNumberConsole(x);
squaredNumber(x);

//Task 4

function howOldAreYou() {
    age = Number(prompt('Введите свой возраст'));
    if (isNaN(age) || age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!')
    } else if (age >= 13) {
        alert('Добро пожаловать!')
    }
}

howOldAreYou();


//Task 5

function checkYourNumbers(aNumber, bNumber) {
    if (isNaN(aNumber) || isNaN(bNumber)) {
        alert('Одно или оба значения не являются числом');
    } else {
        return aNumber * bNumber;
    }
}

checkYourNumbers(5, 'qwerty');
checkYourNumbers(5, 2);


//Task 6
function cubeYourNumbers() {
    let yourNumber = Number(prompt('Введите число'));
    let cube;
    if (isNaN(yourNumber)) {
        return ('Переданный параметр не является числом');
    } else if (yourNumber === 0) {
        cube = yourNumber ** 3;
        return '0 в кубе равняется 0';
    } else {
        cube = yourNumber ** 3;
        return `${yourNumber} в кубе равняется ${cube}`;
    }
}

cubeYourNumbers()

//Task 7 
function getArea() {
    squar
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea() {
        let square = Math.PI * this.radius ** 2;
        console.log(square);
    },
    getPerimeter() {
        console.log(2 * Math.PI * this.radius);
    }


}

const circle2 = {
    radius: 10,
    getArea() {
        console.log(Math.PI * this.radius ** 2);
    },
    getPerimeter() {
        console.log(2 * Math.PI * this.radius);
    }


}
circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();




