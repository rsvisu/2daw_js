// Creacion de la funcion constructora.
function Persona(nombre, apellido, edad, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.correo = correo;
}

// Creacion de los objetos.
let personas = [
    new Persona("Roberto", "Martínez", 22, "roberto.martinez@tuempresa.com"),
    new Persona("Antonio", "López", 25, "antonio.lopez@tuempresa.com"),
    new Persona("Javier", "Rodríguez", 18, "javier.rodriguez@tuempresa.com"),
    new Persona("Eva", "Teruel", 33, "eva.teruel@tuempresa.com")
];

// Calculamos la media.
let total = 0;
let numPersonas = personas.length;

for (const persona of personas) {
    total += persona.edad;
}

let media = total / numPersonas;

document.body.innerHTML = `<h1>La media es: ${media}</h1>`;