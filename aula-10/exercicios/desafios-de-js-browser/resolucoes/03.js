const containerLi3 = document.querySelector('#challenge-three')

const colorizeButton = containerLi3.querySelector('button')
const textToColorizeP = containerLi3.querySelector('p')

colorizeButton.onclick = function() {
  textToColorizeP.style.color = 'steelblue'
  // textToColorizeP.style.backgroundColor = 'red'
}