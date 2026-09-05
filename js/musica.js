const canciones = [

    {
        titulo: "Loonboon",
        descripcion: "Es una palabra compuesta por loony, que significa una persona que se comporta de manera extraña, lo que probablemente alude a los zombis, y boon, que significa feliz y alegre, lo cual encaja con la melodía de la música.",
        imagen: "img/historia/loonboon.png",
        audio: "audio/loonboon.mp3"
    },

    {
        titulo: "Crazy Dave (Intro-Theme)",
        descripcion: "Es una canción alegre y divertida de Plants vs. Zombies que representa perfectamente la personalidad excéntrica de Crazy Dave. Su melodía transmite un ambiente alocado y humorístico, preparando al jugador para la aventura.",
        imagen: "img/historia/crazy-dave.png",
        audio: "audio/crazy-dave.mp3"
    },

    {
        titulo: "Grasswalk",
        descripcion: "Es una palabra compuesta por grass, que indica el césped con hierba, y cakewalk, que significa algo extremadamente fácil de hacer, lo que indica que los niveles de Día son los niveles más fáciles en el Modo Aventura.",
        imagen: "img/historia/grasswalk.png",
        audio: "audio/grasswalk.mp3"
    },

    {
        titulo: "Brainiac Maniac",
        descripcion: "Es una canción dinámica y pegadiza de Plants vs. Zombies. Su ritmo transmite energía y diversión, acompañando muy bien la acción del juego y su característico estilo humorístico.",
        imagen: "img/historia/brainiac-maniac.png",
        audio: "audio/brainiac-maniac.mp3"
    },

    {
        titulo: "Zombies on Your Lawn",
        descripcion: "Shigihara no solo compuso e interpretó la famosa canción de los créditos finales, sino que también animó el video musical en el que el Girasol canta junto a los zombies.",
        imagen: "img/historia/zombies-on-your-lawn.png",
        audio: "audio/zombies-on-your-lawn.mp3"
    }

];


function cambiarCancion(numero) {

    console.log("Se hizo clic en la canción:", numero);

    const cancion = canciones[numero];

    document.getElementById("imagenPrincipal").src = cancion.imagen;

    document.getElementById("imagenPrincipal").alt =
        "Portada de " + cancion.titulo;

    document.getElementById("tituloCancion").textContent =
        cancion.titulo;

    document.getElementById("descripcionCancion").textContent =
        cancion.descripcion;

    const reproductor = document.getElementById("reproductor");
    const audio = document.getElementById("audioCancion");

    audio.src = cancion.audio;

    reproductor.load();


    /* Cambiar miniatura activa */

    const botones = document.querySelectorAll(".cancion");

    botones.forEach(function(boton) {
        boton.classList.remove("activa");
    });

    botones[numero].classList.add("activa");
}