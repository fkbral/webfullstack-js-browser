const containerLi4 = document.querySelector('#challenge-four')

const stylizeButton = containerLi4.querySelector('button')
const textToStyleP = containerLi4.querySelector('p')

// stylizeButton.addEventListener('click', function() {
//   console.log('1')
// })

// stylizeButton.addEventListener('click', function() {
//   console.log('2')
// })

// stylizeButton.addEventListener('click', function() {
//   console.log('3')
// })

// stylizeButton.addEventListener('click', function() {
//   const isItalic = textToStyleP.style.fontStyle === 'italic'

//   if (!isItalic) {
//     textToStyleP.style.fontStyle = 'italic'
//     stylizeButton.innerText = 'Tornar normal'
//     return
//   }

//   textToStyleP.style.fontStyle = 'normal'
//   stylizeButton.innerText = 'Tornar itálico'
// })

stylizeButton.onclick = function() {
  const isItalic = textToStyleP.style.fontStyle === 'italic'

  if (!isItalic) {
    textToStyleP.style.fontStyle = 'italic'
    stylizeButton.innerText = 'Tornar normal'
    textToStyleP.innerText = 'Me deixe normal'
    return
  }

  textToStyleP.style.fontStyle = 'normal'
  stylizeButton.innerText = 'Tornar itálico'
  textToStyleP.innerText = 'Me deixe itálico'
}