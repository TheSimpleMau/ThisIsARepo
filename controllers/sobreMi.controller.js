exports.postGuardar = (request, response, next) => {
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
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
        return res.status(500).render('preguntaResultado', {
            error: true,
            reason: 500
        });
        }
        const preguntas = data.split('\n').filter(p => p.trim() !== '');
        response.render('preguntaResultado', {
        error: false,
        preguntas: preguntas
        });
    })
    });
}

exports.getRoot = (request, response, next)=>{
    response.render('sobreMi');
}