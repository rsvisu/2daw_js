// Funcion
function alternarImg(pos) {
    // Ocultar todas las imagenes
    let divImagenes = document.getElementById("imagenes");
    let imagenes = divImagenes.getElementsByTagName("img");
    for (const imagen of imagenes) {
        imagen.style.display = "none";
    }

    // Mostrar la que este en posicion definida
    imagenes[pos].style.display = "block";
}

// Main
document.addEventListener("DOMContentLoaded", () => {
    // Mostrar la imagen 1.
    alternarImg(0);

    // Listeners
    let divImagenes = document.getElementById("imagenes");
    divImagenes.addEventListener("mouseout", () => alternarImg(0));
    divImagenes.addEventListener("mouseover", () => alternarImg(1));
});