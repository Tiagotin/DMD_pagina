//header-------------------------------------
document.getElementById("email").addEventListener("click", function() {
    window.location.href = "mailto:info@dmdcompresores.com";
  });

  document.querySelectorAll('#rLogos .logos').forEach(icon => {
    icon.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.open(url, '_blank');
    });
});


//Nav Sticky --------------------------------------------------

window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    const logo = document.querySelector(".dmdLogo");
    const logoHeight = document.querySelector("#dmdLogo");
    const navText = document.querySelector(".navText");
    const aText = document.querySelectorAll(".aText");
    const switchTema = document.querySelector(".switchTema");

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


const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
const body = document.body;


function cambiaTema(ev) {
    if (ev.target.checked) {
        body.setAttribute('tema', 'dark');
        localStorage.setItem('modoOscuro', 'true');  // Guardar el estado en localStorage
    } else {
        body.setAttribute('tema', 'light');
        localStorage.setItem('modoOscuro', 'false'); // Guardar el estado en localStorage
    }
}

// Verificar si el modo oscuro está guardado en localStorage
const modoOscuroActivo = localStorage.getItem('modoOscuro');

// Si está activo, aplicar el modo oscuro y marcar el checkbox
if (modoOscuroActivo === 'true') {
    body.setAttribute('tema', 'dark');
    colorSwitch.checked = true;  // Marcar el checkbox
} else {
    body.setAttribute('tema', 'light');
    colorSwitch.checked = false; // Desmarcar el checkbox
}

colorSwitch.addEventListener('change', cambiaTema);







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
