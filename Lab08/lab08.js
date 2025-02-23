
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
    Esta es una función para resolver un problema del CSES.
    El problema se puede encontrar en la siguiente página: https://cses.fi/problemset/task/1192/
*/

// To set the size of the room
let n,m;

function dfs(visted, basicMatrix, i, j){
    /**
     * visited: A matrix of chars. The visted places on the room
     * basicMatrix: A matrix of chars. The basic room.
     * i: An integer.
     * j: An integer.
     */
    if (i < 0 || i >= n || j < 0 || j >= m || visted[i][j] != 0 || basicMatrix[i][j] == "#"){
        return;
    }
    visted[i][j] = 1;
    // Up
    dfs(visted,basicMatrix,i-1,j);
    //Down
    dfs(visted,basicMatrix,i+1,j);
    //Left
    dfs(visted,basicMatrix,i,j+1);
    //Right
    dfs(visted,basicMatrix,i,j-1);
}