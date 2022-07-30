/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === 'taza') {
        resolve('Ordenando una taza con el logo de freeCodeCamp...')
      } else {
        reject('Este producto no esta disponible actualmente.');
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: ${respuesta}`);
    setTimeout(() => {
      resolve('Gracias por tu compra. Disfruta tu producto de freeCodeCamp.');
    }, 4000);
  });
}

// Realizar procesos asincronos en orden 
// al esperar que uno se complete antes que el otro inicie.

ordenarProducto('taza')
  .then(respuesta => {
    console.log('Respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada);
  })
  .catch(err => {
    console.log(err);
  });

// Con async await hacemos lo mismo de forma mas concisa.
// Una funcion asincrona retorna una promesa.

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    console.log(err);
  }
}

realizarPedido('taza');
// realizarPedido('lapiz');
