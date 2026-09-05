/* =====================================================
   VISOR DE IMÁGENES
===================================================== */

const imagenesGaleria = document.querySelectorAll(".galeria-galeria img");

const visor = document.getElementById("visor-imagen");

const imagenGrande = document.getElementById("imagen-grande");

const cerrarVisor = document.querySelector(".cerrar-visor");


imagenesGaleria.forEach(imagen => {

    imagen.addEventListener("click", function () {

        visor.style.display = "flex";

        imagenGrande.src = this.src;

    });

});


cerrarVisor.addEventListener("click", function () {

    visor.style.display = "none";

});


/* =====================================================
   CARRUSELES INFINITOS
===================================================== */

const carruseles = document.querySelectorAll(".galeria-galeria");

carruseles.forEach(carrusel => {

    const galeria = carrusel.querySelector(".galeria-contenedor");
    const anterior = carrusel.querySelector(".izquierda");
    const siguiente = carrusel.querySelector(".derecha");

    const imagenes = Array.from(galeria.querySelectorAll("img"));

    let posicion = 0;

    function actualizarCarrusel() {

        imagenes.forEach((imagen, indice) => {

            const nuevaPosicion =
                (indice - posicion + imagenes.length) % imagenes.length;

            imagen.style.order = nuevaPosicion;

        });

    }

    siguiente.addEventListener("click", () => {

        posicion++;

        if (posicion >= imagenes.length) {
            posicion = 0;
        }

        actualizarCarrusel();

    });

    anterior.addEventListener("click", () => {

        posicion--;

        if (posicion < 0) {
            posicion = imagenes.length - 1;
        }

        actualizarCarrusel();

    });

    actualizarCarrusel();

});