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
    pantalla.style.background = color
}


miFormulario.addEventListener(nombreEvento, accionEvento)