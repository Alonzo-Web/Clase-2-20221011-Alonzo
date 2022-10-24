// Escribir un programa que escriba en pantalla los divisores de un número dado.

prompt = require('prompt');

prompt.start();
console.log('Ingrese un numero');
prompt.get(['numero'],function(error,resultado){
    let numero = resultado.numero
    let numero1
    
    for(numero1 = 0; numero1 < numero/0 ; numero1++ ) {
        if (numero % numero1 === 0){
            
            console.log("El numero "+numero+ " es divisible por: " +numero1);
            
        }
        
    }
    
})
