function ej1() {
    history.back();
}

function ej2() {
    // Abrir ventana popup.
    const ventana1 = window.open("", "", "width=400,height=300");
    ventana1.document.write("Prueba");

    // Abrir ventana aparte.
    const ventana2 = window.open();
    ventana2.document.write("Prueba");
}

function ej3() {
    // Parrafo del resultado.
    const p_resultado = document.getElementById("ej3_resultado");
    p_resultado.innerHTML = "";

    // Variables.
    let numNoPrimos = 0;

    // Bucle que recorre del 1 al 500.
    for (let i = 1; i <= 500; i++) {
        if (i % 3 == 0) {
            p_resultado.innerHTML += i + "<br>";
        }

        if (!esPrimo(i)) {
            numNoPrimos++;
        }

    }

    p_resultado.innerHTML += "Numero de no primos: " + numNoPrimos;

    // Funciones
    function esPrimo(num) {
        // Si el numero es menor de 2 no es primo.
        if (num < 2) {
            return false;
        }

        // Si al dividir todos los numeros desde 2 a la
        // raiz cuadrada del numero con el numero da alguna
        // operacion resto 0, el numero no es primo.
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false
            }

        }

        // En cualquier otro caso el numero es primo.
        return true;

    }
}

function ej4() {
    // Array inicial.
    let listaNumeros = [7, 21, 34, 53, 78, 83, 23, 5, 93, 25, 44];

    // Variables.
    let min = listaNumeros[0];
    let max = listaNumeros[0];

    // Iteramos el array y guardamos el numero minimo y maximo.
    for (let i = 1; i < listaNumeros.length; i++) {
        const element = listaNumeros[i];

        if (element < min) {
            min = element
        }

        if (element > max) {
            max = element;
        }
    }

    // Mostramos el resultado.
    alert(`Numero minimo: ${min}\nNumero maximo: ${max}`)
}

function ej4_ampliacion() {
    // Cadena introducida del usuario.
    let entradaNumeros = prompt("Introduce una lista de numero separadas por coma:");
    // Si la cadena esta vacia o es null lanzamos un mensaje de error 
    // y paramos la ejecucion.
    if (!entradaNumeros) {
        alert("Debes introducir algo.")
        return;
    }
    // Convertirmos la cadena a un array. 
    let listaNumeros = entradaNumeros.split(",");

    // Variables.
    let min = listaNumeros[0];
    let max = listaNumeros[0];

    // Iteramos el array y guardamos el numero minimo y maximo.
    for (let i = 1; i < listaNumeros.length; i++) {
        const element = listaNumeros[i];

        // Si el elemento no es un numero valido lanzamos un mensaje de error 
        // y paramos la ejecucion.
        if (isNaN(Number(element))) {
            alert("No se ha introducido un valor valido.")
            return;
        }

        if (element < min) {
            min = element
        }

        if (element > max) {
            max = element;
        }
    }

    // Mostramos el resultado.
    alert(`Numero minimo: ${min}\nNumero maximo: ${max}`)
}

function ej5() {
    // Definicion de tallas.
    let grande = ["XXL", "XL", "L"];
    let mediana = ["M"];
    let pequena = ["S", "XS", "XXS"];

    // Entrada del usuario.
    let entrada = prompt("Introduce la talla: ");
    entrada = entrada.toUpperCase().trim();

    // Mensaje segun la talla.
    switch (true) {
        case grande.includes(entrada):
            alert("Es una talla grande.");
            break;
        case mediana.includes(entrada):
            alert("Es una talla mediana.");
            break;
        case pequena.includes(entrada):
            alert("Es una talla pequeña.");
            break;
        default:
            alert("La talla introducida no es valida.");
            break;
    }

}

function ej6() {
    // Entrada del usuario.
    let r = Number(prompt("Introduce el radio de la circunferencia: "));

    // Comprobacion de la entrada.
    if (!r || isNaN(r)) {
        alert("Entrada no válida.");
        return;
    }

    // Calculos.
    let L = 2 * Math.PI * r;

    // Mostramos el resultado por pantalla.
    alert(`La longuitud es de: ${L}.`);

}

function ej7() {
    // Arrays del sorteo.
    let numeros = [];
    let estrellas = [];

    // Generacion de numeros aleatorios.

    // - Numeros:
    for (let i = 0; i < 5; i++) {
        let numAleatorio = Math.random();
        numAleatorio *= 50;
        numAleatorio = Math.round(numAleatorio);

        numeros.push(numAleatorio);
    }

    // - Estrellas:
    for (let i = 0; i < 2; i++) {
        let numAleatorio = Math.random();
        numAleatorio *= 10;
        numAleatorio = Math.round(numAleatorio);

        estrellas.push(numAleatorio);
    }

    // Los mostramos por pantalla.
    alert(`Numeros: ${numeros}\nEstrellas: ${estrellas}`);
}

