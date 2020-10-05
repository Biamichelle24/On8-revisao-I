/*
  createElement() 
   - Cria elementos HTML no DOM
*/

 const titulo = document.createElement('h1')
 titulo.innerText = 'É meu titulo bonitão'

const div = document.createElement('div')

/*

  appendChild()
   - Adiciona apenas elementos HTML no final da lista de elementos de um "nó pai" especificado
   
  Obs: Aceita apenas um elemento como argumento e retorna o nó criado.

*/
 const main = document.querySelector('.root')
 main.appendChild(titulo)
 main.appendChild(div)

/*
  append() 
    - Adiciona elementos HTML e texto no DOM.

  Obs: Aceita mais de um elemento como argumento e retorna undefined
*/

main.append(titulo, div)
