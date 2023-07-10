/*Escreva um código JavaScript que utilize o método forEach() para percorrer esse array e
  verificar se cada número é par ou ímpar. Para cada número, exiba uma mensagem no console
  indicando se é par ou ímpar.*/

const numeros = [2, 5, 8, 10, 3];

numeros.forEach(function(checa){
    if(checa % 2 === 0){ 
    console.log(`${checa} é par.`)
   
    }else {
        console.log(`${checa} é ímpar.`)
    }
})
