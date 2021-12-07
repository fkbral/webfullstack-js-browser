import { 
  profilePicturesArrayData,
  profileCommomData,
} from "./index.js"

const photosThumbnailContainer = document.querySelector('[data-gallery-thumbnails]')
setupProfile()

function setupProfile() {
  const profilePictureTemplate = document.querySelector('[data-profile-info-template]')
  const profilePictureContainer = profilePictureTemplate.content.cloneNode(true)
  const profileContainer = document.querySelector('[data-profile-info]')

  const avatar = profilePictureContainer.querySelector('[data-profile-avatar]')
  avatar.src = profileCommomData.avatarUrl
  avatar.width = '48'
  avatar.height = '48'
  avatar.alt = profileCommomData.userName

  const profileUserName = profilePictureContainer.querySelector('h2')
  profileUserName.innerText = profileCommomData.userName

  profileContainer.appendChild(profilePictureContainer)
}

profilePicturesArrayData.forEach(profilePictureData => {
  const a = document.createElement('a')
  const img = document.createElement('img')
  a.href = `posts.html#${profilePictureData.id}`
  img.src = profilePictureData.photoUrl
  img.alt = profilePictureData.description

  // img.onclick = function() {
  //   console.log(window.location)
  //   window.location = `posts.html#${profilePictureData.id}`
  // }

  a.appendChild(img)

  photosThumbnailContainer.appendChild(a)
})
