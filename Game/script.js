let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
if (isNaN(minValue) || minValue == -999) {
    minValue = -999
};
(minValue < -999) ? minValue = -999 : minValue >= -999;

let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
if (isNaN(maxValue) || maxValue == 999) {
    maxValue = 999
};
(maxValue > 999) ? maxValue = 999 : maxValue <= 999;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true; 

function text(answerNumber){
    var ones = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',
                'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать',
                'семнадцать', 'восемнадцать', 'девятнадцать'];
    var tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят',
                'девяносто'];
    var hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];            
  
    /*var negativetext = negativetext.Math.sign(answerNumber) <= -1 = 'минус';*/
    var numString = answerNumber.toString();
  
    if (answerNumber < 20) {
      return ones[answerNumber];
    }
  
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    if (numString.length === 3) {
      if (numString[0] === '0' && numString[2] === '1')
        return hundreds[numString[0]] + ones[numString[1]];
      else
        return hundreds[numString[0]] + ' ' + tens[numString[1]] + ' ' + ones[numString[2]];
    }

       /*return text.length < 20 ? text : number;*/
  }
  text(answerNumber);

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

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
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
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
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){ 
        answerField.innerText = ([
        `Я всегда угадываю! Это число ${answerNumber}!\n\u{1F60E}`, 
        `Это ${answerNumber}! Я молодец!!!\n\u{1F929}`, 
        `${answerNumber}? Снова в точку!\n\u{1F61C}`]
        [Math.floor(Math.random() * 3)]
        );
        gameRun = false;
    }
})

document.querySelector('#btnRetry').addEventListener('click', () => {
    location.reload();
});

