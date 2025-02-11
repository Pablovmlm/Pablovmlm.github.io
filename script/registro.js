var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellidos");
var email = document.querySelector("#email");
var email2 = document.querySelector("#email2");
var password = document.querySelector("#password");
var password2 = document.querySelector("#password2");
var errnombre = document.querySelector("#error__nombre");
var errapellido = document.querySelector("#error__apellidos");
var erremail = document.querySelector("#error__email");
var erremail2 = document.querySelector("#error__email2");
var errpassword = document.querySelector("#error__password");
var errpassword2 = document.querySelector("#error__password2");

nombre.addEventListener("input", function () {
    if (nombre.validity.valid) {
        errnombre.textContent = "";
    } else {
        errnombre.textContent = "El nombre no puede estar vacío";
    }
});
apellido.addEventListener("input", function () {
    if (apellido.validity.valid) {
        errapellido.textContent = "";
    } else {
        errapellido.textContent = "El apellido no puede estar vacío";
    }
});

email.addEventListener("input", function () {
    if (email.validity.valid) {
        erremail.textContent = "";
    } else {
        erremail.textContent = "Email no válido";
    }
});

email2.addEventListener("input", function () {
    if (email2.value === email.value) {
        erremail2.textContent = "";
    } else {
        erremail2.textContent = "Los emails no coinciden";
    }
});

password.addEventListener("input", function () {
    console.log(errpassword);
    if (password.validity.valid) {
        errpassword.textContent = "";
    } else {
        errpassword.textContent = "La contraseña debe tener al menos 1 letra, 1 número y mínimo 6 caracteres";
    }
});

password2.addEventListener("input", function () {
    if (password2.value === password.value) {
        errpassword2.textContent = "";
    } else {
        errpassword2.textContent = "Las contraseñas no coinciden";
    }
});

function validarFormulario() {
    if (nombre.validity.valid && apellido.validity.valid && email.validity.valid && password.validity.valid && password2.value === password.value) {
        return true;
    } else {
        return false;
    }
}

document.querySelector(".register").addEventListener("submit", function (e) {
    if (!validarFormulario()) {
        e.preventDefault();
        alert("Formulario no válido");
    } else {
        confirm("¿Estás seguro de enviar el formulario?");
    }
});
