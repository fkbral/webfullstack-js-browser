console.log('executando script')

const listaDeAprendizadosUl = document.querySelector("#to-learn")

const novaMateria = document.createElement('li')
novaMateria.innerText = "CSS"

listaDeAprendizadosUl.append(novaMateria)

console.log(novaMateria)