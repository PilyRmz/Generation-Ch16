/* TIPOS DE DATOS Y VARIABLES */

// ciclo for (contro; condición, modificar)

//0 -4 => 5 ya no se cuenta

for (let i = 0; i <  5; i++) { //i = i + 1
    console.log(i);
}

//console.log("el valor de i es: " + i);

//while
let control = 0;

while (control < 5){
    console.log("while:" + control);

    control++; //modificador
}

let control2 = true;

while(control2 === false){
    alert("estoy trabajando")
}

//Do..while
/* 
let numero = 0; */

do{
    console.log("Do...While:" + numero);
    numero++;
}while(numero < 5);