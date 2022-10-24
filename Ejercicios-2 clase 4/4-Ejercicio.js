// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

const prompt = require('prompt');

prompt.start();

console.log('Escriba una frase');
prompt.get(['frase'],function(error,resultado){
    const frase = resultado.frase
    let vocal = a = 0, e = 0, i = 0, o = 0, u = 0;

    for (vocal = 0; vocal < frase.length; vocal++) {
       switch (frase[vocal]){
        case 'a': case 'A': a++; break;
        case 'e': case 'E': e++; break;
        case 'i': case 'I': i++; break;
        case 'o': case 'O': o++; break;
        case 'u': case 'U': u++; break;

        default:
            break;
       }
    } 
    console.log("La letra 'a' aparece " +a+ " veces" );
    console.log("La letra 'e' aparece " +e+ " veces" );
    console.log("La letra 'i' aparece " +i+ " veces" );
    console.log("La letra 'o' aparece " +o+ " veces" );
    console.log("La letra 'u' aparece " +u+ " veces" );

});
