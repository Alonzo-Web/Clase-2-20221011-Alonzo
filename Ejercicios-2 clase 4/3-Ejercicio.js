//Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.

const prompt = require('prompt');

    prompt.start();

    console.log('Escriba una frase');

prompt.get(['frase'],function(error,resultado) {

    let frase = resultado.frase;
    let conteoVocales = 0;

    for(let letras = 0; letras < frase.length; letras++) {
        if(frase[letras] === 'a' || frase[letras] === 'e' || frase[letras] === 'i' || frase[letras] === 'o' || frase[letras] === 'u' ){
            conteoVocales++
        }
    }
    console.log("Esta frase tiene "+ conteoVocales +" vocal" )
}); 