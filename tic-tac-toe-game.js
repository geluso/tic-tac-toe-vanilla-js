class TicTacToeGame {
  constructor() {
    this.turn = 'X';
    this.isGameOver = false;
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  this.winLines = [
    // rows
    [0, 0, 0, 1, 0, 2],
    [1, 0, 1, 1, 1, 2],
    [2, 0, 2, 1, 2, 2],

    // cols
    [0, 0, 1, 0, 2, 0],
    [0, 1, 1, 1, 2, 1],
    [0, 2, 1, 2, 2, 2],

    // top left to bottom right
    [0, 0, 1, 1, 2, 2],

    // bottom left to top right
    [2, 0, 1, 1, 0, 2],
  ]

  reset() {
    this.isGameOver = false;
    this.winningLine = null;
    this.turn = 'X';
    this.marks = 0;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        this.board[row][col] = null;
      }
    }
  }

  makeMove(row, col) {
    if (!isValid(row, col) {
      // don't do anything if this is not a valid move.
      return;
    }  

    this.board[row][col] = this.turn;
    this.marks++;

    if (this.turn === 'X') {
      this.turn = 'O';
    } else {
      this.turn = 'X';
    }

    if (detectGameOver()) {
      this.isGameOver = true;
    }
  }

  isValid(row, col) {
    // Make sure the coordinates appear on the board
    if (
        row < 0 || col < 0 ||
        row >= board.length ||
        col >= board[row].length
    ) {
      return false;
    }
    // Make sure the position doesn't already contain a mark
    const current = this.board[row][col];
    if (current !== null) {
      return false;
    } 
    return true;
  }

  isAllFilled() {
    return this.marks === 9;
  }

  checkIsGameOver() {
    for (let line of this.winLines) {
      if (this.checkThree(...line)) {
        this.winningLine = line;
        this.isGameOver = true;
      }
    }
  }

  checkThree(row1, col1, row2, col2, row3, col3) {
    const mark1 = this.board[row1][col1];
    const mark2 = this.board[row2][col2];
    const mark3 = this.board[row3][col3];
    if (mark1 !== null & mark1 === mark2 && mark2 === mark3) {
      return true;
    }
    return false;
  }
}


