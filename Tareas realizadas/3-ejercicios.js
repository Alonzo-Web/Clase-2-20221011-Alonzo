//Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”.

const prompt = require('prompt');

//iniciar el prompt
prompt.start();

console.log("Ingrese su nombre");
prompt.get(["Nombre"], function(error, resultado){
    let Nombre = +resultado // Obtener valor pedido al usuario
    console.log("Hola" +" " +resultado.Nombre);
});