//1 Все элементы label внутри таблицы. Должно быть 3 элемента.

let lab = document.getElementById('age-list');
let lab2 = lab.querySelectorAll('label');
console.log(lab2);

// 2 Первую ячейку таблицы (со словом "Возраст").

// let age = document.getElementsByName('Возраст');
let age = document.querySelector('td');
console.log(age);
console.log(age.innerHTML);


// 3 Вторую форму в документе
let forma = document.body.childNodes[2];
console.log(forma);

// 4 Форму с именем search, без использования её позиции в документе
let formaSearch = document.getElementsByName('search');
console.log(formaSearch);

// 5 Элемент input в форме с именем search. Если их несколько, то нужен первый

// 6 Элемент с именем info[0], без точного знания его позиции в документе


// 7 Элемент с именем info[0], внутри формы с именем search-person.


//8  Добавьте на страницу select с несколькими опциями, свяжите его с лейблом и вставьте оба элемента перед кнопкой «Искать».

