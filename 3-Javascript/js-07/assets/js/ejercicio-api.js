/*  

    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/


/* URLs para consumir */
const urlUnGatito = "https://api.thecatapi.com/v1/images/search"

/* Elementos del DOM */
const imagenGato = document.getElementById("img-gato");
const btn = document.getElementById("btn-gato");
console.log(btn);

/* Eventos */
btn.addEventListener("click", () => {
    console.log("Botón presionado");

// Agregar la funcionalidad
obtenerGatito(urlUnGatito)
})

// Funciones
async function obtenerGatito(url) {

    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);

    imagenGato.src =datos[0].url;
    
}
