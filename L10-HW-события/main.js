// повесили событие на стр
addEventListener('DOMContentLoaded', function(){
    console.log('ghbdtn')
});


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

 


 