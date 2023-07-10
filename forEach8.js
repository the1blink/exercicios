//Escreva um programa que recebe um array de números e retorna um novo array contendo apenas os números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soPares = []

numeros.forEach(function(separa){
    if(separa % 2 === 0){
        soPares.push(separa)
    }
})

console.log(soPares)

