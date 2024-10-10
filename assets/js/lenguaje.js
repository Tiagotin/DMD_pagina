document.addEventListener('DOMContentLoaded', () => {
    const espanol = document.querySelector("#espanol");
    const ingles = document.querySelector("#ingles");
    const elements = document.querySelectorAll('[data-es]');

    // Cargar el idioma guardado en localStorage o usar 'es' como predeterminado
    let currentLanguage = localStorage.getItem('selectedLanguage') || 'es';

    // Función para actualizar el contenido general según el idioma seleccionado
    const updateContent = () => {
        elements.forEach(el => {
            // Si es un input o textarea, cambia el placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', el.getAttribute(`data-${currentLanguage}`));
            } else {
                // Para otros elementos, actualiza el contenido con innerHTML
                el.innerHTML = el.getAttribute(`data-${currentLanguage}`);
            }
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
    };

    // Función para cambiar el idioma de los elementos con la clase 'savings'
    function changeLanguage(lang) {
        const savingsElements = document.getElementsByClassName('savings');
        
        for (let i = 0; i < savingsElements.length; i++) {
            const savingsText = savingsElements[i].getAttribute(`data-${lang}`);
            
            if (savingsText) {
                // Si es un input o textarea, cambia solo el placeholder
                if (savingsElements[i].tagName === 'INPUT' || savingsElements[i].tagName === 'TEXTAREA') {
                    savingsElements[i].setAttribute('placeholder', savingsText);
                } else {
                    // Para otros elementos, usa innerHTML
                    savingsElements[i].innerHTML = savingsText;
                }
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
