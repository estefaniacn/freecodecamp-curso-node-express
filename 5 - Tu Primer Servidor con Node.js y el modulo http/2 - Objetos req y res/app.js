/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

// Incluir el modulo http
const http = require('http');

// Crear un servidor que envie 'Hola, mundo'
// al cliente que realice una solicitud.
const servidor = http.createServer((req, res) => {

  // El objeto req (request = solicitud)
  console.log('===> Objeto req (solicitud)');
  // console.log(req);
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  // El objeto res (response = respuesta)
  console.log('===> Objeto res (respuesta)');
  console.log(res);

  console.log(res.statusCode); // 200 OK
  res.statusCode = 404;
  console.log(res.statusCode); // 404 Not Found
  
  res.setHeader('content-type', 'application/json');
  console.log(res.getHeaders());

  res.end('Hola, mundo');
});

// El servidor escucha en el puerto 3000 y cuando
// comienza escuchar muestra este mensaje en el terminal.
const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
