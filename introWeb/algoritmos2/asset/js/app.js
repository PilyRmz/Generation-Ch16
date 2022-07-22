function saludo(params) {
    console.log("Hola mundo");
}

saludo();

// Arreglos Array

let num = [];
console.log();

let arr1 = new Array();
console.log();

//Usar un arreglo

const arr = [1,2,3,4,5];
console.log(arr);

// notacion de corchetes []

const arr2 = [1,2,3,4,5];
console.log(arr2[3]);

arr2[5] = 25;
arr2[6] = 8;

console.log(arr2);

//Propiedades de los arreglos
// Nos muestra el número de celdas q estan ocupadas 

console.log(arr2.length);

// Métodos
// Acciones que puede realizar arreglo

const frutas = ["manzanas", "platanos"];
console.log(frutas);

//push()
//agrega un valor al final del arreglo 
let fruta = ("toronja");

frutas.push("naranja");
frutas.push(fruta);

console.log(frutas);

//método pop
//quita un elemento del final 

frutas.pop();
console.log(frutas);

// unshift()
// agrega un elemento al inicio del arreglo

frutas.unshift("uva");
console.log(frutas);

let devolver = frutas.unshift("uva", "pera");
console.log(devolver);

//shift
// Elimina un elemento del inicio de un arreglo 

frutas.shift();
console.log(frutas);