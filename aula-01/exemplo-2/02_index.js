const listaDeAprendizadosUl = document.querySelector("#to-learn")

const materias = ["CSS", "JavaScript", "React"]

materias.forEach(materia => {
  const novaMateria = document.createElement('li')
  novaMateria.innerText = materia
  listaDeAprendizadosUl.append(novaMateria)
  console.log(novaMateria)
})
