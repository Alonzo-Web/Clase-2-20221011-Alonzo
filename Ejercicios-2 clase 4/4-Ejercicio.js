// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

const prompt = require('prompt');

prompt.start();

prompt.get(['frase'],function(error,resultado){
    const frase = resultado.frase
    let conteoVocal = 0;
    for (let vocal = 0; vocal < frase.length; vocal++) {
        if (frase[vocal] === "a" || frase[vocal] === "e") {
            conteoVocal++
        }
        
    } // en proceso
    console.log( "La vocal 'a' aparece " +conteoVocal+ " veces")

});
