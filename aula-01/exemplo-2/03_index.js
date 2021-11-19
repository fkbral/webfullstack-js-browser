const listaDeAprendizadosUl = document.querySelector("#to-learn")
let deveContinuar = true
const materias = []

function incluiMateriaNaLista() {
  const materia = prompt(
    'Entre com o nome da matéria ou digite um valor vazio para parar'
  )

  if (!materia) {
    deveContinuar = false
    return
  }

  materias.push(materia) 
}

while (deveContinuar) {
 incluiMateriaNaLista()
}

materias.forEach(materia => {
  const novaMateria = document.createElement('li')
  novaMateria.innerText = materia
  listaDeAprendizadosUl.append(novaMateria)
  console.log(novaMateria)
})
