export class TicTacToe {
  #view

  constructor() {
    this.cells = []
    this.nextPlayValue = "O"
    this.gameOver = false
    this.#view = document.querySelector('[data-tictactoe-container]')
  }

  addNextPlayValue() {
    console.log(this.#view)
    // procurando botão com data-tictactoe-cell dentro do container
    const cellButtons = this.#view.querySelectorAll('')
  }
}

class TicTacToeCell {
  constructor(value) {
    this.value = value
  }
}