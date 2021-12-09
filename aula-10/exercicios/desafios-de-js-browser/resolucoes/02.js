//exercício 2

const containerLi2 = document.querySelector('#challenge-two')
const deleteButton = containerLi2.querySelector('[data-delete-button]')

deleteButton.onclick = function() {
  const deleteP = containerLi2.querySelector('[data-text-delete]')

  if(!deleteP) {
    return
  }
  
  // containerLi2.removeChild(deleteP)
  deleteP.remove()
}