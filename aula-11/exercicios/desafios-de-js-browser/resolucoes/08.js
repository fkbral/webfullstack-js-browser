const containerLi8 = document.querySelector('#challenge-eight')
const checkboxColorizeBg = containerLi8.querySelector('#color-picker')

function handleColorizeBgByPickedColor(event) {
  const color = event.target.value

  document.body.style.backgroundColor = color
}

checkboxColorizeBg.onchange = handleColorizeBgByPickedColor