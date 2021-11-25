export class FavoritesList {
  #elements
  #view

  constructor(storedElements) {
    this.#elements = storedElements ?? []
    this.#view = this.#generateView()
  }

  #generateView() {
    const viewContainer = document.querySelector('[data-favorites-lists-container]')

    const section = document.createElement('section')
    const h2 = document.createElement('h2')
    const ul = document.createElement('ul')
    h2.innerText = 'Lista nova'
    ul.innerText = 'teste'

    section.appendChild(h2)
    section.appendChild(ul)
    viewContainer.appendChild(section)
  }

  #addElement() {
    // const viewTemplate = document.querySelector('[data-skill-template]')

    // viewContainer.appendChild(viewTemplate.content)
  }

  #aImplementar() {
     // skillsContainer.appendChild(clonedTemplate)
  
    // const li = skillsContainer.querySelector('li:last-child')
    // const textSpan = li.querySelector('span')
    // const removeButton = li.querySelector('button')
    // const completeButton = li.querySelector('button')
  
    // textSpan.innerText = skill.name
  
    // if (skill.done) {
    //   // textSpan.classList.add('done')
    //   textSpan.dataset.done = ''
    //   textSpan.dataset.skillName = skill.name
    //   console.log(textSpan.dataset)
    //   completeButton.innerText = 'desmarcar'
    // }
  
    // removeButton.onclick = () => handleDeleteButton(li, skill)
    // completeButton.onclick = (event) => handleCompleteButton(event, skill, textSpan)
  }
}