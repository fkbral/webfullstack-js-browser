import { FavoritesList } from './List.js'

const newSkillForm = document.querySelector('[data-skill-form]')
const newSkillInput = document.querySelector('#skill')

let favoriteLists = []

export const localStorageFavoritesListsKey = 'favorites-lists'

loadListsFromLocalStorage()

function loadListsFromLocalStorage() {
  const localStorageLists = JSON.parse(
    localStorage.getItem(localStorageFavoritesListsKey)
  ) ?? []

  localStorageLists.forEach(localStorageList => {
    console.log(localStorageList)
    favoriteLists.push(new FavoritesList(localStorageList.name, localStorageList.items ?? []))
  })


  if(localStorageLists.length === 0){
    favoriteLists.push(new FavoritesList('Lista de compras', []))
    favoriteLists.push(new FavoritesList('Lista de favoritos', []))

    const newFavoriteLists = [
      {
        name: 'Lista de compras',
        items: []
      },
      {
        name: 'Lista de favoritos',
        items: []
      }
    ]

    localStorage.setItem(localStorageFavoritesListsKey, JSON.stringify(
      newFavoriteLists
    ))
  }
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