//Exercício: Soma de elementos
//Escreva um programa que recebe um array de números e retorna a soma de todos os elementos do array.


const numeros = [2, 4, 6, 8];
let soma = 0;

numeros.forEach(function(numero) {
  soma += numero;
});

console.log("A soma é: " + soma);

