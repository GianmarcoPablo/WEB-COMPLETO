//& POO - CLASES

//? DATOS:

// 1. Las clases son una sintaxis mas sencilla para crear objetos en JS

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formatearProdcuto(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
  }
}

const producto2 = new Producto("Monitor curvo de 49", 800);
const producto3 = new Producto("laptop", 300);

console.log(producto2);
console.log(producto3);