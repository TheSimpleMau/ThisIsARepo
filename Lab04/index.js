
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

