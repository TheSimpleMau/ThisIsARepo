// Notas clase: Aprendiendo Node.js

// const fileSystem = require('fs');

// fileSystem.writeFileSync('hola.txt','Hola desde node');

// Ejemplo de cosas asíncronas:

// const arreglo = [5000,60,90,100,10,20,1000,0,120,2000,340,50]

// for(let item of arreglo){
//     setTimeout(() => {
//         console.log(item)
//     }, item);
// }


// Montando un servidor
const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio 6</title>
    <!-- <link rel="stylesheet" href="./index.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
</head>
<body class="container is-max-desktop">
    <head>
        <h1 class="title is-1">Validador de contraseñas</h1>
        <p>En esta actividad, vamos a comprobar que una contraseña se esté escribiendo correctamente con respecto a la contraseña proupesta.</p>
    </head>
    <section class="section">
        <h1 class="title is-1">Ingresa la contraseña en el primer campo</h1>
        <input class="input is-rounded" type="password" id="passwTry" placeholder="Ingresa contraseña"> <br><br>
        <input class="input is-rounded" type="password" id="passwChecker" placeholder="Ingresa contraseña de nuevo"> <br><br>
        <div id="passwStatus"></div>
    </section>
    <section class="section">
        <h1 class="title is-1">Pregutnas</h1>
        <h3 class="title is-3">¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</h3>
        <p>
            Para garantizar que lo que se esté comprobando no sea un intento de ataque hacia el mismo servidor. 
            Sin embargo, es muy importante que, a pesar de hacer nuestra validación con JavaScript, aún así
            hacer una validación de lado del servidor.
        </p>
        <h3 class="title is-3">¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</h3>
        <p>
            En el navegador, existe la opción de desactivar JavaScript, por lo tanto, así podríamos saltarnos
            cualquier validación que se haga con el mismo.
        </p>
        <h3 class="title is-3">Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</h3>
        <p>
            Porque, a pesar de los riesgos, la experiencia para el usuario es mejor, además de que mejora la eficiencia de la página.
        </p>
    </section>
    <footer>
        <h1 class="title is-1">Referencias</h1>
        <p>Validación de formularios de datos - Aprende desarrollo web | MDN. (n.d.). MDN Web Docs. <a href="https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms/Form_validation">https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms/Form_validation</a></p>
        <p>Robin, E. (2024, Febrero 1). Why JavaScript form data validation is not secure? - Newsoftwares.net blog. Newsoftwares.net Blog. <a href="https://www.newsoftwares.net/blog/why-javascript-form-data-validation-is-not-secure/">https://www.newsoftwares.net/blog/why-javascript-form-data-validation-is-not-secure/</a></p>
    </footer>
    <script src="./index.js"></script>
</body>
</html>
`;

const server = http.createServer((request, response) => {
    console.log(request.url); // Información sobre la url
    response.setHeader('Content-Type', 'text/html'); 
    response.write(html);
    response.end(); //Devolver algo al servidor
})


server.listen(3000);
