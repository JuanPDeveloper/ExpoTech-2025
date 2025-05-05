const $contenedorIdiomas = document.getElementById("contenedorIdiomas");
const $cambiarIdioma = document.querySelector(".cambiarIdioma");

$cambiarIdioma.addEventListener("click", () => {
    if ($contenedorIdiomas.style.display === "none") {
        $contenedorIdiomas.style.display = "block";
    } else {
        $contenedorIdiomas.style.display = "none";
    }
});