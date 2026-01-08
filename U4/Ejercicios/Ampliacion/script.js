// Presupuesto
import { Presupuesto } from "./Presupuesto.js";

function pruebaPresupuesto() {
    alert("Presupuesto actual: " + Presupuesto.mostrarPresupuesto());

    let num = prompt("Introduce el presupuesto nuevo: ")
    let r = Presupuesto.actualizarPresupuesto(num);

    if (r == -1) {
        alert("El presupuesto no es valido.")
    } else {
        alert("Presupuesto actualizado: " + Presupuesto.mostrarPresupuesto());
    }
}

document.getElementById("btn-presupuesto").addEventListener("click", pruebaPresupuesto);

// Gastos
import { CrearGasto } from "./Gasto.js";

function pruebaGastos() {
    let gasto = new CrearGasto("Ordenador", 200, "10/10/2024", "Informatica", "Personal");
    alert("Gasto actual: " + gasto.mostrarGasto());

    let desc = prompt("Nueva descripcion de gasto: ");
    gasto.actualizarDescripcion(desc);
    let num = prompt("Nuevo valor de gasto: ");
    gasto.actualizarValor(num);

    alert("Gasto actualizado: " + gasto.mostrarGasto());
}

document.getElementById("btn-gastos").addEventListener("click", pruebaGastos);