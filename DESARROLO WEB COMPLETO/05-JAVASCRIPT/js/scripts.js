
// class Persona{
//   constructor(nombre,edad){
//     this.nombre = nombre;
//     this.edad = edad;
//   }
//   saludar(){
//     console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
//   }
// }
// const persona1 = new Persona('Juan', 20);

// class cuentaBancaria{
//   constructor(titular,saldo){
//     this.titular = titular;
//     this.saldo = saldo;
//   }
//   depositar(cantidad){
//     this.saldo += cantidad;
//     console.log(`Se depositaron ${cantidad} a la cuenta de ${this.titular} y su saldo es de ${this.saldo}`)
//   }
//   retirar(cantidad){
//     if(this.saldo < cantidad){
//       console.log(`No hay suficiente saldo en la cuenta de ${this.titular} para retirar ${cantidad}`)
//       return;
//     }

//     this.saldo -= cantidad;
//     console.log(`Se retiraron ${cantidad} de la cuenta de ${this.titular} y su saldo es de ${this.saldo}`)
//   }
// }

// const cuenta = new cuentaBancaria('Juan', 1000);
// cuenta.depositar(500);
// cuenta.retirar(2000);
// cuenta.retirar(500);

// class Rectangulo{
//   constructor(base,altura){
//     this.base = base;
//     this.altura = altura;
//   }
//   calcularArea(){
//     return this.base * this.altura;
//   }
//   calcularPerimetro(){
//     return this.base * 2 + this.altura * 2;
//   }
// }

// const rectangulo = new Rectangulo(10,15);
// console.log(rectangulo.calcularArea());
// console.log(rectangulo.calcularPerimetro());

// const rectangulo2 = new Rectangulo(5,10);
// console.log(rectangulo2.calcularArea());
// console.log(rectangulo2.calcularPerimetro());

// class Persona{
//   constructor(nombre,edad){
//     this.nombre = nombre;
//     this.edad = edad;
//   }
//   saludar(){
//     console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
//   }
//   cambiarEdad(nuevaEdad){
//     this.edad = nuevaEdad;
//   }
// }
// const persona1 = new Persona('Juan', 20);
// persona1.saludar();
// persona1.cambiarEdad(25);
// persona1.saludar();

// class Empleado{
//   constructor(nombre,sueldo){
//     this.nombre = nombre;
//     this.sueldo = sueldo;
//   }
// }

// class Gerente extends Empleado{
//   constructor(nombre,sueldo,departamento){
//     super(nombre,sueldo);
//     this.departamento = departamento;
//   }
//   revisarInformes(){
//     console.log(`Revisando informes del departamento ${this.departamento}`);
//   }
// }

// const gerente = new Gerente ('Juan', 5000, 'Sistemas');
// gerente.revisarInformes();

// class Animal {
//   constructor(especie) {
//     this.especie = especie;
//   }

//   emitirSonido(sonido) {
//     return sonido;
//   }
// }

// class Perro extends Animal{
//   constructor(especie,raza){
//     super(especie);
//     this.raza = raza;
//   }
//   emitirSonido(sonido){
//     return `El perro ${this.raza} dice: ${super.emitirSonido(sonido)}`;
//   }
// }

// class Gato extends Animal{
//   constructor(especie,raza){
//     super(especie);
//     this.raza = raza;
//   }
//   emitirSonido(sonido){
//     return `El gato ${this.raza} dice: ${super.emitirSonido(sonido)}`;
//   }
// }
// const perro = new Perro('Canis lupus familiaris', 'Pastor Alemán');
// console.log(perro.emitirSonido('guau'));

// const gato = new Gato('Felis catus', 'Persa');
// console.log(gato.emitirSonido('miau'));

// class Vehiculo{
//   constructor(marca,modelo){
//     this.marca = marca;
//     this.modelo = modelo;
//   }
//   acelear(kilometros){
//     return `Acelerando ${kilometros}km`;
//   }
// }

// class Coche extends Vehiculo{
//   constructor(marca,modelo,numeroPuertas){
//     super(marca,modelo);
//     this.numeroPuertas = numeroPuertas;
//   }
//   acelear(kilometros){
//     return `Acelerando el coche ${kilometros}km`;
//   }
// }



// class Bicicleta extends Vehiculo {
//   constructor(marca,modelo,numeroPuertas){
//     super(marca,modelo);
//     this.numeroPuertas = numeroPuertas;
//   }
//   acelear(kilometros){
//     return `Acelerando la bicicleta ${kilometros}km`;
//   }
// }

// const coche = new Coche('Ford','Fiesta',5);
// console.log(coche.acelear(10));

// const bicicleta = new Bicicleta('Btwin','Rockrider',2);
// console.log(bicicleta.acelear(5));

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// const resultado = numeros.reduce((acumulador,numero)=>{
//   return acumulador + numero;
// },0)

// console.log(resultado);

