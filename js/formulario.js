const formContacto = document.getElementById('formContacto');
const mensaje = document.getElementById('mensaje');
const mensajeError = document.getElementById('mensajeError');
if(formContacto){
    formContacto.addEventListener('submit', function(e){
        e.preventDefault();
        const email = document.getElementById('email').value;
        let text = "Su mensaje ha sido enviado con exito.";
        let textError = "Por favor, introduce un correo electrónico válido.";
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            sessionStorage.setItem('userEmail', email);  
            document.getElementById("mensaje").innerHTML = text;
        } else {
            document.getElementById("mensajeError").innerHTML = textError;
        }
    });
}

function goBack() {
    window.location.href = 'index.html'; 
  }
