// & ESTRUCTURA DE CONTROL IF, ELSE

const puntaje = 1000;

if(puntaje !== 1000){
    console.log('Si es igual');
}else{
    console.log('No es igual');
}

const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito){
    console.log('El usuario puede pagar');
}else{
    console.log('Fondos insuficientes');
}

const rol = 'administrador';

if(rol === 'administrador'){
    console.log('Acceso a todo el sistema');
}else if(rol === 'editor'){
    console.log('Acceso a editar');
}else{
    console.log('No tienes acceso');
}