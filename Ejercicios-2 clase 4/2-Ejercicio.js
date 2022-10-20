// Escribe un programa que pida una frase y escriba las vocales que aparecen

const prompt = require ('prompt');

prompt.start();

console.log('Intruduzca una frase');

prompt.get(['frase'],function(error,resultado) {
    let frase = resultado.frase;
    console.log('Esta son las vocales que contiene la frase');

    for (let vocal = 0; vocal < frase.length; vocal++) {
        if (frase[vocal] === "a" || frase[vocal] === "e" || frase[vocal] === "i" || frase[vocal] === "o" || frase[vocal] === "u") {
            console.log(frase[vocal])
        }
        
    }
    
});
