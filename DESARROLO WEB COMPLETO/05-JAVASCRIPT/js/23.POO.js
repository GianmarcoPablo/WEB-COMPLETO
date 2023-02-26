// & OBJECT CONSTRUCTOR Y OBJECT LITERAL

//? DATOS:
// 1. Esta era una manera de crear objetos en JS antes de ES6
// 2. Los objetos se creaban con la palabra reservada "new"
// 3. Los objetos se creaban con una función constructora
// 4. el problema era que al momento de agragar un nuevo objeto, teniamos que crear una nueva función constructora

// Object literal
const producto = {
  nombre: "tablet",
  precio: 500,
}

// Object constructor

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio; 
  this.disponible = disponible;
}

function Cliente(nombre,apellido){
  this.nombre = nombre;
  this.apellido = apellido;
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('laptop', 300);
const cliente = new Cliente('Juan', 'Perez');

function formatearProducto(producto) {
  return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}


console.log(formatearProducto(producto2));