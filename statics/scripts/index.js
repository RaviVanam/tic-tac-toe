import { GameBoard, Player } from "./gameLogic.js";

const squares = Array(9).fill(null)
const playAgainButton = document.querySelector(".play-again")
const status = document.querySelector(".status")

document.querySelectorAll(".square").forEach((element, i) => {
    element.addEventListener('click', markSquare)
    squares[i] = element
})
playAgainButton.addEventListener('click', playAgain)

function markSquare(e) {
    if (!gb.winner && e.target.textContent === "") {
        const item = e.target.dataset.item
        e.target.textContent = gb.mark(Math.floor(item / 3), item % 3)
        if (gb.tie) return status.textContent = `It's a tie`
        if (gb.winner) status.textContent = `${gb.winner.name} won`
        else status.textContent = `${gb.currentPlayer.name}'s Turn`
    }
}

function playAgain() {
    gb.clearBoard()
    squares.forEach(e => e.textContent = "")
    status.textContent = `${gb.currentPlayer.name}'s Turn`
}

// creating players
const p1 = new Player("Player 1", "X")
const p2 = new Player("Player 2", "O")

const gb = new GameBoard(p1, p2)
status.textContent = `${p1.name}'s Turn`
// const gb = new GameBoard(p1, p2)
// gb.mark(1, 1)
// gb.mark(2, 1)
// gb.mark(2, 2)
// gb.mark(0, 2)
// gb.mark(0, 0)
// gb.mark(1, 2)
// gb.mark(1, 0)

// console.log(gb.board)
// console.log(gb.winner)