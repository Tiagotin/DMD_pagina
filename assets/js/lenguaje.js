document.addEventListener('DOMContentLoaded', () => {
    const espanol = document.querySelector("#espanol");
    const ingles = document.querySelector("#ingles");
    const elements = document.querySelectorAll('[data-es]');

    // Cargar el idioma guardado en localStorage o usar 'es' como predeterminado
    let currentLanguage = localStorage.getItem('selectedLanguage') || 'es';

    // Función para actualizar el contenido general según el idioma seleccionado
    const updateContent = () => {
        elements.forEach(el => {
            el.innerHTML = el.getAttribute(`data-${currentLanguage}`); // Usamos innerHTML para mantener etiquetas
        });

        // Mostrar/ocultar los íconos de idioma según el idioma actual
        if (currentLanguage === 'es') {
            espanol.style.display = "none";
            ingles.style.display = "block";
        } else {
            ingles.style.display = "none";
            espanol.style.display = "block";
        }

        // Actualizar también el contenido de los elementos con la clase 'savings'
        changeLanguage(currentLanguage);

        // Actualizar los placeholders de los campos de entrada y textarea
        const inputs = document.querySelectorAll('input[data-es], input[data-en], textarea[data-es], textarea[data-en]');
        inputs.forEach(input => {
            input.placeholder = input.getAttribute(`data-${currentLanguage}`);
        });
    };

    // Función para cambiar el idioma de los elementos con la clase 'savings'
    function changeLanguage(lang) {
        // Obtener todos los elementos con la clase 'savings'
        const savingsElements = document.getElementsByClassName('savings');
        
        // Iterar sobre todos los elementos encontrados
        for (let i = 0; i < savingsElements.length; i++) {
            // Obtener el texto del atributo data según el idioma seleccionado
            const savingsText = savingsElements[i].getAttribute(`data-${lang}`);
            
            // Verificar si savingsText tiene un valor antes de asignar
            if (savingsText) {
                // Asignar directamente el texto del atributo manteniendo las etiquetas HTML
                savingsElements[i].innerHTML = savingsText;
            }
        }
    }

    // Aplicar el idioma guardado al cargar la página
    updateContent();

    // Eventos para cambiar el idioma al hacer clic en los íconos
    espanol.addEventListener("click", function() {
        currentLanguage = 'es';
        localStorage.setItem('selectedLanguage', currentLanguage);
        updateContent();
    });

    ingles.addEventListener("click", function() {
        currentLanguage = 'en';
        localStorage.setItem('selectedLanguage', currentLanguage);
        updateContent();
    });
});
