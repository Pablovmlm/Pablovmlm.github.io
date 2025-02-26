document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cita-button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado del botón
            window.location.href = 'cita.html'; // Redirige a la página cita.html
        });
    });
});