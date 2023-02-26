//& CONTACTENACION Y TEMPALTE STRINGS//

//? DATO:
// 1. actualmente es mucho mejor usar template strings que concatenar en lugar de usar el signo de + para concatenar

const nombre = 'Gian Marco';
const email = "corre@correo.com"
console.log(nombre + " " + email); // esta esa una forma de concatenar pero no la mejor

//**  Template Strings //

// const nombreCompleto = `Mi nombre es: ${nombre} y mi correo es: ${email}`;
console.log(`Nombre Cleinte: ${nombre} Correo: ${email}`)