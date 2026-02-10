// - Main
document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const inputNombre = document.getElementById('nombre');
    const inputApellidos = document.getElementById('apellidos');
    const inputEdad = document.getElementById('edad');
    const inputNif = document.getElementById('nif');
    const inputEmail = document.getElementById('email');
    const selectProvincia = document.getElementById('provincia');
    const inputFecha = document.getElementById('fecha');
    const inputTelefono = document.getElementById('telefono');
    const inputHora = document.getElementById('hora');

    const divErrores = document.getElementById('errores');
    const divIntentos = document.getElementById('intentos');

    // Mostrar intentos inicial
    mostrarIntentos(divIntentos); // *Almacenar en una cookie el número de intentos de envío del formulario

    // Submit formulario
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function (e) {
        // Evitamos el envío del formulario
        e.preventDefault();

        // *Almacenar en una cookie el número de intentos de envío del formulario:
        // Incrementamos los intentos y actualizamos el contenedor de los intentos
        incrementarIntentos();
        mostrarIntentos(divIntentos);

        // Validación de los campos:
        let esFormularioCorrecto = validarFormulario(divErrores, inputNombre, inputApellidos, inputEdad, inputNif, inputEmail, selectProvincia, inputFecha, inputTelefono, inputHora);
        if (esFormularioCorrecto) {
            let enviar = confirm('El formulario es valido, desea enviarlo?');
            if (enviar) {
                formulario.submit();
            } else {
                alert('Envio cancelado');
            }
        }

    });

    // *Conversión a mayúsculas en campos de texto:
    [inputNombre, inputApellidos].forEach((input) => {
        input.addEventListener('blur', () => {
            input.value = input.value.toUpperCase();
        })
    })

})

// - Funciones
// Intentos formulario
function mostrarIntentos(divIntentos) {
    // Recuperamos los intentos, y si no hay lo consideramos como 0
    let intentos = obtenerCookie('intentos') || 0;

    // Establecemos el contenido del div
    divIntentos.innerHTML = `Intento de Envíos del formulario: ${intentos}`;
}

function incrementarIntentos() {
    // Declaramos la variable para la construccion de la cookie
    let cookie;

    // Recuperamos los intentos, y si no hay lo consideramos como 0
    let intentos = parseInt(obtenerCookie('intentos')) || 0;
    cookie = encodeURI(`intentos=${intentos + 1}`);

    // Guardamos la cookie
    document.cookie = cookie;
}

// Validar formulario:
function validarFormulario(divErrors, inputNombre, inputApellidos, inputEdad, inputNif, inputEmail, selectProvincia, inputFecha, inputTelefono, inputHora) {
    // Limpiamos los errores
    divErrors.innerHTML = '';

    // Suponemos que el formulario es correcto hasta que no lo sea
    let esCorrecto = true;

    // *Validación de los campos NOMBRE y APELLIDOS:
    if (inputNombre.value.length < 4) {
        esCorrecto = false;
        inputNombre.focus();
        divErrors.innerHTML += '- El nombre no es correcto <br>';
    }

    if (inputApellidos.value.length < 4) {
        esCorrecto = false;
        inputApellidos.focus();
        divErrors.innerHTML += '- Los apellidos no son correctos <br>';
    }

    // *Validación del campo EDAD:
    if (!esNumero(inputEdad.value) || inputEdad.value < 0 || inputEdad.value > 105) {
        esCorrecto = false;
        inputEdad.focus();
        divErrors.innerHTML += '- La edad no es correcta <br>';
    }

    // *Validación del campo NIF:
    /*
        ^            -> inicio de la cadena
        [0-9]{8}     -> exactamente 8 números
        -            -> guion obligatorio
        [A-Za-z]     -> una letra
        $            -> fin de la cadena
    */
    let expNif = /^[0-9]{8}-[A-Za-z]$/;
    if (!expNif.test(inputNif.value)) {
        esCorrecto = false;
        inputNif.focus();
        divErrors.innerHTML += '- El NIF no es correcto <br>';
    }

    // *Validación del campo E-MAIL:
    /*
        ^                -> inicio
        [^@\s]+          -> uno o más caracteres que no sean @ ni espacios
        @                -> arroba
        [^@\s]+          -> dominio
        \.               -> punto
        [^@\s]+          -> extensión
        $                -> fin
    */
    let expEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!expEmail.test(inputEmail.value)) {
        esCorrecto = false;
        inputEmail.focus();
        divErrors.innerHTML += '- El email no es correcto <br>';
    }

    // *Validación del campo PROVINCIA:
    if (selectProvincia.selectedIndex === 0) {
        esCorrecto = false;
        selectProvincia.focus();
        divErrors.innerHTML += '- Debe seleccionar una provincia <br>';
    }

    // *Validación del campo FECHA:
    /*
        ^                -> inicio
        \d{2}            -> dos dígitos (día)
        [\/-]            -> separador / o -
        \d{2}            -> dos dígitos (mes)
        [\/-]            -> separador / o -
        \d{4}            -> cuatro dígitos (año)
        $                -> fin
    */
    let expFecha = /^\d{2}[\/-]\d{2}[\/-]\d{4}$/;
    if (!expFecha.test(inputFecha.value)) {
        esCorrecto = false;
        inputFecha.focus();
        divErrors.innerHTML += '- La fecha no es correcta <br>';
    }

    // *Validación del campo TELÉFONO:
    /*
        ^            -> inicio
        \d{9}        -> exactamente 9 dígitos
        $            -> fin
    */
    let expTelefono = /^\d{9}$/;
    if (!expTelefono.test(inputTelefono.value)) {
        esCorrecto = false;
        inputTelefono.focus();
        divErrors.innerHTML += '- El teléfono no es correcto <br>';
    }

    // *Validación del campo HORA:
    /*
        ^            -> inicio
        \d{2}        -> dos dígitos (hora)
        :            -> dos puntos
        \d{2}        -> dos dígitos (minutos)
        $            -> fin
    */
    let expHora = /^\d{2}:\d{2}$/;
    if (!expHora.test(inputHora.value)) {
        esCorrecto = false;
        inputHora.focus();
        divErrors.innerHTML += '- La hora no es correcta <br>';
    }

    return esCorrecto;
}

// - Helpers
function obtenerCookie(name) {
    let cookies = document.cookie;
    if (!cookies) {
        return undefined;
    }

    cookies = decodeURI(cookies);
    cookies = cookies.split(';');

    for (const cookie of cookies) {
        let cookie_splited = cookie.split('=');
        if (cookie_splited[0].trim() === name.trim()) {
            return cookie_splited[1];
        }
    }

    return undefined;
}

function esNumero(input) {
    return !isNaN(input);
}