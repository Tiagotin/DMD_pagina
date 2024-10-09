

//Nav Sticky --------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const nav = document.querySelector("nav");
        const logo = document.querySelector(".dmdLogo");
        const logoHeight = document.querySelector("#dmdLogo");
        const navText = document.querySelector(".navText");
        const aText = document.querySelectorAll(".aText");
        const switchTema = document.querySelector(".temas");
        const hrTI = document.querySelector(".hrNav");
        const idioma = document.querySelector(".lenguaje");
        const menunav = document.querySelector(".navmenu")
        const menudesp = document.querySelector(".menudesp")

        switchTema.classList.toggle("sticky", window.scrollY > 0);
        hrTI.classList.toggle("sticky", window.scrollY > 0);
        idioma.classList.toggle("sticky", window.scrollY > 0);
        menunav.classList.toggle("sticky", window.scrollY > 0);
        menudesp.classList.toggle("sticky", window.scrollY > 0);
        nav.classList.toggle("sticky", window.scrollY > 0);
        logo.classList.toggle("sticky", window.scrollY > 0);
        logoHeight.classList.toggle("sticky", window.scrollY > 0);
        //navText.classList.toggle("sticky", window.scrollY > 0);
        //aText.forEach(function(element) {
        //    element.classList.toggle("sticky", window.scrollY > 0);
        //});
    });
});

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

const temalight = document.querySelector("#light");
const temaDark = document.querySelector("#dark");

// Función para cambiar el tema y actualizar el estado de los íconos
function cambiaTema(theme) {
    if (theme === 'light') {
        temalight.style.display = "none";
        temaDark.style.display = "block";
        document.body.setAttribute('tema', 'light');
        localStorage.setItem('modoOscuro', 'light');
    } else {
        temaDark.style.display = "none";
        temalight.style.display = "block";
        document.body.setAttribute('tema', 'dark');
        localStorage.setItem('modoOscuro', 'dark');
    }
}

// Eventos para cambiar el tema cuando se hace clic en los íconos
temalight.addEventListener("click", function() {
    cambiaTema('light');
});

temaDark.addEventListener("click", function() {
    cambiaTema('dark');
});

// Verificar si el modo oscuro está guardado en localStorage y aplicar el tema correspondiente
const modoOscuroActivo = localStorage.getItem('modoOscuro');

if (modoOscuroActivo === 'dark') {
    cambiaTema('dark');  // Aplica el tema oscuro si estaba guardado
} else {
    cambiaTema('light'); // Aplica el tema claro por defecto
}






//----------------------------------------------------------
//-------------------- wpp -----------------------------------
//------------------------------------------------------------

window.addEventListener('scroll', function() {
    var whatsappFloat = document.querySelector('.whatsapp-float');
    var footer = document.querySelector('footer'); // Seleccionar el footer sin id

    // Obtener la posición del footer en relación con la parte superior de la ventana
    var footerTop = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    /* Obtener la altura total del footer para hacer el ajuste
    var footerHeight = footer.offsetHeight;*/

    // Si el botón de WhatsApp está tocando el footer, ocultarlo
    if (footerTop <= windowHeight) {
        whatsappFloat.style.display = 'none'; // Ocultar el logo de WhatsApp
    } else {
        whatsappFloat.style.display = 'block'; // Mostrar el logo de WhatsApp
        whatsappFloat.style.position = 'fixed';
        whatsappFloat.style.bottom = '2px'; // Ajuste a la posición normal cuando no toca el footer
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
