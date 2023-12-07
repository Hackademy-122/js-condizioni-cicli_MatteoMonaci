// ESERCIZIO 1

// Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:

// -se v e’ minore di 18,  stampare in console  “insufficiente”
// -se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// -se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// -se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// -se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// -se v e’ uguale a 30, stampare in console:  “eccellente”
// Esempio:

// let v = 29;

// Output: Ottimo

// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case.

console.log('esercizio uno');

let vote = 24;

if (vote < 18) {

    console.log('insufficente');

} else if (vote >= 18 && vote < 21) {

    console.log('sufficiente');

} else if (vote >= 21 && vote < 24) {

    console.log('buono');

} else if (vote >= 24 && vote < 27) {

    console.log('distinto');

} else if (vote >= 27 && vote <= 29) {

    console.log('ottimo');

} else {

    console.log('eccellente');

}

switch (true) {
    case (vote < 18):
        console.log('insufficiente');
        break;
    case (vote >= 18 && vote < 21):
        console.log('sufficiente');
        break;
    case (vote >= 21 && vote < 24):
        console.log('buono');
        break;
    case (vote >= 24 && vote < 27):
        console.log('distinto');
        break;
    case (vote >= 27 && vote <= 29):
        console.log('ottimo');
        break;
    default:
        console.log('eccellente');
}


// ESERCIZIO 2
//  Scrivere un programma che converta una temperatura con una delle seguenti descrizioni:

// -se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// -se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// -se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// -se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// -se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”

// Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch case.

console.log('');
console.log('esercizio due');

let temp = 22;

if (temp < -10) {
    console.log("copriti... ancora di raffreddi");
}

else if (temp < 0) {
    console.log("non è tanto il freddo quanto l'umidità");
}

else if (temp < 20 && temp >= 0) {
    console.log("non ci sono più le mezze stagioni");
}

else if (temp < 30 && temp >= 20) {
    console.log("mi dia una peroni sudata");
}

else {
    console.log("lu mare, lu sole, lu ientu");
}

switch (true) {
    case temp < -10:
        console.log("copriti... ancora di raffreddi");
    break;

    case temp < 0:
        console.log("non è tanto il freddo quanto l'umidità");
    break;

    case temp < 20 && temp >= 0:
        console.log("non ci sono più le mezze stagioni");
    break;

    case temp < 30 && temp >= 20:
        console.log("mi dia una peroni sudata");
    break;

    default:
        console.log("lu mare, lu sole, lu ientu");
}


// ESERCIZIO 3
// Scrivere un programma che simuli un distributore di bevande:

// fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza
// RIFARE L'ESERCIZIO DEI DADI (cercate prima di farlo da soli)
// Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
//  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
//  supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore

// Math.floor(Math.random() * (max - min + 1) + min)

console.log('');
console.log('esercizio tre');

// let drink = prompt("inserici 1 per acqua \ninserisci 2 per coca cola \ninserisci 3 per birra", "vietato bere alcoli per i minori di 18 anni");

// while (drink < 1 || drink > 3){
//     drink = prompt ("numero non valido \ninserici 1 per acqua \ninserisci 2 per coca cola \ninserisci 3 per birra", "vietato bere alcolici per i minori di 18 anni");
// }

// while (drink != 1 && drink != 2 && drink != 3) {
//     drink = prompt ("numero non valido \ninserici 1 per acqua \ninserisci 2 per coca cola \ninserisci 3 per birra", "vietato bere alcolici per i minori di 18 anni");
// }


// if (drink == 1) {
//     console.log("è stata selezionata l'acqua");
// }
// else if (drink == 2) {
//     console.log("è stata selezionata coca cola");
// }
// else {
//     console.log("è stata selezionata birra");
// }


// DADI

// Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
//  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
//  supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore

console.log('');
console.log('esercizio dadi');

nShot = 3;

let totalPlayerUno = 0;
let totalPlayerDue = 0;

for (let i = 1; i <= nShot; i++) {
    singleShot = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log(`singoli tiro ${singleShot}`);
    totalPlayerUno = totalPlayerUno + singleShot;
}

console.log(`totale primo giocatore ${totalPlayerUno}`);

for (let i = 1; i <= nShot; i++) {
    singleShot = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log(`singoli tiro ${singleShot}`);
    totalPlayerDue = totalPlayerDue + singleShot;
}

console.log(`totale secondo giocatore ${totalPlayerDue}`);

if (totalPlayerUno > totalPlayerDue){
    console.log(`vince il primo giocatore`);
}
else if (totalPlayerDue > totalPlayerUno) {
    console.log(`vince il secondo giocatore`);
}
else {
    console.log(`è un pareggio`);
}

