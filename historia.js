function toggleTexto(numero) {
    var contenidoTexto = document.getElementById("contenidoTexto" + numero);
    contenidoTexto.classList.toggle("mostrar");

    var icono = document.getElementById("icono" + numero);
    if (icono.innerHTML === "+") {
        icono.innerHTML = "-";
    } else {
        icono.innerHTML = "+";
    }
}
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})