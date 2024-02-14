document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.getElementById('formContacto');
    
    if(formContacto){
        formContacto.addEventListener('submit', function(e){
            e.preventDefault();
            const email = document.getElementById('email').value;
            const nombres = document.getElementById('nombres').value;
            const apellidos = document.getElementById('apellidos').value;
            const Textarea1 = document.getElementById('Textarea1').value;
            const caracter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            // Validar que los campos no estén vacíos
            if (nombres === "" || apellidos === "" || email === "" || Textarea1 === "") {
                document.getElementById('mensajeError').setAttribute('class','alert alert-danger');
                mensajeError.innerText = "Por favor, completa todos los campos.";
                return false;
            } else if (caracter.test(email)){       // Validar correo
                document.getElementById('mensaje').setAttribute('class','alert alert-primary');
                mensaje.innerText = "Su mensaje ha sido enviado con exito.";
            } else {
                document.getElementById('mensajeError').setAttribute('class','alert alert-danger');
                mensajeError.innerText = "Por favor, introduce un correo electrónico válido.";
            }
            formContacto.reset();
        });
        // Limpiar los campos
        /* const callButton = document.querySelector("#btn-limpiar");
        callButton.addEventListener('click', () => {
            document.getElementById("nombres").value = "";
            document.getElementById("apellidos").value = "";
            document.getElementById("email").value = "";
            document.getElementById("Textarea1").value = "";
        }); */ 
    }

     // Boton regresar

});

