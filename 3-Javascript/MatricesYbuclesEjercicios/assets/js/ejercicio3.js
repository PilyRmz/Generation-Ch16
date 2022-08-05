/* Escriba bucles while 

Imprima repetidamente el valor de la variable xValue, disminuyéndolo en 0.5 cada vez,
siempre que xValue siga siendo positivo. */

let xValue = 5;
while (xValue>0) {
    xValue = xValue - 0.5;
    console.log(XValue);
    
}



//Imprime todos los números impares del 1 al 100.

let numero = 0;
while (numero >= 0 && numero < 100) {
    numero++
    if (numero%2 !== 0) {
        console.log(numero);
        
    }
    
}

//

let min = 1;
let max = 100;

while (min <= max) {
    if((min %2) == 0){
        console.log(min);
    }
   min++
}


/* Escriba un método con un bucle while para imprimir del 1 al n entre corchetes.
Por ejemplo, si n = 6 imprime [1] [2] [3] [4] [5] [6] */

let num1 = prompt("Ingresa el número a imprimir")
let inicio = 1;
while (inicio <= num1) {
    console.log("[" +inicio + "]");
    inicio++;
    
}

let num2 = prompt("ingrese el numero a sumar")
let inicio0 = 1;
let resultado1 = 0;
for (inicio0 = 1; inicio0 <= num2; inicio0++){
    resultado1 = resultado1 + inicio0;
}

console.log(resultado1);

//

console.log("\n Suma de los primeros n enteros positivos");
let suma = 0;
let num = 25;
console.log("n =" + num);

while (num >= 0) {}
suma = suma + num;
num ==;
}
    
console.log("suma = " + suma);