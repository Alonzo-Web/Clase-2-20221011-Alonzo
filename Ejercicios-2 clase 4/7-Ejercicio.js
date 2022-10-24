// Escribir un programa que escriba en pantalla los divisores de un número dado.

prompt = require('prompt');

prompt.start();

prompt.get(['valor']),function(error,resultado){
    let numero = resultado.numero
    let numero1
    for(numero1 = 2; numero1 < numero/2 ; numero1++ ) {
        if (numero % numero1 === 0){
            
        }
        
    }//en poroceso
    console.log(numero,",");
}