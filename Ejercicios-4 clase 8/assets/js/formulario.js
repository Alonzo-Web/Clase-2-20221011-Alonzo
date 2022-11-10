const miFormulario = document.getElementById("mi-formulario");
const nombreEvento = "submit";

const accionEvento = (e) => {
    // evitar comportamiento por defecto en el evento submit
    e.preventDefault();
    // agregar acciones en mi evento.....

    const altura = miFormulario.elements.altura.value;
    const ancho = miFormulario.elements.ancho.value;
    const color = miFormulario.elements.color.value;
    
    const pantalla = document.getElementById("pantalla")
    pantalla.style.width = ancho + "px"
    pantalla.style.height = altura + "px"
   

    if (altura === '' || ancho === ''){
       mostrarMensaje('Todos los campos son obligatorios', 'error');
       return;
    }

    mostrarMensaje('Aplicado', 'correcto');
    pantalla.style.background = color
}
mostrarMensaje = (mensaje, tipo) => {
  
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }


    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

     // Para que no se repita la alerta
     const alerta = document.querySelector('.mt-10');
     if(alerta) {
         alerta.remove();
     }


    //insertar en html
    const miFormulario = document.getElementById("mi-formulario");
    miFormulario.insertBefore(div, document.getElementById("mensaje"));
    setTimeout(()=>{
        div.remove();
    },3000);
}


miFormulario.addEventListener(nombreEvento, accionEvento)
