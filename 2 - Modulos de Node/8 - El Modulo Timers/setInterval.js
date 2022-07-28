/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

// Ejemplo con un solo argumento.
function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 1500, 'Node.js');

// Ejemplo con varios argumentos.
function sumar(a, b) {
  console.log(a + b);
}

setInterval(sumar, 1500, 3, 4);