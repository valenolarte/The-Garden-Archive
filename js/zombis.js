/* =========================================
   DATOS DE LOS PERSONAJES
   ========================================= */

const personajes = [

    {
        nombre: "Zombi",

        imagen: "img/personajes/1zombie.png",

        miniatura: "img/personajes/1zombie-thumb.png",

        descripcion:
            "Es un Zombi de jardín común, cuenta con 270 Hp, su velocidad es normal/lenta. Le encantan los cerebros. No se cansa de ellos. Cerebros, cerebros, Cerebros, todo el día. Cerebros viejos, cerebros frescos, cerebros pasados, cerebros hipotecados… No importa, a él le enloquecen. "
    },

    {
        nombre: "Zombi Abanderado",

        imagen: "img/personajes/2banderin.png",

        miniatura: "img/personajes/2banderin-thumb.png",

        descripcion:
            "Marca la llegada de un asalto de zombis. Cuentan con 270 HP, se desplaza a un paso rápido, siendo un poco más veloz que el resto para liderar el ataque. No te equivoques, al zombie abanderado le encantan los cerebros. Pero a medio camino se apasionó por las banderas. Puede que sea porque las banderas tienen cerebros dibujados, o tal vez porque le gusta el sonido que hacen al ondear. Nadie lo sabe con certeza."
    },


    {
        nombre: "Zombi Caracono",

        imagen: "img/personajes/3cono.png",

        miniatura: "img/personajes/3cono-thumb.png",

        descripcion:
            "Su cono en la cabeza le proporciona 370 más de HP (dando un total de 640 HP), su velocidad es normal/lenta, avanza al mismo ritmo cansino que un zombie común. Al zombi Caracono siempre le ha gustado la fiesta. Le gusta salir a divertirse tanto que acabó poniéndose un cono de tráfico en la cabeza. Sí, es un tipo loco, pero es que le encantan las fiestas."
    },


    {
        nombre: "Zombi saltador de pértiga",

        imagen: "img/personajes/4saltarin.png",

        miniatura: "img/personajes/4saltarin-thumb.png",

        descripcion:
            "Salta la primera planta que encuentra. La Nuez alta puede detener su lanza. Cuenta con 500 HP, su velocidad es muy rápida (mientras lleva la pértiga), se vuelve lento después de saltar. Corre y salta sobre la primera planta que encuentra, a excepción de la Nuez alta. La pértiga le ayuda a superar los obstáculos de la vida, y por obstáculos nos referimos a las plantas."
    },


    {
        nombre: "Zombi Caracubo",

        imagen: "img/personajes/5balde.png",

        miniatura: "img/personajes/5balde-thumb.png",

        descripcion:
            "Su cubo en la cabeza le proporciona 1100 más de HP (dando un total de 1370 HP), su velocidad es normal/lenta. La Magnetoseta puede quitarle el cubo. Zombi Caracubo siempre llevaba un cubo en la cabeza. Para empezar, porque le daba un toque de distinción en un mundo de sombras. Y para continuar, porque se le había olvidado que lo llevaba puesto."
    },


    {
        nombre: "Zombi Lector",

        imagen: "img/personajes/6periodico.png",

        miniatura: "img/personajes/6periodico-thumb.png",

        descripcion:
            "Cuando pierde su periódico, se vuelve más rápido. Su periódico le proporciona 150 más de HP (dando un total de 420 HP), su velocidad es lenta mientras tenga su periódico, cuando este es destruido se vuelve 3 veces más rápido. Al perder el periódico pierde el control, enfurece y corre extremadamente rápido hacia tus plantas. Estaba a punto de terminar su crucigrama cuando las plantas se lo destruyeron. Por eso se enfada tanto."
    },

    {
        nombre: "Zombi Portero",

        imagen: "img/personajes/7puerta.png",

        miniatura: "img/personajes/7puerta-thumb.png",

        descripcion:
            "Su puerta lo hace muy resistente. La Magnetoseta puede quitarle la puerta. La puerta le proporciona 1100 más de HP (dando un total de 1370 HP), su velocidad es normal/lenta. Su puerta actúa como un escudo que bloquea ataques rectos. Vulnerable a Humoseta, Catapultas y Magnetoseta. Consiguió la puerta en la última casa que visitó. No le sirvió de mucho al dueño anterior, pero a él le va de maravilla."
    },

    {
        nombre: "Zombi Deportista",

        imagen: "img/personajes/8americano.png",

        miniatura: "img/personajes/8americano-thumb.png",

        descripcion:
            "Un zombi muy rápido y resistente. La Magnetoseta puede quitarle el casco de deportista. Cuenta con 1670 HP, su velocidad es muy rápida. Es bastante veloz y tiene una gran resistencia gracias a su casco. Zombi Deportista lo da todo en el campo:un 110%. Es un jugador de equipo que piensa en el ataque y en la defensa. Aunque no tiene ni idea de qué es un balón de fútbol."
    },

    {
        nombre: "Zombi Bailón",

        imagen: "img/personajes/9bailon.png",

        miniatura: "img/personajes/9bailon-thumb.png",

        descripcion:
            "Un zombi que invoca zombis extra. Cuenta con 500 HP, su velocidad es lenta. Se detiene periódicamente para invocar a 4 Zombis Extra alrededor de él. Cualquier parecido entre zombi Disco y cualquier persona viva o muerta es pura coincidencia. (Cambio realizado en honor a Michael Jackson)."
    },

    {
        nombre: "Zombi Extra",

        imagen: "img/personajes/10back.png",

        miniatura: "img/personajes/10back-thumb.png",

        descripcion:
            "Aparecen de cuatro en cuatro cada vez que aparece el zombi Disco. Cuenta con 270 HP, su velocidad es lenta. Acompaña al zombi Disco reapareciendo si es derrotado mientras el líder siga vivo. Pasó seis años estudiando danza en la Academia de Artes de Zomburbia. Sin embargo, su gran oportunidad le llegó cuando el zombi Disco necesitó un cuerpo extra para el fondo."
    },

    {
        nombre: "Zombi Playero",

        imagen: "img/personajes/11inflador.png",

        miniatura: "img/personajes/11inflador-thumb.png",

        descripcion:
            "Su flotador le permite ir por el agua. Sólo aparece en la piscina y la niebla. Su HP puede variar si lleva un cono (640 HP) o una cubo en la cabeza (1370 HP), sí no lleva ninguno de los anteriores, tiene 270 HP, su velocidad es lenta. Es exclusivo de la piscina; flota sobre el agua con su flotador de pato. El flotador de patito le permite estar en la piscina, aunque admite que le da un poco de vergüenza que lo vean con él."
    },


    {
        nombre: "Zombi Buzo",

        imagen: "img/personajes/12nadador.png",

        miniatura: "img/personajes/12nadador-thumb.png",

        descripcion:
            "Bucea para defenderse de los ataques. Sólo aparece en la piscina y la niebla. Cuenta con 270 HP, su velocidad es normal. Se sumerge en el agua siendo inmune a la mayoría de proyectiles rectos hasta que emerge para morder una planta. Nadar requiere mucha técnica. Inhala, exhala. Inhala, exhala. Bueno, en realidad él no necesita inhalar ni exhalar, pero le gusta sentir que sigue la técnica."
    },


    {
        nombre: "Zombictor",

        imagen: "img/personajes/13zamboni.png",

        miniatura: "img/personajes/13zamboni-thumb.png",

        descripcion:
            "Usa su carro para aplastar las plantas y crea un camino de hielo que dura un tiempo en el que no se puede replantar. La Pinchohierba y Pinchorroca pueden destruirlo al instante. Cuenta con 1350 HP, su velocidad es lenta. Aplasta al instante cualquier planta a su paso y deja un rastro de hielo inaccesible para plantar. Mucha gente cree que es un zombi conduciendo una pulidora de hielo. La verdad es que es un amante del hielo que simplemente ama pulirlo."
    },


    {
        nombre: "Zombi de Bobsleigh",

        imagen: "img/personajes/14bob.png",

        miniatura: "img/personajes/14bob-thumb.png",

        descripcion:
            "Aparecen en equipos de cuatro en los caminos de hielo que deja zombictor. Cuenta con 270 HP por cada uno de los cuatro integrantes (1080 HP en total), su velocidad es rápida mientras va en el trineo, se vuelve lento cuando se baja y va a pie. Trabajan duro en equipo. El primero dirige, el segundo apoya, el tercero da moral y el cuarto… bueno, el cuarto solo intenta no caerse del trineo."
    },


    {
        nombre: "Zombi con Delfín",

        imagen: "img/personajes/15delfin.png",

        miniatura: "img/personajes/15delfin-thumb.png",

        descripcion:
            "Aparece muy rápido y salta la primera planta que encuentra. Sólo aparece en la piscina. Cuenta con 500 HP, su velocidad es rápida mientras va en el delfín, se vuelve lento yendo a pie. Salta la primera planta acuática que encuentra en la piscina usando a su delfín zombi. El delfín también es un zombi. Sorprendentemente, ambos se entienden bastante bien a la hora de buscar cerebros."
    },


    {
        nombre: "Zombi con Cajita",

        imagen: "img/personajes/16jack.png",

        miniatura: "img/personajes/16jack-thumb.png",

        descripcion:
            "Lleva una caja musical en la que esconde una bomba. La magnetoseta puede quitársela. Cuenta con 340 HP, su velocidad es rápida. Entra corriendo mientras gira la manivela de una cajita de música. Tras sonar la melodía (Pop Goes the Weasel), explota destruyendo todas las plantas a su alrededor en un área de 3x3. Este zombi no tiembla de frío, tiembla de emoción. Se pasa todo el día girando la manivela de su cajita. Le encanta la sorpresa… ¡y a las plantas no tanto!"
    },

    {
        nombre: "Zombi con Globo",

        imagen: "img/personajes/17globo.png",

        miniatura: "img/personajes/17globo-thumb.png",

        descripcion:
            "Va por el aire para defenderse de los ataques. El Trebolador puede matarlo. El Cactus y Rabo de Gato pueden explotar su globo y derribarlo. Cuenta con 270 HP, con una velocidad normal. Vuela por los aires esquivando casi todas las plantas terrestres. Al zombi con globo le sonrió la suerte. Encontró un globo funcionando y le pareció la idea perfecta para evitar enfrentamientos en el suelo."
    },

    {
        nombre: "Zombi Picado",

        imagen: "img/personajes/18minero.png",

        miniatura: "img/personajes/18minero-thumb.png",

        descripcion:
            "Aparece por debajo de la tierra y después sale en la parte izquierda del jardín. La magnetoseta puede quitarle el pico. Su casco le proporciona 30 más de HP (dando un total de 300 HP), su velocidad es rápida mientras va bajo tierra, al subir a la superficie se vuelve lento. Cava por debajo de las defensas y aparece al final a la izquierda para comerse las plantas de atrás hacia adelante. Se pasa el día cavando. No es que le guste mucho el trabajo manual, pero es la única forma que encontró de evitar las catapultas."
    },

    {
        nombre: "Zombi Saltarin",

        imagen: "img/personajes/19pogo.png",

        miniatura: "img/personajes/19pogo-thumb.png",

        descripcion:
            "Salta todas las plantas que encuentra con su pogo. La Magnetoseta puede quitárselo. La Nuez alta puede detener su salto. Cuenta con 500 HP, con una velocidad rápida. Boing, boing, boing. Ese es el sonido de un zombi que va a saltarse toda tu línea defensiva si no tienes una Nuez alta o una Magnetoseta. "
    },

    {
        nombre: "Zombi Yeti",

        imagen: "img/personajes/20yeti.png",

        miniatura: "img/personajes/20yeti-thumb.png",

        descripcion:
            "Un zombi que esconde un tesoro. Tiene 1350 HP y velocidad lenta. Aparece por primera vez en el nivel 4-10 (Niebla), durante la segunda vuelta del Modo Aventura. También puede aparecer aleatoriamente en Supervivencia y algunos minijuegos. Tras recibir daño o esperar unos segundos, se da la vuelta y huye. Si lo derrotas antes de que escape, suelta 4 diamantes, equivalentes a 4.000 monedas."
    },

    {
        nombre: "Zombi Colgao",

        imagen: "img/personajes/21arana.png",

        miniatura: "img/personajes/21arana-thumb.png",

        descripcion:
            "Baja del cielo y roba una planta. La Paraplanta y el Papapum pueden matarlo. Cuenta con 450 HP, su velocidad no aplica ya que desciende del cielo. Cae en casillas específicas para robarte una planta directamente o soltar un zombi pesado. Paraplanta lo bloquea. Le encanta el riesgo. Descender desde las alturas para llevarse una planta es la mayor inyección de adrenalina que un cuerpo descomposición puede sentir."
    },


    {
        nombre: "Zombie Escalador",

        imagen: "img/personajes/22escalera.png",

        miniatura: "img/personajes/22escalera-thumb.png",

        descripcion:
            "Usa su escalera para escalar la primera planta defensiva que encuentre. La magnetoseta puede quitársela. Su escalera le proporciona 230 más de HP (dando en total 500 HP), es rápido cuando lleva su escalera, cuando la pierde su velocidad se vuelve normal. Coloca una escalera sobre defensas altas (como la Nuez alta) para que él y otros zombis pasen por encima. Compró la escalera por $8.99. Pensó que le ayudaría a escalar hacia el éxito… o sobre tus defensas."
    },


    {
        nombre: "Zombipulta",

        imagen: "img/personajes/23catapulta.png",

        miniatura: "img/personajes/23catapulta-thumb.png",

        descripcion:
            "Lanza pelotas de básquet a las plantas. La Paraplanta puede parar las pelotas.Cuenta con 850 HP, su velocidad es lenta. Lanza balones de baloncesto para dañar tus plantas traseras. Tras agotar sus balones, avanza para aplastar plantas. Le gusta el baloncesto, pero no sabe encestar. Por eso prefiere lanzar los balones directamente a tus plantas."
    },


    {
        nombre: "Zombistein",

        imagen: "img/personajes/24gigante.png",

        miniatura: "img/personajes/24gigante-thumb.png",

        descripcion:
            "Un zombi gigantesco que aplasta plantas con un poste eléctrico, una señal de tránsito u otro zombi. Cuenta con 3000 HP, su velocidad es lenta. Aplasta de un solo golpe con un poste o señal de tráfico. Lanza a un Zombidito hacia tus filas cuando su vida baja al 50%. Requiere 2 explosiones (Petacereza, Jalapeño) para caer."
    },

    {
        nombre: "Zombidito",

        imagen: "img/personajes/25enano.png",

        miniatura: "img/personajes/25enano-thumb.png",

        descripcion:
            "Un zombi pequeño que es lanzado por zombistein cuando pierde la mitad de su salud. Cuenta con 270 HP, su velocidad es muy rápida. Diminuto pero peligroso. Es lanzado por Zombistein a la tercera columna de tu jardín para devorar plantas desde atrás. Puede parecer pequeño, pero tiene un apetito feroz. y sí, ser lanzado por los aires por un Zombistein es su forma habitual de viajar."
    },


    {
        nombre: "Dr. Zombi",

        imagen: "img/personajes/26zomboo.png",

        miniatura: "img/personajes/26zomboo-thumb.png",

        descripcion:
            "Es quien crea a los zombis. Lanza una furgoneta, zombis colgados de sus dedos y bolas de fuego y hielo cuando aparece en el último nivel del modo aventura. Cuenta con 40.000 HP, su velocidad no aplica ya que controla el gigantesco Zombot desde el tejado. Jefe final del juego. Invoca oleadas de zombis, pisa columnas de plantas y lanza bolas gigantes de fuego o hielo. Edgar George Zomboss tiene un doctorado en Tanatología zombi. Ha construido el Zombot con un único propósito: conquistar tu tejado y comerse tu cerebro de una vez por todas."
    },

];


