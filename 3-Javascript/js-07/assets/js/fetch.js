const url = "https://dog.ceo/api/breeds/image/random"

//Respuesta de la petición
fetch(url).then(() => {
console.log(respuesta);
})

//Obtener la información de la petición 
//Forma #1
fetch(url)
.then((resp) => resp.json())
.then((datos) =>{
    console.log(datos);
})

//Forma #2
async function obtenerPerritoAleatorio(params) {
    try{
    const respuesta = await fetch(url);
    const datos = await respuesta.json()

    console.log(datos);
    
} catch(error){
    console.log(error);}
}

obtenerPerritoAleatorio()