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
