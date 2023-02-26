//& ARRAYS METODOS

//? DATOS:
//1. evitar modificar el array original, crear uno nuevo.
//2. puedes crear un objeto dentro de un array.
//3. puedes crear un array dentro de un array.


/! METODOS */
//1. push() agrega un elemento al final del array.
//2. unshift() agrega un elemento al inicio del array.
//3. pop() elimina el ultimo elemento del array.
//4. shift() elimina el primer elemento del array.

//! METODOS MAS IMPORTANTES */

//1. forEach() recorre el arreglo y ejecuta una funcion por cada elemento.

//2. includes() busca un elemento en el arreglo si existe devuelve true, si no existe devuelve false. //? no se puede usar con objetos

//3. some() busca un elemento en el arreglo si existe devuelve true, si no existe devuelve false. //? se puede usar con objetos

//4. reduce() reduce toma dos parametros, el primero es una funcion y el segundo es el valor inicial, la funcion toma dos parametros, el primero es el acumulador y el segundo es el elemento actual, la funcion se ejecuta por cada elemento del arreglo y el valor que retorna se guarda en el acumulador, el acumulador es el valor que se va a ir modificando en cada iteracion, el valor inicial es el valor que va a tomar el acumulador en la primera iteracion.

//5. filter() filtra los elementos de un arreglo y crea un nuevo arreglo con los elementos que cumplan la condicion.

const numeros = [10, 20, 30, 40, 50];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];


// ** METODOS **/

numeros[5] = 60; // agrega un elemento al final del array
numeros.push(70); // agrega un elemento al final del array (mas usado)
numeros.unshift(-10, -20, -30); // agrega un elemento al inicio del array

meses.pop(); // elimina el ultimo elemento del array
meses.shift(); // elimina el primer elemento del array
meses.splice(2, 1); // elimina un elemento en especifico toma dos parametros, el primero es la posicion y el segundo es la cantidad de elementos a eliminar

//** Spreed Operator */
const nuevoArreglo = [...meses, "Junio"]; // crea un nuevo arreglo con los elementos del arreglo original y agrega un elemento al final

const nuevoNumeros = [60, ...numeros]; // crea un nuevo arreglo con los elementos del arreglo original y agrega un elemento al inicio

// ** METODOS MAS IMPORTANES **/

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
  {nombre: "Monitor 20 Pulgadas",precio: 500,},
  {nombre: "Television 50 pulgadas",precio: 700,},
  {nombre: "Tablet",precio: 300,},
  {nombre: "Audifonos",precio: 200,},
  {nombre: "Teclado",precio: 50,},
  {nombre: "Celular",precio: 500,},
  {nombre: "Bocinas",precio: 300,},
  {nombre: "Laptop",precio: 800,},
]

//* FOREACH *//
months.forEach((month)=>{ // recorre el arreglo y ejecuta una funcion por cada elemento
  if(month == "Marzo"){
    console.log("Marzo si existe");
  }
})

//* INCLUDES *//
let resultado = months.includes("Marzo"); // busca un elemento en el arreglo si existe devuelve true, si no existe devuelve false no se puede usar con objetos

//* SOME *//
resultado = carrito.some((producto)=>{
  return producto.nombre === "Celular";
})// busca un elemento en el arreglo si existe devuelve true, si no existe devuelve false (mas usado) y se puede usar con objetos

//* REDUCE *//
resultado = carrito.reduce((total,producto)=>{
  return total + producto.precio;
},0)// reduce toma dos parametros, el primero es una funcion y el segundo es el valor inicial, la funcion toma dos parametros, el primero es el acumulador y el segundo es el elemento actual, la funcion se ejecuta por cada elemento del arreglo y el valor que retorna se guarda en el acumulador, el acumulador es el valor que se va a ir modificando en cada iteracion, el valor inicial es el valor que va a tomar el acumulador en la primera iteracion

//* FILTER *//
resultado = carrito.filter((producto)=>{
  return producto.nombre != "Celular";
})// filtra los elementos de un arreglo y crea un nuevo arreglo con los elementos que cumplan la condicion