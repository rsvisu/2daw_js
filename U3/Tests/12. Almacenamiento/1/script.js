//El objeto Storage nos permite almacenar datos de manera local en el navegador
//y sin necesidad de realizar conexión a una base de datos.
function clicador() {
    //validacion para comprobar que el objeto es compatible con tu navegador
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Has hecho click " + localStorage.clickcount + " veces desde la primera vez.";
    } else {
        document.getElementById("result").innerHTML = "Tu navegador no soporta almacenamiento web";
    }
}
//localStorage.setItem('Nombre', 'Alvaro Enrique') Guardar datos
//localStorage.getItem('Nombre') Recuperar datos
//localStorage.removeItem(Nombre) Eliminar elementos
//localStorage.clear() Limpiar todo el storage