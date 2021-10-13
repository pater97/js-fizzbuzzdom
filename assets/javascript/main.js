// Consegna:
// Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container 
//con uno stile differente a seconda del valore dell'indice
// per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// OPERAZIONI:

// -1 definire gli agganci e le variabili per l'inserimento in html
// -2 creazione ciclo base 1 to 100
// -3 inserire una condizione if/else if/else utilizzando % per verificare se la somma di i con i numeri 3,5,3 e 5 è 0
// -4 creazione di un contenuto da inserire in html
// -5 inserire nell'html i risultati 

let list = document.querySelector(`.list`)  //1

for (let i = 1; i <= 100; i++) { //2
    if ((i % 3 == 0) && (i % 5 == 0)) { //3
        console.log("fizzBuzz"); //test
        let element = `<li class="fizzBuzz"> ${`fizzBuzz`} </li>` //4
        list.innerHTML += element //5
    } else if (i % 3 == 0) {
        console.log("fizz");  //test
        let element = `<li class="fizz">${`fizz`}</li>` //4
        list.innerHTML += element //5
    } else if (i % 5 == 0) {
        console.log("buzz");  //test
        let element = `<li class="buzz">${`buzz`}</li>` //4
        list.innerHTML += element //5
    } else {
        console.log(i);  //test
        let element = `<li class="number">${i}</li>` //4
        list.innerHTML += element //5
    }
}


