document.addEventListener("DOMContentLoaded", function () {
    const bienvenida = document.getElementById("bienvenida");

    if (bienvenida) {
        bienvenida.addEventListener("mouseover", function () {
            bienvenida.style.backgroundColor = "#88bbcc"; // Azul claro más vivo
        });

        bienvenida.addEventListener("mouseout", function () {
            bienvenida.style.backgroundColor = "#88bbcc"; // Azul original más suave
        });
    }
});
// Carrusel

document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.querySelector(".carrusel-contenedor");
    const images = document.querySelectorAll(".carrusel img");
    let index = 0;
    let intervalo;

    function updateCarrusel() {
        const offset = -index * 100;
        contenedor.style.transform = `translateX(${offset}%)`;
    }

    function siguienteSlide() {
        index = (index + 1) % images.length;
        updateCarrusel();
    }

    function iniciarAutoDesplazamiento() {
        intervalo = setInterval(siguienteSlide, 3000);
    }

    document.querySelector(".next").addEventListener("click", function () {
        index = (index + 1) % images.length;
        updateCarrusel();
        reiniciarAutoDesplazamiento();
    });

    document.querySelector(".prev").addEventListener("click", function () {
        index = (index - 1 + images.length) % images.length;
        updateCarrusel();
        reiniciarAutoDesplazamiento();
    });

    function reiniciarAutoDesplazamiento() {
        clearInterval(intervalo);
        iniciarAutoDesplazamiento();
    }

    iniciarAutoDesplazamiento();
});


