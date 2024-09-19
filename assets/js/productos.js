/*productos funcionalidad---------------------------------------------------*/

document.addEventListener('DOMContentLoaded',()=>{
    // Obtener elementos del DOM
       const productosCards = document.querySelectorAll('.productosCards');
       const modal = document.getElementById('product-detail');
       const backdrop = document.getElementById('modal-backdrop');
       const closeModalButton = document.getElementById('close-detail');
       const productImage = document.getElementById('product-image');
       const productTitle = document.getElementById('product-title');
       const productDescription = document.getElementById('product-description');
       
       
       // Función para abrir el modal con los detalles del producto
       function openModal(productData) {
           // Actualizar el contenido del modal
           productImage.src = productData.image;
           productTitle.textContent = productData.name;
           productDescription.textContent = productData.desc;
       
           // Mostrar el modal y el fondo oscuro
           modal.style.display = 'flex';
           backdrop.style.display = 'flex';
       }
       
       // Función para cerrar el modal
       function closeModal() {
           modal.style.display = 'none';
           backdrop.style.display = 'none';
           productImage.classList.remove('enlarged'); // Restablecer tamaño al cerrar
       }
       
       // Agregar evento de clic a cada tarjeta de producto
       productosCards.forEach(card => {
           card.addEventListener('click', function() {
               const productData = {
                   name: this.getAttribute('data-product-name'),
                   desc: this.getAttribute('data-product-desc'),
                   image: this.getAttribute('data-product-image')
               };
               openModal(productData);
           });
       });

       // Cerrar el modal al hacer clic en el botón de cerrar
       closeModalButton.addEventListener('click', closeModal);
       
       // Cerrar el modal al hacer clic fuera del modal (en el fondo oscuro)
       backdrop.addEventListener('click', closeModal);

           // Agrandar imagen al hacer clic en ella
           productImage.addEventListener('click', function() {
            if (this.classList.contains('enlarged')) {
                this.classList.remove('enlarged'); // Si ya está ampliada, la reducimos
            } else {
                this.classList.add('enlarged'); // Si no está ampliada, la ampliamos
            }
        });
    });    

       
      // Lógica para el acordeón desplegable
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const flecha = this.querySelector('.flecha'); // Selecciona la flecha correspondiente al botón actual

        // Alternar la visibilidad del contenido del acordeón
        if (content.style.display === 'block') {
            content.style.display = 'none';
            flecha.classList.remove('active'); // Elimina la clase 'active' si el contenido está oculto
        } else {
            // Oculta el contenido de todos los acordeones
            accordionButtons.forEach(btn => {
                const btnContent = btn.nextElementSibling;
                const btnFlecha = btn.querySelector('.flecha');
                btnContent.style.display = 'none';
                btnFlecha.classList.remove('active');
            });

            // Muestra el contenido y activa la flecha del acordeón clicado
            content.style.display = 'block';
            flecha.classList.add('active');
        }
    });
});

