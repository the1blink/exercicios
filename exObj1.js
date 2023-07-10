/* Enunciado:
Dado o objeto cliente que contém informações sobre um cliente, incluindo seu nome, idade, email, telefones e endereços, escreva um 
código JavaScript que verifique se o cliente possui algum endereço em um apartamento. O código deve retornar um valor booleano true se o 
cliente possuir pelo menos um endereço em um apartamento, ou false caso contrário.*/




const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "Carlos Maximano",
    num: 161,
    apartamento: true,
  },
];

cliente.enderecos.push({
  rua: "Visconde de Sepetiba",
  num: 269,
  apartamento: false,
});

function verificaApto(cliente) {
  for (let i = 0; i < cliente.enderecos.length; i++) {
    if (cliente.enderecos[i].apartamento === true) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(verificaApto(cliente));
