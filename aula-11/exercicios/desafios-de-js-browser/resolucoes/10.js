const containerLi10 = document.querySelector('#challenge-ten')
const increaseCountButton = containerLi10.querySelector('[data-increase-count]')
const decreaseCountButton = containerLi10.querySelector('[data-decrease-count]')
const countStrong = containerLi10.querySelector('[data-count]')
let count = 0

increaseCountButton.onclick = function() {
  count += 1
  countStrong.innerText = count
}

decreaseCountButton.onclick = function() {
  if (count === 0) {
    return
  }
  
  count -= 1
  countStrong.innerText = count
}