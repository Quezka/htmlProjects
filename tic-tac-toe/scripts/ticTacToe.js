const xchar = "X";
const ochar = "O";
let giocatore = xchar;
let schema = [ '', '', '', '', '', '', '', '', ''];

function mossa(x) {
    if (schema[x] === '') {
        schema[x] = giocatore;
        let cell = document.getElementsByTagName('td')[x];
        cell.innerHTML = giocatore;
        if (haiVinto()) {
            alert(cell.innerHTML + ' ha vinto');
            resetGioco();
        } else if (pareggio()) {
            alert('Pareggio');
            resetGioco();
        } else {
            giocatore = giocatore === xchar ? ochar : xchar;
        }
    }
}

function haiVinto() {
    /*    if () {
            return true;
        }

    return false;
    */
}
function pareggio() {
    for (let i = 0; i < 9; i++) {
        if (schema[i] === '') {
            return false;
        }
    }
    return true;
}

function resetGioco() {
    schema = [ '', '', '', '', '', '', '', '', ''];

    giocatore = xchar;
    let cells = document.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {

    }
}
