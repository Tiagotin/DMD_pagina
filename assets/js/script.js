//https://wa.me/<number> 
//window.open('https://www.ejemplo.com', '_blank');


/* document.querySelectorAll('#rLogos .logos').forEach(icon => {
        icon.addEventListener('click', function() {
            const webUrl = this.getAttribute('data-url');
            const appUrl = this.getAttribute('data-app-url');

            // Intentar redirigir a la aplicación
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = appUrl;
            document.body.appendChild(iframe);

            // Esperar un momento para ver si la aplicación se abre
            setTimeout(() => {
                window.location.href = webUrl; // Redirigir a la página web si la aplicación no se abre
            }, 1000); // Puedes ajustar el tiempo de espera si es necesario
        });
    }); */





//----------------------------------------------------------
//-------------------- boton carrusel -----------------------------------
//------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón y el elemento de contacto por sus IDs
   
    const vermas = document.getElementById('verr');
    vermas.addEventListener('click', () => {
        // Redirige al usuario a contacto.html
        window.location.href = 'nosotros.html';
    });
});





    
//boton de quiero saber mas-------------------------
document.getElementById('quieroSaberMas').addEventListener('click', function() {
    window.location.href = 'preguntas.html';
});





// Añadir enlaces a las imágenes de clientes------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const clientes = document.querySelectorAll('.clientes');
    
    // Array de enlaces, uno por cada cliente
    const links = [
        'https://borishnos.com.ar/',
        'https://carpla.com/',
        'https://cotocicsa.com/',
        'https://geotex.com.ar/es/',
        'https://www.metrogas.com.ar/',
        'https://www.colgatepalmolive.com.ar/',
        'https://www.parnor.com.ar/',
        'https://resiplast.com.ar/',
    ];

    // Asignar un enlace a cada cliente
    clientes.forEach((cliente, index) => {
        const link = document.createElement('a');
        link.href = links[index];
        link.target = '_blank';  // Para abrir el enlace en una nueva pestaña
        link.appendChild(cliente.querySelector('img'));
        cliente.appendChild(link);
    });
});





