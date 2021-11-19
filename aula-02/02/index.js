// tente ao máximo referenciar apenas data-attributes ou ids
// quando selecionamos elementos com querySelector

const newSkillForm = document.querySelector('[data-skill-form]')
const newSkillInput = document.querySelector('#skill')
const skillsUL = document.querySelector('#to-learn')

const localStorageSkills = JSON.parse(
  localStorage.getItem('skills')
)
console.log(localStorageSkills)

const skills = localStorageSkills ? localStorageSkills : []

newSkillForm.onsubmit = function(event) {
  event.preventDefault()
  
  const trimmedSkillValue = newSkillInput.value.trim()
  
  const skillIsInAllCaps = 
  trimmedSkillValue === trimmedSkillValue.toUpperCase() 

  const skill = skillIsInAllCaps 
  ? trimmedSkillValue.toUpperCase()
  : trimmedSkillValue.toLowerCase()

  if (!skill) {
    newSkillInput.value = ""
    return
  }

  if (skills.includes(skill)) {
    return
  }
  createSkillLi(skill)
}

function createSkillLi(skill) {
  const li = document.createElement('li')
  li.innerText = skill

  skillsUL.append(li)

  skills.push(skill)
  
  localStorage.setItem('skills', JSON.stringify(skills))

  newSkillInput.value = ""
}