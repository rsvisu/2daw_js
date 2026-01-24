// Main
document.addEventListener("DOMContentLoaded", function () {
    // Recuperamos el formulario y los input text
    const formulario = document.forms["formulario"];
    const inputsText = formulario.querySelectorAll('input[type="text"]');

    validarInputsTarjeta(inputsText);

});

// Funciones
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