function ej8() {
    // Definicion de filas y columnas por el usuario.
    let filas = Number(prompt("Introduce el numero de filas: "));
    let columnas = Number(prompt("Introduce el numero de columnas: "));

    // Comprobamos los valores.
    if (isNaN(filas) || isNaN(columnas)) {
        alert("Debes introducir valores numericos.")
        return;
    }

    if (!filas || !columnas) {
        alert("Debes introducir un valor para las columnas o filas.");
        return;
    }

    // Creamos la matriz.
    let matriz = [];
    for (let x = 0; x < filas; x++) {
        matriz[x] = new Array(columnas);
    }

    // Recorremos la matriz para sacar las coordenadas y meterlas en la string coordenadas.
    let coordenadas = "";
    for (let x = 0; x < matriz.length; x++) {
        for (let y = 0; y < matriz[0].length; y++) {
            coordenadas += `(${x + 1},${y + 1}), `;
        }
    }

    // Mostramos todas las coordenadas.
    alert(coordenadas);
}

function ej9(valor) {
    // -- Programa principal --.

    // Input del usuario.
    const input_resultado = document.getElementById("resultado_ej9");

    // Operaciones:

    // - Si es igual, operar.
    if (valor == "=") {
        // Cadena del input.
        let cadenaInput = "";
        cadenaInput = input_resultado.value;

        // Si el primer digito es negativo lo recordamos y lo quitamos de la cadena por ahora.
        let primerNumNegativo = false;
        if (cadenaInput.charAt(0) == "-") {
            cadenaInput = cadenaInput.substring(1);
            primerNumNegativo = true;
        }

        // Operaciones validas.
        let operaciones = ["+", "-", "*", "/"];

        // Recorremos las operaciones validas comprobando si esta presente en la cadena
        // y separando la cadena segun el operador existente.
        let numOperadores = 0;
        let numeros = [];
        for (const operacion of operaciones) {

            // Si el numero de operadores es mayor a 1 nos salimos ya del for
            // porque ya no tiene sentido seguir buscando y separando ya que
            // el programa no acepta mas de un operador.
            if (numOperadores > 1) {
                break;
            }

            // Si la cadena incluye la operacion de la iteracion actual.
            if (cadenaInput.includes(operacion)) {

                // Separamos la cadena.
                numeros = cadenaInput.split(operacion);

                // Si la longuitud es mayor de dos significa que hay dos o mas operadores iguales 
                // por lo que establecemos el resultado a ERROR y paramos la ejecucion.
                if (numeros.length > 2) {
                    input_resultado.value = "ERROR";
                    alert("Solo se acepta una operacion a la vez.");
                    return;
                }

                // En el caso que tenga un menos al principio lo hemos quitado
                // para poder realizar el split bien y ahora lo volvemos a añadir.
                // Esto sirve para que en el caso de que la operacion sea una resta separe la cadena bien.
                if (primerNumNegativo) {
                    numeros[0] = "-" + numeros[0];
                }

                // Guardamos el numero de operadores existentes.
                numOperadores++;
            }

        }

        // Si hay mas de una operacion establecemos el resultado a ERROR y paramos la ejecucion.
        if (numOperadores > 1) {
            input_resultado.value = "ERROR";
            alert("Solo se acepta una operacion a la vez.");
            return;
        }

        // Si no existe ninguna operacion no hacemos nada y paramos la ejecucion.
        if (numOperadores == 0) {
            return;
        }

        // Metemos las partes en dos variables.
        let num1 = Number(numeros[0]);
        let num2 = Number(numeros[1]);

        // Si cualquiera de los numeros no es valido establecemos el resultado a ERROR.
        if (isNaN(num1) || isNaN(num2)) {
            input_resultado.value = "ERROR";
            alert("Los numeros a operar no son validos.");
            return;
        }


        // Si solo hay una operacion y los numeros son validos operamos segun el tipo que es.
        switch (true) {
            case cadenaInput.includes("+"): input_resultado.value = num1 + num2; break;
            case cadenaInput.includes("-"): input_resultado.value = num1 - num2; break;
            case cadenaInput.includes("/"): input_resultado.value = num1 / num2; break;
            case cadenaInput.includes("*"): input_resultado.value = num1 * num2; break;
            default: alert("Error inesperado."); break;
        }
    }

    // - Si es borrar, borrar el ultimo caracter.
    else if (valor == "del") {
        // Declaramos la cadena nueva a asignar a resultado.
        let cadenaRestada = "";

        // En caso de que el resultado sea ERROR dejamos vacia la cadena nueva.
        if (input_resultado.value != "ERROR") {
            // Si la cadena no es ERROR creamos una cadena nueva a partir de la cadena actual quitandole el ultimo caracter.
            cadenaRestada = input_resultado.value.substring(0, input_resultado.value.length - 1);
        }

        // Asignamos la cadena nueva al resultado.
        input_resultado.value = cadenaRestada;
    }

    // - Si no es ningun de los anteriores, añadir el valor al final del input.
    else {
        // Si la cadena del input es ERROR, primero limpiamos el input y luego añadimos el valor.
        if (input_resultado.value == "ERROR") {
            input_resultado.value = "";
        }
        input_resultado.value += valor;
    }
}

