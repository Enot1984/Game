let minValue = parseInt(prompt('Минимальное значение числа для игры','-999'));
if (isNaN(minValue) || minValue == -999) {
   minValue = -999;
}
minValue = (minValue < -999 || minValue > 999) ? -999 : minValue;

let maxValue = parseInt(prompt('Максимальное значение числа для игры','999'));
if (isNaN(maxValue) || maxValue == 999) {
    maxValue = 999;
}
maxValue = (maxValue > 999 || maxValue < minValue) ? 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true; 

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${text(answerNumber)}?`;

function text(answerNumber) {
    let ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 0];
    let teen = ['одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let tens = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    let text = Math.sign(answerNumber) === -1 ? 'минус ' : '';
    let numString = Math.abs(answerNumber).toString();
    if (numString.length === 3) {
        text += hundreds[numString[0]];
        if (numString[1] + numString[2] > 20 && numString[2] != 0) {
            text += ' ' + tens[numString[1] - 1] + ' ' + ones[numString[2]];
        } else if (numString[1] + numString[2] < 20 && numString[1] + numString[2] > 10) {
            text += ' ' + teen[numString[2] - 1];
        } else if (numString[1] + numString[2] == 20) {
            text += ' ' + tens[1];
        } else if (numString[1] + numString[2] == 10) {
            text += ' ' + tens[0];
        } else if (numString[1] + numString[2] == 00) {
            text += ' ';
        } else if (numString[2] == 0) {
            text += ' ' + tens[numString[1] - 1];
        }else if (numString[1] == 0) {
            text += ' ' + ones[numString[2]];
        }
    } else if (numString.length === 2) {
        if (numString[1] == 0) {
            text += tens[numString[0] - 1];
        } else if (numString[1] != 0 && numString[0] == 1) {
            text += teen[numString[1] - 1];
        } else {
            text += tens[numString[0] - 1] + ' ' + ones[numString[1]]
        }
    } else if (numString.length === 1) {
        if (numString[0] == 0) {
            text += ones[10];
        } else {
            text += ones[numString[0]];
        }
    }
    return text.length < 20 ? text : answerNumber;
}
text(answerNumber);

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = -999;
    maxValue = 999;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            answerField.innerText = ([
                `Вы загадали неправильное число!\n\u{1F914}`,
                `Кажется кто-то жульничал!\n\u{1F60F}`, 
                `Я сдаюсь..\n\u{1F92F}`,]
            [Math.floor(Math.random() * 3)]
            );
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${text(answerNumber)}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            answerField.innerText = ([
                `Вы загадали неправильное число!\n\u{1F914}`,
                `Кажется кто-то жульничал!\n\u{1F60F}`, 
                `Я сдаюсь..\n\u{1F92F}`,]
            [Math.floor(Math.random() * 3)]
            );
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${text(answerNumber)}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){ 
        answerField.innerText = ([
        `Я всегда угадываю! Это число ${text(answerNumber)}!\n\u{1F60E}`, 
        `Это ${text(answerNumber)}! Я молодец!!!\n\u{1F929}`, 
        `${text(answerNumber)}? Снова в точку!\n\u{1F61C}`]
        [Math.floor(Math.random() * 3)]
        );
        gameRun = false;
    }
})

document.querySelector('#btnRetry').addEventListener('click', () => {
    location.reload();
});

