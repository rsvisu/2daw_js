const numeros = [10, 20, 30, 40];
let total = numeros.reduce((total, actual) => total + actual, 0);
let promedio = total / numeros.length;
document.writeln(promedio); 