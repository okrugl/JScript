let company = [
  { name: 'Samsung', employees: '287439'},
  { name: 'Apple', employees: '137000'},
  { name: 'Microsoft', employees: '144000'},
  { name: 'Honda', employees: '208235'},
  { name: 'Alibaba', employees: '117600'},
] 

let key = prompt('Ввeдите ключ name или employees');

function keyComp(){
  for(let x = 0; x < company.length; x++){
    
if (key =='name'){
//  let newName = company[x]['name'];
//return newName.join(', ');
 
console.log(`Все названия компани: ${company[x]['name']}`);

// let e = company[x]['name'];
// console.log(e.join(', '));

}else if (key == 'employees'){
  console.log(`Все сотрудники компани: ${company[x]['employees']}`)
  }else{
  console.log('введите коррректный ключ');
  }; 
}
}

keyComp();
