// Variables
let resultado;

let x_view;
let y_view;

let x_page;
let y_page;

let tecla;
let code;

// Main
// Al cargar la pagina establecemos informacion inicial.
document.addEventListener("DOMContentLoaded", actualizarInformacion);

// Al mover el raton:
document.addEventListener("mousemove", function (event) {
    x_view = event.clientX;
    y_view = event.clientY
    x_page = event.pageX;
    y_page = event.pageY;

    actualizarColor("#FFFFFF");
    
});

// Al presionar una tecla:
document.addEventListener("keydown", function (event) {
    tecla = event.key;
    code = event.code;

    actualizarColor("#CCE6FF");
    actualizarInformacion();
});

// Al hacer click en el documento:
document.addEventListener("click", function () {
    actualizarColor("#FFFFCC");
})

// Funciones:
function actualizarInformacion() {
    resultado =
        `X respecto vista: ${x_view}<br>
        Y respecto vista: ${y_view}<br>
        X respecto documento: ${x_page}<br>
        Y respecto documento: ${y_page}<br>
        <br>
        Tecla presionada: ${tecla}<br>
        Codigo de la tecla presionada: ${code}`

    muestraInformacion(resultado);
}

function muestraInformacion(html) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = html;
}

function actualizarColor(hex) {
    const resultado = document.getElementById("resultado");
    resultado.style.backgroundColor = hex;
}