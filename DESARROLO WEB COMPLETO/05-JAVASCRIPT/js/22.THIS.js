//& THIS

//? DATOS: 

// 1. this hace referencia al objeto .
// 2. this es una palabra reservada que se utiliza en los objetos.
// 3. hace referencia window, es decir, el objeto global.
// 4. el arrow function no utiliza this, por lo tanto, no hace referencia al objeto.


const reservacion = {
    nombre: 'Juan',
    apellido: 'Perez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}
const reservacion2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${reservacion2.nombre} reservo y su cantidad a pagar es de ${reservacion2.total}`)
    }
}
reservacion2.informacion();

