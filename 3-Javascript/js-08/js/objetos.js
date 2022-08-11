let x = 10;
console.log(x.lenght);

let persona = {
    nombre: "Marshme",
    apellido: "Reyes",
    edad: 2,
    email: "marshme@gmail.com",
    nombreCompleto: function name(params) {
        return this.nombre + " " + this.apellido;
    }
}
persona.tel = "55332134"
persona.tel = "21445252"

console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());

//for in
//Objetos tipo JSON creo 

for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}
 
let personaString = JSON.stringify(persona);
console.log(personaString);

/* this es una palabra reservada que se usa en muchos lenguajes de programación, se usa para indicar o apuntar a cierta variable o función en particular
le estas diciendo con this que el nombre que existe dentro del objeto es lo que vas a llamar
es como si especificaran la ruta
 */

// Forma 1 clásica de crear objetos

let personas = {
    nombre: "Pily",
    apellido: "Rmz",
    correo: "pily@gmail.com"
}

console.log(personas);

// forma 2 crear un objeto orientado a objetos

let newPersonas = new Object ();
newPersonas.nombre = "Nat"
newPersonas.apellido = "Reyes"
newPersonas.correo = "nat@gmail.com"

console.log(newPersonas);