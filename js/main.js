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
    let elementContainer= document.querySelector(".elemets-container");
    let div = document.createElement("div");
    div.classList.add("element");
    div.append (imageArray[i]);
    elementContainer.append (div);
}

// Colleghiamo al "div element" la classe "Active".

let divElementArrey= document.getElementsByClassName("element");
divElementArrey[0].classList.add("active");

let activeIteam = 0;

// Collego i bottoni "prev" e "next".
let buttonPrev = document.querySelector(".prev");

// il bottone prev da "active" div".
buttonPrev.classList.add("hidden");

let buttonNext = document.querySelector(".next");

// Aggiungiamo l'evento click al bottone "next".

buttonNext.addEventListener("click",

    function(){
        if(activeIteam < divElementArrey.length - 1){
            // Togliamo la classe "active" all'elemento corrente.
            divElementArrey[activeIteam].classList.remove("active");

            // Incrementiamo l'indice dell'elemento da visualizzare.
            activeIteam ++;

            // Aggiungiamo la classe "active" all'elemento successivo.
            divElementArrey[activeIteam].classList.add("active");

        }

        // Nacondiamo il bottone "next".
        if (activeIteam === divElementArrey.length - 1) {
            buttonNext.classList.add("hidden");
        }

        // Attiviamo il bottone "prev".
        if (activeIteam > 0) {
            buttonPrev.classList.remove("hidden");
            
        }
    }
);

buttonPrev.addEventListener("click",

    function(){
        if(activeIteam > 0){
        // Togliamo la classe "active" all'elemento corrente.
        divElementArrey[activeIteam].classList.remove("active");
        }
        // Decrementiamo l'indice dell'elemento da visualizzare.
        activeIteam --;

        // Aggiungiamo la classe "active" all'elemento successivo.
        divElementArrey[activeIteam].classList.add("active");

        // Nacondiamo il bottone "prev".
        if (activeIteam === 0) {
            buttonPrev.classList.add("hidden");
        }

        // Attiviamo il bottone "next".
        if (activeIteam < 4) {
            buttonNext.classList.remove("hidden");
        }
    }
);




