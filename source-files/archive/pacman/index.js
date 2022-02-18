const puntosDisplay = document.querySelector(".puntos-display");
const tablero = document.querySelector(".tablero");
let puntos = 0;
const anchura = 28;
const losCuadrados = [];

const diseño = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 2, 2, 2, 2, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

/*
.los-puntitos 0
.el-muro 1
.habitacion 2
.super-poder 3
.vacio 4
*/

/* ******************
Crear cuadraditos a base de tablero
****************** */

function crearCuadraditos() {
    for (let i = 0; i < diseño.length; i++) {
        const elCuadradito = document.createElement("div"); // Crear div
        elCuadradito.classList.add("el-cuadradito"); //Añadir clase
        tablero.appendChild(elCuadradito); // Añadir al final del div
        losCuadrados.push(elCuadradito); // Meter en array

        // Añadir clases a divs en el tablero para presentar el diseño
        if (diseño[i] === 0) {
            losCuadrados[i].classList.add("los-puntitos")
        } else if (diseño[i] === 1) {
            losCuadrados[i].classList.add("el-muro")
        } else if (diseño[i] === 2) {
            losCuadrados[i].classList.add("habitacion")
        } else if (diseño[i] === 3) {
            losCuadrados[i].classList.add("super-poder")
        }
    }
}
crearCuadraditos() // Llamar la funcion

/* ******************
Colocar Pacman
****************** */

let pacmanUbicacion = 490;
losCuadrados[pacmanUbicacion].classList.add("pac-man-derecha");

/* ******************
Mover Pacman
****************** */

function moverPacman(evento) {
    losCuadrados[pacmanUbicacion].classList.remove("pac-man-izquierda", "pac-man-abajo", "pac-man-arriba", "pac-man-derecha", "pac-man") // Quitar todas las clases
    switch (evento.key) {
        // Si no esta muro y no esta habitacion y no esta en cualquier borde mover a pacman
        case "ArrowUp":
            if (!losCuadrados[pacmanUbicacion - anchura].classList.contains("el-muro") &&
                !losCuadrados[pacmanUbicacion - anchura].classList.contains("habitacion") &&
                pacmanUbicacion - anchura >= 0
            ) { pacmanUbicacion -= anchura; }
            losCuadrados[pacmanUbicacion].classList.add("pac-man-arriba", "pac-man")
            break

        case "ArrowDown":
            if (!losCuadrados[pacmanUbicacion + anchura].classList.contains("el-muro") &&
                !losCuadrados[pacmanUbicacion + anchura].classList.contains("habitacion") &&
                pacmanUbicacion + anchura < anchura * anchura
            ) { pacmanUbicacion += anchura }
            losCuadrados[pacmanUbicacion].classList.add("pac-man-abajo", "pac-man")
            break

        case "ArrowLeft":
            if (!losCuadrados[pacmanUbicacion - 1].classList.contains("el-muro") &&
                !losCuadrados[pacmanUbicacion - 1].classList.contains("habitacion") &&
                pacmanUbicacion % anchura !== 0
            ) { pacmanUbicacion -= 1 }
            losCuadrados[pacmanUbicacion].classList.add("pac-man-izquierda", "pac-man")
            break

        case "ArrowRight":
            if (!losCuadrados[pacmanUbicacion + 1].classList.contains("el-muro") &&
                !losCuadrados[pacmanUbicacion + 1].classList.contains("habitacion") &&
                pacmanUbicacion % anchura !== anchura - 1
            ) { pacmanUbicacion += 1 }
            losCuadrados[pacmanUbicacion].classList.add("pac-man-derecha", "pac-man")
            break
    }
    // Llamar varas funciones
    comerPuntitos()
    comerFruta()
    hasGanado()
    hasPerdido()
}

/* ******************
Event Listener para mover Pacman
****************** */

document.addEventListener("keydown", moverPacman)

/* ******************
Que pasa cuando pacman come fruta (Asustar fantasmas)
****************** */

function comerFruta() {
    // Si pacman come fruta, quitar classe super poder, añadir 10 puntos
    if (losCuadrados[pacmanUbicacion].classList.contains("super-poder")) {
        losCuadrados[pacmanUbicacion].classList.remove("super-poder")
        puntos += 10
        // Por cada espiritu, asustarlo durante 10 segundos
        losFantasmas.forEach(espiritu => espiritu.estarAsustado = true)
        setTimeout(noAsustarEspiritu, 10000)
    }
}

/* ******************
Despues de 10seg. hacer fantasmas normales
****************** */

function noAsustarEspiritu() {
    losFantasmas.forEach(espiritu => espiritu.estarAsustado = false)
}