// const estudiantes = [
//   { nombre: 'Juan', nota: 10 },
//   { nombre: 'Pedro', nota: 8 },
//   { nombre: 'Laura', nota: 9 },
//   { nombre: 'Maria', nota: 7 },
//   { nombre: 'Pablo', nota: 5 },
//   { nombre: 'Luis', nota: 3 },
// ]

// const resultado = estudiantes.filter(estudiante=>{
//   if(estudiante.nota > 7){
//     return estudiante;
//   }
// })

// console.log(resultado);

// const personas = [
//   { nombre: 'Juan', edad: 20 },
//   { nombre: 'Pedro', edad: 18 },
//   { nombre: 'Laura', edad: 19 },
//   { nombre: 'Maria', edad: 17 },
//   { nombre: 'Pablo', edad: 15 },
// ]

// const resultado = personas.map(personas=>{
//   return personas.nombre.toUpperCase();
// })

// console.log(resultado);

// const string = ['holas','mundos','javascript','es','genial'];

// const resultado = string.filter(string=>{
//   if(string.length > 5){
//     return string;
//   }
// })

// console.log(resultado);

// const libros = [
//   { titulo: "el señor de los anillos", autor: "J.R.R. Tolkien", publicado: 1954 },
//   { titulo: "el hobbit", autor: "J.R.R. Tolkien", publicado: 1937 },
//   { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", publicado: 2011 },
//   { titulo: "javascript la revolucion", autor: "pepe", publicado: 2020}
// ]

// const resultado = libros.filter(libro=>{
//   if(libro.publicado > 2000){
//     return libro;
//   }
// })

// console.log(resultado);

// const peliculas = [
//   { titulo: "titanic", director: "jamie camerom", duracion: 2 },
//   { titulo: "el señor de los anillos", director: "peter jackson", duracion: 3 },
//   { titulo: "el hobbit", director: "peter jackson", duracion: 1 },
//   { titulo: "Harry Potter y la piedra filosofal", director: "j.k. rowling", duracion: 4 },
// ]

// const resultado = peliculas.reduce((acumulador,peliculas)=>{
//   return acumulador + peliculas.duracion * 60;
// })

// console.log(`La duracion total de las peliculas es de ${resultado} minutos`);

// const strings = ['hola','mundo','javascript','es','genial'];

// const resultado = strings
//   .filter(string => !string.includes("a"))
//   .map(string => string.toUpperCase());

// console.log(resultado);

// const canciones = [
//   { titulo: "despacito", artista: "luis fonsi", duracion: 15 },
//   { titulo: "sorry", artista: "justin bieber", duracion: 10 },
//   { titulo: "el perdon", artista: "enrique iglesias", duracion: 3 },
//   { titulo: "el amante", artista: "nicky jam", duracion: 4 },
// ]

// const resultado = canciones.some(cancion=>{
//   return cancion.duracion > 5;
// })

// console.log(`Hay canciones con una duracion mayor a 5 minutos: ${resultado}`);


// const numeros = [1,2,3,4,5,6,7,8,9,10];

// const resultado = numeros
//   .filter(numero => numero % 2 === 0)
//   .reduce((acumulador,numero)=>{
//     return acumulador + numero;
//   })

// console.log(resultado);

// const productos = [
//   { nombre: "pantalon", precio: 20, stock: true },
//   { nombre: "camisa", precio: 10, stock: false },
//   { nombre: "calcetines", precio: 5, stock: false },
//   { nombre: "chaqueta", precio: 30, stock: true },
//   { nombre: "pantalon", precio: 20, stock: false }, 
// ]

// const resultado = productos.filter(producto=>{
//   return producto.stock == true;
// })

// console.log(resultado);

// const libros = [
//   { titulo: "el señor de los anillos", autor: "J.R.R. Tolkien", publicado: 1954 },
//   { titulo: "el hobbit", autor: "J.R.R. Tolkien", publicado: 1937 },
//   { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", publicado: 2011 },
//   { titulo: "javascript la revolucion", autor: "pepe", publicado: 2020}
// ]

// const resultado = libros.reduce((libroAntiguo, libroActual) => {
//   if (!libroAntiguo) {
//     return libroActual;
//   }
//   return libroActual.publicado < libroAntiguo.publicado ? libroActual : libroAntiguo;
// }, null);

// console.log(resultado);

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// const resultado = numeros
//   .filter(numero=> numero % 2 !== 0)
//   .reduce((acumulador,numero)=>{
//     return acumulador * numero;
//   })

// console.log(resultado);

const peliculas = [
  { titulo: "titanic", director: "jamie camerom", duracion: 2 },
  { titulo: "el señor de los anillos", director: "peter jackson", duracion: 3 },
  { titulo: "el hobbit", director: "peter jackson", duracion: 1 },
  { titulo: "Harry Potter y la piedra filosofal", director: "j.k. rowling", duracion: 4 },
]

const resultado = peliculas.reduce((peliculaMasLarga, pelicula)=>{
  return pelicula.duracion > peliculaMasLarga.duracion ? pelicula : peliculaMasLarga;
})

console.log(resultado);

