const fs = require('fs');
const path = require('path');

// Definimos la ruta del archivo donde se guardarán las preguntas
const filePath = path.join(__dirname, 'preguntas.txt');

module.exports = class Pregunta {
    constructor(texto) {
        this.texto = texto;
    }

    // Método para guardar la pregunta en el archivo
    save(callback) {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                fs.writeFile(filePath, '', (err) => {
                    if (err) {
                        return callback(err);
                    }
                    fs.appendFile(filePath, this.texto + '\n', callback);
                });
            } else {
                fs.appendFile(filePath, this.texto + '\n', callback);
            }
        });
    }

    // Método estático para obtener todas las preguntas guardadas
    static fetchAll(callback) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return callback(err, null);
            }
            const preguntas = data.split('\n').filter(p => p.trim() !== '');
            callback(null, preguntas);
        });
    }
}
