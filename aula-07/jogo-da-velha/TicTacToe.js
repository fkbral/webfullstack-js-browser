export class TicTacToe {
  #view

  constructor() {
    this.cells = []
    this.nextPlayValue = "O"
    this.gameOver = false
    this.#view = document.querySelector('[data-tictactoe-container]')
    this.#setButtonEventListeners()
  }

  #setButtonEventListeners() {
    console.log(this.#view)
    // procurando botão com data-tictactoe-cell dentro do container
    const cellButtons = this.#view.querySelectorAll('')
    cellButtons.onclick = function(event) {
      
    }
  }
}

class TicTacToeCell {
  constructor(value) {
    this.value = value
  }
}