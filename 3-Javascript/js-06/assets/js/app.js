//getElementById
console.log(document.getElementById("parrafo1").textContent);

// o se puede poner así y solo inicailizas una variable y ya luego solo la llamas log
//textContent muestra el contenido de texto q tiene ese elemento 

const parrafo1 = document.getElementById("parrafo1");
console.log(parrafo1.textContent);

//podemos sustuir el contenido 

parrafo1.textContent = "Hola desde el párrafo 1"
console.log(parrafo1.textContent);

//podemos visualizar y/o modificar los atributos con style
console.log(parrafo1.style);

parrafo1.style.color = "red";
parrafo1.style.backgroundColor = "yellow";

//querySelector ()
// etiqueta = p 
// clase = .parrafo
// id = # 

const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

// += le suma al contenido original y deja la nueva variable con lo anterior y lo nuevo 
parrafo2.textContent += "Modificando el contenido desde Javascript";

// \n  inserta un salto  === <br>
// \t

// querySelectorALL() nos regresa una lista de nodos
// length sale 3 porq hay 3 parrafos 

const parrafos = document.querySelectorAll("p");
console.log(parrafos.length);
console.log(parrafos[2]); //muestra el párrafo en la posición 2 

// css   font-size
// js   fontSize - lower camel case

parrafos[2].style.fontSize ="2rem";

// querySelector es menos rápido q getELmentById, por eso se usa más este 
//Modificar los atributos de html
const enlace = document.getElementById ("enlace");
console.log(enlace);

enlace.href = "https://www.youtube.com/"; // cambio el enlace de google a youtube 
enlace.target = "_blank";
enlace.textContent = "Enlace de Youtube"

// Remplazar contenido

const parrafo4 = document.getElementById("parrafo4");

console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(document.body.innerHTML); //muestra el html q haya en el interior de el elemento
console.log(parrafo4.outerHTML); //muestra el contenido html, incluyendo al elemento 

/* parrafo4.outerHTML ="<a href="http://google.com">Enlace </a>"; //Reemplaza el elemento completo
parrafo4.innerHTML="<a href="http://google.com">Enlace </a>"; //Reemplaza el contenido del elemento  */

/* parrafo4.innerHTML= <div class = "elemento">Este es un div</div> */

// Js permite modificar las clases css
// Utilizando style

console.log(parrafo4.classList.contains("elemento"));
parrafo4.classList.add("elemento");

const cambiarColor = () => {
    parrafo4.classList.toggle("elemento");

}

cambiarColor(); //se agrega la clase
cambiarColor(); // se quita la clase

