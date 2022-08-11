// la clase reservada "class" estamos definiendo una plantilla 
class Persona{
   
 constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido;

 }

 get nombre(){
    return.this_nombre; //te regresa un valor "get"
 }
 set _nombre(nombre){
    this._nombre = nombre; //coloca un valor a un atributo "set"
 }
}

let persona1 = new Persona ("Jose", "Perez");
console.log(persona1);

persona1.nombre = "Hugo Sanchez";
console.log(persona1.nombre);

let persona2 = new Persona ("Ana", "Cruz");
console.log(persona2);

//Métodos accesores get y set 
/* get  = obtiene
set = fija
get se utiliza para leer un atributo
set se utiliza para modificar el valor de un atributo
 */