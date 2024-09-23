document.addEventListener('DOMContentLoaded', () => {
    const languageToggleButton = document.getElementById('language-toggle');
    const elements = document.querySelectorAll('[data-es]');

    let currentLanguage = 'es'; // Idioma predeterminado

    languageToggleButton.addEventListener('click', () => {
        if (currentLanguage === 'es') {
            currentLanguage = 'en';
            languageToggleButton.textContent = 'Cambiar a Español';
        } else {
            currentLanguage = 'es';
            languageToggleButton.textContent = 'Switch to English';
        }

        // Cambiar el contenido de cada elemento
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLanguage}`);
        });
    });
});
