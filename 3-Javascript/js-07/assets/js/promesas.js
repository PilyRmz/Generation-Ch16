//Variable q simula los pedidos 

const saludo = "Hola mundo"

const datos = [
    { nombre: "Pily", apellido: "Rmz"},
    { nombre: "Pily", apellido: "Rmz"},
    { nombre: "Pily", apellido: "Rmz"},
]


//Función para simular una petición

function obtenerDatos() {

    return new Promise ((resolve, reject) => {
    
    setTimeout (() => {
        if (false){

            resolve(datos)

        } else {
            reject("Nunca te quiso")
        }
    }, 2000)
}) }

//Forma #1 then
obtenerDatos().then((datos) =>{
    console.log(datos);

}) .catch((error) => {
    console.log("existe un error en la petición 1");
    console.log(error);
})

// Forma #2 Funciones asincronas - await async 

async function funcionAsincrona () {

    try{

    const datos = await obtenerDatos()
    console.log(datos);
    
} catch (error){
    console.log(error);}
}

funcionAsincrona() 