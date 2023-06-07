class TicTacToeGame {
    winningLines = [
        // winning horizontal rows
        [0, 0, 0, 1, 0, 2],
        [1, 0, 1, 1, 1, 2],
        [2, 0, 2, 1, 2, 2],

        // winning vertical columns rows
        [0, 0, 1, 0, 2, 0],
        [0, 1, 1, 1, 2, 1],
        [0, 2, 1, 2, 2, 2],

        // top-left to bottom-right diagonal
        [0, 0, 1, 1, 2, 2],

        // bottom-left to top-right diagonal
        [2, 0, 1, 1, 0, 2],
    ]

    constructor() {
        this.reset();
    }

    reset() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ]

        this.turn = 'X';
        this.isGameOver = false;
        this.winningLine = null;
        this.marks = 0;
    }

    makeMove(row, col) {
        if (!this.isValidMove(row, col)) {
            console.log('Invalid move.');
            return false;
        }

        this.board[row][col] = this.turn;
        this.marks++;

        // if the game is over return from this function before alternating
        // between X and O to get nice easy access to a "X won the game" prompt.
        this.detectGameOver();
        if (this.isGameOver) {
            return true;
        }

        if (this.turn === 'X') {
            this.turn = 'O';
        } else {
            this.turn = 'X';
        }

        this.detectGameOver();
        return true;
    }

    isValidMove(row, col) {
        if (this.isGameOver) {
            return false;
        }

        if (
            row < 0 || col < 0 ||
            row >= this.board.length ||
            col >= this.board[row].length
        ) {
            return false;
        }

        const current = this.board[row][col];
        if (current !== null) {
            return false;
        }
        return true;
    }

    detectGameOver() {
        for (let line of this.winningLines) {
            if (this.checkThree(...line)) {
                this.winningLine = line;
                this.isGameOver = true;
            }
        }

        // check for a cats game.
        // Set winningLine to null explicitly to emphasize the proper end state.
        if (this.marks === 9) {
            this.isGameOver = true;
            this.winningLine = null;
        }
    }

    checkThree(row1, col1, row2, col2, row3, col3) {
        const mark1 = this.board[row1][col1];
        const mark2 = this.board[row2][col2];
        const mark3 = this.board[row3][col3];

        if (mark1 !== null && mark1 === mark2 && mark2 === mark3) {
            return true;
        }
        return false;
    }
}