/* =========================================
   ELEMENTOS DEL HTML
   ========================================= */

const grid = document.getElementById("character-grid");

const detailImage = document.getElementById("detail-img");

const detailTitle = document.getElementById("detail-title");

const detailDescription = document.getElementById("detail-desc");


/* =========================================
   CREAR LA GALERÍA
   ========================================= */

personajes.forEach((personaje, index) => {

    const button = document.createElement("button");

    button.classList.add("char-card");


    /*
       El primer personaje aparece
       seleccionado inicialmente.
    */

    if (index === 0) {

        button.classList.add("active");

    }


    const image = document.createElement("img");

    image.src = personaje.miniatura;

    image.alt = personaje.nombre;


    button.appendChild(image);


    /*
       Al hacer clic llamamos
       a seleccionarPersonaje()
    */

    button.addEventListener("click", () => {

        seleccionarPersonaje(index, button);

    });


    grid.appendChild(button);

});


/* =========================================
   SELECCIONAR PERSONAJE
   ========================================= */

function seleccionarPersonaje(index, button) {

    const personaje = personajes[index];


    /*
       Animación de salida
    */

    detailImage.classList.add("change");


    setTimeout(() => {

        /*
           Cambiar información
        */

        detailTitle.textContent = personaje.nombre;

        detailDescription.textContent =
            personaje.descripcion;


        detailImage.src =
            personaje.imagen;

        detailImage.alt =
            personaje.nombre;


        /*
           Animación de entrada
        */

        detailImage.classList.remove("change");

    }, 200);


    /*
       Quitar selección anterior
    */

    document
        .querySelectorAll(".char-card")
        .forEach(card => {

            card.classList.remove("active");

        });


    /*
       Seleccionar el nuevo
    */

    button.classList.add("active");


    /*
       En celular:
       llevar al usuario hacia
       la información del personaje.
    */

    if (window.innerWidth <= 768) {

        document
            .querySelector(".page-left")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }

}