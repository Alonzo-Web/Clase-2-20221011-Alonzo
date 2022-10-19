
// Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad).

const prompt = require('prompt');

// Iniciar el prompt
prompt.start();

console.log("Igrese un numeros");
// Obtener valores de la consola
prompt.get(["numero"], function(error, resultado) {
    // Inicio de operaciones

    let numero = +resultado.numero // Obtener valores pedidos al usuario
    let i = 2;
    while (numero % i !==0 && i < numero / 2){
    i++;
    }
    if(numero % i !== 0){
        console.log("El numero es primo");
    }
    else {
        console.log("El numero no es primo");
    }
});