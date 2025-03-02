const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/', (request, response, next)=>{
    const html = fs.readFileSync(path.join(__dirname, 'html', 'SobreMi.html'), { encoding: 'utf-8' });
    response.send(html);
})


router.post('/guardar', (request, response, next) => {
    const filePath = path.join(__dirname, 'preguntas.txt');
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '', { flag: 'w' });
    }
    const pregunta = request.body.pregunta;
    if (!pregunta) {
        const html = fs.readFileSync(path.join(__dirname, 'html', 'preguntaError.html'), { encoding: 'utf-8' });
        return response.status(400).send(html);
    }
    fs.appendFile(filePath, pregunta + '\n', (err) => {
        if (err) {
            return response.status(500).send(html);
        }
        const html = fs.readFileSync(path.join(__dirname, 'html', 'preguntaGuardada.html'), { encoding: 'utf-8' });
        response.send(html);
    });
});

module.exports = router; 