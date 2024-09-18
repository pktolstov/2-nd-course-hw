
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