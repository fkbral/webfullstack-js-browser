import { localStorageFavoritesListPreffixKey, localStorageFavoritesListsIdsKey } from "./index.js"

export class FavoritesList {
  #items
  #view
  #localStorageId

  constructor(name, storedElements) {
    this.name = name
    this.id = name
    this.#localStorageId = `${localStorageFavoritesListPreffixKey}-${this.name}`
    this.#items = storedElements ?? []
    this.#view = this.#generateView()
    this.#renderItems(storedElements)
  }

  #generateView() {
    const listsContainer = document.querySelector('[data-favorites-lists-container]')
    const viewTemplate = document.querySelector('[data-favorites-list-template]')
    listsContainer.appendChild(viewTemplate.content.cloneNode(true))
    const section = listsContainer.querySelector('section:last-child')

    const deleteListButton = section.querySelector('[data-favorites-list-delete-list]')
    deleteListButton.dataset.favoriteListId = this.id

    deleteListButton.onclick = (event) => {
      listsContainer.removeChild(section)
      localStorage.removeItem(this.#localStorageId)

      const localStorageIds = JSON.parse(localStorage.getItem(
        localStorageFavoritesListsIdsKey
      ))

      const updatedFavoriteListsIds = localStorageIds.filter(
        listId => listId !== this.id
      )

      localStorage.setItem(
        localStorageFavoritesListsIdsKey, JSON.stringify(updatedFavoriteListsIds)
      )
    }

    const h2 = section.querySelector('h2')
    h2.innerText = this.name

    listsContainer.appendChild(section)

    return section
  }

  addItem(item) {
    this.#renderItem(item)
    this.#saveItem(item)
  }

  #renderItem(item) {
    const listTemplate = document.querySelector('[data-favorites-list-item-template]')
    this.#view.appendChild(listTemplate.content.cloneNode(true))
    const listLi = this.#view.querySelector('li:last-child')

    const span = listLi.querySelector('span')
    span.innerText = item.name

    const removeButton = listLi.querySelector('[data-remove-button]')
    const completeButton = listLi.querySelector('[data-complete-button]')
    if(item.done) {
      span.classList.add('done')
      completeButton.innerText = 'desmarcar'
    }

    removeButton.onclick = (event) => this.#handleRemoveItem(event, item)
    completeButton.onclick = (event) => this.#handleCompleteItem(event, item)    
  }

  #handleRemoveItem(event, item) {
    const li = event.target.closest('[data-favorite-list-container]')
    this.#view.removeChild(li)
    this.#deleteItem(item)
  }

  #handleCompleteItem(event, item) {
    const button = event.target
    const span = 
    button.closest('[data-favorite-list-container]').querySelector('span')
    
    span.classList.toggle('done')

    item.done = !item.done
    button.innerText = item.done ? 'desmarcar' : 'completar'

    this.#updateItem(item)
  }

  #renderItems(items) {
    items.forEach(item => this.#renderItem(item))
  }

  #updateLocalStorageList() {
    const favoriteListData = {
      id: this.id,
      name: this.name,
      items: this.#items
    }

    localStorage.setItem(this.#localStorageId, JSON.stringify(favoriteListData))
  }

  #saveItem(item) {
    this.#items.push(item)
    const newSkillInput = document.querySelector('input')
    newSkillInput.value = ""

    this.#updateLocalStorageList()
  }
  
  #deleteItem(itemToDelete) {
    this.#items = this.#items.filter(item => item.name !== itemToDelete.name)

    this.#updateLocalStorageList()
  }
  
  #updateItem(itemToUpdate) {
    this.#items = this.#items.map(item => {
      if (item.name === itemToUpdate.name) {
        return itemToUpdate
      }
      return item
    })
    
    this.#updateLocalStorageList()
  }
}