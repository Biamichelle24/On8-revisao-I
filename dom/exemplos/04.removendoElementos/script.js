/*
  element.removeChild(child) 
   - remove o filho do element especificado e retorna o child removido.
*/
const main = document.querySelector('.root')
const titulo = document.querySelector('#titulo')
main.removeChild(titulo)


/*
  child.remove() 
   - apenas remove o filho e retorna undefined
*/
const p = document.querySelector('p')
p.remove()