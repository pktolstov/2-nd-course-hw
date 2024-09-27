// Task 1
const simpleAray = [1, 5, 4, 10, 0, 3];
for (let el = 0; el < simpleAray.length; el++) {
    console.log(simpleAray[el])
    if (simpleAray[el] === 10) {
        break;
    }
}

//Task 2
const secondArray = [1, 5, 4, 10, 0, 3];
secondArray.indexOf(4);

// Вариант 2
for (let i = 0; i < secondArray.length; i++) {
    if (secondArray[i] === 4) {
        console.log(i);
    }
}

// Task 3
const thirdArray = [1, 3, 5, 10, 20];
thirdArray.join(' ');


// Task 4

const forthArray = new Array();
for (let elt = 0; elt < 3; elt++) {
    forthArray.push([]);
    for (let subel = 2; subel >= 0; subel--) {
        forthArray[elt].push(1);
    }
}
console.log(forthArray);

// Task 5
const fifthArray = [1, 1, 1];
for (let z = 0; z < 3; z++) {
    fifthArray.push(2);
}
console.log(fifthArray);


// Task 6
const sixthArray = [9, 8, 7, 'a', 6, 5];
sixthArraySorted = sixthArray.sort();
sixthArraySorted.pop();
console.log(sixthArraySorted);

// Task 7
const seventhArray = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Попробуйте угадать число в массиве'));
if (seventhArray.includes(userNumber) == true) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Task 8
let eightStroke = 'abcdef'
const eightArray = eightStroke.split('').reverse().join('')
console.log(eightArray);

// Task 9
const ninethArray = [[1, 2, 3], [4, 5, 6]];
const newArray = [];
ninethArray.forEach((element) => {
    element.forEach((elmt) => {
        newArray.push(elmt);
    })
})
console.log(newArray);

// Task 10
const tenthArray = [1, 3, 5, 7, 9];
for (let w = 0; w < tenthArray.length; w++) {
    let summEl
    if (w === tenthArray.length - 1) {
        break;
    } else {
        summEl = tenthArray[w] + tenthArray[w + 1];
        console.log(summEl);
    }
}

// Task 11
function squaredArray(getArray) {
    const newArr = new Array();
    getArray.forEach((elem) => {
        newArr.push(elem ** 2);
    })
    return newArr;
}

function squaredArrayTwo(getArrayTwo) {
    const newArr = getArrayTwo.map(num => num ** 2);

    return newArr;
}

squaredArrayTwo([1, 3, 4, 5, 6]);
squaredArray([1, 3, 4, 5, 6]);


// Task 12
const twelveArray = ['abcdef', 'fghjty', 'asdfghrty', 'cbhgfrty', 'lhgkhjfdbbhjgkkhnd'];
const finalArray = [];
twelveArray.forEach((str, index) => {
    finalArray.push(str.split('').length);
})
console.log(finalArray);

// map vary
const updatedTwelveArray = twelveArray.map(item => item.split('').length);
console.log(updatedTwelveArray);


// Task13
function thirTeen(numberArray) {
    const negativeNumberArray = []
    console.log(numberArray)
    for (let r = 0; r < numberArray.length; r++) {
        console.log(r);
        if (numberArray[r] < 0) {
            negativeNumberArray.push(numberArray[r]);
        }
    }
    return negativeNumberArray;
}

thirTeen([1, -2, -4, -5, 6, 7, 8, 9]);

// Task 14
const forTeenArray = [];
const evenArray = [];
for (let t = 0; t < 10; t++) {
    forTeenArray.push(Math.floor(Math.random() * 10));
    if (forTeenArray[t] % 2 === 0) {
        evenArray.push(forTeenArray[t])
    }
}

const filteredForTeenArray = forTeenArray.filter(terms => terms % 2 === 0);
console.log(forTeenArray);
console.log(evenArray);
console.log(filteredForTeenArray);




//Task 15
const fifTeenthArray = [];
const severalSumArray = [];
let count = 0;
for (let y = 0; y < 6; y++) {

    fifTeenthArray.push(Math.floor(Math.random() * 10) + 1);
    count += fifTeenthArray[y]

}
const sumArray = fifTeenthArray.reduce((total, number) => total + number, 0);
console.log(fifTeenthArray);
console.log(count);
console.log(sumArray);

 
//Task 1
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

console.log(realResult);