const themeCheckbox = document.querySelector('#theme-checkbox')

themeCheckbox.onchange = function(event) {
  if(!event.target.checked) {
    document.body.style.setProperty("--body-background-color", "white")
    document.body.style.setProperty("--body-text-color", "#000")

    // document.body.style.backgroundColor = "white"
    // document.body.style.color = "#000"
    return
  }

  document.body.style.setProperty("--body-background-color", "#333")
  document.body.style.setProperty("--body-text-color", "#dedede")

  // document.body.style.backgroundColor = "#333"
  // document.body.style.color = "#dedede"
}