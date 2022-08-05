/* Ejercicio 2
Escriba un programa de JavaScript para construir el siguiente patrón, usando un bucle for anidado.
Anidar un bucle consiste en meter ese bucle dentro de otro

*  
* *  
* * *  
* * * *  
* * * * * */
/* 
let sizeP = 6;
let signo_aUsar = "*";
console.log(signo_aUsar)

for (let i = 0; i < sizeP; i++) {
  signo_aUsar = signo_aUsar + "*";
  console.log(signo_aUsar);
    
}
 */

//Método con solo for

let asteriscos = "";
for(let x = 0; x < 5; x++){
    asteriscos += "*";
    console.log(astericos);
}

//Método con for anidados

for (let i = 1; i < 6; i++){
    let patron = "";

    for (let j = 0; j < i; j++) {
        patron = patron + "*";
    }
    console.log(patron);
}
