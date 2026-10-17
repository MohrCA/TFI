const carrucel = document.getElementById("Inicio");
const imagenes = document.querySelector(".imagenes");
 
let indice = 0;

function avanzarCarrucel() {
    indice++;

    if (indice > 2) {
        indice = 0;
    }

    imagenes.style.transform = `translateX(-${indice * 100}%)`;
}

setInterval(avanzarCarrucel, 3000);

