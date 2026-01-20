const frase = "Esta es una frase de prueba para el ejemplo de iteradores en JavaScript";
let listaFrase = frase.split(" ");
let setPalabrasUnicas = new Set(listaFrase);
let listaPalabrasUnicas = [...setPalabrasUnicas]
for (const element of listaPalabrasUnicas) {
    document.writeln(element + "<br>");
}