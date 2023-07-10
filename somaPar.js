//Dado um array de números, escreva um código em JavaScript para calcular a soma de todos os números pares no array.



function sumInArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
  
  console.log(sumInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  