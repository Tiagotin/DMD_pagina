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

    // Crear el enlace mailto con destinatario por defecto
    const mailtoLink = `mailto:info@dmdcompresores.com?subject=${asuntoEncoded}&body=${mensajeEncoded}`;

    // Abrir Gmail en una nueva ventana con los datos prellenados
    window.location.href = mailtoLink;
});

