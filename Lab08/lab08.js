
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
