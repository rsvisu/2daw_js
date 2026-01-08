// Variables.
const CLAVE = 2204;
let saldo = 10_000;
let logeado = false;
let operacion = "";
let funcionalidad = null; 

// - Operaciones

// Añadimos el valor al final del input.
function anadirNumero(valor) {
    // Si se esta consultando el saldo impedimos que se añaden numeros.
    if (funcionalidad == "consultarSaldo") {
        return;
    }

    // Input del usuario.
    const input_pantalla = document.getElementById("pantalla");

    // Añadimos el valor.
    input_pantalla.value += valor;
}

function borrar() {
    // Si se esta consultando el saldo impedimos que se borren numeros.
    if (funcionalidad == "consultarSaldo") {
        return;
    }

    // Input del usuario.
    const input_pantalla = document.getElementById("pantalla");
    let cadena = input_pantalla.value;

    // Declaramos la cadena nueva a asignar a resultado.
    let cadenaRestada = cadena.substr(0, cadena.length - 1);

    // Asignamos la cadena nueva al resultado.
    input_pantalla.value = cadenaRestada;

}

function aceptar() {
    // Input del usuario.
    const input_pantalla = document.getElementById("pantalla");
    const valor_pantalla = Number(input_pantalla.value);

    if (logeado) {
        switch (funcionalidad) {
            case "consultarSaldo":
                // No hacemos nada.
                break;
            case "restarSaldo":
                if (valor_pantalla > saldo) {
                    alert("El saldo a restar supera al saldo actual.")
                } else {
                    saldo = saldo - Number(valor_pantalla);
                    alert("Saldo restado con exito!")
                    input_pantalla.value = "";
                }
                break;
        
            default:
                alert("Debes elegir una funcionalidad.")
        }

    // Si no esta logueado, hacemos logearse.
    } else {
        // Cadena del input.
        let cadenaInput = "";
        cadenaInput = input_pantalla.value;

        if (cadenaInput == CLAVE) {
            logeado = true;
            input_pantalla.value = "";

            // Mensaje informativo.
            let divInfo = document.getElementById("info");
            divInfo.innerHTML = "<p style='color: green'>Estas logueado.</p>"

            // Elementos adicionales en caso de login.
            let divOperaciones = document.getElementById("operaciones");
            divOperaciones.style.display = "block";

        } else {
            alert("Clave incorrecta.");
            input_pantalla.value = "";
        }
    }
}

// - Funcionalidades

// Funciones
function quitarApretadoDeOperaciones() {
    let divOperaciones = document.getElementById("operaciones");
    let botones = divOperaciones.getElementsByTagName("button");
    for (const boton of botones) {
        boton.classList.remove("apretado");
    }
}

function consultarSaldo() {
    quitarApretadoDeOperaciones();
    document.getElementById("consultarSaldo").classList.add("apretado");
    

    // Añadimos el saldo a la pantalla. y establecemos la funcionalidad.
    const input_pantalla = document.getElementById("pantalla");
    input_pantalla.value = saldo;

    funcionalidad = "consultarSaldo";
}

function restarSaldo() {
    quitarApretadoDeOperaciones();
    document.getElementById("restarSaldo").classList.add("apretado");

    // Establecemos la funcionalidad.
    funcionalidad = "restarSaldo";

}

