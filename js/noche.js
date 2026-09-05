const imagenesGaleria = document.querySelectorAll(".noche-galeria img");

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