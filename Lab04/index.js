
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


// Ejercicio 3

function contador(numbers) {
    let texto = "<br>En el arreglo existen:";
    texto += "<ul>"
    let totalNegatives = 0;
    let totalZeros = 0;
    let totalGreaterThanZero  = 0;
    for (let i = 0; i<numbers.length;i++){
        if (numbers[i] < 0) {
            totalNegatives += 1;
        } if (numbers[i] == 0) {
            totalZeros += 1;
        } if (numbers[i] > 0) {
            totalGreaterThanZero += 1;
        }
    }
    texto += "<li>" + totalNegatives + " números negativos. </li>";
    texto += "<li>" + totalZeros + " números iguales a cero. </li>";
    texto += "<li>" + totalGreaterThanZero + " números mayores a cero. </li>"
    texto += "</ul>"
    return texto;
}

function generateRandomArray(){
    let randomArray = [];
    const max = 10;
    const min = -10;
    for (let i = 0; i < Math.floor(Math.random()*10)+1; i++){
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArray;
}

randomArray = generateRandomArray();

let listaAleatoria = "Lista: [" + randomArray + "]<br>" + contador(randomArray);

document.getElementById("listaAleatoria").innerHTML = listaAleatoria;


// Ejercicio 4


