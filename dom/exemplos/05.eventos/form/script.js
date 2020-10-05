
const form = document.querySelector('form')

const saudacao = (event) =>{
  event.preventDefault()
 const div = document.createElement('div')

 const name = document.querySelector('input').value
 const lang = document.querySelector('#lang').value
 
 let message;

  if(lang === 'pt'){
    message = `Olá, ${name}!`
  } else if(lang === 'en'){
    message = `Hello ${name}`
  } else {
    message = `Hola ${name}`
   }

  div.innerText = message
 
  document.body.appendChild(div)

}

form.addEventListener('submit', saudacao)