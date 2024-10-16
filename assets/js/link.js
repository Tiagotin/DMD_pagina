document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeMenuButton = document.querySelector(".close-menu");
  const navigation = document.querySelector(".navigation");
  const navTexts = document.querySelector(".nav-items");
  const temasLeg = document.querySelector(".iditema");
  const navItems = document.querySelectorAll(".nav-item");
  const navImg = document.getElementById("navimg");
  const logoLink = document.getElementById("logo-link");


  /*-------------------------------
  -----------NAV STICKY------------
  -------------------------------*/

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

  // Cerrar menú al hacer clic fuera de él
    document.addEventListener("click", (event) => {
        // Si el clic no está dentro del menú ni del botón que abre/cierra
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
            navigation.classList.remove("active");
        }
    });
  // Función para manejar la clase sticky
  const toggleStickyClasses = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
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

  //--------------------------------
  //---------------------------------
  // Manejar la navegación
  //---------------------------------
  //--------------------------------
  const navLinks = {
      "Inicio": "index.html",
      "Nosotros": "nosotros.html",
      "Saber Más": "preguntas.html",
      "Compresores": "detalle.html",
      "Servicios": "servicios.html",
      "Tratamientos": "tratamientos.html",
      "Contacto": "contacto.html"
  };

    logoLink.addEventListener('dragstart', (event) => {
        // Establecer el enlace como el dato arrastrado
        event.dataTransfer.setData('text/plain', logoLink.href);
    });

    // Agregar un manejador para el evento drop
    window.addEventListener('drop', (event) => {
        event.preventDefault();
        const url = event.dataTransfer.getData('text/plain');
        window.location.href = url; // Redirigir al enlace arrastrado
    });

    // Prevenir que la página se recargue al arrastrar
    window.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
  
  navItems.forEach(navItem => {
      const mainLink = navItem.querySelector("span");
      const link = navLinks[mainLink.textContent.trim()];
      if (link) {
          mainLink.addEventListener("click", () => {
              window.location.href = link;
          });
      }

      const subMenuItems = navItem.querySelectorAll(".submenu-items .link");
      subMenuItems.forEach(subMenuItem => {
          const subMenuLink = navLinks[subMenuItem.textContent.trim()];
          if (subMenuLink) {
              subMenuItem.addEventListener("click", () => {
                  window.location.href = subMenuLink;
              });
          }
      });
  });
});

//------------------------------------------------
// Switch DARK -----------------------------------
//------------------------------------------------

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
temalight.addEventListener("click", function () {
  cambiaTema('light');
});

temaDark.addEventListener("click", function () {
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

window.addEventListener('scroll', function () {
  var whatsappFloat = document.querySelector('.whatsapp-float');
  var footer = document.querySelector('footer'); // Seleccionar el footer sin id

  // Obtener la posición del footer en relación con la parte superior de la ventana
  var footerTop = footer.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

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
document.querySelector('.fa-envelope.fContacto').addEventListener('click', function () {
  window.location.href = "mailto:info@dmdcompresores.com";
});

// Funcionalidad para iniciar una llamada (en dispositivos móviles)
document.querySelector('.fa-phone.fContacto').addEventListener('click', function () {
  window.location.href = "tel:+541139592363";
});
