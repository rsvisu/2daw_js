// Main
document.addEventListener("DOMContentLoaded", function () {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    mensaje("Fuera");

    img1.addEventListener("mouseover", () => mensaje("Encima de carretera"));
    img1.addEventListener("mouseout", () => mensaje("Fuera"));

    img2.addEventListener("mouseover", () => mensaje("Encima de panda"));
    img2.addEventListener("mouseout", () => mensaje("Fuera"));
});

// Funciones
function mensaje(msj) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = msj;
}