/*
Árbol Dom 2:
A partir de la página Web proporcionada y utilizando las funciones DOM:
1. Se debe modificar el protocolo de todas las direcciones de los enlaces. De esta
forma, si un enlace apuntaba a http://prueba, ahora debe apuntar a https://prueba
2. Los párrafos de la página cuyo atributo class es igual a "importante" deben
modificarlo por "resaltado". El resto de párrafos deben incluir un
atributo class igual a "normal".
3. A los enlaces de la página cuyo atributo class sea igual a "importante", se les
añade un atributo "name" con un valor generado automáticamente y que sea
igual a "importante"+i, donde i es un valor numérico cuyo valor inicial es 0 para
el primer enlace.
*/
document.addEventListener("DOMContentLoaded", () => {
    const divInformacion = document.getElementById('informacion');
    const enlaces = document.getElementsByTagName('a');
    const parrafos = document.getElementsByTagName('p');

    divInformacion.innerHTML += '<h2>Ejercicio 2:</h2>';

    // 1. Se debe modificar el protocolo de todas las direcciones de los enlaces. De esta
    // forma, si un enlace apuntaba a http://prueba, ahora debe apuntar a https://prueba
    for (let enlace of enlaces) {
        if (enlace.href.startsWith('http://')) {
            enlace.href = enlace.href.replace('http://', 'https://');
        }
    }

    // 2. Los párrafos de la página cuyo atributo class es igual a "importante" deben
    // modificarlo por "resaltado". El resto de párrafos deben incluir un
    // atributo class igual a "normal"

});