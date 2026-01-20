let myVar = setInterval(myTimer, 1000);
function myTimer() {
    let d = new Date();
    let t = d.toLocaleTimeString(); //Devuelve el valor de la hora en un string,
    document.getElementById("demo").innerHTML = t;
}