const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/', (request, response, next)=>{
    response.sendFile(path.join(__dirname,'..','views','SobreMi.html'));
})


router.post('/guardar', (request, response, next) => {
    const filePath = path.join(__dirname, 'preguntas.txt');
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '', { flag: 'w' });
    }
    const pregunta = request.body.pregunta;
    if (!pregunta) {
        return response.status(400).sendFile(path.join(__dirname, '..', 'preguntaError.html'));
    }
    fs.appendFile(filePath, pregunta + '\n', (err) => {
        if (err) {
            response.status(500).sendFile(path.join(__dirname, '..', 'preguntaError.html'));
        }
        response.sendFile(path.join(__dirname, '..', 'views', 'preguntaGuardada.html'));
    });
});

module.exports = router; 