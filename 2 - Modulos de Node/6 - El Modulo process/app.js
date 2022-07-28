/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

console.log(process);
console.log(process.env);

// El indice inicia en 0 como en los arrays.
console.log(process.argv[2]);
console.log(process.argv[3]);

// Ciclo for para iterar sobre todos los argumentos
// dados en la línea de comandos.
for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

// Informacion sobre el uso de memoria.
console.log(process.memoryUsage());
