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

// Creo un variabile per il nostro Array.
let arrayImages = [1,2,3,4,5];
console.log(arrayImages);

// Creo una variabile sull'"active".
let activeElement = 1;

// Collego il bottone "next".
let myButtonUp = document. querySelector(".next");

// Creo l'interazione del bottone "myButtonUp".
myButtonUp.addEventListener("click",

    function(){ 
        // Creo un ciclo per la nostra variabile "i" da "1" a "5".
        for( let i = 1; i <= arrayImages; i++){
        console.log(i);

        // Creo i "div".
        let element = document.createElement("div");

        // Aggiungo una classe ai "div".
        element.classList.add("element");

        // Creo la prima Immagine.
        let image = document.createElement("img");

        // A "element" vado ad aggiungerci l'"img" al suo interno.
        element.append(image);
                
        // Inserisco l'immagine in "image".
        image.src = "./img/01.webp";
                

        // image.src = "./img/02.webp";

        // image.src = "./img/03.webp";
        
        // image.src = "./img/04.webp";
        
        // image.src = "./img/05.webp";
        
        // image.src = "./img/06.webp";
        }

        // if(activeElement < arrayImages - 1){
        //     // Toglamo la classe "active" al elemento corrente.
        // }
    
    
    }  
);
