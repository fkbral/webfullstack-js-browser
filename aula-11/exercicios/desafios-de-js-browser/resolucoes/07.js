const containerLi7 = document.querySelector('#challenge-seven')
const checkboxColorizeBg = containerLi7.querySelector('#checkbox-color')
// const checkboxColorizeBg = containerLi7.querySelector('input[type="checkbox"]')

// maneira alternativa
function handleColorizeBg(event) {
  if (event.target.checked) {
    document.body.style.backgroundColor = "cornflowerblue"
    return
  }

  document.body.style.backgroundColor = "#333"
}

checkboxColorizeBg.onchange = handleColorizeBg