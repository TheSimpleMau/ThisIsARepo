
// Obteniendo los elementos
const passwordTry = document.getElementById("passwTry");
const passwordChecker = document.getElementById("passwChecker");
const passwordStatus = document.getElementById("passwStatus");

//Bandera para saber si es que hay algo escrito dentro de passwTry
let passwordSet = false;

passwordTry.addEventListener("input", function () {
    if (this.value.length > 0) {
        passwordSet = true; // Marcar que ya se escribió algo
    } else {
        passwordSet = false; // Si se borra todo, desactivar la verificación
        passwordStatus.innerHTML = '<h3 class="title is-3">Escriba algo dentro del campo de contraseña</h3>';
    }
});

// Para validar las contraseñas
passwordChecker.addEventListener("input", function () {
    if (passwordSet) {
        if (passwordTry.value === passwordChecker.value) {
            passwordStatus.innerHTML = '<h3 class="title is-3">La contraseña es correcta</h3>';
        } else {
            passwordStatus.innerHTML = '<h3 class="title is-3">La contraseña es incorrecta</h3>';
        }
    }
});