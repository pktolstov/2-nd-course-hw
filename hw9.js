//Task 1
// cоздайте кнопку, которая будет скрывать и показывать текст в заголовке <h1>
const taskOneHeading = document.querySelector('.task-one-heading');
const taskOneButton = document.querySelector('.task-one-button');

taskOneButton.addEventListener('click', function() {
    taskOneHeading.style.display === 'none' ? taskOneHeading.style.display = 'initial' : taskOneHeading.style.display = 'none'
    });

// Непонятно, как сделать, чтобы после отбражения, кноплка оказалась на другой строке от заголовка.


// Task 2
//создайте кнопку, которая изменяет цвет текста в элементе <p>
const taskTwoParagraph = document.querySelector('.task-two-p');
const taskTwoButton = document.querySelector('.task-two-button');
taskTwoButton.addEventListener('click', function () {
    taskTwoParagraph.style.color = 'blue';
});

//Task3
// создайте кнопку, которая меняет текст в заголовке <h1>
const taskThreeHeader = document.querySelector('.task-three-header');
const taskThreeButton = document.querySelector('.task-three-button');
taskThreeButton.addEventListener('click', function() {
    taskThreeHeader.textContent = 'Привет, Мир!'
}); 

// Task4
// найдите все элементы с классом description и измените их текст на «Измененный текст».
const taskFourDescription = document.querySelectorAll('.description');
const taskFourButton = document.querySelector('.task-four-button');
taskFourButton.addEventListener('click', function() {
    taskFourDescription.forEach(element => {
        element.textContent = 'Измененный текст';
    });
});

//Task5
// создайте несколько элементов <p> с разными классами. 
//Используйте querySelectorAll, чтобы найти все элементы с классом description и изменить их текст.
const taskFiveDescription = document.querySelectorAll('.description-five');
const taskFiveButton = document.querySelector('.task-five-button');
taskFiveButton.addEventListener('click', function () {
    taskFiveDescription.forEach(el => {
        el.textContent = 'Новый текст';
    });
});
// непонятно, как найти элементы с таким классом, но типом только параграф?

//Task 6
// создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.

const taskSixCreateButton = document.querySelector('.task-six-button');
const taskSixCreateElement = document.createElement('p');
taskSixCreateButton.addEventListener('click', function() {
    document.body.appendChild(taskSixCreateElement);
    taskSixCreateElement.textContent = 'Новый абзац';
});

//Task7
// создайте кнопку, которая удаляет первый элемент <p> с классом description
const taskSevenParagraph = document.querySelector('.decription-seven');
const taskSevenButton = document.querySelector('.task-seven-button');
taskSevenButton.addEventListener('click', function () {
    taskSevenParagraph.remove();
});



