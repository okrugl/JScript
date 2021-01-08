// function isPalindrome(str) {
//     var strLen = str.length;
//     var result = '';
//     for (var i = 0; i < strLen; i++) {
//       if (str[i] === str[strLen - 1 - i]) {
//         result = 'это палиндром';
//       } else {
//         result = 'это не палиндром';
//         return result;
//       }
//     }
//     return result;
//   };
  
//   let test1 = prompt('Введите полиндром');
//   let test2 = prompt('ВВедите не полиндром');
  
//   test1 = isPalindrome;
//   test2 = isPalindrome;

//   console.log(test1);
//   console.log(test2);

function polinD(){
     if (finRez1  ==  finRez2){
       console.log('Это палиндром');
     }else{
       console.log('Это не палиндром, попробуйте еще раз!')
     }
  };

  let test1 = prompt('Введите строку');
  let perem = test1.split ('');
  console.log(perem);

  let finRez2 = perem.join('');
  console.log(finRez2);

  let peremRew = perem.reverse();
  console.log(peremRew);

  let finRez1 = peremRew.join('');
 
  console.log(finRez1);
  console.log(finRez2);

  polinD();
 