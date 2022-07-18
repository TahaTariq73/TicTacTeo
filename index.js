// Variables and constants
const board = document.getElementById('board');
const boxes = document.getElementsByClassName('cell');
const tune = new Audio('tune.wav');
const winning_conditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

let call = 0;
let turn = "0";

//Functions and main logic
const winningConditions = () => {
    let cellTxt = document.getElementsByClassName('cell-txt');
    for (let e of winning_conditions) {
        if (cellTxt[e[0]].innerText === cellTxt[e[1]].innerText &&
            cellTxt[e[2]].innerText === cellTxt[e[1]].innerText &&
            cellTxt[e[0]].innerText !== "") {
                call = 0;
                alert(`${turn} win's`);
                reset();
    }}}

const drawCondition = () => {
    call++;
    if (call === 9) {
        call = 0;
        alert('Game Draw!');
        reset();
}}

const reset = () => {
    let cellTxt = document.getElementsByClassName('cell-txt');
    for (let clear of cellTxt) {
        clear.innerText = "";
    }    
}

const changeTurn = () => {
    return turn == "X" ? "0" : "X";
}

for (let element of boxes) {
    let boxTxt = element.querySelector('.cell-txt');  
    element.addEventListener('click', () => {
        if (boxTxt.innerText === '') {
            boxTxt.innerText = turn;
            tune.play();
            drawCondition();
            winningConditions();
            turn = changeTurn();
        }
})}