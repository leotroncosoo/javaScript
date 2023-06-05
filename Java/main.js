// Definición de productos
const juegos = [
    { id: 1, nombre: "Crash Bandicoot 4", precio: 12000, plataforma: "ps4" },
    { id: 2, nombre: "The Last of Us", precio: 12000, plataforma: "ps4" },
    { id: 3, nombre: "Mortal Kombat 11", precio: 12000, plataforma: "ps4" },
    { id: 4, nombre: "Spider-Man", precio: 12000, plataforma: "ps4" },
    { id: 5, nombre: "Minecraft", precio: 12000, plataforma: "ps4" },
    { id: 6, nombre: "God of War 3", precio: 12000, plataforma: "ps4" },
    { id: 7, nombre: "Until Dawn", precio: 12000, plataforma: "ps4" },
    { id: 8, nombre: "Watch Dogs Legion", precio: 12000, plataforma: "ps4" },
    { id: 9, nombre: "Star Wars", precio: 12000, plataforma: "ps4" },
    { id: 10, nombre: "Detroit", precio: 12000, plataforma: "ps4" },
    { id: 11, nombre: "Call of Duty Modern Warfare", precio: 12000, plataforma: "ps4" },
    { id: 12, nombre: "Red Dead Redemption II", precio: 12000, plataforma: "ps4" },
    { id: 13, nombre: "Mortal Kombat XL", precio: 12000, plataforma: "ps4" },
    { id: 14, nombre: "Fifa 22", precio: 12000, plataforma: "ps4" },
    { id: 15, nombre: "Fifa 23", precio: 12000, plataforma: "ps4" },
];

let carrito = [];

// Función para agregar un juego al Carrito
function agregarAlCarrito(idJuego) {
    const juegoSeleccionado = juegos.find((juego) => juego.id === idJuego);

    if (juegoSeleccionado) {
        carrito.push(juegoSeleccionado);
        alert("El juego que se agregó al carrito es: " + juegoSeleccionado.nombre);
    } else {
        alert("El juego no se encuentra.");
    }
}

// Función para eliminar un juego del Carrito
function eliminarDelCarrito(idJuego) {
    const juegoEliminado = carrito.find((juego) => juego.id === idJuego);
    if (juegoEliminado) {
        carrito = carrito.filter((juego) => juego.id !== idJuego);
        alert("El juego que se eliminó es: " + juegoEliminado.nombre);
    } else {
        alert("No se encontró el juego mencionado.");
    }
}

// Función para calcular el total del carrito
function totalCarrito() {
    let total = 0;

    for (const juego of carrito) {
        total += juego.precio;
    }

    return total;
}

// El usuario selecciona los juegos para agregar al carrito
let agregarJuego = true;
while (agregarJuego) {
    let juegosDisponibles = "";
    for (const juego of juegos) {
        juegosDisponibles += `${juego.id} - ${juego.nombre} $${juego.precio}\n`;
    }

    const idJuego = parseInt(prompt("Ingrese el número del juego que desee agregar al carrito (0 para salir)\n" + juegosDisponibles));

    if (idJuego === 0) {
        agregarJuego = false;
        alert("Saliendo!");
    } else {
        agregarAlCarrito(idJuego);
    }
}

// El usuario selecciona los juegos para eliminar del carrito
let eliminarJuego = true;
while (eliminarJuego && carrito.length > 0) {
    let juegosAniadidos = "";
    for (const juego of carrito) {
        juegosAniadidos += `${juego.id} - ${juego.nombre} $${juego.precio}\n`;
    }

    const idJuego = parseInt(prompt("Ingrese el número del juego que desee eliminar del carrito (0 para finalizar)\n" + juegosAniadidos));

    if (idJuego === 0) {
        eliminarJuego = false;
    } else {
        eliminarDelCarrito(idJuego);
    }
}

//FINAAL
const totaldelCarrito = totalCarrito();
alert("El total del carrito es de: $" + totaldelCarrito);
