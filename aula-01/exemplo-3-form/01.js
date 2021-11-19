const newSkillForm = document.querySelector('[data-skill-form]')
const newSkillInput = document.querySelector('#skill')
console.log(newSkillForm)

newSkillForm.onsubmit = function(event) {
  event.preventDefault()

  console.log(newSkillInput.value)
}