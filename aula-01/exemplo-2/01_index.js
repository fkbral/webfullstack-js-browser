console.log('executando script')

const listaDeAprendizadosUl = document.querySelector("#to-learn")

const novaMateria = document.createElement('li')
novaMateria.innerText = "CSS"

const novaMateria2 = document.createElement('li')
novaMateria2.innerText = "JS"

const novaMateria3 = document.createElement('li')
novaMateria3.innerText = "React"

listaDeAprendizadosUl.append(novaMateria)
listaDeAprendizadosUl.append(novaMateria2)
listaDeAprendizadosUl.append(novaMateria3)

console.log(novaMateria)
console.log(novaMateria2)
console.log(novaMateria3)