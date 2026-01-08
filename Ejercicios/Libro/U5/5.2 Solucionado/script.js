// --- 1. DEFINICIÓN DE CLASES (Pág. 148) ---

class Miembro {
    constructor(nombre, alta, estado) {
        this.nombre = nombre;
        this.alta = alta;
        this.estado = estado;
    }

    // Este método se guarda en el PROTOTIPO de Miembro
    cobrar() {
        console.log(`El miembro ${this.nombre} ha cobrado.`);
    }
}

class Profesor extends Miembro {
    constructor(nombre, alta, estado, nAlumnos) {
        super(nombre, alta, estado); // Llama al constructor padre
        this.nAlumnos = nAlumnos;    // Propiedad propia de Profesor
    }

    // Sobrescitura (Polimorfismo)
    cobrar() {
        console.log(`El Profesor ${this.nombre} ha cobrado su nómina.`);
    }
}

// --- 2. INSTANCIACIÓN ---
let unProfesor = new Profesor("Samuel Orta", "25/06/2021", "vigente", 30);

// --- 3. RECORRIDOS (Actividad 5.2 - Pág. 149) ---

console.log("--- RECORRIDO CON FOR...IN ---");
// El for...in está diseñado para recorrer claves de objetos
// Nota: Las clases ES6 definen los métodos como no-enumerables por defecto,
// por eso a veces no salen en el for..in simple, pero sí las propiedades heredadas.
for (let propiedad in unProfesor) {
    // Accedemos al valor usando la notación de corchetes
    console.log(`${propiedad}: ${unProfesor[propiedad]}`);
}

console.log("\n--- RECORRIDO CON Object.getOwnPropertyNames() ---");
// Esto devuelve un array solo con las claves PROPIAS del objeto
let propiedadesPropias = Object.getOwnPropertyNames(unProfesor);

// Como devuelve un array, aquí sí podemos usar for...of
for (let propiedad of propiedadesPropias) {
    console.log(propiedad);
}