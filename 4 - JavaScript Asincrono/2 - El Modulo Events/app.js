/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

// Por convencion se escribe en mayuscula porque
// es una clase.
const EventEmitter = require('events');

// Creamos una instancia (objeto) emisor.
const miEmisor = new EventEmitter();
console.log(typeof miEmisor);

// Creamos un evento personalizado. 
// Cuando se emita un evento llamado 'inicio' se llama a esta función.
//
// NOTA: Todavia no estamos trabajando con servidores. 
// Esta es solo una muestra de una funcion que maneja un evento
// y muestra un mensaje. 
miEmisor.on('inicio', () => {
  console.log('Iniciando el servidor...');
});

// Emitir el evento.
miEmisor.emit('inicio');

// Evento con un parametro.
miEmisor.on('saludo', nombre => {
  console.log(`Hola, ${nombre}`);
})

miEmisor.emit('saludo', 'freeCodeCamp');

// Evento con dos parametros.
miEmisor.on('saludo', (nombre, tema) => {
  console.log(`Hola, ${nombre}. Hoy vas a aprender ${tema}.`);
})

miEmisor.emit('saludo', 'freeCodeCamp', 'Node.js');