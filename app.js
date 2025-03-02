const fs = require('fs');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const sobreMiRoutes = require('./routes/SobreMi.routes');
const githubRoutes = require('./routes/miGithub.routes');
const datosCuriososRoutes = require('./routes/datosCuriosos.routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: true }));


app.use('/sobreMi',sobreMiRoutes);
app.use('/miGithub',githubRoutes);
app.use('/datosCuriosos',datosCuriososRoutes);


app.use('/',(request, response, next) => {
    html = fs.readFileSync('./index.html',{encoding:'utf-8',flag:'r'});
    response.send(html);
})


app.listen(3000);