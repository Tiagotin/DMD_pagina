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


//boton de presupuesto
    document.addEventListener('DOMContentLoaded', () => {
        // Selecciona el botón por su ID
        const button = document.getElementById('buttonH2');
    
        // Verifica que el botón exista antes de agregar el evento
        if (button) {
            button.addEventListener('click', () => {
                // Redirige al usuario a contacto.html
                window.location.href = 'contacto.html';
            });
        } else {
            console.error('El botón con ID "buttonH2" no se encontró en el DOM.');
        }
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
        'https://falberdi.com/',
        'https://www.linkedin.com/company/jose-m-alladio-e-hijos-s.a./about/',
        'https://www.arlei.com/',
        'https://www.celulosacampana.com.ar/index.php',
        'https://www.elgalgo.com.ar/',
        'https://lamoraleja.com.ar/',
        'https://www.novocap.com/',
        'https://www.parnor.com.ar/'
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





