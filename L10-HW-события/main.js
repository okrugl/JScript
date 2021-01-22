// повесили событие на стр
// addEventListener('DOMContentLoaded', function(){
//     console.log('ghbdtn')
// });


// 1 при нажатии выводился alert

document.querySelector('.buttAllert').onclick = function(e){
    alert('Да');
};

// 2 создайте событие которое при нажатии меняет надпись на button

document.querySelector('.buttAlle').onclick = function(e){
   e.target.value = 'button';
};

//  3 создать div + 2 кнопки  синяя / красная. 
// сделать так, чтобы при нажатии на кн синюю div становилась тогоже цвета

document.querySelector('#redy').onclick = function(e){
    document.querySelector('.bloc').style.backgroundColor = e.target.value;
 };

 document.querySelector('#bluey').onclick = function(e){
    document.querySelector('.bloc').style.backgroundColor = e.target.value;
 };

 
// 2 при клике меняется папка по двойному щелчку

// let clicabel = document.querySelectorAll('.dbl');

// let firstClicabel = clicabel[0];
// let secondClicabel = clicabel[1]; 

// function reaction() {
//     };

// firstClicabel.addEventListener('click', reaction);
// secondClicabel.addEventListener('dblclick', function(){
//     this.style.display = 'none';
// });

let a = document.querySelectorAll('.ani1');
let b = document.querySelectorAll('.ani2');
let x = false;
function imgchange(obj, imgX, imgY) {
    
   if  (x){
   obj.src = imgX
   } else {
   obj.src=imgY
   }
  x = !x
 };

 onclick = imgchange(this, a, b);

