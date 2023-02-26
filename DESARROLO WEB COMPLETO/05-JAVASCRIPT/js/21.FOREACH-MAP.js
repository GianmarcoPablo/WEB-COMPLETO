//& FOREACH-MAP

//?DATO:
// forEach: recorre un arreglo y ejecuta una función por cada elemento del arreglo
// map: recorre un arreglo y ejecuta una función por cada elemento del arreglo, pero a diferencia de forEach, map crea un nuevo arreglo con los resultados de la función

const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500 },
  { nombre: 'Televisión 50 Pulgadas', precio: 700 },
  { nombre: 'Tablet', precio: 300 },
  { nombre: 'Audifonos', precio: 200 },
  { nombre: 'Teclado', precio: 50 },
  { nombre: 'Celular', precio: 500 },
  { nombre: 'Bocinas', precio: 300 },
  { nombre: 'Laptop', precio: 800 },
]

//** forEach **//

carrito.forEach(producto=> console.log(producto))

//** MAP **//

carrito.map(producto=> console.log(producto))

