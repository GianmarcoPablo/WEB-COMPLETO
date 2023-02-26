//& ARROW FUNCTION

//? DATO:
//1. solamente funciona con funciones anonimas(expresion de funciones). y arrays methods.
//2. cuando solo tienes una linea de codigo no es necesario poner las llaves.

const sumar2 = (a, b) => console.log(a + b);
sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("javascript");

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"];

const carrito = [
  { nombre: "monitor 20 pulgadas", precio: 500 },
  { nombre: "television 50 pulgadas", precio: 700 },
  { nombre: "tablet", precio: 300 },
  { nombre: "audifonos", precio: 200 },
  { nombre: "teclado", precio: 50 },
  { nombre: "celular", precio: 500 },
  { nombre: "bocinas", precio: 300 },
  { nombre: "laptop", precio: 800 },
]

meses.forEach(mes => mes.includes("marzo") ? console.log(mes) : console.log("no es marzo"));

let resultado = carrito.some(producto => producto.nombre === "celular");

resultado = carrito.reduce((total,producto)=> total + producto.precio,0);

resultado = carrito.filter(producto => producto.precio > 400);