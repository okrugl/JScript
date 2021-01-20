//1 Все элементы label внутри таблицы. Должно быть 3 элемента.

let lab = document.getElementById('age-list');
let lab2 = lab.querySelectorAll('label');
console.log(lab2);

// 2 Первую ячейку таблицы (со словом "Возраст").

// let age = document.getElementsByName('Возраст');
let age = document.querySelector('td');
if(age.innerHTML === 'Возраст:'){
console.log(age)
}else{
console.log('Ищем еще!');
};


// 3 Вторую форму в документе
// let forma2 = document.querySelectorAll('form');
// forma2 = forma2[1];
let forma2 = document.querySelectorAll('form')[1];
console.log(forma2);

// 4 Форму с именем search, без использования её позиции в документе
let formaSearch = document.getElementsByName('search');
console.log(formaSearch);

// 5 Элемент input в форме с именем search. Если их несколько, то нужен первый
// let formInp = document.getElementsByName('search');
// formInp = formInp[1];
let formInp = document.querySelectorAll('[name = "search"]')[1];
console.log(formInp);

// 6 Элемент с именем info[0], без точного знания его позиции в документе
let nameInfo = document.querySelectorAll('[name = "info[0]"]');
console.log(nameInfo);

// 7 Элемент с именем info[0], внутри формы с именем search-person.
let formaSearchPers = document.querySelector('[name = "search-person"]').querySelector('[name = "info[0]"]');
console.log(formaSearchPers); 


//8  Добавьте на страницу select с несколькими опциями, свяжите его с лейблом
// и вставьте оба элемента перед кнопкой «Искать!».
let selectVal = document.querySelector('[value = "Искать!"]');
selectVal.innerHTML = '<label for = "user-id"> Поиск по сайту </label>';
selectVal.previousElementSibling.innerHTML = '<select id = "user-id"><option>Кино для детей</option><option>Кино для взрослых</option></select> ';
console.log(selectVal);


// 9  id elem oкрасить в красный цвет
let elems = document.getElementById('elem');
elems.style.background = 'red';
console.log(elems);
