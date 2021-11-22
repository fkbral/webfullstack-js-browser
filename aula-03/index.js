// tente ao máximo referenciar apenas data-attributes ou ids
// quando selecionamos elementos com querySelector

const newSkillForm = document.querySelector('[data-skill-form]')
const newSkillInput = document.querySelector('#skill')
const skillsUL = document.querySelector('#to-learn')
let skills

loadSkillsFromLocalStorage()

function loadSkillsFromLocalStorage() {
  const localStorageSkills = JSON.parse(
    localStorage.getItem('skills')
  )

  skills = localStorageSkills ? localStorageSkills : []
  skills.forEach(skill => renderSkillLi(skill))
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

  if (!skill) {
    newSkillInput.value = ""
    return
  }

  if (skills.includes(skill)) {
    return
  }

  renderSkillLi(skill)
  saveSkill(skill)
}

function renderSkillLi(skill) {
  const li = document.createElement('li')
  const textSpan = document.createElement('span')

  // textSpan.classList.add('done')
  // textSpan.classList.toggle('done')

  textSpan.innerText = skill.name

  const removeButton = document.createElement('button')
  removeButton.innerText = 'remover'

  removeButton.onclick = function() {
    skillsUL.removeChild(li)
    deleteSkill(skill)
  }

  li.append(textSpan)
  li.append(removeButton)

  skillsUL.append(li)
}

function saveSkill(skill) {
  skills.push(skill)
  localStorage.setItem('skills', JSON.stringify(skills))
  newSkillInput.value = ""
}

function deleteSkill(skillToDelete) {
  skills = skills.filter(skill => skill.name !== skillToDelete.name)
  localStorage.setItem('skills', JSON.stringify(skills))
}