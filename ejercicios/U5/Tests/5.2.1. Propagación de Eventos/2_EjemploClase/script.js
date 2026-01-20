document.addEventListener("DOMContentLoaded", function () {
    const div_padre = document.getElementById("padre"); 
    const btn_hijo = document.getElementById("hijo"); 

    div_padre.addEventListener("click", () => {
        console.log("padre");
    });

    btn_hijo.addEventListener("click", () => {
        console.log("hijo");
    });
});