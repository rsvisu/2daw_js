function ej1() {

    let resultado = validarMatriculas("15646P", "34364S");
    alert(resultado ? "Correcta/s" : "Incorrecta/s");

    function validarMatriculas() {
        for (const matricula of arguments) {
            if (!validarMatricula(matricula)) {
                return false;
            }
        }
        return true;
    }

    function validarMatricula(matricula) {

        // Si el numero de caracteres no es 6 la validacion es incorrecta.
        if (matricula.length != 6) {
            console.log("Numero de caracteres no es 6");
            return false;
        }

        // Si los primeros 5 caracteres no son numeros la validacion es incorrecta.
        let parteNumeros = matricula.substr(0, 5);
        if (isNaN(parteNumeros)) {
            console.log("Primeros 5 caracteres no son numeros");
            return false;
        }

        // Si el primer numero no es un impar la validacion es incorrecta. 
        let primerNumero = matricula[0];
        if (primerNumero % 2 != 1) {
            console.log("Primer numero no es un impar");
            return false;
        }

        // Si el ultimo caracter no es "P" o "S" la validacion es incorrecta. 
        let ultimoCaracter = matricula[5];
        if (!(ultimoCaracter == "P" || ultimoCaracter == "S")) {
            console.log("Ultimo argumento no es 'P' o 'S'");
            return false;
        }
        
        // Finalmente si se ha pasado todos los filtros anteriores la validacion es correcta.
        return true;

    }
}

function ej2() {
    let resultado = validarNumeros("803345678", 912345678);
    alert(resultado ? "Correcto/s" : "Incorrecto/s");

    function validarNumeros() {
        for (const numero of arguments) {
            if (!validarNumero(numero)) {
                return false;
            }
        }
        return true;
    }

    function validarNumero(numero) {
        // Transformamos siempre el numero a un string para trabajar mejor con el.
        numero = numero.toString();

        // Si no contiente solo numeros la validacion es incorrecta.
        if (isNaN(numero)) {
            console.log("No contiene solo numeros");
            return false;
        }

        // Si la longitud no es 9 la validacion es incorrecta.
        if (numero.length != 9) {
            console.log("La longitud no es 9");
            return false;
        }

        // Si el numero es negativo la validacion es incorrecta.
        if (Number(numero) < 0) {
            console.log("El numero es negativo");
            return false;
        }
        
        // Si no empieza por 8 o 9 la validacion es incorrecta.
        if (!(numero[0] == "8" || numero[0] == "9")) {
            console.log("No empieza por 8 o 9");
            return false;
        }

        // Si hay dos ceros en la segunda y tercera posición la validacion es incorrecta.
        if (numero[1] == "0" && numero[2] == "0") {
            console.log("Hay dos ceros en la segunda y tercera posición");
            return false;
        }

        // Finalmente si se ha pasado todos los filtros anteriores la validacion es correcta.
        return true;

    }
}