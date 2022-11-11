// Creo un variabile per il nostro Array.
let arrayImages = [1,2,3,4,5];
console.log(arrayImages);

// Creo un ciclo per la nostra variabile "i" da "1" a "5".
for( let i = 1; i <= arrayImages.length; i++){
    console.log(i);

    // Creo una variabile per il nostro "".container".
    let contenitore = document.querySelector(".container");

    // Creo 5 "div" per quante saranno le immagini.
    let element = document.createElement("div");

    // Aggiungo una classe ai "div".
    element.classList.add("element");

    // Al contenitore vado ad aggiungerci l'elemento al suo interno.
    contenitore.append(element);

}
