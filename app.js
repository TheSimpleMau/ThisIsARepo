const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
const sobreMiRoutes = require('./routes/SobreMi.routes');
const githubRoutes = require('./routes/miGithub.routes');
const datosCuriososRoutes = require('./routes/datosCuriosos.routes');
const pasatiempossRoutes = require('./routes/pasatiempos.routes');
const contactoRoutes = require('./routes/contacto.routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: true }));


app.use('/sobreMi',sobreMiRoutes);
app.use('/miGithub',githubRoutes);
app.use('/datosCuriosos',datosCuriososRoutes);
app.use('/pasatiempos',pasatiempossRoutes);
app.use('/contacto',contactoRoutes);


app.use('/',(request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
})



app.listen(3000);