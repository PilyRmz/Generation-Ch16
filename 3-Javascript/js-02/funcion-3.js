/* Funciones como Objetos */

function miFuncion (a = 6, b = 7){  //parametros, lista de variables o propiedades 
    let res = 0;  //propiedad
    res = (a * b) //acción o proceso
    return res;
}

console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

// toString()  convierte un objeto a texto
