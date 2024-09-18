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




