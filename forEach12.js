//Escreva um programa que recebe um array de números e retorna a soma apenas dos números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaPares = 0 ;

numeros.forEach(function(cadaNumero){
    if(cadaNumero % 2 === 0){
       somaPares += cadaNumero
    }
})
console.log(somaPares)
