function corretto(scritta) {
    scritta.textContent = "Dato corretto!";
    scritta.style.color = "green";
}

function incorretto(scritta) {
    scritta.textContent = "Dato non corretto!";
    scritta.style.color = "red";
}

function vuoto(scritta) {
    scritta.textContent = "Inserire dato!";
    scritta.style.color = "magenta";
}

function verificaDati(event) {
    event.preventDefault();

    let doc = document;
    let testo = doc.getElementById("testo").value;
    let numero = doc.getElementById("numero").value;
    let scrittaTesto = doc.getElementById("testoScritta");
    let scrittaNumero = doc.getElementById("numeroScritta");

    if (testo != "" && !testo.includes(" ")) {
        if (verificaLunghezza(testo)) {
            corretto(scrittaTesto);
        }
        else {
            incorretto(scrittaTesto);
        }
    }
    else {
        vuoto(scrittaTesto);
    }

    if (numero != "") {
        if (verificaNumero(numero)) {
            corretto(scrittaNumero);
        }
        else {
            incorretto(scrittaNumero);
        }
    }
    else {
        vuoto(scrittaNumero);
    }
}

function verificaLunghezza(testo) {
    let lunghezza = testo.length;
    if (lunghezza == 5) {
        return true;
    }
    else {
        return false;
    }
}

function verificaNumero(num) {
    if (num >= 6 && num <= 10) {
        return true;
    }
    else {
        return false;
    }
}
