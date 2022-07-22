// Igualdad

console.log( 5 == 5); //true
console.log(1 == 3); //false
console.log("hola" == "adios"); //false
console.log("hola" == "hola"); //true
console.log(true == false); //false

// Desigualdad
console.log( 5 != 1); //true  5 es diferente de 1
console.log("gato" != "gato"); //false gato es igual a gato por lo tanto es falso, ya q no es diferente gato y gato

//Extrictamente igual
console.log(5 === "5"); //false
console.log(0 === false); //false
console.log(5 !== "5"); //true 

//Mayor que
console.log( 10 > 5); //true
console.log( 1 > 5); //false
console.log( 5 > 5); //false un 5 no es más grande q un 5 

// Mayor o igual
console.log( 5 >= 5); //true
console.log( 10 >= 3); //true
console.log( 3 >= 7); //false

// Menor que
console.log( 10 < 20); //true
console.log( 20 < 10); // false

//Menor o igual 
console.log( 20 <= 20); //true

//Numeros
//Codigo ASCII
console.log( "a" > "b"); //true
console.log( "a" < "b"); //false
console.log( "D" > "d"); //false las minúsculas son mayores q las mayusculas en el código ASCII
console.log( "d" > "D"); //true