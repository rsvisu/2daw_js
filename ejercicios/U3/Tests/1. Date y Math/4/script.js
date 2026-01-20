// Ejercicio: Haz un script que muestre la fecha actual y por consola saca el mes actual. Haz una 
// comparación y si es Octubre muestra por pantalla la hora actual.
let fecha_actual = new Date();
let mes = fecha_actual.getMonth() + 1;
console.log(mes);
if (mes == 10) {
    document.write(fecha_actual);
    document.write("<br>");
} else {
    console.log("Como no es Octubre No hago nada");
}