

//Método Get

let persona = {
    nombre: "Marshme",
    apellido: "Reyes",
    edad: 2,
    email: "marshme@gmail.com",
    idioma:"es",

    idioma: "es",
    get leng(){
        return this.idioma.toUpperCase();
    },
    
    set lang (lang){
        this.idioma = lang.toLowerCase();
    }
}

console.log(persona.leng);
persona.lang = "ES";
console.log(persona.leng);
console.log(persona.idioma);
