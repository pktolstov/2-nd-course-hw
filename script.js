let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
    document.getElementById('guessInput').disabled = false; // Разблокируем поле ввода
    let div = document.getElementById('block-game');
    div.style.display = 'flex'
}

function checkGuess() {
    const userNumber = Number(document.getElementById('guessInput').value);
    attempts++;
    if (isNaN(userNumber) || userNumber <= 0 || userNumber > 100) {

        document.getElementById('result').textContent = 'Вы ввели некорректное число. Введите число от 1 до 100 ';
    } else if (userNumber < randomNumber) {
        document.getElementById('result').textContent = 'Слишком низко! Попробуйте снова.';
    } else if (userNumber > randomNumber) {
        document.getElementById('result').textContent = 'Слишком высоко! Попробуйте снова.';
    } else if (userNumber === randomNumber) {
        document.getElementById('result').textContent = `Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток.`;
    }
}



const startButtonSimpleMath = document.getElementById('startButtonSimpleMath');

function startSimpleMathGame() {
    let theFirstNumber = Math.floor((Math.random() * 20) + 1);
let theSecondNumber = Math.floor((Math.random() * 20) + 1);
const mathActions = ['+', '-', '*', '/'];
let emediatAction = mathActions[Math.floor(Math.random() * 3)];
let userResult = prompt(`Вычислите результат действия: ${theFirstNumber} ${emediatAction} ${theSecondNumber}`);
let realResult
if (emediatAction === mathActions[0]) {
    realResult = theFirstNumber + theSecondNumber;
} else if (emediatAction === mathActions[1]) {
    realResult = theFirstNumber - theSecondNumber;
} else if (emediatAction === mathActions[2]) {
    realResult = theFirstNumber * theSecondNumber;
} else if (emediatAction === mathActions[3]) {
    realResult = theFirstNumber / theSecondNumber;
}
if (realResult === Number(userResult)) {
    alert(`Ответ верный!`);
} else {
    alert(`Ответ неверный! Правильный ответ: ${realResult}\n Повезет в следующий раз!`)
}
}

startButtonSimpleMath.addEventListener('click', startSimpleMathGame);




const startButtonReverseText = document.getElementById('startButtonReverseText');

function startReverseTextGame() {
    let userStroke = prompt('Введите строку или слово');
    newUserStroke = userStroke.split('').reverse().join('');
    alert(`${userStroke} наоборот: ${newUserStroke}`);
}
startButtonReverseText.addEventListener('click', startReverseTextGame);



const startButtonQuizz = document.getElementById('startButtonQuizz');
function startQuizzGame() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let scoreUser = 0
    quiz.forEach((key) => {
        console.log(key);
        console.log(key['correctAnswer']);
        let userAnswer = Number(prompt(`Введите номер ответа на вопрос:\n${key['question']}\nВарианты ответов:\n${key['options'][0]}\n${key['options'][1]}\n${key['options'][2]}\n `));

        if (userAnswer === key['correctAnswer']) {
            scoreUser += 1;
            alert('Верно!')
        } else {
            alert('Неверно!')
        }
        
    })
    let finalAlert = `Вы ответили верно на ${scoreUser} вопросов`;
    alert(finalAlert);
}
startButtonQuizz.addEventListener('click', startQuizzGame);