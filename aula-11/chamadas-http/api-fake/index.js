const apiBaseUrl = 'https://jsonplaceholder.typicode.com'

async function getUsers() {
  const response = await fetch(`${apiBaseUrl}/users`)
  const users = await response.json()
  // console.log(users)
}

async function getUserById(id) {
  const response = await fetch(`${apiBaseUrl}/users/${id}`)
  const user = await response.json()
  console.log(user) 
}

async function deleteUserById(id) {
  const response = await fetch(
    `${apiBaseUrl}/users/${id}`,
    { method: 'DELETE'}
  )
  const user = await response.json()
  console.log(user)
}

async function createUser(data) {
  const response = await fetch(
    `${apiBaseUrl}/users`,
    {
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'POST'
    }
  )
  const user = await response.json()
  console.log(user)
}

async function updateUser(data) {
  const response = await fetch(
    `${apiBaseUrl}/users/${data.id}`,
    {
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'PUT'
    }
  )
  const user = await response.json()
  console.log(user)
}

async function patchUser(data) {
  const response = await fetch(
    `${apiBaseUrl}/users/${data.id}`,
    {
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'PATCH'
    }
  )
  const user = await response.json()
  console.log(user)
}

getUsers()
getUserById(10)

createUser({
  name: 'João Rodrigues',
  username: 'jrods',
})

updateUser({
  id: 2,
  name: 'Joana Luque',
  username: 'juque',
})

patchUser({
  id: 10,
  username: 'CleDu',
})

deleteUserById(1)