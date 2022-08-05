//Método sort()
//Ordenar los elemento de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];
arr.sort();

console.log(arr);

// el areglo queda ordenado así: (6 elementos) ["A", "H", "W", "X", "a", "b"]
//porque el arreglo sort, ordena los elementos de forma alfabética, y primero las mayúsculas y luego las minúsculas

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"];
arr2.sort();
console.log(arr2);

// valor de lista de caracteres ASCII 

const arr3 = [5, 1231, 567, 80, 1];
arr3.sort();
console.log(arr3);

// (5) [1, 1231, 5, 567, 80]


//FUNCIÓN RECURSIVA - ORDENAMIENTO DE BURBUJA 
// ordena con respecto al albafeto ASCII

const arr4 = [5, 1231, 567, 80, 1];
arr4.sort((a, b) => a - b); // ordena números de forma menor a mayor
console.log(arr4); // 1, 5, 80, 567, 1231

const arr4 = [5, 1231, 567, 80, 1];
arr4.sort((a, b) => b - a); // ordena números de forma mayor a menor 
console.log(arr4); // 1231, 567, 80, 5, 1 


//FUNCIÓN DECLARADA
//hosting = proceso en el q js acomoda el código para q se pueda seguir ejecutando 

console.log(sumar); // no importa en q línea esta variable, solo funciones declaradas y no en variables declaradas 

function sumar(a, b) {
    return a + b;
    
}

//FUNCIÓN EXPRESADA
// no tiene hosting, no se puede imprimir antes de declararla 

const multiplicar = function (a, b) {
    return a * b;
}

console.log(multiplicar(3, 5));

//FUNCIONES FLECHA

const dividir = (a, b) => {
    return a / b;
}

console.log(dividir(10, 2));

// ó 
const dividirA = (a, b) => a / b;
console.log(dividirA(10, 2));

//MÉTODO forEach ()
// Ciclo que recorre en automático todo nuestro arreglo 

const arrNumeros =  [1, 4, 6, 8, 10, 20, 30];

for (let i = 0; i < arrNumeros.length; i++) {
    arrNumeros[i] = arrNumeros[i] *2;
}

console.log(arrNumeros);

// forEach, solo funciona con arreglos
// imprime (los elemetos, el número de posición "index", el arreglo completo)
const arrNum =  [1, 4, 6, 8, 10, 20, 30];
arrNum.forEach((elemento, index, arr) =>
console.log(elemento, index, arr));

// otro ej

arrNum.forEach((elemento) =>
console.log(elemento *= 2)); //elemento *2 
