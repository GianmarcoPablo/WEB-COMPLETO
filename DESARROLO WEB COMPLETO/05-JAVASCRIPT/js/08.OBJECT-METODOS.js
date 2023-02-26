"use strict" // modo estricto de javascript.

//& OBJECT METODOS

//? DATOS:

// 1. si se puede modificar un objeto.
// 2. si quieres prevener que se modifique un objeto se utiliza el metodo Object.freeze().
// 3. Como saber si un objeto esta congelado o no se utiliza el metodo Object.isFrozen().
// 4. Object.seal() previene que se agreguen o eliminen propiedades de un objeto.
// 5. diferencia entre Object.freeze() y Object.seal() Object.freeze() previene que se agreguen o eliminen propiedades de un objeto y Object.seal() si te permite modificar las propiedades de un objeto ninguno te permite agraegar o eliminar propiedades de un objeto.

const producto = {
  nombreProducto: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
}

Object.freeze(producto); // previene que se modifique un objeto.
// producto.imagen = "imagen.jpg"; 

console.log(Object.isFrozen(producto)); // true