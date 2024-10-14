document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const closeMenuButton = document.querySelector(".close-menu");
    const navigation = document.querySelector(".navigation");
    const navTexts = document.querySelector(".nav-items");
    const temasLeg = document.querySelector(".iditema");
    const navItems = document.querySelectorAll(".nav-item");
    const navImg = document.getElementById("navimg");

    // Función para manejar el clic en .nav-item
    navItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
        const mainMenu = navItem.querySelector("span");
        const submenu = navItem.querySelector(".submenu");
        if (submenu) {
          mainMenu.classList.toggle("active");
          submenu.classList.toggle("active");
        }
      });
    });

    menuToggle.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });

    closeMenuButton.addEventListener("click", () => {
      navigation.classList.remove("active");
    });

    // Función para manejar la clase sticky
    const toggleStickyClasses = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        // Ajusta este valor según lo necesites
        navigation.classList.add("sticky");
        navTexts.classList.add("sticky");
        temasLeg.classList.add("sticky");
        navImg.classList.add("sticky");
        navItems.forEach((navItem) => {
          navItem.classList.add("sticky");
        });
      } else {
        navigation.classList.remove("sticky");
        navTexts.classList.remove("sticky");
        temasLeg.classList.remove("sticky");
        navImg.classList.remove("sticky");
        navItems.forEach((navItem) => {
          navItem.classList.remove("sticky");
        });
      }
    };

    // Escuchar el evento scroll
    window.addEventListener("scroll", toggleStickyClasses);
  });

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
