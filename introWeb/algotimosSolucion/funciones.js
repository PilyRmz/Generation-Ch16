// funciones

function sumar(numero1, numero2) {
    console.log("Voy a sumar");
    console.log("El resultado de la suma es: " + (numero1 + numero2));
}

sumar(4,5);

// ejercicio 2 funciones 

function calculadoraSueldo (params) {
    
    let nombre = prompt("Escribe tu nombre")
console.log(nombre);

const sueldo = 600;
const diasSemana = 6;
const semanasMes = 4;

console.log("Sueldo semanal: " + (sueldo * diasSemana));
console.log("Sueldo mes: " + (sueldo * diasSemana * semanasMes));

}

calculadoraSueldo()
calculadoraSueldo()

// Calcurladora de porcentajes
//0.6 = 60%

function calculadoraPorcentaje (numero, porcentaje) {

    let resultado = numero * porcentaje; // variable local solo exite dentro de la funcion 
    console.log(resultado);

    return resultado;
    
}

let porcentajeResultado= calculadoraPorcentaje(100, 0.40)
console.log(porcentajeResultado);

//ejercicioMario número divisible entre 7 y 8

function divisible(numero / 7 && 8) {

    if (numero / 7) {
        
    }
    
    
}