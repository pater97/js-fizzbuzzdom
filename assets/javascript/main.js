// Consegna:
// Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container 
//con uno stile differente a seconda del valore dell'indice
// per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// OPERAZIONI:

// -1 creazione ciclo base 1 to 100
// -2 verifcare tramite l'utilizzo ddell'operatore resto "%" se i multipli del numero che voglio hanno come somma 0.
// -3 eseguire ogni condizione con if/else if/else in base a ciò che voglio ottenere
// -4 inserire nell'html i risultati

for (let i = 1; i <= 100; i++) { //1
    if ((i % 3 == 0) && (i % 5 == 0)) { //2
        console.log("fizzBuzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}