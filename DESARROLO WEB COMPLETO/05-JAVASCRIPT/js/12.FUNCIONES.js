//& FUNCIONES */

//? DATOS:
//1. las funciones son un conjunto de instrucciones que se pueden reutilizar.
//2. las funciones son reutilizables.
//3. las funcion tienen que ser llamadas para que se ejecuten.
//4. existen tres formas de declarar funciones, la primera es la funcion declarativa, la segunda es la funcion de expresion y la tercera es la funcion de flecha.

//! IMPORTANTE:
// diferenca entre declaracion de funciones y expresion de funciones: la declaracion de funciones se ejecuta antes de que se ejecute el codigo, la expresion de funciones se ejecuta cuando el interprete de javascript la encuentra.

//** DECLARACION DE FUNCIONES */

function sumar() {
  console.log(10 * 10);
}// la funcion declarativa se declara con la palabra reservada function, se le asigna un nombre y se cierra con un punto y coma.
sumar();

//** EXPRESION DE FUNCIONES */

const sumar2 = function () {
  console.log(3 + 3);
}// la funcion de expresion se declara con la palabra reservada const, se le asigna un nombre y se le asigna una funcion anonima.
sumar2();

//** IIFE */
(function () {
  console.log("esto es una funcion");
})();// la funcion iiife se declara con parentesis y se cierra con parentesis, la funcion se ejecuta automaticamente menos usada.