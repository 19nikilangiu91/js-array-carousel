// Creo un variabile per il nostro Array.
let arrayImages = [1,2,3,4,5];
console.log(arrayImages);

// Creo un ciclo per la nostra variabile "i" da "1" a "5".
for( let i = 1; i <= arrayImages.length; i++){
    console.log(i);

    // Creo una variabile per il nostro ".container".
    let contenitore = document.querySelector(".container");

    // Creo una variabile per il nostro ".carousel".
    let carousel = document.querySelector(".carousel");

    // Aggiungo il "carousel" all'interno del "contenitore".
    contenitore.append(carousel);

    // Creo una variabile per il nostro ".elements-container"
    let elementsContainer = document.querySelector(".elemets-container");

    // Aggiungo il "elementsContainer" all'interno del "carousel".
    carousel.append(elementsContainer);

    // Creo 5 "div" per quante saranno le immagini.
    let element = document.createElement("div");

    // Aggiungo una classe ai "div".
    element.classList.add("element");

    // Al "elementsContainer" vado ad aggiungerci i "div".
    elementsContainer.append(element);

    // Creo la prima Immagine.
    let image01 = document.createElement("img");

    // Inserisco l'immagine in "image"
    image01.src = "./img/01.webp";

    // A "element" vado ad aggiungerci l'"img" al suo interno.
    element.append(image01);

    image01 = [1];
    
}
