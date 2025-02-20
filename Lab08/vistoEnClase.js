// Notas clase: Aprendiendo Node.js

// const fileSystem = require('fs');

// fileSystem.writeFileSync('hola.txt','Hola desde node');

// Ejemplo de cosas asíncronas:

// const arreglo = [5000,60,90,100,10,20,1000,0,120,2000,340,50]

// for(let item of arreglo){
//     setTimeout(() => {
//         console.log(item)
//     }, item);
// }


// Montando un servidor
const http = require('http');

const fileSystem = require('fs');

let html = ""

fileSystem.open("index.html","r", function (err,f) {
    if (err) {
        return "Fail on opening file!";
    }
    html += f;
});

const server = http.createServer((request, response) => {
    console.log(request.url); // Información sobre la url
    response.setHeader('Content-Type', 'text/html'); 
    response.write(html);
    response.end(); //Devolver algo al servidor
})


server.listen(3000);
