//& VARIABLES : EXISTEN TRES TIPOS DE VARIABLES LET, CONST Y VAR

//? reglas para nombrar variables:

// 1. No pueden iniciar con numeros
// 2. No pueden contener espacios
// 3. No pueden contener caracteres especiales
// 4. No pueden ser palabras reservadas

//? recomendacion:

// var es la forma antigua de declarar variables
// no usar var es mejor usar let y const
// si vas a crear un valor fijo usar const
// si vas a crear una variable y desconoces el valor usar let

//** VAR : ES UNA VARIABLE QUE PUEDE CAMBIAR DE VALOR *//

var producto = "Audifonos Gamer"; // Iniciar variable y asignarle valor
var disponible; // Iniciar variable sin valor
producto = true; // Reasignando el valor de la variable
disponible = true;

//** CONST : ES UNA VARIABLE QUE NO PUEDE CAMBIAR DE VALOR *//
const apellido = 'Perez';


//** LET : ES UNA VARIABLE QUE PUEDE CAMBIAR DE VALOR *// 
let nombre = 'Juan';
nombre = 'Pedro';