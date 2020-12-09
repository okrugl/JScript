let auto = {
    marka: 'Audi',
    year: '2016',
    color: 'red'
};

console.log(auto);

function newCar(newMarka = 'Ford', newYear = '2020', newColor = 'black'){
    markaCar(newMarka);
    yearCar(newYear);
    colorCar(newColor);


    function markaCar(newMarka){
        auto.marka = newMarka;
    };

    function yearCar(newYear){
         auto.year = newYear;
    };  

    function colorCar(newColor){
        auto.color = newColor;
    };
    

};
//newCar('Ford', '2020', 'black');

newCar();
console.log(auto);
