
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
    respuestaCorrecta = rand1+rand2;
    respuestaAleatoria += "Incorrecto :(, la respuesta es: " + respuestaCorrecta;
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

function generateRandomArray(min,max){
    let randomArray = [];
    for (let i = 0; i < 10; i++){
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArray;
}

randomArray = generateRandomArray(-10,10);

let listaAleatoria = "Lista: [" + randomArray + "]<br>" + contador(randomArray);

document.getElementById("listaAleatoria").innerHTML = listaAleatoria;


// Ejercicio 4

function promedios(numeros){
    let promedio = 0;
    for(let i = 0; i<numeros.length; i++){
        promedio += numeros[i];
    }
    promedio = promedio / numeros.length;
    return promedio;
}

function promedioMatriz(matriz){
    let resultados = [];
    for (let i = 0; i<matriz.length; i++ ){
        resultados.push("El promedio del arreglo "+ i + " es " +promedios(matriz[i]) + "<br>");
    }
    return resultados;
}

let matrizTexto = "La matriz aleatoria generada es la siguiente: <br> [ <br>";
let matrizAletoria = [];
for (let i = 0; i<10; i++){
    matrizAletoria.push(generateRandomArray(0,10));
    matrizTexto += "[" + matrizAletoria[i] + "]" + "<br>";
}

matrizTexto += "] <br> Y ahora, los promedios para cada arreglo son: <br>"

resultadosMatriz = promedioMatriz(matrizAletoria);

for(let i=0; i<matrizAletoria.length; i++){
    matrizTexto += resultadosMatriz[i];
}

document.getElementById("proemdioAletorio").innerHTML = matrizTexto;


// Ejercicio 5

function inverso(numero){
    let numeroInvertido = String(numero).split('').reverse().join('');
    return Number(numeroInvertido);
}

let numeroAleatorio = Math.floor(Math.random()*100);

document.getElementById("inversa").innerHTML = "El número aleatorio es: " + numeroAleatorio + " y su inverso es: " + inverso(numeroAleatorio);


// Ejercicio 6

class ConversorTemperatura {
    constructor(celsius) {
        this.celsius = celsius;
    }

    celsiusAFahrenheit() {
        return (this.celsius * 9/5) + 32;
    }

    static fahrenheitACelsius(f) {
        return (f - 32) * 5/9;
    }
}


function convertirCelsiusFahrenheit(){
    let valor = Number(document.getElementById("temperatura").value);
    let temp = new ConversorTemperatura(valor);
    document.getElementById("resultadoTemperatura").innerText = valor + "°C = " + temp.celsiusAFahrenheit().toFixed(2) + "°F";
}



function convertirFahrenheitCelsius(){
    let valor = Number(document.getElementById("temperatura").value);
    let celsius = ConversorTemperatura.fahrenheitACelsius(valor);
    document.getElementById("resultadoTemperatura").innerText = valor + "°F = " + celsius.toFixed(2) + "°C";
}