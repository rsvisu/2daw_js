// EJERCICIO 1
function op1_ejercicio1() {
    // Pedimos el nombre y apellido.
    let nombre = prompt("Introduce tu nombre: ");
    let apellido = prompt("Introduce tu apellido: ");

    let fullName = nombre + " " + apellido;

    // Pedimos la edad.
    let edad = Number(prompt("Introduce tu edad: "))

    // Calculamos el año de nacimiento.
    let anioActual = new Date().getFullYear();
    let nacimiento = anioActual - edad;

    // Introducimos los valores en el HTML.
    let p_nombreCompleto = document.getElementById("nombreCompleto");
    p_nombreCompleto.innerHTML = fullName;

    let p_anioNacimiento = document.getElementById("anioNacimiento");
    p_anioNacimiento.innerHTML = nacimiento;
}

// EJERCICIO 2
function op1_ejercicio2() {
    // Pedimos el numero.
    let numero = Number(prompt("Introduce un numero:"));

    // Comprobamos si despues de la conversion no es un numero.
    if (isNaN(numero)) {
      alert("Tienes que introducir un numero!");
      
    } else {
      // Calculamos el exponencial.
      let resultado = numero.toExponential();

      // Lo mostramos en el HTML.
      let p_resultado = document.getElementById("op1_resultado2");
      p_resultado.innerHTML = resultado;
    }
}

// EJERCICIO 3
function op1_ejercicio3() {
    // Pedimos el numero.
    let numero = Number(prompt("Introduce un numero:"));

    // Comprobamos si despues de la conversion no es un numero.
    if (isNaN(numero)) {
      alert("Tienes que introducir un numero!");
      
    } else {
      // Calculamos si es par o impar.
      let par = numero % 2 == 0;

      // Asignamos el texto correspondiente a resultado.
      let resultado = "";
      if (par) {
        resultado = `El numero ${numero} es par.`;
      } else {
        resultado = `El numero ${numero} es impar.`;
      }

      // Lo mostramos en el HTML.
      let p_resultado = document.getElementById("op1_resultado3");
      p_resultado.innerHTML = resultado;
    }
}

// EJERCICIO 4
function op1_ejercicio4() {
    // Pedimos los numeros.
    let num1 = Number(prompt("Introduce el primero numero: "));
    let num2 = Number(prompt("Introduce el segundo numero: "));

    // Si son numeros calcuamos si son multiplos.
    if (isNaN(num1) || isNaN(num2)) {
        alert("Tienes que introducir un numero!");

    } else {
        let resultado = "";
        // Calculamos si son multiplos.
        let sonMultiplos = num1 % num2 === 0;

        if (sonMultiplos) {
            resultado = `El numero ${num1} es multiplo del numero ${num2}.`;
        } else {
            resultado = `El numero ${num1} no es multiplo del numero ${num2}.`;
        }

        // Lo mostramos en el HTML.
        let p_resultado = document.getElementById("op1_resultado4");
        p_resultado.innerHTML = resultado;
    }
}

// EJERCICIO 5
function op1_ejercicio5() {
    // Declaramos el parrafo del resultado.
    let p_resultado = document.getElementById("op1_resultado5");

    // Creamos el array.
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Lo iteramos y lo introducimos en el parrafo.
    for (let i = 0; i < meses.length; i++) {
        p_resultado.innerHTML += meses[i] + "<br>";
    }
}

// EJERCICIO 6
function op1_ejercicio6() {
    // Pedimos los numeros.
    let num1 = parseInt(prompt("Introduce el primero numero: "));
    let num2 = parseInt(prompt("Introduce el segundo numero: "));

    // Comprobamos que sean numeros.
    if (isNaN(num1) || isNaN(num2)) {
        alert("Tienes que introducir un numero!");

    // Comprobamos que sean positivos.
    } else if (num1 < 0 || num2 < 0) {
        alert("Los numeros tienen que ser positivos!");

    // Comparamos los numeros.
    } else {
        let resultado = "";

        if (num1 > num2) {
            resultado = `El numero ${num1} es mayor que el numero ${num2}.`;
        } else if (num2 > num1) {
            resultado = `El numero ${num2} es mayor que el numero ${num1}.`;
        } else {
            resultado = `El numero ${num1} es igual que el numero ${num2}.`;
        }

        // Lo mostramos en el HTML.
        let p_resultado = document.getElementById("op1_resultado6");
        p_resultado.innerHTML = resultado;

    }
}

// EJERCICIO 7
function op1_ejercicio7() {
    // Declaramos el parrafo del resultado.
    let p_resultado = document.getElementById("op1_resultado7");

    // Luego iteramos los primeros 30 numeros y lo introducimos en el parrafo.
    for (let i = 1; i <= 30; i++) {
        p_resultado.innerHTML += i + "<br>";
        
    }
}

// EJERCICIO 8
function op1_ejercicio8() {
    // Pedimos el numero.
    let num = parseInt(prompt("Introduce el numero: "));

    // Comprobamos que sea numero.
    if (isNaN(num)) {
        alert("Tiene que ser un numero!");

    // Comprobamos que sea positvo. 
    } else if (num < 0) {
        alert("El numero tiene que ser positivo!")

    } else {
        let resultado = 1;

        // Calculamos el factorial.
        for (let i = 1; i <= num; i++) {
            resultado *= i;

        }

        // Lo mostramos en el HTML.
        let p_resultado = document.getElementById("op1_resultado8");
        p_resultado.innerHTML = resultado;
    }
}

// EJERCICIO 9
function op1_ejercicio9() {
    // Pedimos la ciudad.
    let ciudad = prompt("¿Cual es tu ciudad favorita?");
    
    // Imprimimos el mensaje segun la ciudad.
    let p_resultado = document.getElementById("op1_resultado9");
    switch (ciudad.toLowerCase()) {
        case "zaragoza":
            p_resultado.innerHTML = "Te gusta Zaragoza.";
            break;
        case "barcelona":
            p_resultado.innerHTML = "Te gusta Barcelona.";
            break;
        case "madrid":
            p_resultado.innerHTML = "Te gusta Madrid.";
            break;
        default:
            p_resultado.innerHTML = "No conozco esa ciudad.";
            break;
    }
}