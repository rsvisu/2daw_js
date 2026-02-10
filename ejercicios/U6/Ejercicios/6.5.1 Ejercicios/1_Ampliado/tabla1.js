// Main
document.addEventListener('DOMContentLoaded', main);

function main() {

}

function transformarEnEditable(caller) {
    let tabla = document.getElementsByTagName('table')[0];
    resetearTodasFilas(tabla);
    estilizarEditable(caller);

    //
    const fila = caller.closest('tr');
    const celdas = [...fila.children];
    celdas.pop();   // Quitamos el ultimo que es el boton de editar
    celdas.forEach((celda) => {
        contenidoNodoAInputText(celda);

    });
}

function estilizarEditable(caller) {
    // Poner la clase selected al que ha ejecutado la funcion y cambiar texto a "En edicion"
    const fila = caller.closest('tr');
    fila.classList.add('selected');
    caller.innerText = 'En edicion';
}

function resetearTodasFilas(tabla) {
    // Quitar selected en todos
    const filas = [...tabla.rows];
    filas.forEach((fila) => fila.classList.remove('selected'));

    // Poner el texto a "Editar" a todos
    const spans = [...tabla.getElementsByTagName('span')];
    spans.forEach(span => span.innerText = 'Editar');

    // Cambiar a texto todos los inputs
    filas.forEach((fila) => {
        let celdas = [...fila.children];
        celdas.forEach((celda) => inputTextATexto(celda));
    });
}

function contenidoNodoAInputText(nodo) {
    let valorActual = nodo.textContent;
    if (nodo.children.length === 0) {
        nodo.innerHTML = `<input type="text" value="${valorActual}" />`;
    }
}

function inputTextATexto(nodo) {
    let input = nodo.getElementsByTagName('input')[0];
    if (input) {
        nodo.innerHTML = input.value;
    }
}