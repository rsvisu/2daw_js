// Main
document.addEventListener("DOMContentLoaded", function () {
    /* - Version 1:
    // Divs
    let div_arriba_izquierda = document.getElementById("arriba_izquierda");
    let div_arriba_derecha = document.getElementById("arriba_derecha");
    let div_abajo_izquierda = document.getElementById("abajo_izquierda");
    let div_abajo_derecha = document.getElementById("abajo_derecha");

    // Listeners
    div_arriba_izquierda.addEventListener("click", () => alert("Has clickado arriba a la izquierda."));
    div_arriba_derecha.addEventListener("click", () => alert("Has clickado arriba a la derecha."));
    div_abajo_izquierda.addEventListener("click", () => alert("Has clickado abajo a la izquierda."));
    div_abajo_derecha.addEventListener("click", () => alert("Has clickado abajo a la derecha."));
    */
    
    /* - Version 2: */
    // Recuperamos todos los cuadrantes
    let divs = document.getElementsByName("cuadrante");
    
    // Iteramos los cuadrantes (divs)
    for (const div of divs) {
        // Por cada cuadrante le adjuntamos un event listener de click
        div.addEventListener("click", function () {
            // Creamos el mensaje segun la id y ejecutamos un alert
            let posicion = div.id.replace("_", " ");
            let mensaje = `Has hecho click en el cuadrante "${posicion}"`;
            alert(mensaje);
        });
    }
});