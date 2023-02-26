//& ARRAYS

//? DATOS:
//1. los arrays son una coleccion de datos.
//2. los arrays son un tipo de objeto.
//3. puedes mezclar tipos de datos en un array.
//4. indexacion empieza en 0.
//5. los arrays son mutables.
//6. se accede a los elementos de un array con la notacion de corchetes [].
//7. con length se puede saber la extencion de un array.
//8. se puede iterar un array con forEach.

//? 
//9. evitar modificar el array original, crear uno nuevo.


const numeros = [10, 20, 30, 40, 50];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const arreglo = ["Hola", 10, true, "si", null, {nombre: "juan", trabajo: "desarrollador"}, [1, 2, 3]];

//** ACEDER A VALORES DE UN ARREGLO */
console.log(numeros[4]);
console.log(numeros[2]);
console.log(numeros[200]); // undefined

//** CONOCER LA EXTENCION DE UN ARREGLO */

console.log(meses.length); // 5

numeros.forEach(function(numero) {
    console.log(numero);
})

meses.forEach((mes)=>{
    console.log(mes);
})



