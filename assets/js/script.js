// Manejo de redirecciones a aplicaciones y páginas web
document.addEventListener('DOMContentLoaded', () => {
    

    //----------------------------------------------------------
    //-------------------- Botón carrusel --------------------
    //------------------------------------------------------------
    const vermas = document.getElementsByClassName('verr');

    // Itera sobre la colección de botones
    for (let i = 0; i < vermas.length; i++) {
        vermas[i].addEventListener('click', () => {
            // Redirige al usuario a contacto.html
            window.location.href = 'nosotros.html';
        });
    }
    
    // Botón de "Quiero saber más"
    document.getElementById('quieroSaberMas').addEventListener('click', () => {
        window.location.href = 'preguntas.html';
    });

    // Añadir enlaces a las imágenes de clientes
    const clientes = document.querySelectorAll('.clientes');
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
        if (index < links.length) { // Asegurarse de que no exceda el número de enlaces
            const link = document.createElement('a');
            link.href = links[index];
            link.target = '_blank'; // Para abrir el enlace en una nueva pestaña
            link.appendChild(cliente.querySelector('img'));
            cliente.appendChild(link);
        }
    });

    // Intersección Observer para animación de fade
    const cards = document.querySelectorAll('.cards');

    const options = {
        root: null, // Usar el viewport como root
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agrega la clase visible al elemento
                entry.target.classList.add('visible');
                // Deja de observar el elemento una vez que es visible
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observa cada card
    cards.forEach(card => {
        observer.observe(card);
    });
});


// Intersección Observer para animación de imágenes de socios
const sociosImages = document.querySelectorAll('#socios img');

const options = {
    threshold: 0.1 // Ajusta el umbral según necesites
};

const sociosObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Agrega la clase visible al elemento
            entry.target.classList.add('visible');
            // Deja de observar el elemento una vez que es visible
            observer.unobserve(entry.target);
        }
    });
}, options);

// Observa cada imagen de socios
sociosImages.forEach(image => {
    sociosObserver.observe(image);
});
