// Main
document.addEventListener("DOMContentLoaded", main);
function main() {
    // Referencia al formulario
    const formulario = document.getElementById("formulario");

    // Submit del formulario
    formulario.addEventListener("submit", function (event) {
        const errores = [];

        // Comprobamos que todos los campos estén rellenados
        if (!estanCamposRellenados(formulario)) {
            errores.push("Por favor, rellena todos los campos del formulario.");
        }

        // Validación DNI
        const dni = document.getElementById("dni").value;
        if (!esDniValido(dni)) {
            errores.push("El DNI no es válido. Debe tener 8 números y una letra correcta. ");
        }

        // Validación email
        const email = document.getElementById("email").value;
        if (!esEmailValido(email)) {
            errores.push("El email debe ser de tipo hotmail (hotmail.com / hotmail.es) o yahoo.es.");
        }

        // Validación país
        const pais = document.getElementById("pais").value;
        if (!esPaisValido(pais)) {
            errores.push("El país debe ser España o Italia.");
        }

        // Resultado
        if (errores.length === 0) {
            alert("Formulario correcto");
        } else {
            alert(errores.join("\n"));
            event.preventDefault();
        }
    });
}

function esDniValido(dni) {
    // Normalizacion
    dni = String(dni);
    dni = dni.trim();
    dni = dni.toUpperCase();

    // Variables iniciales
    const ABCEDARIO = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    // Partes del dni
    let letraDNI = dni[dni.length - 1];
    let numeroDNI = dni.slice(0,-1);

    // Comprobamos los datos
    if (!numeroDNI || isNaN(numeroDNI)) {
        return false;
    }

    // Para la letra primero comprobamos que sea null o cadena vacia
    if (!letraDNI) {
        return false;
    }

    // Despues de comprobar la letra le quitamos los espacios y la pasamos a mayuscula
    // Esto lo hago despues de la anterior comprobacion, porque si la letra es null daria error el ejecutar estos metodos
    letraDNI = letraDNI.trim().toUpperCase();

    if (letraDNI.length !== 1 || !ABCEDARIO.includes(letraDNI)) {
        return false;
    }

    if (numeroDNI < 10_000_000 || numeroDNI > 99_999_999) {
        return false;
    }

    // Finalmente comprobamos si la letra corresponde a la del DNI de forma calculada
    let letraCalculadaDNI = ABCEDARIO[numeroDNI % 23];

    if (letraCalculadaDNI !== letraDNI) {
        return false;
    }

    // Si llegamos aqui entonces el DNI es correcto
    return true;
}

function esEmailValido(email) {
    email = email.toLowerCase().trim();
    let emailSeparado = email.split("@");

    if (emailSeparado.length !== 2) {
        return false;
    }

    let esYahoo = emailSeparado[1] === "yahoo.es";
    let esHotmail = emailSeparado[1] === "hotmail.es" || emailSeparado[1] === "hotmail.com";

    return esYahoo || esHotmail;
}

function esPaisValido(pais) {
    pais = pais.toLowerCase().trim();
    return pais === "espana" || pais === "italia";
}

function estanCamposRellenados(formulario) {
    // Recorremos todos los elementos del formulario
    for (const elemento of formulario.elements) {
        // Inputs
        if (elemento.tagName === "input") {
            if (!elemento.value || elemento.value.trim() === "") {
                return false;
            }
        }

        // Select
        if (elemento.tagName === "select") {
            if (!elemento.value) {
                return false;
            }
        }
    }

    // Si llega aquí, es que todos los campos están rellenados
    return true;
}