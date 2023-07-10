//Escreva um programa que recebe um array de strings e retorna uma única string
//que é a concatenação de todos os elementos do array.

const palavras = ["Olá", "mundo", "JavaScript"];
let frase = "";

palavras.forEach(function(cadaPalavra){
    frase += cadaPalavra + " "
    
})

console.log(frase)