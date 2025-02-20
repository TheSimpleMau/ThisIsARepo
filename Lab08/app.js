// Notas clase: Aprendiendo Node.js

const fileSystem = require('fs');

fileSystem.writeFileSync('hola.txt','Hola desde node');

// Ejemplo de cosas asíncronas:
const arreglo = [5000,60,90,100,10,20,1000,0,120,2000,340,50]

for(let item of arreglo){
    setTimeout(() => {
        console.log(item)
    }, item);
}

