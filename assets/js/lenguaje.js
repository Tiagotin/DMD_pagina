document.addEventListener('DOMContentLoaded', () => {
    const languageToggleButton = document.getElementById('language-toggle');
    const elements = document.querySelectorAll('[data-es]');

    // Cargar el idioma guardado en localStorage o usar 'es' como predeterminado
    let currentLanguage = localStorage.getItem('selectedLanguage') || 'es';

    // Función para actualizar el contenido según el idioma seleccionado
    const updateContent = () => {
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLanguage}`);
        });

        // Cambiar el texto del botón según el idioma actual
        if (currentLanguage === 'es') {
            languageToggleButton.textContent = 'Switch to English';
        } else {
            languageToggleButton.textContent = 'Cambiar a Español';
        }
    };

    // Aplicar el idioma guardado al cargar la página
    updateContent();

    // Evento para cambiar el idioma al hacer clic en el botón
    languageToggleButton.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';

        // Guardar el idioma seleccionado en localStorage
        localStorage.setItem('selectedLanguage', currentLanguage);

        // Actualizar el contenido después del cambio de idioma
        updateContent();
    });

        // Función para cambiar el idioma
    function changeLanguage(lang) {
        // Obtener todos los elementos con la clase 'savings'
        const savingsElements = document.getElementsByClassName('savings');
    
        // Iterar sobre todos los elementos encontrados
        for (let i = 0; i < savingsElements.length; i++) {
            // Obtener el texto del atributo data según el idioma seleccionado
            const savingsText = savingsElements[i].getAttribute(`data-${lang}`);
            
            // Verificar si savingsText tiene un valor antes de asignar
            if (savingsText) {
                // Asignar directamente el texto del atributo, incluyendo el <br>
                savingsElements[i].innerHTML = savingsText;
            }
        }
    }
    
    // Manejo del evento de clic en el botón
    document.getElementById('language-toggle').addEventListener('click', function() {
        // Verificar el idioma actual y alternar
        const currentLang = this.textContent === 'English' ? 'en' : 'es';
        
        // Cambiar el idioma
        changeLanguage(currentLang);
        
        // Actualizar el texto del botón
        this.textContent = currentLang === 'en' ? 'Español' : 'English';
    });


});
