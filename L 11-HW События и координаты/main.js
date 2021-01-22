let getCoordinates = document.querySelector('.animated');
// console.log(getCoordinates);


// getCoordinates.addEventListener('mousedown', function(e){
//     let coordinates = e.clientX;
    
//     document.querySelector('output').innerHTML = coordinates;

// });


getCoordinates.onclick = function(event){
    var topCordinates = getCoordinates.getBoundingClientRect();
    console.log(topCordinates);
    document.querySelector('output').innerHTML = topCordinates.x;
    topCordinates.x.innerHTML += topCordinates.y;
    // document.querySelector('output').innerHTML = 'координаты по х:' ${topCordinates.x} 'px, и координаты по у: ' $ {topCordinates.y} 'px';
};

