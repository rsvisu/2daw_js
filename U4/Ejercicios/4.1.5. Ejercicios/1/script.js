document.addEventListener("DOMContentLoaded", () => {
    function main(...args) {

        // Obtenemos la referencia del elemento del resultado.
        let divResultado = document.getElementById("resultado");

        // Guardamos el numero de elementos.
        let numElementos = args.length;

        // Imprimimos el numero de elementos.
        divResultado.innerHTML += `<p>Numeros de elementos: ${numElementos}</p>`;

        if (numElementos > 2) {
            // Copiamos el array.
            let argsModificado = [...args];

            // Intercambiamos los elementos.
            let temp = argsModificado[0];
            argsModificado[0] = args[2];
            argsModificado[2] = temp;

            // Imprimimos el args antiguo y nuevo.
            divResultado.innerHTML += `<p>Args antes: ${args}</p>`;
            divResultado.innerHTML += `<p>Args después: ${argsModificado}</p>`;

        }
    }

    main(1, 5, 6, 7, 8);
});