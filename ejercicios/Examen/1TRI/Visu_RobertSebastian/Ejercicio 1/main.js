// Importamos la clase CentroComercial.
import { CentroComercial } from "./CentroComercial.js";

// Realizamos las pruebas.
let puertoVenecia = new CentroComercial("Puerto Venecia", "Z-40", 3, 50008);
puertoVenecia.agregarPlantasYLocales(2, 4);

let listadoTiendas = [
    { nombre: "Zara", planta: 1, local: 1 },
    { nombre: "Pull&Bear", planta: 1, local: 2 },
    { nombre: "Primor", planta: 2, local: 3 }
]
puertoVenecia.asignarTiendas(...listadoTiendas);

puertoVenecia.imprimeLocales();

// Prueba adicional:
puertoVenecia.modificarDireccion({ calle: "Enero", numero: 2, cp: 50300 });
console.log(puertoVenecia);