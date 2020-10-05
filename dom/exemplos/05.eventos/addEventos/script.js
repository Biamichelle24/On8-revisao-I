/* Declaração */

/*
  context.addEventListener(event, callback)
   - context: elemento no DOM
   - addEventListener: o ouvinte de eventos
   - event: o evento que ele espera que ocorra
   - callback: o que ele vai excutar quando o evento ocorrer

  Obs: event é passado automaticamente como argumento da callback chamada nos manipuladores de eventos para fornecer recursos e informações extras sobre os eventos que o usuário ativa.
*/

const btn = document.querySelector("#btnContar");
const paragrafo = document.querySelector("#contador");
let count = 0;

const contador = () => {
  count++;
  console.log(count);
  paragrafo.innerText = count;
};

btn.addEventListener("click", contador);

/*
  context.removeEventListener(event, callback)
   - context: elemento no DOM
   - addEventListener: o ouvinte de eventos
   - event: o evento que ele espera que ocorra
   - callback: o que ele vai excutar quando o evento ocorrer
*/

const façaAlgo = function(event){
   console.log(event.target)
}

btn.addEventListener("click", façaAlgo);
btn.removeEventListener('click', façaAlgo )
/* Exemplo de alguns eventos  */
/*
  click
*/
btn.addEventListener("click", contador);

/*
  Blur
*/
const input = document.querySelector("#nome")

const exibirNome = () =>{
 console.log(input.value)
}

input.addEventListener('blur', exibirNome)

/*
 Input
*/

const exibirNome = (e) =>{
 let value = e.target.value 
  console.log('chamou onChange', value) 
}

input.addEventListener('input', exibirNome) 


/*
    Events
    https://developer.mozilla.org/pt-BR/docs/Web/Events

    addEventListener
    https://developer.mozilla.org/pt-BR/docs/Web/API/Element/addEventListener

    CallBack
    https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function
*/
