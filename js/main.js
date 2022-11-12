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

// Creo l'arrey per le nostre immagini.

let imageArray = [];

imageArray[0] = new Image();
imageArray[0].src = 'img/01.webp';

imageArray[1] = new Image();
imageArray[1].src = 'img/02.webp';

imageArray[2] = new Image();
imageArray[2].src = 'img/03.webp';

imageArray[3] = new Image();
imageArray[3].src = 'img/04.webp';

imageArray[4] = new Image();
imageArray[4].src = 'img/05.webp';


// Creo un ciclo per le immagini.

for (let i = 0; i < imageArray.length; i++) {
    let element = document.querySelector(".elemets-container");
    let div = document.createElement("div");
    div.classList.add("element");
    div.append (imageArray[i]);
    element.append (div);
}

// Colleghiamo al "div element" la classe "Active".

let divElementArrey = document.querySelector(".element");
divElementArrey.classList.add("active");

let ActiveIteam = 0;



