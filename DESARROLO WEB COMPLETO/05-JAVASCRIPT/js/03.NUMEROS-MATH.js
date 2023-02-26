//& NUMEROS Y MATH //

//? DATOS:
// 1. en la consola de chrome los numeros son de color azul
// 2. en javascript todos los numeros son de tipo number (no hay distincion entre enteros y decimales)
// 3. Que es el modulo? es el residuo de una division
// 4. No puedes multiplicar un numero por un string, pero si puedes multiplicar un string por un numero
// 5. NaN = not a number (no es un numero)

//? METODOS DE NUMEROS:

// 1. Math.PI nos da el valor de PI
// 2. Math.round() nos redondea un numero
// 3. Math.ceil() nos redondea un numero hacia arriba
// 4. Math.floor() nos redondea un numero hacia abajo
// 5. Math.sqrt() nos da la raiz cuadrada de un numero
// 6. Math.abs() convierte un numero negativo en positivo
// 7. Math.min() nos da el numero menor de una lista de numeros
// 8. Math.max() nos da el numero mayor de una lista de numeros
// 9. Math.random() nos da un numero aleatorio entre 0 y 1


const numero1 = 100;
const numero2 = 200;
const numero3 = 200.20;

console.log(numero1);
console.log(numero2);
console.log(numero3);

console.log(numero1 + numero2);// suma
console.log(numero2 - numero1);// resta
console.log(numero1 * numero2);// multiplicacion
console.log(numero2 / numero1);// division
console.log(numero2 % numero1);// modulo

//** METODOS MATH //

let resultado;

resultado = Math.PI; // PI es una constante que nos da el valor de PI
resultado = Math.round(2.5); // round nos redondea un numero
resultado = Math.ceil(2.1); // ceil nos redondea un numero hacia arriba
resultado = Math.floor(2.9); // floor nos redondea un numero hacia abajo
resultado = Math.sqrt(144); // sqrt nos da la raiz cuadrada de un numero
resultado = Math.abs(-200); // abs convierte un numero negativo en positivo
resultado = Math.min(3, 5, 1, 8, 9); // min nos da el numero menor de una lista de numeros
resultado = Math.max(3, 5, 1, 8, 9); // max nos da el numero mayor de una lista de numeros
resultado = Math.random(); // random nos da un numero aleatorio entre 0 y 1
resultado = Math.floor(Math.random() * 30); // random nos da un numero aleatorio entre 0 y 1, pero si lo multiplicamos por 30 nos dara un numero aleatorio entre 0 y 30


//** ORDEN DE LAS OPERACIONES //


let respuesta;
respuesta = 20 + 30 * 2; // primero se multiplican y despues se suman
respuesta = (20 + 30) * 2; // primero se suman y despues se multiplican

//TODO: EJEMPLOS:/

// supongamos que vamos a ofrecer un descuento del 20% a nuestros clientes
respuesta = (100 + 200 + 300) * .2; // primero se suman y despues se multiplica por el 20%

// supongamos que compramos 2 boletos a 600 dolares y tenemos que agragar el igv
respuesta = (600 + 600) * 1.18; // primero se suma lo del parenticis y despues se multiplica por 1.18

//** INCREMENTOS //

let puntaje = 10;
puntaje++; // incrementa en 1
puntaje--; // decrementa en 1
puntaje += 3; // incrementa en 3
