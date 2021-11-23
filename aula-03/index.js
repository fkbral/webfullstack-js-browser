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
  
  textSpan.innerText = skill.name

  const removeButton = document.createElement('button')
  removeButton.innerText = 'remover'

  const completeButton = document.createElement('button')
  completeButton.innerText = 'completar'

  if (skill.done) {
    textSpan.classList.add('done')
    completeButton.innerText = 'desmarcar'
  }

  removeButton.onclick = () => handleDeleteButton(li, skill)
  completeButton.onclick = (event) => handleCompleteButton(event, skill, textSpan)

  li.append(textSpan)
  li.append(removeButton)
  li.append(completeButton)

  skillsUL.append(li)
}

function handleDeleteButton(li, skill) {
  // da mesma forma que querySelector pesquisa filhos de um elemento,
  // closest pesquisa o pai mais próximo que satisfaz o seletor css
  // skillsUL.removeChild(event.target.parentElement)
  // skillsUL.removeChild(event.target.closest('li'))
  skillsUL.removeChild(li)
  deleteSkill(skill)
}

function handleCompleteButton(event, skill, textSpan) {
  // if (textSpan.classList.contains('done')) {
    //   textSpan.classList.remove('done')
    //   return
    // }
    // textSpan.classList.add('done')
    // tudo isto acima pode ser substituído por uma única linha utilizando toggle
    textSpan.classList.toggle('done')

    event.target.innerText = 
      textSpan.classList.contains('done')
      ? 'desmarcar'
      : 'completar'

    skill.done = !skill.done
    updateSkill(skill)
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

function updateSkill(skillToUpdate) {
  skills = skills.map(skill => {
    if (skill.name === skillToUpdate.name) {
      return skillToUpdate
    }
    return skill
  })

  localStorage.setItem('skills', JSON.stringify(skills))
}