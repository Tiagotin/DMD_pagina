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
});
