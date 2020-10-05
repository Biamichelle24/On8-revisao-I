/*
  Exercício 1
  -----------

  Lista de Sonhos

  1. selecione o input e o botão da página.
  2. crie uma função "addSonho" que adicione os valores inseridos no input dentro de uma div na página.
  3. adicione um observador de "click" no botão para executar a função addSonhos.

*/

//seu código vai aqui

const input = document.querySelector("input")

const botao = document.querySelector("button")

const addSonho = () =>{

  const body = document.querySelector("body")
  const div = document.createElement('div')

  body.appendChild(div)
  div.textContent = input.value

}
botao.addEventListener('click', addSonho)

// OU

const input = document.querySelector('#input');
const botaoAdd = document.querySelector('#add');

function addSonho() {
  const receberSonho = input.value;

  const div = document.createElement('div');
  div.innerText = receberSonho;
  
  const lista = document.querySelector('#lista');
  lista.appendChild(div);

  input.value = '';
}

botaoAdd.addEventListener('click', addSonho)



