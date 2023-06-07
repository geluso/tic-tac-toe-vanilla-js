document.addEventListener('DOMContentLoaded', main);

function main() {
    const game = new TicTacToeGame();
    const cells = [...document.getElementsByClassName('cell')];

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => reset(game));

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const cell = cells.shift();
            cell.id = makeCellId(row, col);
            cell.addEventListener('click', () => clickCell(game, cell, row, col));
        }
    }
}

function reset(game) {
    game.reset();

    showPrompt("X's turn");

    const cells = [...document.getElementsByClassName('cell')];
    cells.forEach(cell => cell.textContent = '_');
}

function clickCell(game, cell, row, col) {
    console.log('clicked on', row, col);
    const isOK = game.makeMove(row, col);
    
    if (!isOK) {
        return;
    }

    const message = game.turn + "'s turn"
    showPrompt(message);

    cell.textContent = game.board[row][col];

    if (game.isGameOver) {
        console.log('Game Over:', game.winningLine);
        handleGameOver(game);
    }
}

function showPrompt(message) {
    const prompt = document.getElementById('prompt');
    prompt.textContent = message;
}

function handleGameOver(game) {
    if(!game.winningLine) {
        showPrompt('Cats!')
        return;
    }

    const message = game.turn + ' won the game!';
    showPrompt(message);

    let [row1, col1, row2, col2, row3, col3] = game.winningLine;

    markWin(row1, col1);
    markWin(row2, col2);
    markWin(row3, col3);
}

function makeCellId(row, col) {
    const id = 'cell-' + row + '-' + col;
    return id;
}

function getCell(row, col) {
    const id = makeCellId(row, col);
    const cell = document.getElementById(id);
    return cell;
}

function markWin(row, col) {
    let cell = getCell(row, col)
    cell.classList.add('win')
}
