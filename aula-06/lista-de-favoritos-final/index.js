import { FavoritesList } from './FavoritesList.js'

const newFavoritesListForm = document.querySelector('[data-new-favorites-list-form]')
const newFavoritesListNameInput = document.querySelector('#new-list-name')
const newSkillForm = document.querySelector('[data-new-favorites-list-item-form]')
const newSkillInput = document.querySelector('#skill')
const favoritesListsSelect = document.querySelector('[data-favorites-lists-select]')

let favoriteLists = []

export const localStorageFavoritesListsKey = 'favorites-lists'
export const localStorageFavoritesListPreffixKey = 'favorites-list'
export const localStorageFavoritesListsIdsKey = 'favorites-lists-ids'

loadListsFromLocalStorage()

function loadListsFromLocalStorage() {
  const localStorageLists = JSON.parse(
    localStorage.getItem(localStorageFavoritesListsKey)
  ) ?? []

  localStorageLists.forEach(localStorageList => {
    console.log(localStorageList)
    favoriteLists.push(new FavoritesList(localStorageList.name, localStorageList.items ?? []))
  })

  // favoritesListsSelect

  // criar um elemento option no meu código JS
  // atribuir ao valor da opção o nome da lista carregada
  // atribuir ao texto interior da opção o nome da lista carregada
  // incluir elemento option dentro do select existente

}

newSkillForm.onsubmit = function(event) {
  event.preventDefault()

  const selectedList = document.querySelector('select')
  const selectedListName = selectedList.value

  const favoriteList = favoriteLists.find(
    favoriteList => favoriteList.name === selectedListName
  )
  const skills = favoriteList.items ?? []
  
  const trimmedSkillValue = newSkillInput.value.trim()
  
  const skillIsInAllCaps = 
  trimmedSkillValue === trimmedSkillValue.toUpperCase() 

  const skillName = skillIsInAllCaps 
  ? trimmedSkillValue.toUpperCase()
  : trimmedSkillValue.toLowerCase()

  const skill = {
    name: skillName,
    done: false
  }

  if (!skillName) {
    newSkillInput.value = ""
    return
  }

  if (skills.find(
    skillTofind => 
    skillTofind.name === skillName.toLowerCase()
    || skillTofind.name === skillName.toUpperCase()
  )) {
    return
  }

  favoriteList.addItem(skill)
}

newFavoritesListForm.onsubmit = function(event) {
  event.preventDefault()
  const newListName = newFavoritesListNameInput.value.trim()

  if (!newListName) {
    newFavoritesListNameInput.value = ''
    return
  }

  const favoriteListData = {
    id: newListName,
    name: newListName,
    items: [],
  }

  const favoriteListIds = JSON.parse(localStorage.getItem(localStorageFavoritesListsIdsKey)) ?? []

  if(favoriteListIds.includes(newListName)) {
    return
  }

  favoriteListIds.push(favoriteListData.id)

  localStorage.setItem(localStorageFavoritesListsIdsKey, JSON.stringify(favoriteListIds))

  localStorage.setItem(
    `${localStorageFavoritesListPreffixKey}-${newListName}`, JSON.stringify(favoriteListData)
  )

  newFavoritesListNameInput.value = ''
}

