//& PARAMETROS

//? DATOS:
//1. los parametros son variables que se declaran en la funcion y se le asigna un valor cuando se llama a la funcion.
//2. los parametros son opcionales, es decir, no son obligatorios.
//3. van dentro de los parentesis de la funcion.
//4. los argumentos son los valores que se le pasan a la funcion cuando se llama a la funcion.
//5. parametros por defecto: se le asigna un valor por defecto a los parametros de la funcion.

//** DECLARACION DE FUNCION */
function sumar(numero1, numero2) {
  console.log(numero1 + numero2);
}
sumar(10, 20); // argumentos

//** EXPRESION DE FUNCION */
const sumar2 = function (n1,n2) {
  console.log(n1 + n2);
}

sumar2(5, 10); // argumentos

//** PARAMETROS POR DEFECTO */

function sumar3(n1 = 0, n2 = 0) {
  console.log(n1 + n2);
}
sumar(10, 20); // argumentos
sumar(10); // argumentos