// Escribir un programa que escriba en pantalla los divisores de un número dado.

prompt = require('prompt');

prompt.start();

prompt.get(['numero']),function(error,resultado){
    let numero = resultado.numero
    let numero1 = 0 ;
    for(numero = 2; numero < numero1 / 2 ; numero++ ) {
        if (numero === 0){
            numero1++
            
        }
        console.log("El numero" +numero1+ "es divisible",numero)
    }//en poroceso
    
}