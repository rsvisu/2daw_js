// - Ejecucion principal:
document.addEventListener("DOMContentLoaded", main);

function main() {
    // Formulario banco:
    document.getElementById("boton1").addEventListener("click", envioHabilitarBanco);

    // Formulario datos:
    document.getElementById("boton2").addEventListener("click", envioDatos);
}

// - Habilitar banco:
function envioHabilitarBanco() {
    // Desactivamos la recarga de la pagina al enviar el formulario.
    event.preventDefault();

    // Comprobamos si los datos son validos
    if (esDatosBancoValido()) {
        // Si todos los datos son validos, habilitamos el boton del segundo formulario.
        alert("Todos los datos son validos. Se ha habilitado el segundo formulario.")
        let btn_formularioDatos = document.getElementById("boton2");
        btn_formularioDatos.removeAttribute("disabled");
    } else {
        alert("Error. Todos los datos deben ser validos y estar rellenados.");
    }
}

function esDatosBancoValido() {
    // Nombre
    let nombre = document.getElementById("nombre").value;
    if (nombre.length < 2 || contieneNumeros(nombre)) {
        console.log("Nombre invalido");
        return false;
    }

    // Apellidos
    let apellidos = document.getElementById("apellidos").value;
    if (apellidos.length < 2 || contieneNumeros(apellidos)) {
        console.log("Apellidos invalido");
        return false;
    }

    // Correo
    let correo = document.getElementById("correo").value;
    if (!correo.includes("@")) {
        console.log("Correo invalido");
        return false;
    }

    // Usuario
    let usuario = document.getElementById("usuario").value;
    if (usuario.length < 5 || usuario.length > 8) {
        console.log("Usuario invalido");
        return false;
    }

    // DNI
    let dni = document.getElementById("dni").value;
    if (!esDniValido(dni)) {
        console.log("DNI invalido");
        return false;
    }

    // Si se llega hasta aqui, todo es valdio.
    return true;
}

// - Envio datos (segundo formulario):
function envioDatos() {
    // Comprobamos si los datos son validos
    if (esDatosBancariosValido()) {
        alert("Todos los datos son validos. Se procedera a enviar el formulario.")
    } else {
        // Si no es valido evitamos el envio del formulario para poder modificar los datos.
        event.preventDefault();
        alert("Error. Todos los datos deben ser validos.");
    }
}

function esDatosBancariosValido() {
    // IBAN
    let iban = document.getElementById("iban").value;
    if (iban.length != 4 || iban.slice(0, 2) != "ES" || isNaN(iban.slice(2, 4))) {
        console.log("IBAN invalido");
        return false;
    }

    // CCC
    let ccc = document.getElementById("ccc").value;
    if (ccc.length != 20 || isNaN(ccc)) {
        console.log("CCC invalido");
        return false;
    }

    // Contraseña
    let contrasena = document.getElementById("pass").value;
    if (!contrasena) {
        console.log("Contraseña invalida");
        return false;
    }

    // Si se llega hasta aqui, todo es valdio.
    return true;

}

// - Funciones auxiliares:
function contieneNumeros(entrada) {
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    entrada = String(entrada);

    for (const caracter of entrada) {
        if (numeros.includes(caracter)) {
            return true;
        }
    }
    return false;
}

function esDniValido(dni) {
    // Variables iniciales.
    const ABCEDARIO = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    // Pedimos los datos al usuario.
    dni = String(dni);
    let letraDNI = dni[0];
    let numeroDNI = dni.slice(1);

    // Comprobamos los datos.
    if (!numeroDNI || isNaN(numeroDNI)) {
        return false;
    }

    // Para la letra primero comprobamos que sea null o cadena vacia.
    if (!letraDNI) {
        return false;
    }

    // Despues de comprobar la letra le quitamos los espacios y la pasamos a mayuscula.
    // Esto lo hago despues de la anterior comprobacion, porque si la letra es null daria error el ejecutar estos metodos.
    letraDNI = letraDNI.trim().toUpperCase();

    if (letraDNI.length !== 1 || !ABCEDARIO.includes(letraDNI)) {
        return false;
    }

    if (numeroDNI < 10_000_000 || numeroDNI > 99_999_999) {
        return false;
    }

    // Finalmente comprobamos si la letra corresponde a la del DNI de forma calculada.
    let letraCalculadaDNI = ABCEDARIO[numeroDNI % 23];

    if (letraCalculadaDNI !== letraDNI) {
        return false;
    }

    // Si llegamos aqui entonces el DNI es correcto.
    return true;
}