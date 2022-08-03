function miFuncion(a, b) {
    return (a + b);
    
}

let resultado = miFuncion(3, 6);
console.log("el resultado es" + resultado);

/* Función expresión ó funciones anónimas */

let suma = function (a, b) {
    return(a + b)
};

let res = suma (2, 3);
console.log("la suma es" + res);

/* Self Invoking */

(function (a, b) {
console.log("el resultado de Self invoking es: " + (a + b));
} )  (3, 4);