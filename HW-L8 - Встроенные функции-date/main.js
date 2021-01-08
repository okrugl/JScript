//Актуальный месяц
let newForms = new Date();
console.log(newForms.getMonth()+1);

//Формат на английском со временем и без времени
console.log(newForms);
console.log(newForms.toUTCString());
console.log(newForms.toDateString());

//Формат dd-mm-yyyy на анг
let test = new Date();
console.log(test.toUTCString());


//Формат dd-mm-yyyy на русском без времени
let newFormy = new Date();
let newDates = newFormy.getMonth()+1;
let newDates2;
if (newDates == 1){
    newDates2 = 'января';
} else if (newDates == 12){
    newDates2 = 'декабря';
};

console.log(String(newFormy.getDate()) + ' ' +  (newFormy.getMonth()+1) + ' ' + String(newFormy.getFullYear()));
console.log(String(newFormy.getDate()) + ' ' +  newDates2  + ' ' + String(newFormy.getFullYear()));