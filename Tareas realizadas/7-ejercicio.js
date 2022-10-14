// Escribe un programa que pida un número y diga si es divisible por 2.
const prompt = require('prompt');

// Iniciar el prompt
prompt.start();

console.log("Igrese un numeros");
// Obtener valores de la consola
prompt.get(["numero"], function(error, resultado) {
    // Inicio de operaciones

    let numero = +resultado.numero // Obtener valores pedidos al usuario
if (numero % 2 === 0 ){
    console.log("Es divisible por 2");
    }
    else {
        console.log("No es divisible por 2")
    }
});