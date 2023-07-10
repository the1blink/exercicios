/*Escreva um código JavaScript que utilize o método forEach() para percorrer esse
  array e exibir cada fruta em uma mensagem no formato "Eu gosto de [fruta]!".*/

const frutas = ["Maçã", "Banana", "Laranja", "Melancia", "Abacaxi"];

frutas.forEach(function(gosto){
    console.log(`Eu gosto de ${gosto}!`)
})
