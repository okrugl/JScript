//1/  Напишите функцию counterFactory(start, step),
//  которая при вызове возвращает другую функцию 
// – счётчик tictoc(). start – стартовое значение
//  счётчика, step – его шаг. При каждом вызове tictoc
//  увеличивает значение счётчика на step


function counterFactory(start, step) {
    return function tictoc() {
            return start += step;
            }
};


var generator = counterFactory(0, 1);
console.log(generator());
console.log(generator());
console.log(generator());


// 2/ Напишите функцию take(tiktoc, x), 
// которая вызывает функцию tiktoc заданное число
// раз и возвращает массив с результатами вызовов.

function take(tiktoc1, x){
    let newArr = [];
    for(let i = 0; i < x; i++);
    newArr.push(tiktoc1);
    return newArr;

    function tiktoc1() {
        return x+=1;
        }
}
console.log(take(), 3);