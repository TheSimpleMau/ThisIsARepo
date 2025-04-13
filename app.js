const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
const multer = require('multer');


// fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});


app.use(session({
    secret: crypto.randomUUID(),
    resave: false,
    saveUninitialized: false,
}));


app.use((request, response, next) => {
    response.locals.isLoggedIn = request.session.isLoggedIn || false;
    response.locals.username = request.session.username || '';
    next();
});


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: true }));

const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' || 
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg' ) {
            callback(null, true);
    } else {
            callback(null, false);
    }
}

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('archivo')); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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