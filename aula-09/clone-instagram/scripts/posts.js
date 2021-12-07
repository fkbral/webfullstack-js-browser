import { 
  profilePicturesArrayData,
  photoGalleryContainer,
  profileCommomData,
} from "./index.js"

profilePicturesArrayData.forEach(profilePictureData => {
  const profilePictureTemplate = document.querySelector('[data-profile-picture-template]')
  const profilePictureContainer = profilePictureTemplate.content.cloneNode(true)

  const avatar = profilePictureContainer.querySelector('[data-profile-avatar]')
  avatar.src = profileCommomData.avatarUrl
  avatar.width = '48'
  avatar.height = '48'
  avatar.alt = profileCommomData.userName

  // avatar.setAttribute('src', profileCommomData.avatarUrl)
  // avatar.setAttribute('width', '48')
  // avatar.setAttribute('height', '48')

  const profileUserName = profilePictureContainer.querySelector('h2')
  profileUserName.innerText = profileCommomData.userName

  const photo = profilePictureContainer.querySelector('[data-profile-photo]')
  photo.src = profilePictureData.photoUrl

  const legend = profilePictureContainer.querySelector('legend')
  legend.innerText = profilePictureData.description

  const likes = profilePictureContainer.querySelector('[data-like-count]')
  likes.innerText = profilePictureData.likes

  profilePictureContainer
  .querySelector('[data-profile-picture-container]')
  .setAttribute('id', profilePictureData.id) 

  photoGalleryContainer.appendChild(profilePictureContainer)
})

// profilePicturesArrayData.forEach(profilePictureData => {
//   const profilePhotoImg = document.createElement('img')
//   profilePhotoImg.src = profilePictureData.photoUrl
//   profilePhotoImg.alt = profilePictureData.description

//   const profilePhotoText = document.createElement('p')
//   profilePhotoText.innerText = profilePictureData.description
//   // profilephotoImg.width = '200'
//   // profilephotoImg.style.maxWidth = '100%'
  
//   photoGalleryContainer.appendChild(profilePhotoImg)
//   photoGalleryContainer.appendChild(profilePhotoText)
// })