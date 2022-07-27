/* crea un archivo llamado ejercicio1.js
cada comando debe mostrarse en consola

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Escribe un comando para remover a "Dani" del arreglo

//Escribe un comando para remover a "Juan del arreglo"

//Escribe un comando para agregar a "Luis" al inicio del arreglo

//Escribe el comando para agregar tu nombre al final del arreglo

//Escribe el comando para mostrar la posición de "Maria"

//Escribe el comando para mostrar la posición de tu nombre */


const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(personas);

// Eliminar un elemento en una posición específica
// Utilizando el método splice() que nos permite eliminar un elemento en una posición específica. 
personas.splice(2,1)
console.log(personas);

personas.splice(3,1)
console.log(personas);

//El método unshift()agrega uno o más elementos al inicio del arreglo,
// y devuelve la nueva longitud del arreglo.

personas.unshift ("Luis");
console.log(personas);

//El método push()añade uno o más elementos al final de un array y
//devuelve la nueva longitud del array.

personas.push("Pily");
console.log(personas);

//Encontrar el índice de un elemento del Array

personas.indexOf("Maria");
console.log(personas);

// remover mi nombre
personas.splice(4);
console.log(personas);

//cada comando debe mostrarse en consola

//const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Escribe un comando para remover a "Dani" del arreglo

//Escribe un comando para remover a "Juan del arreglo"

//Escribe un comando para agregar a "Luis" al inicio del arreglo

//Escribe el comando para agregar tu nombre al final del arreglo

//Escribe el comando para mostrar la posición de "Maria"

//Escribe el comando para mostrar la posición de tu nombre

const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"]

personas.splice(1,1)
console.log(personas);

personas.splice(2,1)
console.log(personas);

personas.unshift("Luis");
console.log(personas);

personas.push("Fabiola");
console.log(personas);

console.log(personas.indexOf("Maria"));
console.log(personas.indexOf("Fabiola"));