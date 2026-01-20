class Telefono {
    cpu;
    ram;
    almacenamiento;
    ancho;
    alto;
    numCamaras;

    constructor(cpu = null, ram = 0, almacenamiento = 0, ancho = 0, alto = 0, numCamaras = 0) {
        this.cpu = cpu;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.ancho = ancho;
        this.alto = alto;
        this.numCamaras = numCamaras;
    }

    toString() {
        return `Especificaciones:
        - CPU: ${this.cpu}
        - RAM: ${this.ram}
        - Almacenamiento: ${this.almacenamiento}
        - Ancho: ${this.ancho}
        - Alto: ${this.alto}
        - Camaras: ${this.numCamaras}
        `;
    }
}

let t1 = new Telefono("CPU4", 5, 5, 3, 6, 3);
console.log(t1.toString());

let t2 = new Telefono("CPU4", 5, 5, 3, 3);
console.log(t2.toString());

let t3 = new Telefono("CPU5");
console.log(t3.toString());

let t4 = new Telefono();
console.log(t4.toString());