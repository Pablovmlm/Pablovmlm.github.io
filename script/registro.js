//Función para validar los inputs del formulario
function validateInput(input, errorElement, errorMessage, customValidation = null) {
    input.addEventListener("input", function () {
        if (customValidation) {
            customValidation();
        } else if (input.validity.valid) {
            errorElement.textContent = "";
        } else {
            errorElement.textContent = errorMessage;
        }
        updateProgressBar();
    });
}

//Función para actualizar la barra de progreso
function updateProgressBar() {
    const inputs = document.querySelectorAll(".register input[required]");
    const validInputs = Array.from(inputs).filter(input => input.validity.valid);
    const progressBarFill = document.querySelector(".progress__bar__fill");
    const progress = (validInputs.length / inputs.length) * 100;
    progressBarFill.style.width = `${progress}%`;
}

//Variables para los inputs y los errores
var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellidos");
var email = document.querySelector("#email");
var email2 = document.querySelector("#email2");
var password = document.querySelector("#password");
var password2 = document.querySelector("#password2");
var telefono = document.querySelector("#telefono");
var direccion = document.querySelector("#direccion");
var ciudad = document.querySelector("#ciudad");
var tarjeta = document.querySelector("#tarjeta");

var errnombre = document.querySelector("#error__nombre");
var errapellido = document.querySelector("#error__apellidos");
var erremail = document.querySelector("#error__email");
var erremail2 = document.querySelector("#error__email2");
var errpassword = document.querySelector("#error__password");
var errpassword2 = document.querySelector("#error__password2");
var errtelefono = document.querySelector("#error__telefono");
var errdireccion = document.querySelector("#error__direccion");
var errciudad = document.querySelector("#error__ciudad");
var errtarjeta = document.querySelector("#error__tarjeta");

//Validación de los inputs
validateInput(nombre, errnombre, "El nombre no puede estar vacío");
validateInput(apellido, errapellido, "El apellido no puede estar vacío");
validateInput(email, erremail, "Email no válido");
validateInput(email2, erremail2, "Los emails no coinciden", function () {
    if (email2.value === email.value) {
        erremail2.textContent = "";
    } else {
        erremail2.textContent = "Los emails no coinciden";
    }
});
validateInput(password, errpassword, "La contraseña debe tener al menos 1 letra, 1 número y mínimo 6 caracteres");
validateInput(password2, errpassword2, "Las contraseñas no coinciden", function () {
    if (password2.value === password.value) {
        errpassword2.textContent = "";
    } else {
        errpassword2.textContent = "Las contraseñas no coinciden";
    }
});
validateInput(telefono, errtelefono, "El teléfono no puede estar vacío");
validateInput(direccion, errdireccion, "La dirección no puede estar vacía");
validateInput(ciudad, errciudad, "La ciudad no puede estar vacía");
validateInput(tarjeta, errtarjeta, "La tarjeta debe contenter 16 dígitos");

//Validación del formulario
function validarFormulario() {
    return nombre.validity.valid && apellido.validity.valid && email.validity.valid && password.validity.valid && password2.value === password.value && telefono.validity.valid && direccion.validity.valid && ciudad.validity.valid && tarjeta.validity.valid;
}
//Evento para enviar el formulario
document.querySelector(".register").addEventListener("submit", function (e) {
    if (!validarFormulario()) {
        e.preventDefault();
        alert("Formulario no válido");
    } else {
        confirm("¿Estás seguro de enviar el formulario?");
    }
});

//Evento para actualizar la barra de progreso
document.addEventListener("DOMContentLoaded", updateProgressBar);
