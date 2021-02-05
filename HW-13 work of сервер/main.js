//практика из лекции

hider.onclick = function(){
    text.style.display = 'none';
  }



 // послать запрос на получение локации
 //вывести название первой локации в консоль

fetch('https://rickandmortyapi.com/api/location')
.then((data) =>{
    return data.json();
})
.then(data => {
    diplom(data);  ///это фунция
});

diplom = (data) => {
    console.log(data.results[0].name)
};
