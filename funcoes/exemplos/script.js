/* Bloco de código que pode ser executado e reutilizado.
 Valores podem ser passados por uma função e a mesma retorna outro valor. */

// Declaração

/*
  Funções anônimas são aquelas em que o nome da função não é definido
*/
// function(){
//  console.log('estou executando alguma coisa')
// }

// Funções Literal
function mostrarMensagem() {
  console.log("Seja bem vindo");
}

// Váriaveis podem receber funções
const soma = function (a, b) {
  return a + b;
};

console.log(soma(10, 10));

// Arrow Function
const sub = (a, b) => {
  return a - b;
};

// Parênteses executa a função
console.log(soma(10, 20));
console.log(soma(10, 10));

/*
  Parâmetros e argumentos
  Ao criar uma função, você pode definir parâmetros.
  Ao executar uma função, você pode passar argumentos.
*/

const gorjetaDoGarcom = (valorJantar, porcetagem) => {
  const gorjeta = valorJantar * (porcetagem / 100);
  return gorjeta;
};

console.log(gorjetaDoGarcom(100, 10));
console.log(gorjetaDoGarcom(250, 15));

/*
    Pode ou não retornar um valor
    Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
*/

const imc = (peso, altura) => {
  const imc = peso / altura ** 2;
  console.log(imc);
};

console.log(imc(90, 1.65));

/* 
  Valores retornados 
  Uma função pode retornar qualquer tipo de dado e até outras funções.
  Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.
 */

const pagamento = (tipo, total, valorRecebido) => {
  switch (tipo) {
    case "cheque":
      return "Não trabalhamos com cheque";
      break;
    case "cartao":
      return true;
      break;
    case "moeda":
      return false;
    case "dinheiro":
      troco(total, valorRecebido);
      break;
    default:
      return "Opção invalida";
  }
};

/* 
  Escopo
  Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
  Funções conseguem acessar variáveis que foram criadas no contexto pai
*/

// escopo global
let calcular = 0;

const multi = (x, z) => {
  // escopo local
  let calcular = x * z;
  console.log(calcular);
};

console.log(multi(10, 10));

console.log(calcular);

/* 
  Hoisting
  Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
*/
console.log(comidaFavorita("pudim"));

// function comidaFavorita(comida){
//   return `sua comida favorita é ${comida}`
// }

const comidaFavorita = (comida) => {
  return `sua comida favorita é ${comida}`;
};

/*
    Funções
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es#:~:text=A%20defini%C3%A7%C3%A3o%20da%20fun%C3%A7%C3%A3o%20(tamb%C3%A9m,fun%C3%A7%C3%A3o%2C%20entre%20chaves%20%7B%20%7D%20.

    Hoisting
    https://developer.mozilla.org/pt-BR/docs/Glossario/Hoisting

    Escopo Léxico
    https://www.youtube.com/watch?v=fNWOcDCO4sQ

    Arrow Functions
    https://www.youtube.com/watch?v=lQ-EfZwtOp4
  
*/
