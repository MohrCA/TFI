const inicio = document.querySelector(".imagenes");
const imagenes = document.querySelectorAll(".contPubli");

const selector = document.getElementById("botonImg");
const izq = document.getElementById("flechaIzq");
const der = document.getElementById("flechaDer"); 

let indice = 0
console.log(imagenes);

function mover() {
    inicio.appendChild(imagenes[indice]);
    indice++;

    if (indice > imagenes.length - 1) {
        indice = 0;
    }

    
}

let intervalo = setInterval(mover, 3000);

function moverIzq() {
    if (indice == 0) {
        inicio.insertBefore(
            imagenes[imagenes.length - 1],
            imagenes[0]
        );
        indice = imagenes.length - 1;
    } else {
        inicio.insertBefore(
            imagenes[indice - 1],
            imagenes[indice]
        );
        indice--;
    }

    clearInterval(intervalo);
}

function moverDer() {
    inicio.appendChild(imagenes[indice]);

    if (indice == imagenes.length - 1) {
        indice = 0;
    } else {
        indice++;
    }

    clearInterval(intervalo);
}

izq.addEventListener("click", moverIzq);
der.addEventListener("click", moverDer);
