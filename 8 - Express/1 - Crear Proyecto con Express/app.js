/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

const express = require('express');
const app = express();

// Simular una base de datos.
const {infoCursos} = require('./cursos.js');

console.log(infoCursos);