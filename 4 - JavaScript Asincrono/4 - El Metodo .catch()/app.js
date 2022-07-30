/*
* Curso de Node.js y Express.
* Creado para freeCodeCamp en Español.
* Por: Estefania Cassingena Navone. 
*/

// ------------------------
// Ejemplo: Pedido de Pizza
// ------------------------

// Tenemos una tienda de pizzas y 
// nuestro sistema de pedidos es asincrono. 
// Puede tomar unos segundos procesar el pedido
// y la operacion tambien puede fallar.
const estatusPedido = () => {
  // Math.random() genera un número aleatorio entre 0 y 1.
  const estatus = Math.random() < 0.8;
  // Para ver el estatus en el terminal. 
  console.log(estatus);
  return estatus;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  // setTimeout() simula el tiempo que tardaria la operación
  // de procesar la compra.
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('¡Pedido exitoso! Su pizza esta en camino.');
    } else {
      reject('Ocurrio un error. Por favor intente nuevamente.');
    }
  }, 3000);
});

const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};


miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);

// Otra alternativa
miPedidoDePizza
  .then(manejarPedido)
  .catch(rechazarPedido);

// Sintaxis alternativa. Encadenar .then()
miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .then(null, (mensajeDeError) => {
    console.log(mensajeDeError);
  });

// Sintaxis alternativa. Reemplazar .then() con .catch()
// Se elimina null como el primer argumento porque .catch() solo maneja
// el resultado si la promesa es rechazada. 
miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .catch((mensajeDeError) => {
    console.log(mensajeDeError);
  });
