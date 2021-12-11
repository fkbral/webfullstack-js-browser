async function getCatRandomFact() {
  const response = await fetch('https://cat-fact.herokuapp.com/facts/random')
  const catFact = await response.json()
  // console.log(response)
  // console.log(catFact.text)
  document.querySelector('[data-cat-fact]').innerText = catFact.text
}

const button = document.querySelector('[data-get-new-cat-fact]')

button.onclick = getCatRandomFact

getCatRandomFact()