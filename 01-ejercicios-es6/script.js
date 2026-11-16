// Ejercicio 1: Interpolación básica
let nombre = "Gabriela";
let profesion = "programadora";

const presentarPersona = (nombre, profesion) => `${nombre} es ${profesion}`;

console.log(presentarPersona(nombre, profesion)); // "Gabriela es programadora"

// Ejercicio 2: Multilínea y operadores ternarios
let cliente = "Juan Pérez";
let totalCompra = 6000;

let recibo = `--- RECIBO DE COMPRA ---
Cliente: ${cliente}
Total de la compra: $${totalCompra}
Estado del envío: ${totalCompra > 5000 ? "¡Envío Gratis!" : "Costo de envío: $500"}
------------------------`;

console.log(recibo);
