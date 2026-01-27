// Main
document.addEventListener("DOMContentLoaded", main);
function main() {
    // Referencia a los formularios
    const formAlta = document.getElementById("formAlta");
    const formPago = document.getElementById("formPago");

    // Submit del formulario de alta
    formAlta.addEventListener("submit", function(event) {
        // Creamos una variable para guardar los errores
        let errores = [];

        // Comprobamos que todos los campos estén rellenados
        if (!estanCamposRellenados(formAlta)) {
            errores.push("Por favor, rellena todos los campos del formulario.");
        }

        // Validaciones pedidas
        const dni = document.getElementById("dni").value;
        if (!esDniValido(dni)) {
            errores.push("El DNI no es válido.");
        }

        const email = document.getElementById("email").value;
        if (!esEmailValido(email)) {
            errores.push("El email no es válido.");
        }

        const contrasena = document.getElementById("contrasena").value;
        if (!esContrasenaValida(contrasena)) {
            errores.push("La contraseña no cumple los requisitos.");
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

    // Submit del formulario de pago
    formPago.addEventListener("submit", function(event) {
        // Creamos una variable para guardar los errores
        let errores = [];

        // Comprobamos que todos los campos estén rellenados
        if (!estanCamposRellenados(formPago)) {
            errores.push("Por favor, rellena todos los campos del formulario.");
        }

        // Validamos tarjeta (24 dígitos)
        const tarjeta = document.getElementById("tarjeta").value;
        if (!esTarjetaValida(tarjeta)) {
            errores.push("La tarjeta debe tener 24 dígitos.");
        }

        // Validamos CVV (3 dígitos)
        const cvv = document.getElementById("cvv").value;
        if (!esCvvValido(cvv)) {
            errores.push("El CVV debe tener 3 dígitos.");
        }

        // Validamos Clave (4 números)
        const clave = document.getElementById("clave").value;
        if (!esClaveValida(clave)) {
            errores.push("La clave debe tener 4 números.");
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

function estanCamposRellenados(formulario) {
    // Recorremos todos los elementos del formulario
    for (const elemento of formulario.elements) {
        // Inputs text y password
        if (["text", "password"].includes(elemento.type)) {
            // Si el campo está vacío, devolvemos false
            if(!elemento.value) {
                return false;
            }
        }
    }

    // Si llega aquí, es que todos los campos están rellenados
    return true;

}

// DNI
function esDniValido(dni) {
    // 8 números y una letra
    const patronDni = /^\d{8}[A-Za-z]$/;
    return patronDni.test(dni);
}

// Email
function esEmailValido(email) {
    // Patrón
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronEmail.test(email);
}

function esContrasenaValida(contrasena) {
    // Mínimo 8 caracteres
    if (contrasena.length < 8) {
        return false;
    }

    // Debe tener al menos una mayúscula, una minúscula, un número y un carácter no alfanumérico
    const tieneMayus = /[A-Z]/.test(contrasena);
    const tieneMinus = /[a-z]/.test(contrasena);
    const tieneNumero = /\d/.test(contrasena);
    const tieneSimbolo = /[^A-Za-z0-9]/.test(contrasena);

    return tieneMayus && tieneMinus && tieneNumero && tieneSimbolo;
}

function esTarjetaValida(tarjeta) {
    // Debe contener exactamente 24 dígitos
    if (tarjeta.length !== 24) {
        return false;
    }

    // Comprobamos que todos sean números
    return !isNaN(tarjeta);
}

function esCvvValido(cvv) {
    // Debe contener exactamente 3 dígitos
    if (cvv.length !== 3) {
        return false;
    }

    return !isNaN(Number(cvv));
}

function esClaveValida(clave) {
    // Debe contener exactamente 4 dígitos
    if (clave.length !== 4) {
        return false;
    }

    return !isNaN(Number(clave));
}