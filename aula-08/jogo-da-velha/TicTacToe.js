export class TicTacToeBoard {
  #view
  #playersVictories
  #localStorageWinsKey = 'tictactoe-score'

  constructor() {
    this.cells = []
    this.nextPlayValue = "O"
    this.gameOver = false
    this.#view = document.querySelector('[data-tictactoe-container]')
    this.#playersVictories = this.#loadLocalStorageVictories()
    this.#setupCells()
    this.#updatePlayersVictories()
  }

  get playersVictories() {
    return this.#playersVictories
  }

  set playersVictories(wins) {
    const OPlayerVictoriesView = document.querySelector('[data-O-victories]')
    const XPlayerVictoriesView = document.querySelector('[data-X-victories]')

    OPlayerVictoriesView.innerText = wins["O"]
    XPlayerVictoriesView.innerText = wins["X"]

    this.#playersVictories = wins
    this.#saveVictoriesToLocalStorage()
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

  #loadLocalStorageVictories() {
    const score = JSON.parse(sessionStorage.getItem(this.#localStorageWinsKey)) 
      ?? {
        "O": 0,
        "X": 0,
      }

    return score
  }

  #saveVictoriesToLocalStorage() {
    sessionStorage.setItem(
      this.#localStorageWinsKey, JSON.stringify(this.playersVictories)
    )
  }

  #updatePlayersVictories() {
    const OPlayerVictoriesView = document.querySelector('[data-O-victories]')
    const XPlayerVictoriesView = document.querySelector('[data-X-victories]')

    OPlayerVictoriesView.innerText = this.#playersVictories["O"]
    XPlayerVictoriesView.innerText = this.#playersVictories["X"]
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
      // this.#updatePlayersVictories()
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
          const circlePlayerWins = cells.every(cell => cell.value === "O")
          const crossPlayerWins = cells.every(cell => cell.value === "X")

          this.gameOver = crossPlayerWins || circlePlayerWins

          if (circlePlayerWins) {
            this.playersVictories = {
              "O": this.playersVictories["O"] + 1,
              "X": this.playersVictories["X"],
            }
            return
          }

          if (crossPlayerWins) {
            this.playersVictories = {
              "O": this.playersVictories["O"],
              "X": this.playersVictories["X"] + 1,
            }
          }
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