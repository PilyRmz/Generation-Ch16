//crear un elemento
const imagen = document.createElement("img");

//Modificar los atributos html del elemento 
imagen.src = "https://placeimg.com/200/200/animals";
imagen.alt = "imágenes aleatorias de animales";


//Lo insertamos en un elemento padre en html 
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin", imagen); //inserta después del body
document.body.insertAdjacentElement("afterend", imagen); //inserta fuera del body
document.body.insertAdjacentElement("beforebegin", imagen);
document.body.insertAdjacentElement("beforeend", imagen);

//Forma correcta de crear e insertar un elemento
// 1- se crea el elemento q contendrá la imagen
// 2- seleccionar el elemento padre 

const padreImg = document.getElementById("padreImg");

// 3- crear el elemento 
const imagen2 = document.createElement("img");

// 4- Modificamos los atributos del elemento 
imagen2.src = "https://placeimg.com/200/200/nature";
imagen2.alt = "Imagenes de naturaleza";

// 5- insertar elemento 
padreImg.appendChild(imagen2);

//Utilizar forEach para pintar datos 
// forEach muestra todos los elementos de un Array
const frutas = ["Toronja", "Manzana", "Mandarina", "Limón", "Granada", "Melón", "Plátano", "Guayaba"];

const listaFrutas = document.getElementById("frutas");

//Forma 1 clásica
/* 
frutas.forEach(element) =>{
    const li = document.createElement("li");
    li.textContent = element
    listaFrutas.appendChild(li);
} 
 */

//Forma 2
// $ interpolación imprime el cogido de js correctamente 
frutas.forEach((el) => {
listaFrutas.innerHTML =`<li>${el}</li>`; 
});


