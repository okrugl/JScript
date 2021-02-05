fetch('https://rickandmortyapi.com/api/location')
.then((data) => {
    return data.json();
})
.then(data => {
    diplom(data.results);
});

diplom = (arr) => {
    console.log(arr)
};

// Послать запрос на получение локации
// Вывести название первой локации в консоль