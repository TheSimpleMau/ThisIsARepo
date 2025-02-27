const fs = require('fs');
const http = require('http');

function getHTML(ruta){
    html = fs.readFileSync(ruta,{encoding: 'utf-8', flag: 'r'});
    return html;
};

const server = http.createServer((request, response) => {
    let html = '';
    console.log(request.url);
    const datos = [];
    request.on('data',(data)=>{
        datos.push(data);
    })
    console.log(Buffer.concat(datos).toString());
    if ((request.url == "/index.html" || request.url == "/") && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        html = getHTML('./index.html');
        response.write(html);
        response.end();
    }
    else if (request.url == '/laboratorios/Lab03' && request.method == "POST"){
        response.setHeader('Content-Type', 'text/html');
        html = getHTML('./laboratorios/Lab03/Lab03.html');
        response.write(html);
        response.end();
    }
    else if (request.url == '/laboratorios/Lab05' && request.method == "POST"){
        response.setHeader('Content-Type', 'text/html');
        html = getHTML('./laboratorios/Lab05/index.html');
        response.write(html);
        response.end();
    }
    else if (request.url == '/laboratorios/Lab06' && request.method == "POST"){
        response.setHeader('Content-Type', 'text/html');
        html = getHTML('./laboratorios/Lab06/index.html');
        response.write(html);
        response.end();
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        html = getHTML('./NotFound.html');
        response.write(html);
        response.end();
    }
})


server.listen(3000);