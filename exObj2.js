/* Enunciado:
Dado o objeto cliente que contém informações sobre um cliente, incluindo seu nome, idade, email, telefones e endereços,escreva um código 
JavaScript que retorne o nome do cliente mais velho.

Lembre-se de usar o objeto cliente e sua propriedade idade para comparar as idades dos clientes.Se houver mais de um cliente com a mesma 
idade máxima, retorne apenas o nome do primeiro cliente encontrado.*/



const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

const cliente2 = {
  nome: "Maria",
  idade: 28,
  email: "maria@firma.com",
  telefone: ["1166666666", "1177777777"],
};

const cliente3 = {
  nome: "Pedro",
  idade: 26,
  email: "pedro@firma.com",
  telefone: ["1188888888", "1199999999"],
};

const clientes = [cliente, cliente2, cliente3];

function encontrarClienteMaisVelho(clientes) {
  let clienteMaisVelho = clientes[0];

  for (let i = 1; i < clientes.length; i++) {
    if (clientes[i].idade > clienteMaisVelho.idade) {
      clienteMaisVelho = clientes[i];
    }
  }

  return clienteMaisVelho.nome;
}

const nomeClienteMaisVelho = encontrarClienteMaisVelho(clientes);
console.log(nomeClienteMaisVelho);
