// Main
document.addEventListener("DOMContentLoaded", function () {
    // Recuperamos el formulario
    const formulario = document.forms["formulario"];

    // Recuperamos los inputs text y se lo pasamos a la funcion para validarlos
    const inputsText = formulario.querySelectorAll('input[type="text"]');
    validarInputsTarjeta(inputsText);

    // Funcion al enviar fomulario:
    formulario.addEventListener("submit", function(event) {
        // Evitamos el envio del formualario y a su vez la recarga de la pagina
        event.preventDefault();

        // Recuperamos la fecha de caducidad y la validamos
        const fechaCaducidad = new Date(document.getElementById("fecha_caducidad").value);
        const ahora = new Date();

        const estaCaducada = ahora > fechaCaducidad;
        if(estaCaducada) {
            abrirPopup("tarjeta_caducada");
        } else {
            abrirPopup("tarjeta_valida");
        }

        // Limpiamos el formulario
        event.target.reset();
    });
});

// - Funciones
// Tarjeta
function validarInputsTarjeta(inputs) {
    // Validaciones
    if (inputs.length !== 4) {
        throw new Error("El formulario debe tener 4 inputs de tarjeta");
    }

    // Bucle
    let i = 0;
    for (const input of inputs) {
        // Evitamos el problema del "closure" guardando una copia de 'i',
        // para que cada función tenga su propio índice
        let index = i;

        input.addEventListener("input", function () {
            // Recuperamos el valor del input
            let valor = input.value;
            // Comprobamos si se cumplen las condiciones
            if (valor.length === 4 && !isNaN(valor) && inputs[index + 1]) {
                inputs[index + 1].focus();
            }
        });
        i++;
    }
}

// Popup
function abrirPopup(name) {
    // Recuperarmos el contenedor overlay popup
    const popupsContainer = document.getElementById("popups-container");

    // Recuperamos el popup
    const popup = popupsContainer.querySelector(`[name="${name}"]`);

    // Añadimos la clase open al popup y al overlay para que se muestre
    popupsContainer.classList.add("open");
    popup.classList.add("open");
}

function cerrarPopup(element) {
    // Recuperarmos el contenedor overlay popup
    const popupsContainer = document.getElementById("popups-container");

    // Recuperamos el popup
    const popup = element.closest(".popup-box");

    // Quitamos la clase open para que se dejen de mostrar
    popupsContainer.classList.remove("open");
    popup.classList.remove("open");
}