/* ******************
Comer puntos y ganar puntuacion

La logica: Si ubicacion de pacman contiene "los-puntitos", hay que removerlos. Luego aumentar la puntuacion por +1 y al final presentar al jugador en puntosDisplay (DOM)
****************** */

function comerPuntitos() {
    if (losCuadrados[pacmanUbicacion].classList.contains("los-puntitos")) {
        losCuadrados[pacmanUbicacion].classList.remove("los-puntitos")
        puntos++
        puntosDisplay.innerHTML = puntos
    }
}

/* ******************
Class para crear fantasmas
****************** */

class Fantasma {
    constructor(nombre, dondeEmpieza, velocidad) {
        this.nombre = nombre
        this.dondeEmpieza = dondeEmpieza
        this.velocidad = velocidad
        this.fantasmaUbicacion = dondeEmpieza
        this.estarAsustado = false
        this.timerId = NaN
    }
}

/* ******************
Crear fantasmas en un array
****************** */

const losFantasmas = [
    new Fantasma("blinky", 348, 250),
    new Fantasma("pinky", 376, 400),
    new Fantasma("inky", 351, 300),
    new Fantasma("clyde", 379, 500)
]

/* ******************
Colocar fantasmas
****************** */

losFantasmas.forEach(espiritu => {
    losCuadrados[espiritu.dondeEmpieza].classList.add(espiritu.nombre)
    losCuadrados[espiritu.dondeEmpieza].classList.add("clase-fantasma")
})

/* ******************
Mover los Fantasmas
****************** */

losFantasmas.forEach(espiritu => moverFantasma(espiritu)) // Ejecutar 4 funciones por cada fantasma
function moverFantasma(espiritu) {
    const direciones = [-1, -anchura, +1, +anchura] // Possibiles direciones
    let laDirecion = direciones[Math.floor(Math.random() * direciones.length)] // Indice array aleatorio

    espiritu.timerId = setInterval(function () { // timerID iniciacion 
        if ( // Si no contene el muro y la fantasma
            !losCuadrados[espiritu.fantasmaUbicacion + laDirecion].classList.contains("el-muro") &&
            !losCuadrados[espiritu.fantasmaUbicacion + laDirecion].classList.contains("clase-fantasma")
        ) {
            losCuadrados[espiritu.fantasmaUbicacion].classList.remove(espiritu.nombre) // quitar clases
            losCuadrados[espiritu.fantasmaUbicacion].classList.remove("clase-fantasma", "espiritu-asustado")
            espiritu.fantasmaUbicacion += laDirecion // Nueva ubicacion
            losCuadrados[espiritu.fantasmaUbicacion].classList.add(espiritu.nombre) // Poner clases
            losCuadrados[espiritu.fantasmaUbicacion].classList.add("clase-fantasma")
        } else laDirecion = direciones[Math.floor(Math.random() * direciones.length)] // Si FALSE sacar un nuevo indice array aleatorio

        if (espiritu.estarAsustado === true) { // Si fantasmas estan asustadas
            losCuadrados[espiritu.fantasmaUbicacion].classList.add("espiritu-asustado") // Quitar clases
        }
        // Si espiritu asustado && choca contra pacman... quitar clases, devolver fantasma al inicio...
        if (espiritu.estarAsustado && losCuadrados[espiritu.fantasmaUbicacion].classList.contains("pac-man")) {
            losCuadrados[espiritu.fantasmaUbicacion].classList.remove("clase-fantasma", "espiritu-asustado","pac-man-izquierda", "pac-man-abajo", "pac-man-arriba", "pac-man-derecha", espiritu.nombre)
            espiritu.fantasmaUbicacion = espiritu.dondeEmpieza // Nueva ubicacio (inicio)
            puntos += 100 // Extra 100 puntos
            losCuadrados[espiritu.fantasmaUbicacion].classList.add(espiritu.nombre, "clase-fantasma") // Clase fantasma
        }
        hasPerdido()
        hasGanado()
    }, espiritu.velocidad) 
}

/* ******************
Como pierdes la partida
****************** */

function hasPerdido() {
    if (losCuadrados[pacmanUbicacion].classList.contains("clase-fantasma") &&
        !losCuadrados[pacmanUbicacion].classList.contains("espiritu-asustado")
        ) {
            losFantasmas.forEach(espiritu => clearInterval(espiritu.timerId))
            document.removeEventListener("keydown", moverPacman)
            puntosDisplay.innerHTML = "Has Perdido"
        }
}

/* ******************
Como ganas la Partida
****************** */

function hasGanado() {
    if (puntos >= 250) {
        losFantasmas.forEach(espiritu => clearInterval(espiritu.timerId))
        document.removeEventListener("keydown", moverPacman)
        puntosDisplay.innerHTML = "Has Ganado"
    }
}







