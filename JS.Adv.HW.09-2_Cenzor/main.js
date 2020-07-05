// Завдання 5
// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// •	При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
// •	Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// •	При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *, причому на ту кількість яка довжина слова
// •	Якщо textarea порожня виводити повыдолення про заповнення поля
let add = document.querySelector('.add');
let reset = document.querySelector('.reset');
let badW = document.querySelector('.badW');
let inp = document.querySelector('.inp');
let bwList = document.querySelector('.bwList');
let cenzor = document.querySelector('.cenzor');
let arr = ['some'];
let area = document.querySelector('#area');
// при кліку на кнопку Add створюється новий елемент зі значенням,яке було у полі, 
// (якщо поле не пусте), потім цей елемент вставляється в кінець списку заборонених слів
add.addEventListener('click', function () {
    let h5 = document.createElement('h5');
    if (inp.value !== '') {
        // масив наповнюється словами з поля (потім текст буде звірятися зі словами з цього масиву)
        arr.push(inp.value);
        if (bwList.textContent !== '') {
            // якщо у списку вже є слова, то додаємо ще кому перед новим словом
            h5.textContent = `, ${inp.value}`;
            inp.placeholder = 'write a word';
            inp.style.borderColor = 'rgb(207, 207, 207)';
        }
        else {
            // якщо список був пустий, то перед першим словом кому не додаємо
            h5.textContent = `  ${inp.value}`;
            inp.placeholder = 'write a word';
            inp.style.borderColor = 'rgb(207, 207, 207)';
        }
    }
    else {
        // якщо значення у полі пусте, то виводиться повідомлення у плейсхолдер
        inp.placeholder = 'Please write a word!';
        inp.style.borderColor = 'red';
    }
    bwList.appendChild(h5);
    inp.value = '';
});
// при кліку на кнопку reset список стає пустим
reset.addEventListener('click', function () {
    bwList.textContent = '';
    // масив заборонених слів теж
    arr = [];
});
// при кліку на кнопку cenzor:
cenzor.addEventListener('click', function () {
    if (area.value == '') {
        // якщо нема ніякого тексту, то виводиться повідомлення
        area.placeholder = 'Please write a text!';
        area.style.borderColor = 'red';
    }
    else {
        // перевіряється чи є в тексті слова з масиву заборонених
        for (let i = 0; i < arr.length; i++) {
            // створюється регулярний вираз з кожного слова з масиву
            let regExp = new RegExp(`${arr[i]}`, 'gi');
            // дане слово з масиву заміняється зірочками
            let prohbW = `${arr[i]}`.slice(0, 0).padEnd(`${arr[i]}`.length, '*');
            // текст заміняється на новий - з зірочками замість заборонених слів
            area.value = area.value.replace(regExp, prohbW);
        }
        area.placeholder = 'text here..';
        area.style.borderColor = 'rgb(207, 207, 207)';
    }
});
