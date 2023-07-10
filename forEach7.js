//Escreva um programa que recebe um array de números e retorna um novo array com o dobro de cada número.



const numeros = [1, 2, 3, 4, 5];
const numerosDobro = [];

numeros.forEach(function(numero) {
  numerosDobro.push(numero * 2);
});

console.log(numerosDobro);
