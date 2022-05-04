/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/


function squareDigits(num){
  let arr1 = String(num);     // Перевожу число в строку  var string = num.toString()
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {     // Создаю массив из чисел
      arr2.push(parseInt(arr1[i]));
  };
  let result = "";
  let num2 = arr2.map((Number) => Number ** 2); /*.sort((a, b) => a - b); */     // Взвожу в квадрат и сортирую
  for (let i = 0; i < num2.length; i++) {
      result += String(num2[i]);                   // Превращаю каждое число массива в строку и провожу конкантенацию
  };
  return parseInt(result);                        // Превращаю строку в число
}


/* Script from Codewars*/

/*function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}*/