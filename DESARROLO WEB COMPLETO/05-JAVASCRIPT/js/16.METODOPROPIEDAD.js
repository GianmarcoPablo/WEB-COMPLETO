//& METODO PROPIEDAD

const reprodcutor = {
    reproducir: function(id){
        console.log(`Reproduciendo Canción con el ID: ${id}`);
    },
    pusar: function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reprodcutor.borrar = function(id){
  console.log(`Borrando la canción con el ID: ${id}`);
}// Agregando una nueva propiedad al objeto fuera de la declaración

reprodcutor.reproducir(3840);
reprodcutor.pusar();
reprodcutor.borrar(20);
reprodcutor.crearPlaylist('Heavy Metal');
reprodcutor.reproducirPlaylist('Heavy Metal');