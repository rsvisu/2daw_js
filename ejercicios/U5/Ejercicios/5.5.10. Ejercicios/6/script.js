// Main
document.addEventListener("DOMContentLoaded", main);
function main() {
    // Referencia al formuario
    const formulario = document.getElementById("formulario");

    // Submit del formulario
    formulario.addEventListener("submit", function(event) {
        // Creamos una variable para guardar los errores
        let errores = [];

        // Comprobamos que todos los campos estén rellenados
        if (!estanCamposRellenados(formulario)) {
            errores.push("Por favor, rellena todos los campos del formulario.");
        }

        // Comprobamos que el año no sea mayor al actual
        const anioInput = Number(document.getElementById("anio").value);
        if (!esAnioValido(anioInput)) {
            errores.push("El año no puede ser mayor al actual.");
        }

        // Si no es válido, evitamos el envío del formulario
        if (errores.length === 0) {
            alert("Formulario correcto");
        } else {
            const mensajeErrores = errores.join("\n");
            alert(mensajeErrores);
            event.preventDefault();
        }
    });
}

function esAnioValido(anio) {
    const ahora = new Date();
    const anioActual = ahora.getFullYear();

    // Validar que no sea mayor al actual y que tenga máximo 4 dígitos
    return anio <= anioActual && anio.toString().length <= 4;
}

function estanCamposRellenados(formulario) {
    // Recorremos todos los elementos del formulario
    for (const elemento of formulario.elements) {
        // Inputs text y number
        if(elemento.type === "text" || elemento.type === "number") {
            // Si el campo está vacío, devolvemos false
            if(!elemento.value) {
                return false;
            }
        }

        // Inputs select
        if(elemento.type === "select-one") {
            // Si no se ha seleccionado ninguna opción, devolvemos false
            if (elemento.selectedIndex === 0) {
                return false;
            }
        }
    }

    // Si llega aquí, es que todos los campos están rellenados
    return true;

}