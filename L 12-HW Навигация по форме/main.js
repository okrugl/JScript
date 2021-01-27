//Задача 1
let newOpc = document.forms.selects.prefer;
// newOpc.lastChild.data = '<option name="node">NODE</option>';   КАК ?

newOpc = newOpc.innerHTML += '<option name="node">NODE</option>';



let opt = document.querySelectorAll('option');  //коллекция опции
console.log(opt);

// for(x = 0; x < opt.length; x++){             //цикл находит значение
//     alert(`Я знаю хорошо программу: ${opt[x].innerText}`)
//     console.log(opt[x].innerText);
// };


let a = document.forms.selects.choice; //кнопка
console.log(a);

// console.log(document.querySelector('.choice'));  //тоже кнопка

/////////////// показывает просто цикл весь!!!
// document.querySelector('.choice').onclick = myClick;

// function myClick(){
//     for(x = 0; x < opt.length; x++){
//         alert(`Я знаю хорошо программу: ${opt[x].innerText}`)
    
//     };
//     }

// document.querySelector('.choice').addEventListener('change', warn, true);
// function warn(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   if (e.currentTarget.value === 'css') {
//     alert(`Я знаю хорошо программу: CSS`)
//   } if (e.currentTarget.value === 'html') {
//     alert(`Я знаю хорошо программу: HTML`)
//   }else{
//   return;
// };
// }


var select = selects.prefer;  //находим селект
console.log(select);

function changeOption(){
     
    var selection = document.getElementById("selection");
    var selectedOption = select.options[select.selectedIndex];
    alert(selection.textContent = "Я знаю программу: " + selectedOption.text);
}
 
select.addEventListener("change", changeOption);

//но не привязала к кнопке

//задача 2

// function kalk(){
//     let a = document.querySelector('.summ1').value;
//     console.log(a);
// }

document.querySelector('button').onclick = myCli;

function myCli(){
    // let a = document.querySelector('.summ1').value;

document.querySelector('summ1-1').innerHTML = document.querySelector('.summ1').value;
};