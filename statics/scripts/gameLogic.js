export class GameBoard {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.initBoard()
    }

    initBoard() {
        this.currentPlayer = this.player1
        this.filledSquares = 0
        this.tie = false
        this.winner = null
        this.board = Array(3)
        for (let row = 0; row < this.board.length; row++) {
            this.board[row] = Array(3).fill(null)
        }
    }

    mark(row, col) {
        if (this.winner || this.board[row][col]) return this.board[row][col]
        this.board[row][col] = this.currentPlayer.marker;
        this.currentPlayer = (this.currentPlayer === this.player1) ? this.player2 : this.player1
        this.filledSquares += 1
        this.calculateWinner()
        return this.board[row][col]
    }

    calculateWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
                this.winner = (this.player1.marker === this.board[i][0]) ? this.player1 : this.player2;
                return this.winner;
            }
            if (this.board[0][i] && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i]) {
                this.winner = (this.player1.marker === this.board[0][i]) ? this.player1 : this.player2;
                return this.winner;
            }
        }

        if (this.board[0][0] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
            this.winner = (this.player1.marker === this.board[0][0]) ? this.player1 : this.player2;
            return this.winner;
        }

        if (this.board[0][2] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
            this.winner = (this.player1.marker === this.board[0][2]) ? this.player1 : this.player2;
            return this.winner;
        }

        if (this.filledSquares === 9) this.tie = true;
        return null;
    }

    clearBoard() {
        this.initBoard()
        this.winner = null
    }
}

export class Player {
    constructor(name, marker) {
        this.name = name
        this.marker = marker
    }
}