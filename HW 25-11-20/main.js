//НЕ РАБОТАЕТ КОРРЕКТНО
var login = 'Cat';
var passwor = 'lotok123';

var loginPols = prompt('введите логин');
var passwordPols = prompt('введите пароль');



if(loginPols === login && passwordPols === passwor){
    console.log('Вы успешно авторизировались');
}if(loginPols == "null" || loginPols == null || loginPols == "" && passwordPols == "null" || passwordPols == null || passwordPols == ""){
        //document.querySelector('#result').textContent = 'Авторизация отменена';    ----КАК ПОДКЛЮЧИТЬ И ВЫВОДИТЬ В HTML?
        console.log('Авторизация отменена');      
}else{
    console.log('Логин или пароль не верные');
}




/*/вариант с функцией +

function avtoris (login, parol) {
    if(login === 'Cat' && parol === 'lotok123'){
        console.log('Вы успешно авторизировались');
    }else{
        console.log('Логин или пароль не верные');
    }
}
avtoris ('Cat', 'lotok123');
*/



/* вариант с if/else без 6п.

var login = 'Cat';
var passwor = 'lotok123';

var loginPols = prompt('введите логин');
var passwordPols = prompt('введите пароль');

if(loginPols === login && passwordPols === passwor){
    console.log('Вы успешно авторизировались');
}else{
   console.log('Логин или пароль не верные');
}

*/