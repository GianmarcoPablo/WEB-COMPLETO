//& STRIGNS //

//! DIFERENCIA ENTRE METODO Y FUNCION
// METODO: es una funcion que se ejecuta en un objeto
// FUNCION: es una funcion que se ejecuta por si sola

//? METODOS DE STRINGS:

// 1. con typeof podemos saber que tipo de dato es una variable
// 2. length nos dice la cantidad de caracteres que tiene una cadena de texto
// 3. indexOf nos dice en que posicion se encuentra una palabra
// 4. includes nos dice si existe o no una palabra con true o false

//? REGLAS:

// 1. los strings se escriben entre comillas dobles o simples

//** STRING O CADENA DE TEXTO */

const producto = "Monitor de 20 pulgadas";

console.log(typeof producto); // typeof nos dice que tipo de dato es la variable

console.log(producto.length); // length nos dice la cantidad de caracteres que tiene la cadena de texto

console.log(producto.indexOf('pulgadas')); // indexOf nos dice en que posicion se encuentra una palabra, cuando es -1 es que no existe

console.log(producto.includes('pulgadas')); // includes nos dice si existe o no una palabra, cuando es true es que si existe y cuando es false es que no existe

