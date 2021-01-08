let sim = prompt('ВВедите строку и подлиннее');
// let leng = sim.length;
let x;
let y;
let lengFin = sim.length - 5;

if(sim.slice(0, 8) == 'https://'){
    x = 'true'
}else{
    x = 'folse'
};


if(sim.substr(lengFin, 5) == '.html'){
   y = 'true'
}else{
   y = 'folse'
};


if(x == 'true' && y == 'true'){
    console.log('true')
}else{
    console.log('folse')
};
// function(){

