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

    dmdLogo.addEventListener('click', () =>{
        // Redirige al usuario a index.html
        window.location.href = 'index.html';
    })
});

// Footer -----------------------------------


const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
const body = document.body;
function cambiaTema(ev) {
    if (ev.target.checked) {
        body.setAttribute('tema', 'dark');
    } else {
        body.setAttribute('tema', 'light');
    }
}
colorSwitch.addEventListener('change', cambiaTema);



// Funcionalidad para abrir el cliente de correo
document.querySelector('.fa-envelope.fContacto').addEventListener('click', function() {
    window.location.href = "mailto:info@dmdcompresores.com";
});

// Funcionalidad para iniciar una llamada (en dispositivos móviles)
document.querySelector('.fa-phone.fContacto').addEventListener('click', function() {
    window.location.href = "tel:+541139592363";
});
