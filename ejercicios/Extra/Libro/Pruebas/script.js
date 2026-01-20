function Robot() { /**/ } // Constructor vacío

// 1. Defino algo en el almacén compartido
Robot.prototype.bateria = 100;

const r2d2 = new Robot();
const c3po = new Robot();

// 2. Modifico la instancia r2d2 (creo una propiedad propia)
r2d2.bateria = 50;

console.log("R2D2: " + r2d2.bateria);
console.log("C3PO: " + c3po.bateria);