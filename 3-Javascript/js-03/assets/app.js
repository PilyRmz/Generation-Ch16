/* Estructuras de conntrol */

//CONTROL DE FLUJO 

if (conditionA) {
    /* Código q se hace si se cumple la condición A */
    
}

else if (conditionB) {
    /* Código q se hace si se cumple la condición B */
}

else if (conditionC) {
    /* Código q se hace si se cumple la condición C */
}

else if (conditionB) {
    /* Código q se hace si no se cumple ninguna de las condiciones anteriores */
}


// ejercicio control de flujo

let condicion = "A"

if (condicion === "A") {
    console.log("entro en la condición A");
    
}

else if (condicion === "B") {    
    console.log("entro en la condición B");
} 

else if (condicion === "C") {  
    console.log("Entro en la condicion C");  
} 

else {
    console.log("No cumple con ninguna");
}

// ejemplo 
function dividir(a, b) {
    if (b === 0) {
        console.log("No se puede realizar la operación");
    }

    else{
        console.log(a / b);
    }   
}

dividir (10 / 2)

/* Switch */
// Se usa para evaluar condiciones o casos


let nuevaCondicion = "Adios";
switch (nuevaCondicion) {
    case "Hola":
        console.log("Buenos días");
        console.log("espero que te encuentres bien");
        break;
    
    case "Adios":
        console.log("Nos vemos");
        break;
        
    case "Multiplicar":
        console.log("te mando un saludo");
        break    
        
    default: //por defecto
        console.log("No entendi tu mensaje");
        break
        
}


// ej. switch elegir 

switch(elegir){

    case "sumar":
        console.log("Vamos a sumar");
        break

    case "restar":
        console.log("Vamos a restar");
        break

    case "dividir":
        console.log("Vamos a dividir");
        break

    case "multiplicar":
        console.log("Vamos a multiplicar");
        break

    default:
        console.log("No entiendo");
}

// ej. if elegir 
if(elegir === "sumar"){
    console.log("Vamos a sumar");

}else if(elegir == "restar"){
    console.log("Vamos a restar");

}else if(elegir == "dividir"){
    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){
    console.log("Vamos a multiplicar");

} else {
    console.log("No entiendo");
}
