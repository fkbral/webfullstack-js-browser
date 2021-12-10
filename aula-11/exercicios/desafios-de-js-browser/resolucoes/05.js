// - tamanho: 2.2rem (22px)
// - decorado com underline (text-decoration: undeline)
// - cor de fundo: violet
// - cor do texto: white
// - padding: 0.4rem 1.2rem

const containerLi5 = document.querySelector('#challenge-five')
const stylizeButton = containerLi5.querySelector('button')
const textParagraph = containerLi5.querySelector('p')


function handleStylizeParagraph(event) {
  // if(stylizeButton.innerText === 'Estilizar') {
  //   textParagraph.style.backgroundColor = 'violet'
  //   textParagraph.style.color = 'white'
  //   textParagraph.style.textDecoration = 'undeline'
  //   textParagraph.style.fontSize = '2.2rem'
  //   textParagraph.style.padding = '0.4rem 1.2rem'
    
  //   stylizeButton.innerText = 'Tirar estilos'
  //   textParagraph.innerText = 'Me deixe sem estilo'

  //   return
  // }
  // textParagraph.style.all = "initial"
  textParagraph.classList.toggle('stylized-button-challenge-5')

  if (textParagraph.classList.contains('stylized-button-challenge-5')) {
    stylizeButton.innerText = 'Tirar estilos'
    textParagraph.innerText = 'Me deixe sem estilo'

    return
  }

  stylizeButton.innerText = 'Estilizar'
  textParagraph.innerText = 'Me deixe estilizado'
}

stylizeButton.onclick = handleStylizeParagraph