/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

// Incluir el modulo http.
const http = require('http');

// Crear un servidor que envie 'Hola, mundo'
// al cliente que realice la solicitud.
const servidor = http.createServer((req, res) => {
  res.end('Hola, mundo');
});

const puerto = 3000;

// El servidor escucha en el puerto 3000 y cuando
// comience a escuchar se mostrara este mensaje en el terminal.
servidor.listen(puerto, () => {
  console.log(`El servidor esta escuchando en el puerto http://localhost:${puerto}/...`);
});
