import { GameBoard, Player } from "./gameLogic.js";

const squares = Array(9).fill(null)
const playAgainButton = document.querySelector(".play-again")
const status = document.querySelector(".status")

document.querySelectorAll(".square").forEach((element, i) => {
    element.addEventListener('click', markSquare)
    element.addEventListener('mouseover', showPotentialMark)
    element.addEventListener('mouseout', removePotentialMark)
    squares[i] = element
})
playAgainButton.addEventListener('click', playAgain)

function markSquare(e) {
    const item = e.target.dataset.item
    if (!gb.gameEnd && !gb.board[Math.floor(item / 3)][item % 3]) {
        const item = e.target.dataset.item
        e.target.textContent = gb.mark(Math.floor(item / 3), item % 3)
        // e.target.style.backgroundColor = "#D44000"
        if (gb.gameEnd) playAgainButton.style.display = "block"
        if (gb.tie) {
            status.style.color = "#D44000"
            return status.textContent = `It's a tie!`
        }
        if (gb.winner) {
            status.style.color = "#367E18"
            status.textContent = `${gb.winner.name} has won!`
        }
        else status.textContent = `${gb.currentPlayer.name}'s Turn`
        e.target.classList.remove("square-hover")
    }
}

function showPotentialMark(e) {
    const item = e.target.dataset.item
    if (!gb.gameEnd && !gb.board[Math.floor(item / 3)][item % 3]) {
        e.target.style.backgroundColor = "#54BAB9"
        e.target.textContent = gb.currentPlayer.marker;
        e.target.classList.add("square-hover")
    } else {
        e.target.style.backgroundColor = "#D44000"
    }
}

function removePotentialMark(e) {
    const item = e.target.dataset.item
    if (!gb.gameEnd && !gb.board[Math.floor(item / 3)][item % 3]) {
        e.target.textContent = "";
    }
    e.target.classList.remove("square-hover")
    e.target.style.backgroundColor = "#F8EDE3"
}

function playAgain() {
    gb.clearBoard()
    squares.forEach(e => e.textContent = "")
    status.textContent = `${gb.currentPlayer.name}'s Turn`
    status.style.color = "#6C4A4A"
    playAgainButton.style.display = "none"
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