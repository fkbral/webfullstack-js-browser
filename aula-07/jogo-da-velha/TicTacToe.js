export class TicTacToe {
  #view

  constructor() {
    this.cells = []
    this.nextPlayValue = "O"
    this.gameOver = false
    this.#view = document.querySelector('[data-tictactoe-container]')
    this.#setupCells()
  }

  #setupCells() {
    // procurando botão com data-tictactoe-cell dentro do container
    const cellButtons = this.#view.querySelectorAll('[data-tictactoe-cell]')
    const cellButtonsArray = [...cellButtons]
    const resetGameButton = this.#view.querySelector('[data-tictactoe-reset]')

    this.cells = cellButtonsArray.map(
      cellButton => new TicTacToeCell(cellButton, this)
    )

    resetGameButton.addEventListener('click', () => this.#reset())
  }

  #reset() {
    this.cells.forEach(cell => cell.value = "")
  }

  checkGameOver() {
    this.gameOver = this.cells.every(cell => cell.value)

    if(this.gameOver) {
      alert('Jogo finalizado')
    }
  }
}

class TicTacToeCell {
  #value
  #ticTacToeBoard

  constructor(view, board, value="") {
    this.#value = value
    this.view = view
    this.#ticTacToeBoard = board
    this.#setViewEventListener()
  }

  get value() {
    return this.#value
  }

  set value(nextPlayValue) {
    this.view.dataset.tictactoeCell = nextPlayValue
    this.view.innerText = nextPlayValue
    this.#value = nextPlayValue
  }

  #setViewEventListener() {
    this.view.onclick = () => {
      if(this.value) {
        return
      }

      this.value = this.#ticTacToeBoard.nextPlayValue
      
      this.#ticTacToeBoard.nextPlayValue = 
        this.#ticTacToeBoard.nextPlayValue === 'O' 
        ? 'X'
        : 'O'

      setTimeout(() => this.#ticTacToeBoard.checkGameOver(), 0)
    }
  }
}