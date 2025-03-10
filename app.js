const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');


const sobreMiRoutes = require('./routes/sobreMi.routes');
const githubRoutes = require('./routes/miGithub.routes');
const datosCuriososRoutes = require('./routes/datosCuriosos.routes');
const pasatiempossRoutes = require('./routes/pasatiempos.routes');
const contactoRoutes = require('./routes/contacto.routes');
const blogRoutes = require('./routes/bolg.routes');
const userRoutes = require('./routes/users.routes');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
    resave: false,
    saveUninitialized: false,
}));

app.use('/sobreMi',sobreMiRoutes);
app.use('/miGithub',githubRoutes);
app.use('/datosCuriosos',datosCuriososRoutes);
app.use('/pasatiempos',pasatiempossRoutes);
app.use('/contacto',contactoRoutes);
app.use('/blog',blogRoutes);
app.use('/users', userRoutes);


app.use('/',(request, response, next) => {
    sessionStatus = {
        isLoggedIn : request.session.isLoggedIn || false,
        username : request.session.username || '',
    }
    response.render('index', sessionStatus);
})



app.listen(3000);