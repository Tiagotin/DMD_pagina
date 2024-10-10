//formulario
//-----------------------------------------------

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Verificar si el reCAPTCHA fue resuelto
    const recaptchaResponse = grecaptcha.getResponse();

    if (recaptchaResponse.length === 0) {
        alert("Por favor, verifica que no eres un robot.");
        return;  // Detener el envío si el reCAPTCHA no se ha resuelto
    }

    // Obtener el nombre y el mensaje
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const telefono = document.getElementById('telefono').value;
    const empresa = document.getElementById('empresa').value;

    // Codificar los datos para el formato URL
    const nombreEncoded = encodeURIComponent(nombre);
    const mensajeEncoded = encodeURIComponent(mensaje);
    const telefonoEncoded = encodeURIComponent(telefono);
    const empresaEncoded = encodeURIComponent(empresa);

    // Crear el asunto con el nombre
    const asunto = `Consulta de ${nombreEncoded}`;
    const asuntoEncoded = encodeURIComponent(asunto);

    // Crear el cuerpo del mensaje con todos los datos
    const cuerpoMensaje = `Nombre: ${nombreEncoded}%0A` + 
                          `Teléfono: ${telefonoEncoded}%0A` + 
                          `Empresa: ${empresaEncoded}%0A%0A` + 
                          `Mensaje: ${mensajeEncoded}`;
    
    // Crear el enlace mailto con destinatario por defecto
    const mailtoLink = `mailto:info@dmdcompresores.com?subject=${asuntoEncoded}&body=${cuerpoMensaje}`;

    // Abrir Gmail en una nueva ventana con los datos prellenados
    window.location.href = mailtoLink;
});


/*---------------------------------------------------
------------------------Aside------------------------
---------------------------------------------------*/

// Espera a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Funcionalidad para abrir Google Maps con la ubicación
    document.querySelector('.fa-location-dot').addEventListener('click', function() {
        window.open("https://www.google.com/maps?q=Gobernador+Oliden+2768+Lanus+Oeste,+Buenos+Aires", '_blank');
    });

    // Funcionalidad para abrir el cliente de correo
    document.querySelector('.fa-envelope').addEventListener('click', function() {
        window.location.href = "mailto:info@dmdcompresores.com";
    });

    // Funcionalidad para iniciar una llamada (en dispositivos móviles)
    document.querySelector('.fa-phone').addEventListener('click', function() {
        window.location.href = "tel:+5491139592363";
    });

    // Funcionalidad para buscar colectivos en Google
    document.querySelector('.fa-bus').addEventListener('click', function() {
        window.open("https://www.omnilineas.com.ar/buenos-aires/colectivo/linea-158/", '_blank');
    });
});
