//Escreva um programa que recebe um array de números e verifica se todos os elementos são positivos. 
//O programa deve retornar true se todos os elementos forem positivos e false caso contrário.


const numeros = [1, 2, 3, 4, 5];

const todosPositivos = numeros.every(function(numero) {
  return numero > 0;
});

console.log(todosPositivos);
