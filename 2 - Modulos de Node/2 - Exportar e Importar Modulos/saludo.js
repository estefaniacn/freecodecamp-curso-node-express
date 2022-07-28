/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

function saludar(nombre) {
  return `Hola ${nombre}`;
}

// Verificar el valor del objeto module.exports.
console.log(module.exports);
module.exports.saludar = saludar; 
console.log(module.exports);