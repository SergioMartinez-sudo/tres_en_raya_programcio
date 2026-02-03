// We select the elements from the DOM
const cells = document.querySelectorAll ('.cell');
const statusDisplay = document.querySelectorAll('h2');
let gameActive = true;
let currentPlayer = "x";
let gameState = ["", "", "", "", "", "", "", "", ""]


//Posibility WIN
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];








// Function to handle clicking on a cell
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = Array.from(cells).indexOf(clickedCell);


    // If the cell is already occupied or the game is over, we do nothing.
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }


    // We updated the status and interface
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}


// Function to mark the cell
function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
}



// 5. Función para validar el resultado
function handleResultValidation() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerText = `¡El jugador ${currentPlayer} ha ganado!`;
        gameActive = false;
        return;
    }

    // Comprobar si hay empate
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerText = "¡Empate!";
        gameActive = false;
        return;
    }

    // Si no han ganado ni empatado, cambiamos de jugador
    handlePlayerChange();
}

// 6. Función para cambiar de turno
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerText = `Turno de ${currentPlayer}`;
}

// 7. Event listeners para las celdas
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Inicializar el mensaje de turno
statusDisplay.innerText = `Turno de ${currentPlayer}`;

