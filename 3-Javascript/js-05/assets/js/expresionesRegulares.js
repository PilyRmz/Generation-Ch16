/* EXPRESIONES REGULARES 
*Se emplean para la búsqueda y reemplazo de un patrón en una cadena
* Validación de campos en formularios */

/* No, un operador es un símbolo que realiza alguna operación, ej. sumar, asignar, restar
una expresión es una línea de código, algo así como un enunciado. 
Puede ser una declaración de una variable, o algo más complejo como una función.
que también las pueden conocer como RegEx, o ExpReg

 */

//Se puede crear utilizando una representación literal de la expresión regular,
//consiste en un patrón encerrado entre diagonales:

var re = /ab + c /; //la variable ya tiene q ser un objeto

//Llamando a la función constructora del obejeto RegExp:

var re = new RegExp("ab+c");

/* "hoy el sol parece muy lindo"
/sol/
la expresión regular busca en la variable la palabra "sol" */

let texto = "hoy parece que va a salir el sol";
let buscar = /sol/;
console.log(buscar.test(texto)); //te responde un boolean true si esta o false sino está 
//true

let texto1 = "hoy parece que va a salir el ";
let buscar1 = /sol/;
console.log(buscar.test(texto1)); //te responde un boolean true si esta o false sino está 
//false


// test es un metodo para objetos de tipo RegExp

let texto2 = "la espero en el aeropuerto LA";
let buscar2 = /LA/;
console.log(buscar.test(texto2)); //true

//Buscar delimitando la búsqueda /[ ]/
// ej. "te marque anoche" /[eo] / si aparece el 1er caracter pone true y si no esta busca el 2do, true
// sino sale ningún caracter, false

let texto3 = "te marqué anoche";
let buscar3 = /[eo]/;
console.log(buscar.test(texto3)); //true 

