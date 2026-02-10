/*
Árbol Dom 1
A partir de la página Web proporcionada y utilizando las funciones DOM, mostrar por
pantalla la siguiente información:
1. Número de enlaces de la página
2. Dirección a la que enlaza el penúltimo enlace
3. Numero de enlaces que enlazan a http://prueba
4. Número de enlaces del tercer párrafo
*/
document.addEventListener("DOMContentLoaded", () => {
    const divInformacion = document.getElementById('informacion');
    const enlaces = document.getElementsByTagName('a');
    const parrafos = document.getElementsByTagName('p');

    const h2 = document.createElement('h2');
    h2.textContent = 'Ejercicio 1:';
    divInformacion.append(h2);

    // Número de enlaces de la página
    let numEnlaces = enlaces.length;
    divInformacion.append(
        document.createTextNode(`Número de enlaces de la página: ${numEnlaces}`),
        document.createElement('br')
    );
    // Dirección a la que enlaza el penúltimo enlace
    let penultimoEnlace = [...enlaces].at(-2);
    divInformacion.append(
        document.createTextNode(`Número de enlaces de la página: ${penultimoEnlace}`),
        document.createElement('br')
    );
    // Numero de enlaces que enlazan a http://prueba
    let numEnlacesPrueba = [...enlaces].filter((a) => a.getAttribute('href') === "http://prueba").length;
    divInformacion.append(
        document.createTextNode(`Número de enlaces de la página: ${numEnlacesPrueba}`),
        document.createElement('br')
    );
    // Número de enlaces del tercer párrafo
    let numEnlaces3Parrafo = parrafos[2].getElementsByTagName('a').length;
    divInformacion.append(
        document.createTextNode(`Número de enlaces de la página: ${numEnlaces3Parrafo}`),
        document.createElement('br')
    );
});