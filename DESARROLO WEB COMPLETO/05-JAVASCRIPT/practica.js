const palabras = ['hola', 'como', 'estas', 'hola', 'bien', 'y', 'tu', 'hola'];

const resultado = palabras.reduce((contadorPalabras, palabra) => {
  if (palabra in contadorPalabras) {
    contadorPalabras[palabra]++;
  } else {
    contadorPalabras[palabra] = 1;
  }
  return contadorPalabras;
}, {});

console.log(resultado);