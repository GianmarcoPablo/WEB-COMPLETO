//& OBJETOS //

//? DATOS:

// 1. OBJETOS: Son una coleccion de propiedades. Una propiedad es un par de valores, uno es el nombre de la propiedad y el otro es el valor de la propiedad.

// 2. Los objetos son muy importantes en la programacion ya que nos permiten agrupar datos relacionados y acceder a ellos de una manera mas sencilla.

// 3. Estan compuestos por llave y valor.

// 4. Para acceder a los valores de un objeto se utiliza la notacion de punto.

// 5. delete: Elimina una propiedad de un objeto.

// 6. los objetos tambien pueden tener funciones, estas se conocen como metodos.

//! EJMEMPLO:

const producto = {
    nombreProducto: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto);
console.log(producto.precio);
console.log(producto.disponible);

producto.imagen = "imagen.jpg"; // Agregando una nueva propiedad al objeto.
delete producto.disponible; // Eliminando una propiedad del objeto.