//& DESCTRUCTURING

//? DATOS:

// 1. Desctructuring: Es una forma de extraer valores de un objeto o un arreglo.

// 2. Es una forma mas sencilla de extraer valores de un objeto o un arreglo.

// 3. Crea variables a partir de un objeto.

// 4 Puedes extraer mas de una propiedad de un objeto.

// 5. Tiene que tener el mismo nombre que la propiedad del objeto.

const producto = {
  nombreProducto: "Monitor de 20 pulgadas",
  precio: 300,
  disponible: true,
}

const PrecioProducto = producto.precio; //forma antigua de obtener el valor de una propiedad de un objeto.

const { precio,nombreProducto } = producto; //forma nueva de obtener el valor de una propiedad de un objeto, puedes extraer mas de una propiedad de un objeto.
