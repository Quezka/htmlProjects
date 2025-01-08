const xchar = "X";
const ochar = "O";
let player = xchar;
let scheme = [ '', '', '', '', '', '', '', '', ''];

function move(x) {
    if (scheme[x] === '') {
        scheme[x] = player;
        let cell = document.getElementsByTagName('td')[x];
        cell.innerHTML = player;
        if (win()) {
            alert(cell.innerHTML + ' has won!');
            resetGame();
        } else if (tie()) {
            alert('Tie!');
            resetGame();
        } else {
            player = player === xchar ? ochar : xchar;
        }
    }
}

function win() {
    const combinazioniVittoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
    for (let combinazione of combinazioniVittoria) {
        const [a, b, c] = combinazione;
        if (scheme[a] && scheme[a] === scheme[b] && scheme[a] === scheme[c]) {
            return true;
        }
    }
    return false;
}
function tie() {
    let cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        if (scheme[i] === '') {
            return false;
        }
    }
    return true;
}

function resetGame() {
    scheme = [ '', '', '', '', '', '', '', '', ''];

    player = xchar;
    let cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
}
