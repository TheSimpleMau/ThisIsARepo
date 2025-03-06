const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/', (request, response, next)=>{
    response.render('sobreMi');
})


router.post('/guardar', (request, response, next) => {
    const filePath = path.join(__dirname, 'preguntas.txt');
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '', { flag: 'w' });
    }
    const pregunta = request.body.pregunta;
    if (!pregunta) {
        return response.status(400).render('preguntaResultado',{
            error: true,
            reason: 400
        });
    }
    fs.appendFile(filePath, pregunta + '\n', (err) => {
        if (err) {
            response.status(500).render('preguntaResultado',{
                error: true,
                reason: 500
            });
    }
    response.render('preguntaResultado');
    });
});

module.exports = router;

/*
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'SobreMi.html'));
});

router.post('/guardar', (req, res, next) => {
  const filePath = path.join(__dirname, 'preguntas.txt');
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '', { flag: 'w' });
  }
  const pregunta = req.body.pregunta;
  if (!pregunta) {
    return res.status(400).render('preguntaResult', { error: true });
  }
  fs.appendFile(filePath, pregunta + '\n', (err) => {
    if (err) {
      return res.status(500).render('preguntaResult', { error: true });
    }
    res.render('preguntaResult', { error: false });
  });
});

module.exports = router;
*/