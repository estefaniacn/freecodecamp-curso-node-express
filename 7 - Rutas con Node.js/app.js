/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

const http = require('http');
const {infoCursos} = require('./cursos');

const server = http.createServer((req, res) => {
  const metodo = req.method;

  switch(metodo) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(`El metodo no puede ser manejado por el servidor: ${metodo}`);
  }
});

function manejarSolicitudGET(req, res) {
  const camino = req.url;

  if (camino === '/') {
    return res.end('Bienvenidos a mi primer servidor y API creados con Node.js.');
  } else if (camino === '/cursos') {
    return res.end(JSON.stringify(infoCursos));
  } else if (camino === '/cursos/programacion') {
    return res.end(JSON.stringify(infoCursos.programacion));
  }

  res.statusCode = 404;
  return res.end('El recurso solicitado no existe...');
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  if (path === '/cursos/programacion') {

    let cuerpo = '';

    req.on('data', contenido => {
      cuerpo += contenido.toString();
    });

    req.on('end', () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);

      // Convertir a un objeto de JavaScript.
      cuerpo = JSON.parse(cuerpo);

      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);

      res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    });

    // return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
  }
}

const PUERTO = 3000;

server.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
