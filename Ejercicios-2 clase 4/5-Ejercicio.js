// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).

prompt = require('prompt');

prompt.start();

console.log('Digite un numero');
prompt.get(['numero'],function(error,resultado){
    let numero = resultado.numero;
    if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
        console.log('Es divisible');
    }
    else {
        console.log(' No es divisible');
    }
});