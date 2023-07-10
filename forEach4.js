/*Escreva um código JavaScript que utilize o método forEach() para percorrer esse array e exibir no console uma mensagem para cada aluno, indicando se ele foi aprovado (nota maior ou igual a 7) ou reprovado (nota menor que 7).*/


const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 6 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 9 },
  ];
  
  alunos.forEach(function(aluno){
    if(aluno.nota >= 7){
        console.log(`Estudante ${aluno.nome} aprovado.`)
  } else {
    console.log(`Estudante ${aluno.nome} reprovado.`)   
}
    
})