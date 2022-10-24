// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.

prompt = require ('prompt');

prompt.start();

console.log('Ingrese dos numeros')
prompt.get(['Numero 1','numero 2'],function(error,resultado){
    let numero1 = resultado.numero1
    let numero2 = resultado.numero2
    let divisores;
    let numero;

    if(numero1 < numero2) {
        divisores = numero1;
    } else {
        divisores = numero2;
    }

    for (numero = 2; numero < divisores/2; numero++) {
        if (numero1 % numero === 0 && numero2 % numero === 0) {
           console.log()
        }
    }//en proceso
    
});