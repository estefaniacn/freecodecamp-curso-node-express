/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

const express = require('express');
const app = express();

// Simular una base de datos.
const {infoCursos} = require('./cursos.js');

app.get('/', (req, res) => {
  res.send('Mi primer servidor. Cursos 💻.');
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});