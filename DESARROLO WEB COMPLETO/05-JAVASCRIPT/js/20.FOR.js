// & For Loop

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(`El numero ${i} es par`)
    }else{
        console.log(`El numero ${i} es impar`)
    }
}

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
    {nombre: 'Bocinas', precio: 1000},
    {nombre: 'Laptop', precio: 800},
];

for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`)
}

// ** While Loop //

let i = 0;

while(i < 10){
    console.log(`Numero: ${i}`);
    i++;
}
