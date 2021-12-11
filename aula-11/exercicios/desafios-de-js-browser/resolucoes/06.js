const containerLi6 = document.querySelector('#challenge-six')
const form = containerLi6.querySelector('[data-spoof-form]')

// form.onsubmit = function(event) {
//   event.preventDefault()
// }

// maneira alternativa
function handleSubmitForm(event) {
  event.preventDefault()
  console.log(event.target.querySelector('input').value)
}

form.onsubmit = handleSubmitForm

//quando o onsubmit for executado, por debaixo dos panos no JavaScript
// acontecerá a passagem do parâmetro event ao executar a função definida
// handleSubmitForm(event)
