//& PROTOYPES

//? DATOS:

// 1. Los prototipos son la base de la POO en JS
// 2. El protoype crea unfciones que solo se utilizan en un objeto en especifico

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

const producto2 = new Producto('Monitor curvo de 49"', 800);
const producto3 = new Producto('laptop', 300);

Producto.prototype.formatearProducto = function() {
  return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

console.log(producto2.formatearProducto());

function Cliente(nombre,apellido){
  this.nombre = nombre;
  this.apellido = apellido;
}

const cliente1 = new Cliente('Juan', 'Perez');

Cliente.prototype.formatearCliente = function() {
  return `El cliente ${this.nombre} ${this.apellido} esta registrado`;
}

console.log(cliente1.formatearCliente());