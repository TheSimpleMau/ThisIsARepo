const Pregunta = require('../models/sobreMi.model');

exports.postGuardar = (request, response, next) => {
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    const preguntaTexto = request.body.pregunta;
    if (!preguntaTexto) {
        return response.status(400).render('preguntaResultado', {
            error: true,
            reason: 400
        });
    }
    // Creamos una nueva instancia del modelo Pregunta
    const nuevaPregunta = new Pregunta(preguntaTexto);
    
    // Guardamos la pregunta
    nuevaPregunta.save((err) => {
        if (err) {
            return response.status(500).render('preguntaResultado', {
                error: true,
                reason: 500
            });
        }
        // Obtenemos todas las preguntas actualizadas
        Pregunta.fetchAll((err, preguntas) => {
            if (err) {
                return response.status(500).render('preguntaResultado', {
                    error: true,
                    reason: 500,
                    isLoggedIn : request.session.isLoggedIn || false,
                    username : request.session.username || '',
                });
            }
            response.render('preguntaResultado', {
                error: false,
                preguntas: preguntas,
                isLoggedIn : request.session.isLoggedIn || false,
                username : request.session.username || '',
            });
        });
    });
};

exports.getRoot = (request, response, next)=>{
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    response.render('sobreMi', sessionStatus);
}