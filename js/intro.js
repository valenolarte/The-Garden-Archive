document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");


    /*
     * COMPROBAR SI LA INTRO YA SE MOSTRÓ
     *
     * Si ya se mostró durante esta sesión,
     * eliminamos la pantalla inmediatamente.
     */

    if (sessionStorage.getItem("introVista")) {

        intro.remove();

        // Activamos inmediatamente las animaciones
        // de los personajes.
        document.body.classList.add("intro-terminada");

        return;
    }


    /*
     * Guardamos que la intro ya fue vista.
     */

    sessionStorage.setItem("introVista", "true");


    /*
     * Tiempo que dura la animación.
     */

    const duracionAnimacion = 11500;


    /*
     * Después de que termina la animación,
     * mostramos el nombre de la página.
     */

    setTimeout(function () {

        intro.classList.add("mostrar-titulo");

    }, duracionAnimacion);


    /*
     * Después de mostrar el título,
     * hacemos desaparecer toda la pantalla.
     */

    setTimeout(function () {

        intro.classList.add("ocultar");

    }, duracionAnimacion + 2500);


    /*
     * Activamos las animaciones de los personajes.
     */

    setTimeout(function () {

        document.body.classList.add("intro-terminada");

    }, duracionAnimacion + 3800);


    /*
     * Eliminamos la pantalla de introducción.
     */

    setTimeout(function () {

        intro.remove();

    }, duracionAnimacion + 3800);

});