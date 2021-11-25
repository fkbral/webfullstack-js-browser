import { FavoritesList } from './List.js'

const newSkillForm = document.querySelector('[data-skill-form]')
const newSkillInput = document.querySelector('#skill')
const skillsUL = document.querySelector('#to-learn')
const templateLi = document.querySelector('[data-skill-template]')

let skills

loadSkillsFromLocalStorage()

function loadSkillsFromLocalStorage() {
  const localStorageSkills = JSON.parse(
    localStorage.getItem('skills')
  )

  skills = localStorageSkills ? localStorageSkills : []
  new FavoritesList(skills)
}

newSkillForm.onsubmit = function(event) {
  event.preventDefault()
  
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

  renderSkillLi(skill)
  saveSkill(skill)
}