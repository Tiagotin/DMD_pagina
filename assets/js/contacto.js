//formulario
//-----------------------------------------------

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

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

