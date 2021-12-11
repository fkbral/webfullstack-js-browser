const containerLi9 = document.querySelector('#challenge-nine')
const form = containerLi9.querySelector('form')
const avatarUrlInput = containerLi9.querySelector('#avatar-url-input')
const photoContainer = containerLi9.querySelector('[data-photos-container]')

function addImageToPhotoContainer(event) {
  event.preventDefault()
  // const photoUrl = event.target.querySelector('#avatar-url-input').value
  const photoUrl = avatarUrlInput.value
  const img = document.createElement('img')
  img.src = photoUrl

  // limpando input de url
  avatarUrlInput.value = ""

  photoContainer.appendChild(img)
}

form.onsubmit = addImageToPhotoContainer