function main(event) {
    event.preventDefault()

    let salarioBruto = Number(document.getElementById("salarioBruto").value);
    let retencion = Number(document.getElementById("retencion").value);
    let numeroPagas = Number(document.getElementById("numeroPagas").value);

    document.getElementById("demo1").innerHTML = nomina(salarioBruto, retencion, numeroPagas);;
}

function nomina(salarioBruto, retencion, numeroPagas) {
    let salarioNeto = salarioBruto * (1 - (retencion / 100)) / numeroPagas
    return salarioNeto;
}

