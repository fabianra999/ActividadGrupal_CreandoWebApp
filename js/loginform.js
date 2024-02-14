document.addEventListener('DOMContentLoaded', function() {
        if (window.location.pathname.includes('index.html')) {
        const userEmail = sessionStorage.getItem('userEmail');
        if (userEmail) {
            document.getElementById('userEmail').textContent = userEmail;
        } else {
            
            window.location.href = 'loginform.html';
        }

        document.getElementById('logoutBtn').addEventListener('click', function() {
            sessionStorage.removeItem('userEmail'); 
            window.location.href = 'salida.html'; 
        });
    } else {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('email').value;
                
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    sessionStorage.setItem('userEmail', email); 
                    window.location.href = 'index.html'; 
                } else {
                    alert('Por favor, introduce un correo electrónico válido.');
                }
            });
        }
    }
});
