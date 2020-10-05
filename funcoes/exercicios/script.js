/*
  1.Crie uma Função chamada “fruta”. Esta função deve receber nome de uma fruta como parametro da função.
      Caso a fruta passada por parametro for maçã retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções e verifique o console do seu navegador. Crie também um default, que retornará uma mensagem de erro no console.
*/

const fruta = prompt("Digite aqui sua fruta desejada")

function receberFruta(fruta) {
  switch (fruta) {
    case "kiwi":
      alert("Estamos com escassez de kiwis");
      break;
    case "melancia":
      alert("Aqui está, são 3 reais o quilo");
      break;
    case "maçã":
      alert("Não vendemos esta fruta aqui");
    default:
      alert("Opção invalida");
  }
}

console.log(receberFruta("laranja"));
console.log(receberFruta(fruta));

/* 
  2.  Crie uma função com as seguintes características:
      1. A função deve receber 3 parametros;
      2. Se qualquer um dos três parametros não estiverem preenchidos, a função deve retornar a string:
          Preencha todos os valores corretamente!
      3. O retorno da função deve ser a multiplicação dos 3 parametros, somando `2` ao resultado da multiplicação.
 */

const multi = (a, b, c) => {
  if (a === undefined || b === undefined || c === undefined) {
    return "Preencha todos os valores corretamente!";
  }
    return a * b * c + 2;

};

console.log(multi(2, 3, 2));

/* 
  3. Crie uma função que receba três numeros por parametros e retorne o maior deles, caso os números sejam iguais retorne a string "Todos os números são iguais".
*/

function maiorNumero(a, b, c) {
  if (a === undefined || b === undefined || c === undefined) {
   return "Preencha todos os valores corretamente!";
  }

  // if (a > b && a > c) {
  //   return a;
  // } else if (b > a && b > c) {
  //   return b;
  // } else if (c > a && c > b) {
  //   return c;
  // } else {
  //   return "todos os números são iguais";
  // }
  // OU
  return Math.max(a, b, c)
}

console.log(maiorNumero(150, 100, 65));

/*
 4. Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const comida = ['macarrao', 'batata frita', 'pizza', 'salame', 'cuscuz']
const indice = 2
console.log(comida[2])

function indiceArray(arrayDeComida, indice){
   return arrayDeComida[indice]
}

console.log(indiceArray(comida, indice))