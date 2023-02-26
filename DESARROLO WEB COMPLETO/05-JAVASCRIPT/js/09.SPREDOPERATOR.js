//& SPRED OPERATOR //

//? DATOS:

// 1. El spred operator es una forma de copiar un objeto.
// 2. no modifica el objeto original.
// 3. se utiliza para combinar dos objetos en uno solo.

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1kg",
    medida: "1m",
}

const nuevoProducto = {...producto, ...medidas}; // se puede combinar dos objetos en uno solo.