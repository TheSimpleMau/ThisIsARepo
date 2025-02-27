const fs = require('fs');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const sobreMiRoutes = require('./routes/SobreMi.routes');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/sobreMi',sobreMiRoutes);

app.use('/',(request, response, next) => {
    html = fs.readFileSync('./index.html',{encoding:'utf-8',flag:'r'});
    response.send(html);
    // next();
})


app.listen(3000);