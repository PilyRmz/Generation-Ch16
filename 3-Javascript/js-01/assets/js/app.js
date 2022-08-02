/* para los apuntes shif+alt+a comentarios en block
ctrl+k+c comentarios a linea
ctrl+k+u quitamos los comentarios
*/

"use strict"; //para usar Js de forma estricta

// Tipos de variables

let a; //local
const b = 0; // se tiene q inicializar siempre, constante y local, no se permite reasignar valores

var c; //global

const PI = 3.1416;

/* Scope - comtexto
espacio en el q vive la variable */

if(true){
    var d =15;
}

/* Tipos de datos */

// String - cadena de texto 
let cadena = "Hola mundo";

//Number
let numero = 5;
let numero1 = 5.89;
let numero2 = -5.89;

//Boolean
let booleano = true;
let booleano2 = false;

//undefined = indefinido
let variable;
console.log(variable);

//null
let vacio = null;
//console.log (vacio);


//Nan - Not a number, no es un número
//surge al tratar de realizar operación aritmética con algún dato q no es un número 

/* Plantillas literales
Template strings
literal strings
interpolación */

console.log(`Esta es una cadena ${5 + 4}`);
console.log("Esto es una cadena normal de texto ${5 + 4}");

let nombre = "Pily";

//let presentación = " " ;

console.log("Mi nombre es" + nombre);
console.log("Yo me llamo ${nombre}");

console.log("<h1>Hola</h1>");

/* Arreglos- matrices - arrays */

let arr = [1, "A", null, undefined, [true, false]];
//notación de corchetes
console.log(arr[4][0]);

if (arr[4][0]=== true) {
    console.log("es verdad");
    
}

let arr2 = new Array ("B", 2);
console.log(arr2);

/* Objetos */
// clave / valor 

const persona = { nombre: " Pily", edad: 31,
              hobbies: ["leer", "ver Shrek 1 y 2", "comer"],
              auto: {marca: "VW", modelo: "Pointer", year: 2000},
              saludar: function () {
               return "Saludar";
                
              }
};

persona.nombre = "Panchito";

//Notación de punto
console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Mi nombre favorito es ${persona.hobbies [1]}`);
console.log(`La marca de mi carro es ${persona.auto.marca}`);
console.log(`La acción q realizo es ${persona.saludar}`);


