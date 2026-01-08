//Math.exp(10) Explicación: Devuelve el número E elevado a 10
document.write(Math.exp(10));
document.write("<br>");
//Math.pow(2,10)) Explicación Devuelve 2 elevado a 10
document.write(Math.pow(2, 10));
document.write("<br>");
//Ejercicio: Haz un script que calcules dos números de forma aleatoria, por ejemplo a y b. Luego opera “a” elevado a “b”.
var a = Math.round(Math.random() * 100000000);
var b = Math.round(Math.random() * 10);
var resultado = Math.pow(a, b);
document.write(resultado);
document.write("<br>");