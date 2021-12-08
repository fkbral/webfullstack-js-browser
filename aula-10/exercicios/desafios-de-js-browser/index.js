//exercício 1
const containerLi1 = document.querySelector('#challenge-one')
const duplicateButton = containerLi1.querySelector('[data-duplicate-button]')
const originalTextP = containerLi1.querySelector('[data-text-duplicate]')

// solução sem clonar elementos
// duplicateButton.addEventListener('click', function() {})
// duplicateButton.onclick = function() {
//   const newTextP = document.createElement('p')
//   newTextP.innerText = originalTextP.innerText
  
//   containerLi1.appendChild(newTextP)
// }

// // solução com cloneNode

function handleDuplicateParagraph(event) {
  const newTextP = originalTextP.cloneNode(true)
  containerLi1.appendChild(newTextP)
}

// duplicateButton.onclick = handleDuplicateParagraph
// duplicateButton.addEventListener('click', handleDuplicateParagraph)