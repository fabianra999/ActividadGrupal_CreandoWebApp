const formContacto = document.getElementById('formContacto');
const mensaje = document.getElementById('mensaje');
const mensajeError = document.getElementById('mensajeError');
if(formContacto){
    formContacto.addEventListener('submit', function(e){
        e.preventDefault();
        const email = document.getElementById('email').value;
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const Textarea1 = document.getElementById('Textarea1').value;
        let text = "Su mensaje ha sido enviado con exito.";
        let textError1 = "Por favor, introduce un correo electrónico válido.";
        let textError2 = "Por favor, completa todos los campos.";

        // Validar que los campos no estén vacíos
        if (nombres === "" || apellidos === "" || email === "" || Textarea1 === "") {
            document.getElementById("mensajeError").innerHTML = textError2;
            return false;
        }

        // Validar el formato del correo electrónico
        const caracter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (caracter.test(email)) {
            sessionStorage.setItem('userEmail', email);  
            document.getElementById("mensaje").innerHTML = text;
        } else {
            document.getElementById("mensajeError").innerHTML = textError1;
        }
    });
}

function Limpiar(){
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Textarea1").value = "";
}

function goBack() {
    window.location.href = 'index.html'; 
  }
