/*
  Exercício 2
  -----------

  Liga e desliga

  1. selecione a imagem do documento. 
  2. selecione o body do documento. 
  3. crie a função "changeBg", essa função deve alterar o background do body quando o usuário clicar na imagem.
    
*/

const img = document.querySelector('img');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');

body.style.backgroundColor = "red";

function changeBg(){
  if(body.style.backgroundColor === 'red'){
    body.style.backgroundColor = 'green'
    h1.innerText = 'Ligado'
  } else {
    body.style.backgroundColor = "red";
    h1.innerText = 'Desligado'
  }
}

