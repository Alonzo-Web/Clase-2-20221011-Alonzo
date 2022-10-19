//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.
const prompt = require('prompt');

prompt.start()

console.log("Escribir una frase");

prompt.get(["valor"], function (error, resultado) {
    let conteoLetraA = 0;
    const valor = resultado.valor;
    
    for (let letra = 0; letra < valor.length; letra++) {
        if (valor[letra] === "a") {
            conteoLetraA = conteoLetraA + 1;
        }
    }

    console.log("La letra 'a' aparece " + conteoLetraA + " de veces")
});