function ej9_ampliacion(valor) {
    // -- Programa principal --.

    // Input del usuario.
    const input_resultado = document.getElementById("resultado_ej9_ampliacion");

    // Operaciones:

    // - Si es igual, operar.
    if (valor == "=") {
        // Cadena del input.
        let cadenaInput = "";
        cadenaInput = input_resultado.value;

        // Si el primer digito es negativo lo recordamos y lo quitamos de la cadena por ahora.
        let primerNumNegativo = false;
        if (cadenaInput.charAt(0) == "-") {
            cadenaInput = cadenaInput.substring(1);
            primerNumNegativo = true;
        }

        // Operaciones generales validas.
        let operaciones = ["+", "-", "*", "/", "√"];

        // Recorremos las operaciones validas comprobando si esta presente en la cadena
        // y separando la cadena segun el operador existente.
        let numOperadores = 0;
        let numeros = [];
        for (const operacion of operaciones) {
            
            // Si el numero de operadores es mayor a 1 nos salimos ya del for
            // porque ya no tiene sentido seguir buscando y separando ya que
            // el programa no acepta mas de un operador.
            if (numOperadores > 1) {
                break;
            }

            // Si la cadena incluye la operacion de la iteracion actual.
            if (cadenaInput.includes(operacion)) {

                // Separamos la cadena.
                numeros = cadenaInput.split(operacion);

                // Si la longuitud es mayor de dos significa que hay dos o mas operadores iguales 
                // por lo que establecemos el resultado a ERROR y paramos la ejecucion.
                if (numeros.length > 2) {
                    input_resultado.value = "ERROR";
                    alert("Solo se acepta una operacion a la vez.");
                    return;
                }

                // En el caso que tenga un menos al principio lo hemos quitado
                // para poder realizar el split bien y ahora lo volvemos a añadir.
                // Esto sirve para que en el caso de que la operacion sea una resta separe la cadena bien.
                if (primerNumNegativo) {
                    numeros[0] = "-" + numeros[0];
                }

                // Guardamos el numero de operadores existentes.
                numOperadores++;
            }

        }

        // Si hay mas de una operacion establecemos el resultado a ERROR y paramos la ejecucion.
        if (numOperadores > 1) {
            input_resultado.value = "ERROR";
            alert("Solo se acepta una operacion a la vez.");
            return;
        }

        // Si no existe ninguna operacion no hacemos nada y paramos la ejecucion.
        if (numOperadores == 0) {
            return;
        }

        // Metemos las partes en dos variables.
        let num1 = Number(numeros[0]);
        let num2 = Number(numeros[1]);

        // Si cualquiera de los numeros no es valido establecemos el resultado a ERROR.
        if (isNaN(num1) || isNaN(num2)) {
            input_resultado.value = "ERROR";
            alert("Los numeros a operar no son validos.");
            return;
        }

        // Si solo hay una operacion y los numeros son validos operamos
        // segun el tipo que es, añadiendo ademas al historial la operacion pasada.
        let textarea_historial = document.getElementById("historialCalculadora_textarea_ej9_ampliacion");
        let resultado;

        switch (true) {
            case cadenaInput.includes("+"):
                resultado = num1 + num2;
                textarea_historial.innerHTML = `${num1} + ${num2} = ${resultado}\n` + textarea_historial.innerHTML;
                input_resultado.value = resultado;
                break;
            case cadenaInput.includes("-"):
                resultado = num1 - num2;
                textarea_historial.innerHTML = `${num1} - ${num2} = ${resultado}\n` + textarea_historial.innerHTML;
                input_resultado.value = resultado;
                break;
            case cadenaInput.includes("/"):
                resultado = num1 / num2;
                textarea_historial.innerHTML = `${num1} / ${num2} = ${resultado}\n` + textarea_historial.innerHTML;
                input_resultado.value = resultado;
                break;
            case cadenaInput.includes("*"):
                resultado = num1 * num2;
                textarea_historial.innerHTML = `${num1} * ${num2} = ${resultado}\n` + textarea_historial.innerHTML;
                input_resultado.value = resultado;
                break;
            case cadenaInput.includes("√"):
                resultado = Math.sqrt(num2);
                textarea_historial.innerHTML = `√${num2} = ${resultado}\n` + textarea_historial.innerHTML;
                input_resultado.value = resultado;
                break;
            default: alert("Error inesperado."); break;
        }
    }

    // - Si es borrar, borrar el ultimo caracter.
    else if (valor == "del") {
        // Declaramos la cadena nueva a asignar a resultado.
        let cadenaRestada = "";

        // En caso de que el resultado sea ERROR dejamos vacia la cadena nueva.
        if (input_resultado.value != "ERROR") {
            // Si la cadena no es ERROR creamos una cadena nueva a partir de la cadena actual quitandole el ultimo caracter.
            cadenaRestada = input_resultado.value.substring(0, input_resultado.value.length - 1);
        }

        // Asignamos la cadena nueva al resultado.
        input_resultado.value = cadenaRestada;
    }

    // - Si no es ningun de los anteriores, añadir el valor al final del input.
    else {
        // Si la cadena del input es ERROR, primero limpiamos el input y luego añadimos el valor.
        if (input_resultado.value == "ERROR") {
            input_resultado.value = "";
        }
        input_resultado.value += valor;
    }
}