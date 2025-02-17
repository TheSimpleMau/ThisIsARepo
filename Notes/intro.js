// consola (log, info, warn, error, assert)
console.log("Aquí se habla de plantas");
console.info("las plantas sirven para muchas cosas");
console.warn("Cuidado con las plantas venenosas");
console.error("No las vayas a ahogar");
console.assert(1 == 1);
console.assert(1 === 1);
console.assert(1 == "1");
console.assert(1 === "1");
console.assert(1 == true);
console.assert(1 === true);

// variables, constantes
var comestible = "espinaca"; //forma antigua de declarar variables

let flor = "rosa"; //forma moderna de declarar variables

const precio = 99.99;

// Alcance de las variables
for (let i = 0; i < 10; i++) {
    console.log(i);
    var mi_planta = "eucalipto";
}
console.log(mi_planta);


// alert, prompt, confirm
alert("hola");

const mi_planta_favorita = prompt("¿Cuál es tu planta favorita?");

const is_hungry = confirm("¿Tienes hambre?");

// funciones tradicionales
function regar(){
    console.log("Se regaron las plantas");
    return mi_planta_favorita;
}

regar();


// funciones modernas
() => {}  //Esto es una función anónima

//asignar una función anónima a la variable mi_funcion
const mi_funcion = () => {
    console.log("función anónima");
};

//Ejecuta la función anónima por medio del nombre de la variable
mi_funcion();


// arreglos

const arreglo = ["Elemento"];

const arreglo2 = new Array() 

arreglo.push("Otro elemento");

arreglo[10] = "Uno más";

arreglo[0] = "Elemento modificado";

//arreglos asociativos

arreglo["uno"] = 1;

//recorrido tradicional del arreglo

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//recorridos alternativos del arreglo

for(let posicion in arreglo) {
    console.log(posicion);
}

for(let valor of arreglo) {
    console.log(valor);
}


//Objetos

const objeto = {}; 

objeto.color = "verde";
objeto.tipo = "orquídea";


// modificar html