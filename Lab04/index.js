
// Ejercicio 1
var numero = prompt("Escoje un número:");
var numero = Number(numero);

let tablaExponentes = "<table>";
tablaExponentes += "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>"; // Para los encabezados de la tabla
for (let i = 1; i<=numero; i++){
    tablaExponentes += "<tr>";
    tablaExponentes += "<td>" + i + "</td>";
    tablaExponentes += "<td>" + i**2 + "</td>";
    tablaExponentes += "<td>" + i**3 + "</td>";
    tablaExponentes += "</tr>";
}

tablaExponentes += "</table>";

document.getElementById("tablaExponentes").innerHTML = tablaExponentes;

// Ejercicio 2

let rand1 = Math.floor(Math.random() * 10);
let rand2 = Math.floor(Math.random() * 10);
let respuestaUsuario = Number(prompt("¿Cuánto es la suma entre " + rand1 + " y " + rand2 + "?"));

let respuestaAleatoria = "";

if (respuestaUsuario === rand1+rand2){
    respuestaAleatoria += "¡Correcto! toma una galleta 🍪";
} else {
    respuestaAleatoria += "Incorrecto :(";
}

document.getElementById("respuestaSuma").innerHTML = respuestaAleatoria;