`use strict`;

/* Conversión de tipos de datos
CASTEO PARSEO
Casting parsing */

//coersión de tipo de dato
//conversión automática de datos 

let num ="5";
let num2 = "10";

//Concatenación
//resultado de unir dos cadenas de texto
// Unimos un número con una cadena de texto

console.log(num - num2); // resultado en consola -5
console.log(num + num2); // resultado en consola 510

/* Number */
// convierte cadenas o booleanos a números 

let num3 = "56";
console.log(Number(num3)); //convierte de texto a numero 
console.log(num3); //imprimio "56" en texto

/* String */
// Convierte números o booleanos a cadenas

let num4 = String(4);
console.log(num4);
console.log(typeof (num4));

/* Boolean () */
// convierte números y cadenas a booleanos
// 0, "", null, undefined, NaN - los convierte a false
//faultsy values - valores q tienden a falso 
// todos los demás números los convierte a true

//casting -parsing - banderas - bifurcasiones 


let num5 = Boolean (98);
console.log(num5); // true
console.log(typeof num5); // boolean 

let num5 = Boolean (0);
console.log(num5); // false
console.log(typeof num5); // boolean 