// & FETCHAPI

function obtenerEmpleados(){

  const archivo = 'empleados.json';
  fetch(archivo)
    .then( respuesta => respuesta.json())
    .then( datos => {
      const {empleados} = datos;
      empleados.forEach( empleado => {
        const {id, nombre, empresa, trabajo} = empleado;
        const li = document.createElement('li');
        li.innerHTML = `ID: ${id} Nombre: ${nombre} Empresa: ${empresa} Trabajo: ${trabajo}`;
        document.querySelector('#resultado').appendChild(li);
      })
    })
}