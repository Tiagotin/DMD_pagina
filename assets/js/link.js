

//Nav Sticky --------------------------------------------------

window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    const logo = document.querySelector(".dmdLogo");
    const logoHeight = document.querySelector("#dmdLogo");
    const navText = document.querySelector(".navText");
    const aText = document.querySelectorAll(".aText");
    const switchTema = document.querySelector(".lenguaje");

    switchTema.classList.toggle("sticky", window.scrollY > 0);
    nav.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("sticky", window.scrollY > 0);
    logoHeight.classList.toggle("sticky", window.scrollY > 0);
    navText.classList.toggle("sticky", window.scrollY > 0);
    aText.forEach(function(element) {
        element.classList.toggle("sticky", window.scrollY > 0);
    });
})


//-------------------------------------------------------------

//Botones de nav --------------------------------
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón y el elemento de contacto por sus IDs
   
    const contacto = document.getElementById('contacto');
    const inicio = document.getElementById('inicio');
    const nosotros = document.getElementById('nosotros');
    const dmdLogo = document.getElementById('dmdLogo');

      // Crear un elemento <a> y envolver la imagen dentro de este
   const logoLink = document.createElement('a');
   logoLink.href = 'index.html'; // Enlace al que quieres que redirija
   dmdLogo.parentNode.insertBefore(logoLink, dmdLogo); // Inserta el enlace antes de la imagen
   logoLink.appendChild(dmdLogo); // Mueve la imagen dentro del enlace
  
    contacto.addEventListener('click', () => {
        // Redirige al usuario a contacto.html
        window.location.href = 'contacto.html';
    });
    inicio.addEventListener('click', () => {
        // Redirige al usuario a contacto.html
        window.location.href = 'index.html';
    });
    nosotros.addEventListener('click', () => { 
        // Redirige al usuario a contacto.html
        window.location.href = 'nosotros.html';
    });

 
});

// Switch -----------------------------------


const themeSelect = document.querySelector('#themeSelect'); // Cambia esto al ID de tu <select>
const body = document.body;

// Cambia el tema según la selección
function cambiaTema(ev) {
    const selectedTheme = ev.target.value; // Obtiene el tema seleccionado
    body.setAttribute('tema', selectedTheme);
    localStorage.setItem('modoOscuro', selectedTheme); // Guarda el tema en localStorage
}

// Verificar si el modo oscuro está guardado en localStorage
const modoOscuroActivo = localStorage.getItem('modoOscuro');

// Si está activo, aplicar el tema correspondiente
if (modoOscuroActivo) {
    body.setAttribute('tema', modoOscuroActivo);
    themeSelect.value = modoOscuroActivo; // Establecer el valor del <select>
} else {
    body.setAttribute('tema', 'light'); // Por defecto se establece en light
    themeSelect.value = 'light'; // Establecer valor por defecto
}

themeSelect.addEventListener('change', cambiaTema);







//----------------------------------------------------------
//-------------------- wpp -----------------------------------
//------------------------------------------------------------

window.addEventListener('scroll', function() {
    var whatsappFloat = document.querySelector('.whatsapp-float');
    var footer = document.querySelector('footer'); // Seleccionar el footer sin id

    // Obtener la posición del footer en relación con la parte superior de la ventana
    var footerTop = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    // Si el botón de WhatsApp está tocando el footer, lo hacemos "sticky" justo antes de que toque el footer
    if (footerTop <= windowHeight) {
        whatsappFloat.style.position = 'absolute';
        whatsappFloat.style.bottom = (footerTop + 2) + 'px'; // Ajuste fino
    } else {
        whatsappFloat.style.position = 'fixed';
        whatsappFloat.style.bottom = '2px';
    }
});







//----------------------------------------------------------
//-------------------- Footer -----------------------------------
//------------------------------------------------------------

// Funcionalidad para abrir el cliente de correo
document.querySelector('.fa-envelope.fContacto').addEventListener('click', function() {
    window.location.href = "mailto:info@dmdcompresores.com";
});

// Funcionalidad para iniciar una llamada (en dispositivos móviles)
document.querySelector('.fa-phone.fContacto').addEventListener('click', function() {
    window.location.href = "tel:+541139592363";
});
