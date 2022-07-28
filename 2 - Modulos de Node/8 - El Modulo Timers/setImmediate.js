/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate()');

setImmediate(mostrarTema, 'Node.js');

// Se ejecuta antes que mostrarTema porque 
// setImmediate() ejecuta la funcion en el proximo
// ciclo de eventos de Node.js (como codigo asincrono).
console.log('Despues de setImmediate()');