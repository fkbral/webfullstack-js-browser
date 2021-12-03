export class TicTacToeBoard {
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
    this.cells.forEach(cell => {
      this.nextPlayValue = "O"
      cell.value = ""
      cell.view.style.cursor = "pointer"
      cell.setViewEventListener()
    })
    // window.location = window.location
  }

  checkGameOver() {
    this.gameOver = this.cells.every(cell => cell.value)

    this.#checkVictory()

    if(this.gameOver) {
      this.disableAllCellsClickEvents()
      alert('Jogo finalizado')
    }
  }

  #checkVictory() {
    let rows = [ [], [], []]
    let columns = [[], [], []]
    let diagonals = [[], []]

    rows = rows.map((_, index) => {
      return [this.cells[index * 3], this.cells[index * 3 + 1], this.cells[index * 3 + 2]]
    })

    columns = columns.map((_, index) => {
      return [this.cells[index], this.cells[index + 3], this.cells[index + 6]]
    })

    diagonals = diagonals.map((_, index) => {
      return [
        this.cells[index * 2],
        this.cells[index * 2 + 4 - index * 2],
        this.cells[index * 2 + 8 - index * 4]
      ]
    })

    // diagonals = diagonals.map((_, index) => {
    //   if(index == 0) {
    //     return [
    //       this.cells[index],
    //       this.cells[index + 4],
    //       this.cells[index + 8]
    //     ]
    //   }

    //   return [
    //     this.cells[index * 2],
    //     this.cells[index * 2 + 2],
    //     this.cells[index * 2 + 4]
    //   ]
    // })

    const cellMatrix = [rows, columns, diagonals]

    cellMatrix.forEach(cellsArray => {
      cellsArray.forEach(cells => {
        if(!this.gameOver) {
            this.gameOver = 
            cells.every(cell => cell.value === "X") 
              || cells.every(cell => cell.value === "O")
          }
      })
    })
  }

  disableAllCellsClickEvents() {
    this.cells.forEach(cell => {
      cell.view.onclick = () => {}
      cell.view.style.cursor = "not-allowed"
      // cell.view.style.backgroundColor = "red"
    })
  }
}

class TicTacToeCell {
  #value
  #ticTacToeBoard

  constructor(view, board, value="") {
    this.#value = value
    this.view = view
    this.#ticTacToeBoard = board
    this.setViewEventListener()
  }

  get value() {
    return this.#value
  }

  set value(nextPlayValue) {
    this.view.dataset.tictactoeCell = nextPlayValue
    this.view.innerText = nextPlayValue
    this.#value = nextPlayValue
  }

  setViewEventListener() {
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