/* Tipo predefinido */
let tiempo = new Date();
console.log(tiempo);
console.log(Match); // una variable estática es una variable predefinida 

let obj_literal = {
    nombre: "Juan",
    edad: 35
}

let obj_constructor = new Object();
obj_constructor.nombre = "Dora";
obj_constructor.edad = 23;
console.log(obj_literal);
console.log(obj_constructor);

obj_literal = ["nombr"];
let llave = "nombr";
console.log("esto es con llave" + obj_literal [llave]);

let cadena = "Es una cadena"; // objeto de tipo primitivo para js, pero no es un objeto en sí 
let cadena_obj = new String("Esto es una cadena obj"); /* objeto de manera clásica,
 hay una clase String (las clases se escriben con Mays primera letra) q contiene propiedades y métodos, 
el operador New permite q definamos de manera clásica a los objetos */
console.log(cadena);
console.log(cadena_obj);

/* Tipos numérico */
let numero = 13;
let numero_obj = new Number(13,13);
console.log(numero);
console.log(numero_obj);

/* Tipo compuesto o único */
let lista= ["2", "3", "5", "7"];
let lista_obj = new Array ["1", "4", "6", "8", "9"];
console.log(lista);
console.log(lista_obj);


/* NOTAS
ARRAY: tipo de dato único o compuesto */
/* y el string primitivo no tiene métodos ni atributos, por eso nos damos cuenta que el tipo de dato primitivo no es un objeto en sí
Aunque en la práctica con JavaScript no hay diferencia, ya que en automático cuando usamos métodos con un tipo de dato primitivo, se hace una conversión
 */

/* La abstracción consiste en ocultar los detalles de implementación y resaltar las 
características esenciales de un objeto para los usuarios. Así es como la incorporación 
de la abstracción en un programa de JavaScript puede mejorar la legibilidad del código y 
evitar la duplicación. Al proporcionar sólo los detalles importantes a los usuarios, 
también mejora la seguridad de una aplicación.
 */