// EJERCICIO 1
function ej1() {
    // Variables inicales.
    let resultado = "";

    // Pedimos las notas al usuario.
    let notaProyecto = Number(prompt("Introduce la nota del proyecto: "));
    let notaExamen = Number(prompt("Introduce la nota del examen: "));

    // Comprobamos que sean un numero.
    if (isNaN(notaProyecto) || isNaN(notaExamen)) {
        alert("Debes introducir un numero!");
        return;
    }

    // Comprobamos que las notas esten en el rango.
    if ((notaProyecto > 10 || notaProyecto < 0) || (notaExamen > 10 || notaExamen < 0)) {
        alert("La nota del proyecto y del examen debe estar entre 0  y 10.");
        return;
    }

    // Calculamos la media de las dos notas.
    let media = (notaProyecto + notaExamen) / 2;

    // Calculamos el resultado.
    switch (true) {
        case notaProyecto < 4.5 || notaExamen < 4.5:
            resultado = "suspenso";
            break;
        case media < 5:
            resultado = "suspenso";
            break;
        case media < 7:
            resultado = "aprobado";
            break;
        case media < 9:
            resultado = "notable";
            break;
        case media >= 9:
            resultado = "sobresaliente";
            break;
        default:
            break;
    }

    alert(`Tienes un ${resultado}.`);

}

// EJERCICIO 2
function ej2() {
    // Variables iniciales.
    const ABCEDARIO = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    // Pedimos los datos al usuario.
    let numeroDNI = Number(prompt("Introduce el numero del DNI: "));
    let letraDNI = prompt("Introduce la letra del DNI: ");

    // Comprobamos los datos.
    if (!numeroDNI || isNaN(numeroDNI)) {
        alert("Debes introducir un numero en el DNI.");
        return;
    }

    // Para la letra primero comprobamos que sea null o cadena vacia.
    if (!letraDNI) {
        alert("Debes introducir una letra para el DNI.");
        return;
    }

    // Despues de comprobar la letra le quitamos los espacios y la pasamos a mayuscula.
    // Esto lo hago despues de la anterior comprobacion, porque si la letra es null daria error el ejecutar estos metodos.
    letraDNI = letraDNI.trim().toUpperCase();

    if (letraDNI.length !== 1 || !ABCEDARIO.includes(letraDNI)) {
        alert("Debes introducir una letra valida para el DNI.");
        return;
    }

    if (numeroDNI < 10_000_000 || numeroDNI > 99_999_999) {
        alert("El numero del DNI tiene que tener 8 cifras.");
        return;
    }

    // Finalmente comprobamos si la letra corresponde a la del DNI de forma calculada.
    let letraCalculadaDNI = ABCEDARIO[numeroDNI % 23];

    if (!(letraCalculadaDNI === letraDNI)) {
        alert("La letra del DNI no es correcta.");
        return;
    }
    
    // Si llegamos aqui entonces el DNI es correcto.
    alert("El DNI es valido!");
     
}

// EJERCICIO 3
function ej3() {
    // Tablas:
    
    // Tabla de multiplicar del 7.
    const div_tabla7 = document.getElementById("ej3_tabla7"); 
    for (let i = 1; i <= 10; i++) {
        div_tabla7.innerHTML += `<p>7 x ${i} = ${7 * i}</p>\n`;
    }

    // Tabla de sumar del 8.
    const div_tabla8 = document.getElementById("ej3_tabla8");
    let i8 = 1;
    while (i8 <= 10) {
        div_tabla8.innerHTML += `<p>8 + ${i8} = ${8 + i8}</p>\n`;
        i8++;
    }

    // Tabla de dividir del 9.
    const div_tabla9 = document.getElementById("ej3_tabla9");
    let i9 = 1;
    do {
        div_tabla9.innerHTML += `<p>9 / ${i9} = ${9 / i9}</p>\n`;
        i9++;
    } while (i9 <= 10);

    // Operaciones:
    let num1;
    let num2;

    // 125 / 8
    num1 = 125;
    num2 = 8;
    alert(`${num1} / ${num2} = ${num1 >> Math.log2(num2)}`);

    // 25 / 2
    num1 = 25;
    num2 = 2;
    alert(`${num1} / ${num2} = ${num1 >> Math.log2(num2) }`);

    // 40 x 4
    num1 = 40;
    num2 = 4;
    alert(`${num1} x ${num2} = ${num1 << Math.log2(num2) }`);

    // 10 x 16
    num1 = 10;
    num2 = 16;
    alert(`${num1} x ${num2} = ${num1 << Math.log2(num2) }`);
}