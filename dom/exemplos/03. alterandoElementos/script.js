/*
   element.innerText
    - Apenas o conteúdo textual do elemento, ignorando HTML
*/
// const titulo = document.querySelector('#titulo');

// titulo.innerText = 'Esse titulo foi modificado pelo JavaScript'

// titulo.textContent = 'Titulo foi alterado pelo textContent'

/*
   innerText vs textContent
*/
// const botao = document.querySelector('.desativado')
// console.log(botao)
// console.log(botao.innerText)
// console.log(botao.textContent)

/*
  
  element.innerHTML 
   - HTML presente dentro do elemento
  
*/
const main = document.querySelector(".root");
const paragrafo = document.createElement("p");
paragrafo.innerText = "Fui criado pelo create";

// main.appendChild(paragrafo)

// main.innerHTML = '<p>Fui criado pelo innerHTML</p>'

/*
   element.setAttributes
   element.removeAttribute
   - Atributos HTML do elemento

*/

// const img = document.querySelector('img')

// img.src = "./pudim.webp"

const img = document.createElement("img");
img.setAttribute("src", "./pudim.webp");
img.setAttribute("alt", "uma foto de pudim gostoso");
main.appendChild(img);
img.removeAttribute("alt");

// main.innerHTML = '<img src="./pudim.webp" alt="uma foto de pudim">'

/*
   element.style.propriedade
   - Estilo de um elemento
*/

// main.style.margin = "10px";
// main.style.backgroundColor = "red"
// main.style.color = 'white'


/*
  element.classList
    add - adiciona uma classe ao elemento
    remove - remove uma classe do elemento
    toggle - Caso a classe exista, toggle irá remover a classe. Caso não exista, irá adicionar a classe.

*/

const botao = document.querySelector('button')

// botao.classList.add('ativo')
// botao.classList.remove('ativo')

botao.classList.toggle('ativo')