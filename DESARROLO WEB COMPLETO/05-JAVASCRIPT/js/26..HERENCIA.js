// & POO - HERENCIA

//? DATOS:
//1. HERENCIA: Es la capacidad que tienen los objetos de heredar propiedades y métodos de otros objetos.

//2. CLASES: Es una plantilla de la cual se pueden crear objetos que comparten un mismo comportamiento, estado e identidad.


class Producto{
  constructor(nombre, precio){
      this.nombre = nombre;
      this.precio = precio;
  }
  formatearProducto(){
      return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`;
  }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('laptop', 300);

class Libro extends Producto{
  constructor(nombre,precio,isbn){

    super(nombre,precio)
    this.isbn = isbn;
  }
  formatearProducto(){
    return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
  }
}

const libro = new Libro("Javascript la Revolucion", 120, "123456789");
console.log(libro);