// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.

prompt = require ('prompt');

prompt.start();

console.log('Ingrese dos numeros')
prompt.get(['numero1','numero2'],function(error,resultado){
    let numero1 = resultado.numero1
    let numero2 = resultado.numero2
    let divisor;
    let numero;

    if(numero1 < numero2) {
        divisor = numero1;
    } else {
        divisor = numero2
    }

    for (numero = 0; numero <= divisor; numero++) {
        if (numero1 % numero === 0 && numero2 % numero === 0  ) {
           console.log("Los divisores comunes son: " +numero)
        }
    }

});