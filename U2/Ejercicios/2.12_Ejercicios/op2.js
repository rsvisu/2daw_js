// EJERCICIO 1
function op2_ejercicio1() {
    // Declaramos el mensaje.
    let mensaje = `Hola a todo el Mundo!\n Que fácil es incluir 'comillas simples'\ny "comillas dobles"`;

    // Imprimimos el mensaje.
    alert(mensaje);
}

// EJERCICIO 2
function op2_ejercicio2() {
    // Pedimos los numeros.
    let num1 = Number(prompt("Introduce el dividendo: "));
    let num2 = Math.log2(Number(prompt("Introduce el divisor (múltiplo de dos): ")));

    // Comprobamos si son numeros.
    if (isNaN(num1) || isNaN(num2)) {
        alert("Tienes que introducir un numero!");

    } else {
        let resultado = num1 >> num2;
        console.log(resultado);

        // Lo mostramos en el HTML.
        let p_resultado = document.getElementById("op2_resultado2");
        p_resultado.innerHTML = resultado;
    } 
}

// EJERCICIO 3
function op2_ejercicio3() {
    // Pedimos los numeros.
    let num1 = Number(prompt("Introduce el multiplicando: "));
    let num2 = Math.log2(Number(prompt("Introduce el multiplicador (múltiplo de dos): ")));

    // Comprobamos si son numeros.
    if (isNaN(num1) || isNaN(num2)) {
        alert("Tienes que introducir un numero!");

    } else {
        let resultado = num1 << num2;
        console.log(resultado);

        // Lo mostramos en el HTML.
        let p_resultado = document.getElementById("op2_resultado3");
        p_resultado.innerHTML = resultado;
    } 
}

// EJERCICIO 4
function op2_ejercicio4() {
    // Imprimimos por consola el maximo valor en JS.
    console.log("Maximo valor en JS: ");
    console.log(Number.MAX_VALUE);

    // Imprimimos por consola el minimo valor en JS.
    console.log("Minimo valor en JS: ");
    console.log(Number.MIN_VALUE);

    // Imprimimos por consola el valor infinito.
    console.log("Valor infinito: ");
    console.log(Number.POSITIVE_INFINITY);
}

// EJERCICIO 5
function op2_ejercicio5() {
    // Variables del enunciado.
    let ovni = "OBJETO VOLADOR NO IDENTIFICADO";
    let info = "En un lugar de la mancha";

    // Cadena del usuario.
    let cadena = prompt("Introduce una cadena: ");

    // Logica para comprobar si son están escritas en mayúsculas o no.

    // Variables enunciados:
    let varsEnunciado = [ovni, info];
    let p_resultadoEnunciado = document.getElementById("rEnunciado");

    for (let i = 0; i < varsEnunciado.length; i++) {
        const element = varsEnunciado[i];

        // Añadimos el texto correspondiente al parrafo segun como sea la cadena.
        switch (element) {
            case element.toUpperCase():
                p_resultadoEnunciado.innerHTML += `"${element.toString()}" está todo en mayusculas.`;
                break;
            case element.toLowerCase():
                p_resultadoEnunciado.innerHTML += `"${element.toString()}" está todo en minusculas.`;
                break;
            default:
                p_resultadoEnunciado.innerHTML += `"${element.toString()}" está en minusculas y en mayusculas.`;
                break;
        }

        p_resultadoEnunciado.innerHTML += "<br>";
    }

    // Variable usuario:

    // Añadimos el texto correspondiente al parrafo segun como sea la cadena.
    let p_resultado = document.getElementById("op2_resultado5");

    switch (cadena) {
        case cadena.toUpperCase():
            p_resultado.innerHTML += `"${cadena.toString()}" está todo en mayusculas.`;
            break;
        case cadena.toLowerCase():
            p_resultado.innerHTML += `"${cadena.toString()}" está todo en minusculas.`;
            break;
        default:
            p_resultado.innerHTML += `"${cadena.toString()}" está en minusculas y en mayusculas.`;
            break;
    }
}