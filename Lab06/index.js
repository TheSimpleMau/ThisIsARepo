// Caracteres para verificar
const specialCharacters = /[!"#$%&/()\=?¡+*{}\[\];:,.|°]/;
// const lowerCharacters = /qwertyuiopasdfghjklñzxcvbnm/;
const upperCharacters = /[A-Z]/;
const numericCharacters = /\d/;

// Obteniendo los elementos
const passwordTry = document.getElementById("passwTry");
const passwordChecker = document.getElementById("passwChecker");
const passwordStatus = document.getElementById("passwStatus");
const passwordStrong = document.getElementById("passwStrong");

//Bandera para saber si es que hay algo escrito dentro de passwTry
let passwordSet = false;

// Para saber si ya escribió algo dentro del primer campo
passwordTry.addEventListener("input", function () {
    if (this.value.length > 0) {
        passwordSet = true; // Marcar que ya se escribió algo
    } else {
        passwordSet = false; // Si se borra todo, desactivar la verificación
        passwordStatus.innerHTML = '<h3 class="title is-3">Escriba algo dentro del campo de contraseña</h3>';
    }
});

passwordTry.addEventListener("input", function() {
    passwordStrong.innerHTML = '';
    let text = '<p>'
    if (upperCharacters.test(this.value)) {
        text += '✅ Mayúscula <br>';
    } else {
        text += '❌ Mayúscula <br>'
    }
    if (specialCharacters.test(this.value)) {
        text += '✅ Caracter especial <br>';
    } else {
        text += '❌ Caracter especial <br>'
    }
    if (numericCharacters.test(this.value)) {
        text += '✅ Número <br>';
    } else {
        text += '❌ Número <br>';
    }
    if (this.value.length > 8) {
        text += '✅ Mayor a 8 caracteres';
    } else {
        text += '❌ Mayor a 8 caracteres';
    }
    passwordStrong.innerHTML = text + '</p>'
})

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