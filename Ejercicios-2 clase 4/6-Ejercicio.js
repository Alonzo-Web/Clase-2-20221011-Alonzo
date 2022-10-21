// Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible).
prompt = require('prompt');

prompt.start();

prompt.get(['numero'],function(error,resultado){
    let numero = resultado.numero;
    if(numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0){
        if(numero % 2 === 0){
            console.log('Es divisible por 2')
        }
        if(numero % 3 === 0){
            console.log('Es divisible por 3')
        }
        if(numero %  5 === 0){
            console.log('Es divisible por 5')
        }
        if(numero % 7 === 0){
            console.log("Es divisible por 7")
        } 
        
    }else{
        console.log("No es divisible ni por 2, ni por 3, ni por 5, ni por 7")
    }
})