//Задача 1
let newOpc = document.forms.selects.prefer;
// newOpc.lastChild.data = '<option name="node">NODE</option>';   КАК ?

newOpc = newOpc.innerHTML += '<option name="node">NODE</option>';

let opt = document.querySelectorAll('option');  //коллекция опции
console.log(opt);


let a = document.forms.selects.choice; //кнопка
console.log(a);
// console.log(document.querySelector('.choice'));  //тоже кнопка


// Работает сразу при выборе в селекторе
// var select = selects.prefer;  //находим селект
// console.log(select);

// select.addEventListener("change", changeOption);

// function changeOption(){
//     var selection = document.getElementById("selection");
//     var selectedOption = select.options[select.selectedIndex];
//     alert(selection.textContent = "Я знаю программу: " + selectedOption.text);
// }

let select = selects.prefer;  //находим селект
console.log(select);

document.querySelector('.choice').addEventListener("click", changeOption);

function changeOption(){
    let selection = document.getElementById("selection");
    let selectedOption = select.options[select.selectedIndex];
    alert(selection.textContent = "Я знаю программу: " + selectedOption.text);
};



//задача 2

//почему не срабатывает в форме? не до конца срабатывает словие  46стр

function fin(){
    if(document.querySelector('.kapit').onchange && document.querySelector('button').onclick){
        myFunction2;
    }else{document.querySelector('button').onclick = myFunction;
    };
};
fin();

// document.querySelector('button').onclick = myFunction;

function myFunction(){
    document.querySelector('.summ1-1').innerText = document.querySelector('.summ1').value;
    
    let summa = document.querySelector('.summ1').value;
    let mons = document.querySelector('.summ2').value;
        
    let procMons = summa * 12 / 100 / 12; 
    let total = procMons * mons;
    let total1 = +summa + total
        
    document.querySelector('.summ1-2').innerText = total1;
};


//вторая часть с капитализацией

    // document.querySelector('.kapit').onchange = myFunction2;
    
function myFunction2(){
    let summa = document.querySelector('.summ1').value;
    document.querySelector('.summ1-1').innerText = document.querySelector('.summ1').value;
        
    let mons = document.querySelector('.summ2').value;
        
    let proMons = +summa + (summa * 12 / 100 / 12);
        for(let x = 0; x < mons; x++){
            summa = +summa + (summa * 1 / 100);
            summa = summa.toFixed(2);
            document.querySelector('.summ1-2').innerText = summa;
        };
};