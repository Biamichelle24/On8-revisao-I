/*
  TAG - getElementByTagName()
  Retorna uma HTMLCollection com os elementos encontrados
*/
const titulo = document.getElementsByTagName('h1')
const titulo2 = document.querySelector('h1')

console.log('Utilizando TagName', titulo)
console.log('Utilizando o ByName', titulo1)
console.log('Utilizando querySelector', titulo2)

console.log(titulo[3])

/*
  ID - getElementByID()
  Retorna o elemento com o ID Fornecido
*/

const paragrafo = document.getElementById("paragrafo");
const paragrafo1 = document.querySelector("#paragrafo");

console.log('Utilizando o getElementById,', paragrafo)
console.log('Utilizando o querySelector', paragrafo1)
/*
  Nome - getElementsByName()
  Retorna uma NodeList com todos elementos encontrados
*/
const inputTag = document.getElementsByTagName("input")
const input = document.getElementsByName("saudacao")

console.log("selecionando com name,", input)
console.log("selecionando com TagName", inputTag)

/*
  HTMLCollection vs NodeList
*/

const h1 = document.getElementsByTagName('h1')
console.log('antes de criar um novo h1', h1)

const h1QuerySelector = document.querySelectorAll('h1')
console.log('antes de criar um novo h1', h1QuerySelector)

const criandoH1 = document.createElement('h1')
criandoH1.innerText = 'novo titulo'
const body = document.querySelector('body')
body.appendChild(criandoH1)

console.log('---------------------------')
console.log('HTMLCollection', h1)
console.log('NodeList', h1QuerySelector )

 

/*
  ClassName - getElementByClassName()
  Retorna uma HTMLCollection com os elementos encontrados
*/

const paragrafo = document.getElementsByClassName('paragrafo2')

console.log(paragrafo)

/*
  Seletor 
  querySelector()
      - Retorna o primeiro elemento que encontrar
  
   querySelectorAll()
      - Retorna uma NodeList com todos os elementos encontrados 
  
   ** Sempre da prefêrencia utilizar este **
*/

const h1 = document.querySelector('h1')
const paragrafo = document.querySelector('.paragrafo2')
const paragrafo1 = document.querySelector('#paragrafo')

console.log(h1)
console.log(paragrafo)
console.log(paragrafo1)

const todosH1 = document.querySelectorAll(".titulo")

console.log(todosH1)

/*
  HTMLCollection
  https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCollection

  NodeList
  https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList

*/
