 /* Ejercicio 1
Parte 1
Hay tres personas esperando el banco. Sus nombres, en orden, son Sofía, David y Juan.
Cree una matriz que tenga estos tres nombres en orden. */

let personasBanco = ["Sofía", "David", "Juan"];
console.log(personasBanco);



/* Parte 2
Se agregan dos personas más al final de la fila: Sara y Augustin. 
La primera persona en la fila es llamada al cajero. ¿Cómo es la cola? */

personasBanco.push("Sara", "Agustin")
console.log(personasBanco);

personasBanco.shift();
console.log(personasBanco);

/* Parte 3
Resulta que David estaba reservando un lugar para su amiga Renata. 
Ella aparece y va detrás de él en la fila. Aparece una persona más (Elena) y va hasta el final de la fila. 
¿Cómo es la cola?  */

// David, Juan, Sara, Agustín 

personasBanco.splice(1, 0, "Renata");
console.log(personasBanco);

personasBanco.push("Elena");
console.log(personasBanco);
