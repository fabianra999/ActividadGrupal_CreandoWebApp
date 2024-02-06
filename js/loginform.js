document.addEventListener('DOMContentLoaded', function() {
    // Verifica si estamos en la página de inicio y si hay una sesión activa
    if (window.location.pathname.includes('home.html')) {
        const userEmail = sessionStorage.getItem('userEmail');
        if (userEmail) {
            document.getElementById('userEmail').textContent = userEmail;
        } else {
            // Redirige al login si no hay sesión activa
            window.location.href = 'home.html';
        }

        document.getElementById('logoutBtn').addEventListener('click', function() {
            sessionStorage.removeItem('userEmail'); // Limpia la sesión
            window.location.href = 'loginform.html'; // Redirige al login
        });
    } else {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('email').value;
                // Simple validación de email
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    sessionStorage.setItem('userEmail', email); // Guarda el correo en Session Storage
                    window.location.href = 'home.html'; // Redirige al usuario a la página de inicio
                } else {
                    alert('Por favor, introduce un correo electrónico válido.');
                }
            });
        }
    }
});
