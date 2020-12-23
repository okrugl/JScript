function isPalindrome(str) {
    var strLen = str.length;
    var result = '';
    for (var i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) {
        result = 'это палиндром';
      } else {
        result = 'это не палиндром';
        return result;
      }
    }
    return result;
  };
  
  let test1 = prompt('Введите полиндром');
  let test2 = prompt('ВВедите не полиндром');
  
  test1 = isPalindrome;
  test2 = isPalindrome;

  console.log(test1);
  console.log(test2);