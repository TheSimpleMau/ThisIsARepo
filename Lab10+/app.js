const fs = require('fs');
const http = require('http');

function getHTML(ruta){
    html = fs.readFileSync(ruta,{encoding: 'utf-8', flag: 'r'});
    return html;
};

const server = http.createServer((request, response) => {
    let html = '';
    if ((request.url == "/index.html" || request.url == "/") && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        html = getHTML('./index.html');
        response.write(html);
        response.end();
    }
    if (request.url == "/index.html" && request.method == "POST"){
        let paginaRequestData = [];
        request.on('data', (data)=>{
            paginaRequestData.push(data);
        })
        let paginaRequestTextPlain = '';
        request.on('end', ()=>{
            paginaRequestTextPlain = decodeURIComponent(Buffer.concat(paginaRequestData).toString());
            console.log(paginaRequestTextPlain);
        })
    }
    response.end();
})


server.listen(3000);