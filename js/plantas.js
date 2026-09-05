/* =========================================
   DATOS DE LOS PERSONAJES
   ========================================= */

const personajes = [

    {
        nombre: "Lanzaguisantes",

        imagen: "img/plantas/1lansaguisantes.png",

        miniatura: "img/plantas/1lansaguisantes-thumb.png",

        descripcion:
            "Dispara guisantes a los zombis.Tiene un costo de 100 soles, con una recarga rápida. Tiene una resistencia media (300 HP). El lanzaguisante dispara un guisante (cada 1.4 a 1.5 segundos) directo por carril. Se desbloquea en el nivel Día (nivel 1-1)."
    },

    {
        nombre: "Girasol",

        imagen: "img/plantas/2girasol.png",

        miniatura: "img/plantas/2girasol-thumb.png",

        descripcion:
            "Proporciona sol. Tiene un costo de 50 soles, con una recarga rápida. Tiene una resistencia media (300 HP). El Girasol genera 25 soles cada 24 segundos. Se desbloquea en el nivel Día (nivel 1-1)."
    },


    {
        nombre: "Petacereza",

        imagen: "img/plantas/3petacereza.png",

        miniatura: "img/plantas/3petacereza-thumb.png",

        descripcion:
            "Explota grupos de zombis en un área pequeña. Tiene un costo de 150 soles, con una recarga lenta. Su nivel de resistencia no aplica ya que explota al instante en un área de 3x3, generando una daño de 1800. Se desbloquea en el nivel Día (nivel 1-2)."
    },


    {
        nombre: "Nuez",

        imagen: "img/plantas/4nuez.png",

        miniatura: "img/plantas/4nuez-thumb.png",

        descripcion:
            "Bloquea a los zombis y protege las plantas. Tiene un costo de 50 soles, con una recarga lenta. La nuez tiene una resistencia alta (4000 HP) ya que detiene el paso de los zombis momentáneamente. Se desbloquea en el nivel Día (nivel 1-3)."
    },


    {
        nombre: "Patatapum",

        imagen: "img/plantas/5patatapum.png",

        miniatura: "img/plantas/5patatapum-thumb.png",

        descripcion:
            "Explota al contacto, pero tarda en armarse. Tiene un costo de 25 soles, con una recarga lenta. Tiene una resistencia media (300 HP). Después de plantarlo tiende a tardar 14 segundos en armarse; al pisarse explota y genera un daño 1800. Se desbloquea en el nivel Día (nivel 1-5)."
    },


    {
        nombre: "Hielaguisantes",

        imagen: "img/plantas/6helaguisantes.png",

        miniatura: "img/plantas/6helaguisantes-thumb.png",

        descripcion:
            "Dispara guisantes helados que ralentizan el movimiento y el ataque de los zombis en un 50%. Tiene un costo de 175 soles, con una recarga rápida.Tiene una resistencia media (300 HP). Se desbloquea en el nivel Día (nivel 1-6)."
    },

    {
        nombre: "Planta Carroñivora",

        imagen: "img/plantas/7carronivora.png",

        miniatura: "img/plantas/7carronivora-thumb.png",

        descripcion:
            "Engulle un zombi entero, pero es vulnerable mientras mastica. Tiene un costo de 150 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Tarda 42s en masticar a un zombi. Se desbloquea en el nivel Piscina (nivel 1-7)."
    },

    {
        nombre: "Repetidora",

        imagen: "img/plantas/8repetidora.png",

        miniatura: "img/plantas/8repetidora-thumb.png",

        descripcion:
            "Dispara una ráfaga de dos guisantes seguidos. Tiene un costo de 200 soles, con una recarga rápida. Tiene una resistencia media (300 HP). El intervalo entre el primer guisante y el segundo es de 0.15 segundos. Se desbloquea en el nivel Día (nivel 1-8)."
    },

    {
        nombre: "Seta Desesporada",

        imagen: "img/plantas/9setadesesporada.png",

        miniatura: "img/plantas/9setadesesporada-thumb.png",

        descripcion:
            "Dispara esporas de cerca. Al ser plantas del modo nocturno, no caen soles del cielo. La planta planta es gratuita para permitirle defenderse desde el principio de la partida. Tiene una recarga rápida. Tiene una resistencia media (300 HP). Es la única planta de disparo a distancia que solo alcanza 3 casillas. Se desbloquea en el nivel Noche (nivel 2-1)."
    },

    {
        nombre: "Seta Solar",

        imagen: "img/plantas/10setasolar.png",

        miniatura: "img/plantas/10setasolar-thumb.png",

        descripcion:
            "Produce soles pequeños. En cuanto crece, produce soles normales. Tiene un costo de 25 soles, con una recarga rápida. Tiene una resistencia media (300 HP) Produce soles pequeños (15) al inicio; tras 120 segundos crece y da 25 soles. Duerme de día. Se desbloquea en el nivel Noche (nivel 2-1)."
    },

    {
        nombre: "Humoseta",

        imagen: "img/plantas/11humoseta.png",

        miniatura: "img/plantas/11humoseta-thumb.png",

        descripcion:
            "Dispara esporas que atraviesan escudos. Tiene un costo de 75 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Dispara esporas que atraviesan escudos (puertas, periódicos) y grupos de zombis. Se desbloquea en el nivel Noche (nivel 2-2)."
    },


    {
        nombre: "Comepiedras",

        imagen: "img/plantas/12comepiedras.png",

        miniatura: "img/plantas/12comepiedras-thumb.png",

        descripcion:
            "Quita lápidas comiéndoselas. Tiene un costo de 75 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Destruye una tumba y deja caer una moneda. Se desbloquea en el nivel Noche (nivel 2-3)."
    },


    {
        nombre: "Hipnoseta",

        imagen: "img/plantas/13hipnoseta.png",

        miniatura: "img/plantas/13hipnoseta-thumb.png",

        descripcion:
            "Si un zombi se la come, dará media vuelta y luchará por el jugador. Tiene un costo de 75 soles, con una recarga lenta.Tiene una resistencia media (300 HP). Al ser comida, convierte al zombi en aliado y lo hace caminar en reversa. Duerme de día. Se desbloquea en el nivel Noche (nivel 2-5)."
    },


    {
        nombre: "Seta Miedica",

        imagen: "img/plantas/14setamiedica.png",

        miniatura: "img/plantas/14setamiedica-thumb.png",

        descripcion:
            "Dispara de lejos y se esconde cuando se le acercan los zombis. Tiene un costo de 25 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Dispara a larga distancia, pero se esconde si un zombi se acerca a menos de 3 casillas. Se desbloquea en el nivel Noche (nivel 2-4)."
    },


    {
        nombre: "Seta Congelada",

        imagen: "img/plantas/15setacongelada.png",

        miniatura: "img/plantas/15setacongelada-thumb.png",

        descripcion:
            "Congela temporalmente a todos los zombis. Tiene un costo de 75 soles, con una recarga muy lenta. Tiene una resistencia media (300 HP). Congela a todos los zombis en pantalla durante 4 segundos y les inflige 20 de daño. Duerme de día. Se desbloquea en el nivel Noche (nivel 2-7)."
    },


    {
        nombre: "Petaseta",

        imagen: "img/plantas/16petaseta.png",

        miniatura: "img/plantas/16petaseta-thumb.png",

        descripcion:
            "Explota en un área grande y deja un cráter en la casilla donde se plantó, en la cual no se podrá plantar hasta que el suelo se regenere. Tiene un costo de 125 soles, con una recarga muy lenta. Tiene una resistencia media (300 HP). Genera una megaexplosión en área enorme (1800 de daño); de un cráter temporal sin poder plantar. Se desbloquea en el nivel Noche (nivel 2-7)."
    },

    {
        nombre: "Nenúfar",

        imagen: "img/plantas/17nenufar.png",

        miniatura: "img/plantas/17nenufar-thumb.png",

        descripcion:
            "Se pueden plantar plantas no acuáticas sobre ella. Solo se usa en agua. Tiene un costo de 25 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Es el que da soporte para plantar plantas terrestres en el agua. Se desbloquea en el nivel Piscina (nivel 3-1)."
    },

    {
        nombre: "Apisonaflor",

        imagen: "img/plantas/18apisonaflor.png",

        miniatura: "img/plantas/18apisonaflor-thumb.png",

        descripcion:
            "En cuanto uno o más zombis lo asedian, los aplasta inmediatamente. Tiene un costo de 50 soles, con una recarga lenta. Tiene una resistencia media (300 HP). Aplasta al primer zombi que se acerque a su casilla (hacia adelante o hacia atrás), infligiendo 1800 de daño en área a todo lo que aplaste. Se desbloquea en el nivel Día (nivel 1-4)."
    },

    {
        nombre: "Tripitidora",

        imagen: "img/plantas/19tripitidora.png",

        miniatura: "img/plantas/19tripitidora-thumb.png",

        descripcion:
            "Dispara guisantes en tres líneas. Tiene un costo de 325 soles, con una recarga rápida. Tiene una resistencia media (300 HP). El intervalo entre los guisantes lanzados, son los mismo que la repetidora (0.15 segundos). Se desbloquea en el nivel Piscina (nivel 3-8)."
    },

    {
        nombre: "Zampalga",

        imagen: "img/plantas/20zampalga.png",

        miniatura: "img/plantas/20zampalga-thumb.png",

        descripcion:
            "Succiona zombis bajo el agua. Tiene un costo de 50 soles, con una recarga lenta. Tiene una resistencia media (300 HP). Arrastra al primer zombie al fondo del agua matándolo al instante. Se desbloquea en el nivel Piscina (nivel 3-4)."
    },

    {
        nombre: "Jalapeño",

        imagen: "img/plantas/21jalapeno.png",

        miniatura: "img/plantas/21jalapeno-thumb.png",

        descripcion:
            "Arrasa con una línea entera de zombis. Tiene un costo de 125 soles, con una recarga lenta. Su nivel de resistencia no aplica ya que explora al instante destruyendo la fila entera con fuego (1800 daño) y derrite el hielo. Se desbloquea en el nivel Piscina (nivel 3-5)."
    },


    {
        nombre: "Pinchohierba",

        imagen: "img/plantas/22pinchohierba.png",

        miniatura: "img/plantas/22pinchohierba-thumb.png",

        descripcion:
            "Saca pinchos y hiere a quien la pise. Tiene un costo de 100 soles, con una recarga rápida. Su resistencia es indestructible, ya que los zombis normales no pueden morder ni comer. Al estar en el piso, la mayoría de zombis la pisan, reciben daño, y continúan caminando (la excepción a esta resistencia es con los zombis en vehículos y Zombistein). Se desbloquea en el nivel Piscina (nivel 3-6)."
    },


    {
        nombre: "Plantorcha",

        imagen: "img/plantas/23plantorcha.png",

        miniatura: "img/plantas/23plantorcha-thumb.png",

        descripcion:
            "Enciende a los guisantes que la sobrevuelan, que causarán el doble de daño. Cuando es utilizado por las noches, dispersa la niebla con el fuego que genera. Tiene un costo de 175 soles, con una recarga rápida. Su resistencia es media (300 HP). Se desbloquea en el nivel Piscina (nivel 3-7)."
    },


    {
        nombre: "Nuez Cáscarabias",

        imagen: "img/plantas/24cascarabias.png",

        miniatura: "img/plantas/24cascarabias-thumb.png",

        descripcion:
            "Una nuez muy dura, difícil de rebasar. A diferencia de la nuez, éste es más grande y resistente, pero su debilidad es el Zombi Escalador. Tiene un costo de 125 soles, con una recarga lenta. Tiene una resistencia muy alta (8000 HP). Bloqueo pesado; impide que los zombis la salten (pértiga, saltarín). Se desbloquea en el nivel Piscina (nivel 3-3)."
    },

    {
        nombre: "Marseta",

        imagen: "img/plantas/25marseta.png",

        miniatura: "img/plantas/25marseta-thumb.png",

        descripcion:
            "Seta acuática que dispara esporas en el agua. La seta marina no tiene precio ya que en niveles como niebla y piscina nocturna, los soles escasean y el agua bloquea dos carriles enteros. Tiene una recarga lenta. Tiene una resistencia media (300 HP). Es la versión acuática de la seta desesporada. Se planta directamente en agua. Se desbloquea en el nivel Niebla (nivel 4-1)."
    },


    {
        nombre: "Planterna",

        imagen: "img/plantas/26planterna.png",

        miniatura: "img/plantas/26planterna-thumb.png",

        descripcion:
            "Ilumina un área de 5x7 casillas para despejar la niebla. Tiene un costo de 25 soles, con una recarga lenta. Tiene una resistencia media (300 HP). Se desbloquea en el nivel Niebla (nivel 4-1)."
    },

    {
        nombre: "Cactus",

        imagen: "img/plantas/27cactus.png",

        miniatura: "img/plantas/27cactus-thumb.png",

        descripcion:
            "Dispara púas a los zombis terrestres y aéreos. Tiene un costo de 125 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Dispara espinas a los zombis en tierra (genera el mismo daño que un guisante) y se estira para reventar los globos de los zombis con globo. Se desbloquea en el nivel Niebla (nivel 4-4)."
    },

    {
        nombre: "Trebolador",

        imagen: "img/plantas/28trebolador.png",

        miniatura: "img/plantas/28trebolador-thumb.png",

        descripcion:
            "Expulsa los zombis con globos. También puede repeler la niebla. Tiene un costo de 100 soles, con una recarga rápida. Su resistencia no aplica, ya que después de ser usada, desaparece. Sopla un viento fuerte que elimina la niebla del mapa temporalmente y expulsa del jardín a todos los zombis con globo al instante. Se desbloquea en el nivel Niebla (nivel 4-3)."
    },


    {
        nombre: "Bipetidora",

        imagen: "img/plantas/29bipetidora.png",

        miniatura: "img/plantas/29bipetidora-thumb.png",

        descripcion:
            "Dispara guisantes hacia adelante y atrás. Es útil contra el Zombi minero. Tiene un costo de 125 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Dispara 1 guisante hacia adelante y 2 hacia atrás. Se desbloquea en el nivel Niebla (nivel 4-5)."
    },


    {
        nombre: "Frustrella",

        imagen: "img/plantas/30frustrella.png",

        miniatura: "img/plantas/30frustrella-thumb.png",

        descripcion:
            "Dispara estrellas en cinco direcciones. Tiene un costo de 125 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Dispara estrellas en cinco direcciones diferentes (atrás, arriba-atrás, abajo-atrás, arriba-adelante, abajo-adelante), pero no dispara recto hacia adelante. Se desbloquea en el nivel Niebla (nivel 4-9)."
    },


    {
        nombre: "Calabaza",

        imagen: "img/plantas/31calabaza.png",

        miniatura: "img/plantas/31calabaza-thumb.png",

        descripcion:
            "Protege las plantas de su interior. Tiene un costo de 125 soles, con una recarga lenta. Tiene una resistencia alta (4000 HP), ya que se planta encima de cualquier otra planta para protegerla como una armadura externa sin ocupar su casilla. Se desbloquea en el nivel Niebla (nivel 4-7)."
    },


    {
        nombre: "Magnetoseta",

        imagen: "img/plantas/32magnetoseta.png",

        miniatura: "img/plantas/32magnetoseta-thumb.png",

        descripcion:
            "Debido a su efecto magnético, desarma de cascos y objetos metálicos a los zombis. Tiene un costo de 100 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Atrae y despoja objetos metálicos de los zombis en un área de 5x5 a su alrededor. Duerme de día (requiere Grano de café). Se desbloquea en nivel Niebla (Nivel 4-8)."
    },

    {
        nombre: "Coltapulta",

        imagen: "img/plantas/33coltapulta.png",

        miniatura: "img/plantas/33coltapulta-thumb.png",

        descripcion:
            "Lanza coles al enemigo. Tiene un costo de 100 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Lanza coles en parábola (hace el doble de daño que un guisante). Se desbloquea en el nivel Tejado (nivel 5-1)."
    },

    {
        nombre: "Lanzamaíz",

        imagen: "img/plantas/34lanzamaiz.png",

        miniatura: "img/plantas/34lanzamaiz-thumb.png",

        descripcion:
            "Arroja maíz y mantequilla a los zombis. Cuando lanza la mantequilla, detiene temporalmente a los zombis, poniéndolos vulnerables a los ataques de las plantas. Tiene un costo de 100 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Lanza maíz y mantequilla (inmoviliza por 5 segundos). Se desbloquea en el nivel Tejado (nivel 5-2)."
    },

    {
        nombre: "Grano de Café",

        imagen: "img/plantas/35granodecafe.png",

        miniatura: "img/plantas/35granodecafe-thumb.png",

        descripcion:
            "Despierta las setas durante el día. Útil con la Magnetoseta y la Seta congelada en el día. Tiene un costo de 75 soles, con una recarga rápida. Su resistencia no aplica, ya que se plantan sobre setas nocturnas para despertarlas de día. Se desbloquea en el nivel Tejado (nivel 5-4)."
    },

    {
        nombre: "Ajo",

        imagen: "img/plantas/36ajo.png",

        miniatura: "img/plantas/36ajo-thumb.png",

        descripcion:
            "Exhala un olor desagradable y envía a los zombis a otras líneas. Gracias a este efecto, pone vulnerable a los zombis. Tiene un costo de 50 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Se desbloquea en el nivel Tejado (nivel 5-5)."
    },

    {
        nombre: "Paraplanta",

        imagen: "img/plantas/37paraplanta.png",

        miniatura: "img/plantas/37paraplanta-thumb.png",

        descripcion:
            "Protege las plantas cercanas de los Zombis colgados y la Zombipulta.Tiene un costo de 100 soles, con una recarga rápida. Su resistencia es media (300 HP). Protege en área 3x3 contra proyectiles y zombis con arnés. Se desbloquea en el nivel Tejado (nivel 5-6)."
    },

    {
        nombre: "Margarita",

        imagen: "img/plantas/38margarita.png",

        miniatura: "img/plantas/38margarita-thumb.png",

        descripcion:
            "Proporciona monedas de oro y plata cada 24 a 25 segundos. Tiene un costo de 50 soles, con una recarga rápida. Tiene una resistencia media (300 HP). La mayoría de veces suelta monedas de plata (que tienen un valor de $10), con menor frecuencia, suelta monedas de oro (con valor de $50). Puedes comprar objetos en la tienda Crazy Dave, con las monedas acumuladas. Se desbloquea en el nivel Niebla (nivel 4-6)."
    },


    {
        nombre: "Melonpulta",

        imagen: "img/plantas/39melonpulta.png",

        miniatura: "img/plantas/39melonpulta-thumb.png",

        descripcion:
            "Dispara sandías a los zombis. Causa mayor daño sobre éstos. Tiene un costo de 300 soles, con una recarga rápida. Tiene una resistencia media (300 HP). Lanza sandías con daño masivo directo y en área (la sandía explota y salpica a todos los zombis en las casillas de alrededor, un área de 3x3). Se desbloquea en el nivel Tejado (nivel 5-8)."
    },


    {
        nombre: "Guisantralladora",

        imagen: "img/plantas/40guisantralladora.png",

        miniatura: "img/plantas/40guisantralladora-thumb.png",

        descripcion:
            "Dispara cuatro guisantes a la vez. Plantar sobre Repetidora. Tiene un costo de 250 soles, tiene una recarga lenta. Resistencia base repetidora. Dispara 4 guisantes en ráfaga. Tiene un costo de $5.000 monedas, para conseguir en la tienda de Dave."
    },


    {
        nombre: "Birasol",

        imagen: "img/plantas/41birasol.png",

        miniatura: "img/plantas/41birasol-thumb.png",

        descripcion:
            "Proporciona el doble de sol que el girasol. Plantar sobre Girasol. Tiene un costo de 150 soles, con una recarga lenta. Tiene como requisito base el girasol. Produce 50 de sol al mismo tiempo. Tiene un costo de $5.000 monedas, para conseguir en la tienda de Dave."
    },


    {
        nombre: "Gasoseta",

        imagen: "img/plantas/42gasoseta.png",

        miniatura: "img/plantas/42gasoseta-thumb.png",

        descripcion:
            "Dispara humo en un área pequeña. Plantar sobre Humoseta. Duerme durante el día. Tiene un costo de 150 soles, con una recarga lenta. Tiene como requisito base la Humoseta. Ataca en área circular de 3x3 casillas a su alrededor. Tiene un costo de $7.500 monedas, para conseguir en la tienda de Dave."
    },

    {
        nombre: "Rabo de Gato",

        imagen: "img/plantas/43rabodegato.png",

        miniatura: "img/plantas/43rabodegato-thumb.png",

        descripcion:
            "Planta acuática que dispara pinchos que hieren y atacan a los zombis con globo. Plantar sobre nenúfar. Tiene un costo de 225 soles, con una recarga lenta. Tiene como requisito base a Nenúfar. Dispara dardos teledirigidos a cualquier carril y punza globos. Tiene un costo de $10.000 monedas, para conseguir en la tienda de Dave."
    },

    {
        nombre: "Magnetoseta Dorada",

        imagen: "img/plantas/44magnetosetadorada.png",

        miniatura: "img/plantas/44magnetosetadorada-thumb.png",

        descripcion:
            "Recoge las monedas y diamantes por el jugador. Plantar sobre Magnetoseta. Tiene un costo de 50 soles, con una recarga lenta. Recoge automáticamente todas las monedas del tablero. Duerme de día. Tiene un costo de $3.000 monedas, para conseguir en la tienda de Dave."
    },

    {
        nombre: "Pinchorroca",

        imagen: "img/plantas/45pinchorroca.png",

        miniatura: "img/plantas/45pinchorroca-thumb.png",

        descripcion:
            "Producen el doble de daño de la pinchohierba y son más duros. Plantar sobre Pinchohierba. Tiene un costo de 125 soles, con una recarga lenta. Aguanta hasta 9 aplastamientos de vehículos/Zombistein. Tiene un costo de $7.500 monedas, para conseguir en la tienda de Dave."
    },

    {
        nombre: "Melonpulta Congelada",

        imagen: "img/plantas/46melonpultacongelada.png",

        miniatura: "img/plantas/46melonpultacongelada-thumb.png",

        descripcion:
            "Dispara melones que ralentizan y dañan a los zombis. Plantar sobre Melonpulta. Tiene un costo de 200 soles, con una recarga lenta. Tiene como requisito base a Melonpulta. Gran daño en el área que además frena a los grupos de zombis. Tiene un costo de $10.000 monedas, para conseguir en la tienda de Dave."
    },

    {
        nombre: "Mazorcañon",

        imagen: "img/plantas/47mazorcanon.png",

        miniatura: "img/plantas/47mazorcanon-thumb.png",

        descripcion:
            "Explota en un área grande, pero se selecciona dónde se quiere disparar. Plantar sobre dos Lanzamaíz en una fila. Cuesta 500 soles, con una recarga muy lenta. Lanza misiles de mazorca manuales (1800 daño). Tiene un costo de $20.000 monedas, para conseguir en la tienda de Dave."
    },

    {
        nombre: "Imitadora",

        imagen: "img/plantas/48imitadora.png",

        miniatura: "img/plantas/48imitadora-thumb.png",

        descripcion:
            "Su única función es duplicar cualquier planta de tu inventario para permitirte llevársela dos veces en el mismo nivel. Su gran ventaja es esquivar los tiempos de recarga. Si copias plantas de recarga muy lenta (como la Petacereza, el Jalapeño o la Nuez alta), puedes colocar una segunda unidad de inmediato sin tener que esperar a que el temporizador estándar vuelva a llenarse. Tiene un costo de $30.000 monedas, para conseguir en la tienda de Dave."
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