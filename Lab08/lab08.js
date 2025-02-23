
// Ejercicio 1
function arrayMean(array){
    let average = 0;
    for (value of array){
        average += value;
    }
    average = average/array.length;
    return average;
}

let testArray = [1,2,3,4];
console.log("Esto es una prueba de la función array: " + arrayMean(testArray));


// Ejercicio 2
function writeStringOnFile(string){
    const fileSystem = require('fs');
    fileSystem.writeFileSync('StringInput.txt',string);
    console.log("Archivo con cadena de texto añadido a archivo StringInput.txt");
}

writeStringOnFile("Hola desde función");

// Ejercicio 3
/*
    Se ha escogido como problema a resolver el siguiente problema de omegaup:
    https://omegaup.com/arena/problem/Formados-en-la-cafeteria/
    Es un problema de filas en una cafetería.
*/


const fs = require('fs');
const readline = require('readline');

// Crear una interfaz para leer el archivo línea por línea
const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    output: process.stdout,
    terminal: false
});

let filaAlumnos = [];
let filaTrabajadores = [];

// Leer cada línea y procesarla
rl.on('line', (line) => {
    if (line.startsWith("LLEGA ALUMNO")) {
        let nombre = line.split(" ");
        nombre = nombre[nombre.length - 1];
        filaAlumnos.push(nombre);
    }
    if (line.startsWith("LLEGA TRABAJADOR")){
        let nombre = line.split(" ");
        nombre = nombre[nombre.length - 1];
        filaTrabajadores.push(nombre);
    }
    if (line.startsWith("ATIENDE")){
        if (filaTrabajadores.length > 0) {
            let nombre = filaTrabajadores.shift()
            console.log(nombre);
        } else if (filaAlumnos.length > 0 && filaTrabajadores.length === 0) {
            let nombre = filaAlumnos.shift()
            console.log(nombre);
        }
    }
});

