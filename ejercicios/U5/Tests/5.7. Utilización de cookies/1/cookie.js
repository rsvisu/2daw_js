function setCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = nombre + "=" + encodeURIComponent(valor) +
        ";expires=" + fecha.toUTCString() + ";path=/";
}
//encodeURIComponent: codificar texto para que sea seguro usarlo en URLs y cookies
// caracteres que rompen URLs o cookies, por ejemplo:
// espacios
// acentos (á, é)
// símbolos (&, =, ?, /)

function getCookie(nombre) {
    let name = nombre + "=";
    let cookies = document.cookie.split(';');
    for (let c of cookies) {
        c = c.trim();
        if (c.indexOf(name) === 0) {
            return decodeURIComponent(c.substring(name.length));
        }
    }
    return null;
}

// decodeURIComponent: Para decodificar y volver al texto original

function deleteCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function guardar() {
    setCookie("tema", "oscuro", 5);
    alert("Cookie guardada");
}

function leer() {
    alert("Cookie: " + getCookie("tema"));
}

function borrar() {
    deleteCookie("tema");
    alert("Cookie borrada");
}