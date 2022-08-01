/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

let infoCursos = {
  'programacion': [
    {
      id: 1,
      titulo: 'Aprende Python',
      lenguaje: 'python',
      vistas: 15000,
      nivel: 'basico'
    },
    {
      id: 2,
      titulo: 'Python intermedio',
      lenguaje: 'python',
      vistas: 13553,
      nivel: 'intermedio'
    },
    {
      id: 3,
      titulo: 'Aprende JavaScript',
      lenguaje: 'javascript',
      vistas: 102223,
      nivel: 'basico'
    }
  ],
  'matematicas': [
    {
      id: 1,
      titulo: 'Aprende Calculo',
      tema: 'calculo',
      vistas: 12427,
      nivel: 'basico'
    },
    {
      id: 2,
      titulo: 'Aprende Algebra',
      tema: 'algebra',
      vistas: 15722,
      nivel: 'intermedio'
    }
  ]
}

module.exports.infoCursos = infoCursos;