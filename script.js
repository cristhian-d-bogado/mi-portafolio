const elementosScroll =
    document.querySelectorAll(".aparecer-scroll");

const observador = new IntersectionObserver(function(entradas) {

    entradas.forEach(function(entrada) {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

        } else {

            entrada.target.classList.remove("visible");

        }

    });

}, {
    threshold: 0.15
});

elementosScroll.forEach(function(elemento) {

    observador.observe(elemento);

});


const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
    menu.classList.toggle("activo");
});


const enlacesMenu = document.querySelectorAll(".menu a");

enlacesMenu.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("activo");
    });
});
