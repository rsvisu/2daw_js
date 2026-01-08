let x = nomina(15000, 18, 14);
document.getElementById("demo1").innerHTML = x;

function nomina(salarioBruto, retencion, numeroPagas) {
    let salarioNeto = salarioBruto * (1 - (retencion / 100)) / numeroPagas
    return salarioNeto;
}

