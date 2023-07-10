//Escreva um programa que recebe um array de números e retorna um novo array contendo apenas os números ímpares.


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soImpares = []

numeros.forEach(function(separa){
    if(separa % 2 != 0){
        soImpares.push(separa)
    }
})

console.log(soImpares)