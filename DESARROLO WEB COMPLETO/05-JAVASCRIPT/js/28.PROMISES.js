//& PROMISES

//? DATO: 
//1. Las promesas son un objeto que representa la terminación o el fracaso eventual de una operación asíncrona.

//! IMPORTANTE:
// los promises existen 3 valores posibles
// 1. pending: no se ha cumplido pero tampoco se ha rechazado.
// 2. fulfilled: significa que la operación se completó con éxito.
// 3. rejected: significa que la operación falló.

const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth = true;

    if(auth){
      resolve('Usuario Autenticado'); //EL PROMESA SE CUMPLE
    }else{
      reject('No se pudo iniciar sesión'); //EL PROMESA NO SE CUMPLE
    }
});

usuarioAutenticado
  .then( resultado => console.log(resultado))
  .catch( error => console.log(error))
