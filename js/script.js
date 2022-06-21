// Verifica 

console.log('JS OK');

// Steps

// Collega un paragrafo per stampare il risultato 

const result = document.getElementById('price-display');

// Chiedi all'utente il numero di chilometri

const travelDistance = parseInt(prompt('Quanti km dovrà percorrere il passeggero?', '76'));
console.log(travelDistance);

// Chiedi all'utente l'età del passeggero

const userAge = parseInt(prompt('Quanti anni ha il passeggero?', '26'));
console.log(userAge);

// Convalida i dati inseriti:

let isValid = true;
let message = '';

if (isNaN(travelDistance) == true || travelDistance < 1) {
    message ='Inserire un numero per la distanza maggiore di 1. ';
    isValid = false;
}

if (isNaN(userAge) == true || userAge < 1 || userAge > 120) {
    message = message + 'Inserire un età valida.';
    isValid = false;
}

// Se i dati richiesti sono corretti:

if (isValid) {
    
    
    // Crea una variabile che definisca il prezzo intero e una per i possibili sconti

    let fullPrice = (travelDistance * 0.21).toFixed(2);
    console.log(fullPrice);

    let salePrice

    // Crea le condizioni per eventuali sconti

    if (userAge < 18) {
        salePrice = (fullPrice - (fullPrice / 100 * 20)).toFixed(2);
        result.innerHTML = `Il prezzo da pagare è: <del>${fullPrice}</del> <strong>${salePrice}&euro;</strong>`
    }

    else if (userAge > 65) {
        salePrice = (fullPrice - (fullPrice / 100 * 40)).toFixed(2);
        result.innerHTML = `Il prezzo da pagare è: <del>${fullPrice}</del> <strong>${salePrice}&euro;</strong>`
    }

    else {

        result.innerHTML = `Il prezzo da pagare è: <strong>${fullPrice}&euro;</strong>`;
    }



}

else {
    alert(message);
}