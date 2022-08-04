//Arreglos, un arreglo es un objeto
//Colección de elementos
// Cada elemento ocupa una posición 
// Esa posición se conoce como índice y comienza a partir de 0 

let arr = [1, 2, 3, 4];
console.log(arr);

//propiedades - describen
//métodos - acciones q puede realizar 

//MODIFICAN EL ARREGLO ORIGINAL 

console.log(arr[2]);
arr [4] = 190;
arr [4] = "Hola"
console.log(arr);

//métodos de arreglos

const arreglo = ["adiós"];

//push agrega un elemento al final del arreglo
arreglo.push(2);
arreglo.push(true);

let num = 500;
arreglo.push(num);

console.log(arreglo);

//unshift() agrega un elemento al inicio del arreglo 

arreglo.unshift("A");
arreglo.unshift("B");

console.log(arreglo);

console.log(typeof (arreglo[4]));

//MÉTODOS PARA QUITAR ELEMENTOS
//pop() quita el un elemento del final del arreglo 

let dato1 = arreglo.pop()

console.log(dato1);
console.log(arreglo);

//Shift () quita un elemento del inicio del arreglo

let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

//splice () quita un elemento(parte) en específico del arreglo 

arreglo.splice(1, 0);
console.log(arreglo);

//permite reemplazar e insertar un elemento en una posición en específico

arreglo.splice(1, 1, "borrego", 576878); 
//splice (posición de inicio. cantidad de elementos a afectar, elemento/s q vamos a insertar)
console.log(arreglo);




//NO MODIFICAN EL ARREGLO ORIGINAL 
// hacen una copia, modifican esa copia 

//Slice () 
//Corta partes de un arreglo 

let dato3 = arreglo.slice(0, 2);

//arreglo.slice(incida la primera posición q va a marcar, incica la posición hasta donde corta) 
//es como un rango de corte de video, corta todo lo demás y deja solo lo q hay dentro de rango 
//genera un arreglo con los elementos cortados 

console.log(dato3);
console.log(arreglo);

