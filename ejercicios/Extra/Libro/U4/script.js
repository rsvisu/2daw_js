const PALABRA_SECRETA = "adivina";

function adivinaPalabra(palabra, ...letras) {
    let resultado = "";
    let completa = true;

    let i = 0;
    for (const letraPalabra of palabra) {
        if (letras.includes(letraPalabra)) {
            resultado += letraPalabra;
        } else {
            resultado += "-";
            completa = false;
        }
        i++;
    }

    return {resultado, completa};
}

document.addEventListener("DOMContentLoaded", () => {
    let formulario = document.getElementById("formulario");    
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        let entrada = formulario.elements["entrada"].value;

        let resultadoAdivina = adivinaPalabra(PALABRA_SECRETA, ...entrada);

        let parrafoResultado = document.getElementById("resultado");
        parrafoResultado.innerHTML = resultadoAdivina.resultado;

        if (resultadoAdivina.completa) {
            alert("Has adivinado la palabra!");
        }
        
    });
});