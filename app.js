const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');


app.use(session({
    secret: crypto.randomUUID(),
    resave: false,
    saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: true }));

const csrfProtection = csrf(); 
app.use(csrfProtection);

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', 'views');


const appRoutes = require('./routes/app.routes');
const sobreMiRoutes = require('./routes/sobreMi.routes');
const githubRoutes = require('./routes/miGithub.routes');
const datosCuriososRoutes = require('./routes/datosCuriosos.routes');
const pasatiempossRoutes = require('./routes/pasatiempos.routes');
const contactoRoutes = require('./routes/contacto.routes');
const blogRoutes = require('./routes/bolg.routes');
const userRoutes = require('./routes/users.routes');


app.use('/sobreMi',sobreMiRoutes);
app.use('/miGithub',githubRoutes);
app.use('/datosCuriosos',datosCuriososRoutes);
app.use('/pasatiempos',pasatiempossRoutes);
app.use('/contacto',contactoRoutes);
app.use('/blog',blogRoutes);
app.use('/users', userRoutes);

app.use('/',appRoutes);

app.listen(3000);