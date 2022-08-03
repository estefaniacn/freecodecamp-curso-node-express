/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

// Ejemplo 1 - Sin parametros.

emisorProductos.on('compra', () => {
  console.log('Se realizo una compra.');
});

emisorProductos.emit('compra');

// Ejemplo 2 - Un parametro.

emisorProductos.on('compra', (total) => {
  console.log(`Se realizo una compra por $${total}.`); 
});

emisorProductos.emit('compra', 500);

// Ejemplo 3 - Dos parametros.

emisorProductos.on('compra', (total, numProductos) => {
  console.log(`Total de la compra: $${total}`);
  console.log(`Numero de productos: ${numProductos}`);  
});

emisorProductos.emit('compra', 500, 5);