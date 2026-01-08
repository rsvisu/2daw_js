const empleados = [
    { nombre: "Juan", salario: 4500 },
    { nombre: "María", salario: 6000 },
    { nombre: "Pedro", salario: 3500 },
    { nombre: "Luis", salario: 7000 }
];

let empleadosSalarioMayor5000 = empleados.filter((empleado) => empleado.salario > 5000);

for (const element of empleadosSalarioMayor5000) {
    document.writeln(element.nombre + "<br>");
}